import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision";




describe ('Indecision Component', () => {

    let wraper
    let clgSpy

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    beforeEach(() => {
        wraper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console, 'log')

        jest.clearAllMocks()

    })

    test('debe hacer match con el snapshot', () => {
        expect(wraper.html()).toMatchSnapshot()
    });

    test('escribir en el input no debe disparar nada (console.log)', async() => {
        const getAnswerSpy = jest.spyOn(wraper.vm, 'getAnswer')
        
        const input = wraper.find('input')
        await input.setValue('Hola mundo')
        
        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalledTimes(0)
    });

    test('escribir el simbolo de "?" debe de disparar el getAnswer', async() => {
        const getAnswerSpy = jest.spyOn(wraper.vm, 'getAnswer')

        const input = wraper.find('input')
        await input.setValue('Hola mundo?')

        // expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalled()
    });

    test('pruebas en getAnswer', async () => {
        await wraper.vm.getAnswer()

        const img = wraper.find('img')

        expect(img.exists()).toBeTruthy()
        expect(wraper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wraper.vm.answer).toBe('Si!')
    });

    test('pruebas en getAnswer - Fallo en el API', async () => {

        fetch.mockImplementationOnce(() => {
            Promise.reject('API is down')
        })

        await wraper.vm.getAnswer()
        
        const img = wraper.find('img')

        expect(img.exists()).toBeFalsy()
        expect(wraper.vm.answer).toBe('No se pudo cargar del API')

    });


})