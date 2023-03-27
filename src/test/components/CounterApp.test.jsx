import { fireEvent, render, screen } from "@testing-library/react";
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

    test( 'debe incrementar con el botón +1', () => {
        render( <CounterApp value={ initialValue } /> );

        fireEvent.click( screen.getByText( '+1' ) );        // Simula el evento click sobre el elemento que tenga el texto '+1'
        // screen.debug();
        expect( screen.getByText( '10' ) ).toBeTruthy();
    });

    test( 'debe decrementar con el botón -1', () => {
        render( <CounterApp value={ initialValue } /> );

        fireEvent.click( screen.getByText( '-1' ) );        // Simula el evento click sobre el elemento que tenga el texto '+1'
        // screen.debug();
        expect( screen.getByText( '8' ) ).toBeTruthy();
    });


    test( 'debe reiniciar el valor con el botón "reset"', () => {
        const totalClicks = 3;

        render( <CounterApp value={ initialValue } /> );

        // fireEvent.click( screen.getByText( '+1' ) );        // Simula el evento click sobre el elemento que tenga el texto '+1'
        // fireEvent.click( screen.getByText( '+1' ) );        // Simula el evento click sobre el elemento que tenga el texto '+1'
        // fireEvent.click( screen.getByText( '+1' ) );        // Simula el evento click sobre el elemento que tenga el texto '+1'

        for ( let i = 0; i < totalClicks; i++ ) {
            fireEvent.click(
                screen.getByRole( 'button', { name: 'btn-counter-add' } )
            );
        }

        // screen.debug();
        // fireEvent.click( screen.getByText( 'reset' ) );        // Simula el evento click sobre el elemento que tenga el texto 'reset'
        fireEvent.click(
            screen.getByRole( 'button', { name: 'btn-counter-reset' } )
        );

        expect( screen.getByText( initialValue ) ).toBeTruthy();
    });
 
});
