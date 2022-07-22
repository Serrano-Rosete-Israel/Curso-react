
export const getImagen = async() => {

    try {

        const apiKey = '62qqyVRArGNU32FFjURxKlN2LlKwPezi';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url;

    } catch (error) {

        console.error(error)
        return 'No se encuentra la imagen';
    }
    
    
    
}

 getImagen();



