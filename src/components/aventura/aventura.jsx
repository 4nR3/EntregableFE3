import { Component } from "react";
import LeerJSON from "../data/leerJSON";
import "../../styles/index.css"
import Opciones from "./opciones"
import Camino from "./camino"

let array = LeerJSON();
let ruta = [];

class Aventura extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
        }
    }

    terminar(){
        let resultado = window.confirm("Ha llegado al final.\n¿Desea empezar de nuevo?");

        if(resultado)
            this.reiniciar();
    }

    handleClickOpcionA = () => {

        if(this.state.id>=7)
            {this.terminar();
            return;}

        if (this.state.id % 2 === 1)
            this.setState({ id: this.state.id + 2, })
        else
            this.setState({ id: this.state.id + 1, })

        ruta.push("A");
    }

    handleClickOpcionB = () => {

        if(this.state.id>=7)
            {this.terminar();
            return;}

        if (this.state.id % 2 === 0)
            this.setState({ id: this.state.id + 2, })
        else
            this.setState({ id: this.state.id + 3, })

        ruta.push("B");

    }

    reiniciar = () => {

        let resultado = window.confirm("¿Esta seguro que desea volver al comienzo?");

        if (resultado) {
            ruta = [];
            this.setState({
                id: 0,
            })
        }
    }

    volver = (event) => {

        let text = event.target.innerText;

        if(parseInt(text[0])===ruta.length)
           {window.alert("Ya se encuentra en esta opcion");
            return;}
        
        let confirmacion = window.confirm("¿Esta seguro que desea volver a una decision anterior?");

        if (confirmacion) {

            
            let numero = parseInt(text[0]) + 1;
            let numeroYletra = numero.toString() + text[text.length-1].toLowerCase();
            let pos = 0;

            console.log(numero-2+" "+ruta.length);

            for (let f = 0; f < array.length; f++) {
                if (array[f].id === numeroYletra) {
                    pos = f;
                    let tamano=ruta.length;

                    for (let i=numero-1; i<tamano; i++) 
                        { ruta.pop(); }

                    this.setState({ id: pos });

                    break;
                }
            }
        }
    }

    render() {

        return (
            <div className="layout">
                <h1 className="historia">{array[this.state.id].historia}</h1>

                <Opciones handleClick={this.handleClickOpcionA} nombre={"A"} opcion={array[this.state.id].opciones.a}></Opciones>
                <Opciones handleClick={this.handleClickOpcionB} nombre={"B"} opcion={array[this.state.id].opciones.b}></Opciones>

                <div className="recordatorio">
                    <h3>Seleccion anterior: {ruta[ruta.length - 1]}</h3>
                    <h3>Historial</h3>

                    <button className="reiniciar" onClick={this.reiniciar}>INICIO</button>
                    <Camino historial={ruta} handleClick={this.volver}></Camino>

                </div>
            </div>
        );
    }
}

export default Aventura;
