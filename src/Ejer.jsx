// Challenge 2 
import {useState} from "react"

const Ejer = ({value}) => {
    const [counter, setCounter] = useState (value)
    
    const handleAdd = () => {
        setCounter(counter + 1);
        console.log(counter)

    }
    const resta = () => {
        setCounter(counter - 1);
        console.log(counter)

    }
    const reset = () => {
        setCounter(value);
        console.log(counter)

    }

    return (
        <>
        <h1> Challenge 2 UwU</h1>
        <span> {counter} </span>
        <span> {resta} </span>
        <button onClick = {() => handleAdd ()}> Mas </button>
        <button onClick = {() => resta ()}> Menos </button>
        <button onClick = {() => reset ()}> Resetear </button>
        </>
    )


}

export default Ejer
