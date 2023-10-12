// challenge 8
import React, { useCallback, useEffect, useState } from "react";
import {Son} from './Son'


export const Father = () => {
    const list = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incremet = (num) => {
        setValor( valor + num); // Actualización funcional del estado
    }// setValor nunca cambia, así que está bien como dependencia

    return (
        <div>
            <h1> Padrexd </h1>
            <p> Total : {valor} </p>
            <hr />
            {
                list.map((n, idx) => (
                    <Son
                        key={idx}
                        numero={n}
                        incremet={incremet}
                    />
                ))
            }
        </div>
    );
}
