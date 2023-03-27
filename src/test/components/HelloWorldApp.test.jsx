import { render, screen } from "@testing-library/react";
import App from '../../components/HelloWorldApp';


describe( 'Test <App />', () => {
    // Define todos los valores para las pruebas
    const
        title = 'Hola, soy Juan',
        subTitle = 'Sub-titulo del componente',
        person = {};

    
    test( 'debe hacer "match" con el "snapshot"', () => {

        // render: renderiza el componente en memoria.
        const { container } = render(
            <App 
                title={ title }
                subTitle={ subTitle } 
                person={ person } 
            /> 
        );
        
        expect( container ).toMatchSnapshot();

    });

    test( 'debe mostrar el "title" (cualquiera) en un <h1> (Usando JavaScript)', () => {

        // render: renderiza el componente en memoria.
        const { container, getByText } = render(
            <App 
                title={ title }
                subTitle={ subTitle } 
                person={ person } 
            /> 
        );
        
        // Asercion: que el titulo se renderice al menos una vez sin importar sin hacer match de contenido
        expect( getByText( title ) ).toBeTruthy();     // toBeTruthy: cuando no le importe cuál es un valor y quiera asegurarse de que un valor sea verdadero en un contexto booleano. 
        
        // Asercion que el titulo se renderice dentro de un elemento <h1> (usando JavaScript). Importante hacer pruebas flexibles en este caso esto deberia evitarse
        const h1 = container.querySelector( 'h1' );
        expect( h1.innerHTML ).toBe( title );           // toBe: Identicos, mismo tipo, mismos caracteres, mismo casign
        expect( h1.innerHTML ).toContain( title );      // toContain: no importa si tiene espacios o letras antes o despues debe contener este string

    });

    test( 'debe mostrar el titulo "Hola, soy Juan" (usando screen)', () => {

        render(
            <App 
                title={ title }
                subTitle={ subTitle } 
                person={ person } 
            />
        );
        // screen.debug();  // Nos permite ver el objeto sin usar el container

        expect( screen.getByText( title ) ).toBeTruthy();
    });

    test( 'debe mostrar el "title" (cualquiera) en un <h1> (Usando Testing Library)', () => {

        // render: renderiza el componente en memoria.
        const { getByTestId } = render(
            <App 
                title={ title }
                subTitle={ subTitle } 
                person={ person } 
            /> 
        );
        
        // Asercion que el titulo se renderice dentro de un elemento <h1> (usando Testing Library). Importante hacer pruebas flexibles en este caso esto deberia evitarse
        expect( getByTestId( 'test-title' ).innerHTML ).toBe( title );
        
    });


    test( 'debe mostrar el "title" en un <h1> (usando el screen)', () => {
        render(
            <App 
                title={ title }
                subTitle={ subTitle } 
                person={ person } 
            /> 
        );

        expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toContain( title );
    });


    test( 'debe mostrar 2 "subTitle" enviado por "props"', () => {

        // render: renderiza el componente en memoria.
        const { getAllByText } = render( 
            <App 
                title={ title }
                subTitle={ subTitle } 
                person={ person } 
            /> 
        );
        
        // Asercion que el titulo se renderice dentro de un elemento <h1> (usando Testing Library). Importante hacer pruebas flexibles en este caso esto deberia evitarse
        expect( getAllByText( subTitle ).length ).toBe( 2 );
        
    });


    test( 'debe mostrar 2 "subTitle" enviado por "props" (usando screen)', () => {
        render(
            <App 
                title={ title }
                subTitle={ subTitle } 
                person={ person } 
            />
        );

        expect( screen.getAllByText( subTitle ).length ).toBe( 2 );
    });

});
