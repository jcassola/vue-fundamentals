import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision";




describe ('Indecision Component', () => {

    let wraper

    beforeEach(() => {
        wraper = shallowMount(Indecision)
    })

    test('debe hacer match con el snapshot', () => {
        expect(wraper.html()).toMatchSnapshot()
    });

    test('escribir en el input no debe disparar nada (console.log)', () => {
        
    });

    test('escribir el simbolo de "?" debe de disparar el fetch', () => {
        
    });

    test('pruebas en getAnswer', () => {
        
    });

    test('pruebas en getAnswer - Fallo en el API', () => {
        
    });


})