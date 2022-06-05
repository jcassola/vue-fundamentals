import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'


describe('Counter Component', () => {
    
    // test('debe de hacer match con el snapshot', () => {

    //     const wraper = shallowMount(Counter)

    //     expect(wraper.html()).toMatchSnapshot()
    // })

    test('h2 debe de tener el valor por defecto "Counter" ', () => {
        
        const wraper = shallowMount(Counter)

        expect(wraper.find('h2').exists()).toBeTruthy()

        const h2Value = wraper.find('h2').text()

        expect(h2Value).toBe('Counter')
    });
})