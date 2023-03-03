// Async/Await
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API

const
    apiKeyGiphy = 'AK2FcLXef3luWnplUP9M9aNmEc4L1cK2',
    url = `https://api.giphy.com/v1/gifs/random?apiKey=${ apiKeyGiphy }`;
    

const getImage = async () => {
    const
        response = await fetch( url ),
        data = await response.json();    

        if( response.ok ) {
            const { url } = data.data.images.original;
            console.log( url );

            const img = document.createElement( 'img' );

            img.src = url;
            document.body.append( img );
        }
        else {
            console.warn( 'Failed to fetch' );
        }
}

getImage();