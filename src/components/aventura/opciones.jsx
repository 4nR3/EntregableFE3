import { Component } from "react";

class Opciones extends Component{
    render(){
        return (
        
        <div className="opcion">
            <button onClick={this.props.handleClick} className="botones">{this.props.nombre}</button>
            <h2 className="opciones">{this.props.opcion}</h2>
        </div>
        
        );
    }

}

export default Opciones;