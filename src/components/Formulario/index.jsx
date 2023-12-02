import { useState } from "react"
import styles from "./Formulario.module.css";

const Formulario = () => {
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);

    const calculaImc = (altura, peso) => {
        let resultado = "";
        const imc = peso / (altura * altura);
    
        if (imc < 18.5) {
            resultado = "abaixo do peso";
        } else if (imc > 18.5 && imc < 24.9) {
            resultado = "com o peso normal";
        } else if (imc > 25 && imc < 29.9) {
            resultado = "com sobrepeso";
        } else if (imc > 30) {
            resultado = "com obesidade";
        }
        if(imc > 1){
        return `Seu IMC é: ${imc.toFixed(2)}, e você está ${resultado}`};
    };
    return (
        <form className={styles.form}>
            <h1>Calculadora de IMC</h1>
            <input className={styles.input} type="number"placeholder="Informe sua altura" onChange={evento => setAltura(parseFloat(evento.target.value))}/>
            <input className={styles.input} type="number"placeholder="Informe seu peso" onChange={evento => setPeso(parseFloat(evento.target.value))}/>
            <h2 className={styles.h2}>{calculaImc(altura,peso)}</h2>
        </form>
    )
}





export default Formulario