import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'


describe('Counter Component', () => {

    let wraper

    beforeEach(() => {
        wraper = shallowMount(Counter)
    })
    
    // test('debe de hacer match con el snapshot', () => {

    //     expect(wraper.html()).toMatchSnapshot()
    // })

    test('h2 debe de tener el valor por defecto "Counter" ', () => {
        
        expect(wraper.find('h2').exists()).toBeTruthy()

        const h2Value = wraper.find('h2').text()

        expect(h2Value).toBe('Counter')
    });

    test('el valor por defecto debe de ser 100 en el p', () => {

        // expect(wraper.findAll('p').at(1).exists()).toBeTruthy()

        // const secondP = wraper.findAll('p').at(1).text()
        const value = wraper.find('[data-testid="counter"]').text()

        expect(value).toBe('100')
    });

    test('debe de incrementar/decrementar en 1', async () => {

        const [increaseBtn, decreaseBtn] = wraper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

         const value = wraper.find('[data-testid="counter"]').text()

        expect(value).toBe('101')


    });


    test('debe de establecer el valor por defecto', () => {

        const {start} = wraper.props()

        const value = wraper.find('[data-testid="counter"]').text()

        expect(Number (value)).toBe(start)
    });

    test('debe de mostrar la prop title', () => {
        const title = 'Hola Mundo!!!'

        const wraper = shallowMount(Counter, {
            props: {
                title
            }
        })

        expect(wraper.find('h2').text()).toBe(title)
    });
}) 