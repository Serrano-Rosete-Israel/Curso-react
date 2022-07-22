/*impresiones de variables en html
const getResult = (a,b) =>{
    return a + b;
}

export const FirstApp = () =>{
    return (
        <>
            <h1>{ getResult(1,10)   }</h1>
            <p>Rosete</p>
        </>
        
    );
}
*/
/*comunicacion entre componentes
export const FirstApp  = ({title,subtitle}) =>{
    return(
        <>
            <h1>{ title }</h1>
            <p>{ subtitle + 1}</p>
        </>
    )
}
*/
import PropTypes from 'prop-types';


export const FirstApp  = ({title,subtitle, name}) =>{
    return(
        <>
            <h1>{ title }</h1>
            <p>{ subtitle }</p>
            <p>{ name }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}
FirstApp.defaultProps = {
   //title: 'No hay titulo',
    subtitle: 'No hay subtitulo',
    name: 'Israel'
}
