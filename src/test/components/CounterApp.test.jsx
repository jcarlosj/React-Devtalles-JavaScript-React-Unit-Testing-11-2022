import { render, screen } from "@testing-library/react";
import CounterApp from "../../components/CounterApp";


describe( 'Test: <CounterApp />', () => {
    const initialValue = 9;

    test( 'debe hacer "match" con el "snapshot" sin pasar valor inicial ', () => {
        render( <CounterApp /> ); 
        expect( screen ).toMatchSnapshot();
    });

    test( 'debe hacer "match" con el "snapshot" pasando un valor inicial', () => {
        render( <CounterApp value={ initialValue } /> ); 
        expect( screen ).toMatchSnapshot();
    });

    test( 'debe mostrar el valor inicial de 100 <CounterApp value={ 100 } />', () => {
        render( <CounterApp value={ 100 } /> );
        // screen.debug();

        expect( screen.getByText( 100 ) ).toBeTruthy();
    });

    test( 'debe mostrar el valor inicial de 100 <CounterApp value={ 100 } en un <h2>', () => {
        render( <CounterApp value={ 100 } /> );
        // screen.debug();

        expect( 
            Number( screen.getByRole( 'heading', { level: 2 } ).innerHTML ) 
        ).toEqual( 100 );
    });

});
