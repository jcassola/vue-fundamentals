import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'


describe('Counter Component', () => {
    
    test('debe de hacer match con el snapshot', () => {

        const wraper = shallowMount(Counter)

        expect(wraper.html()).toMatchSnapshot()
    })
})