import { Component } from "react";

class Camino extends Component{

    render(){

        return(
            <div>
                {this.props.historial.map((letra,index)=>
                    <button className="volver" key={index} onClick={this.props.handleClick}>{index+1} - {letra}</button>
                )}
            </div>
        );
    }

}

export default Camino;