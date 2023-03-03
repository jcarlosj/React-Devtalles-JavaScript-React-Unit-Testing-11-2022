// Async/Await
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API

const
    apiKeyGiphy = 'AK2FcLXef3luWnplUP9M9aNmEc4L1cK2';
    

const getImage = async () => {
    try {
        const 
            uri = `https://api.giphy.com/v1/gifs/random?apiKey=${ apiKeyGiphy }`,
            response = await fetch( uri ),
            { data } = await response.json();    

        const { url } = data.images.original;
        console.log( url );

        const img = document.createElement( 'img' );

        img.src = url;
        document.body.append( img );
    } catch (error) {
        console.error( 'Failed to fetch', error );
        // Se podria cargar una imagen por defecto
    }
        
}

getImage();