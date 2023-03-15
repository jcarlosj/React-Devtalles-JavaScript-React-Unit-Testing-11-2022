import PropTypes from 'prop-types';


// Functional Component
function App({ title, subTitle, person }) {
    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            <h4>{ subTitle }</h4>
            {/* <code>{ JSON.stringify( person ) }</code> */}
            <p>{ person.name }</p>
        </>
    )
}


App.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    person: PropTypes.object.isRequired
}

App.defaultProps = {
    title: 'There is not title'
}


export default App;