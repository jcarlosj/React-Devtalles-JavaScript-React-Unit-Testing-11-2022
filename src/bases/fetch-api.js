// Fetch API
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API

const
    apiKeyGiphy = 'AK2FcLXef3luWnplUP9M9aNmEc4L1cK2',
    url = `https://api.giphy.com/v1/gifs/random?apiKey=${ apiKeyGiphy }`;
    

const request = fetch( url );

request.then( response => {
    // console.log( response );
    response.json().then( data => {
        const { url } = data.data.images.original;
        console.log( url );

        const img = document.createElement( 'img' );

        img.src = url;
        document.body.append( img );
    });
})
.catch( console.warn );


