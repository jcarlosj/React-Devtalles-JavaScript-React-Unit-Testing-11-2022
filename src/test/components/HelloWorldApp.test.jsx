import { render } from "@testing-library/react";
import App from '../../components/HelloWorldApp';


describe( 'Test <App />', () => {
    
    test( 'debe hacer "match" con el "snapshot"', () => {
        const
            title = '',
            person = {};

        // render: renderiza el componente en memoria.
        const { container } = render( <App title={ title } person={ person } /> );
        
        expect( container ).toMatchSnapshot();

    });

    test( 'debe mostrar el "title" (cualquiera) en un <h1>', () => {
        const
            title = 'Hola, soy Juan',
            person = {};

        // render: renderiza el componente en memoria.
        const { container, getByText } = render( <App title={ title } person={ person } /> );
        
        // Asercion: que el titulo se renderice al menos una vez sin importar sin hacer match de contenido
        expect( getByText( title ) ).toBeTruthy();     // toBeTruthy: cuando no le importe cuál es un valor y quiera asegurarse de que un valor sea verdadero en un contexto booleano. 
        
        // Asercion que el titulo se renderice dentro de un elemento <h1> (usando JavaScript). Importante hacer pruebas flexibles en este caso esto deberia evitarse
        const h1 = container.querySelector( 'h1' );
        expect( h1.innerHTML ).toBe( title );
        expect( h1.innerHTML ).toContain( title );

    });

});
