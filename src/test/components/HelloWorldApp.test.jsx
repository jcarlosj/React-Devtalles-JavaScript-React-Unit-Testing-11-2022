import { render } from "@testing-library/react";
import App from '../../components/HelloWorldApp';


describe( 'Test <App />', () => {
    
    test( 'debe hacer "match" con el "snapshot"', () => {
        const
            title = '',
            person = {};

        // Renderiza el componente en memoria.
        render( <App title={ title } person={ person } /> );
    });
});
