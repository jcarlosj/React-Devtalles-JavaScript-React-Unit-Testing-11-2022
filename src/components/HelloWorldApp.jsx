import PropTypes from 'prop-types';


// Functional Component
function App({ title, person }) {
    return (
        <>
            <h1>{ title }</h1>
            <code>{ JSON.stringify( person ) }</code>
        </>
    )
}


App.propTypes = {
    title: PropTypes.string.isRequired,
    person: PropTypes.object.isRequired
}

App.defaultProps = {
    title: 'There is not title'
}


export default App;