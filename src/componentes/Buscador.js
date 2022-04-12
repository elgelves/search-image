import React, { Component } from 'react';

class Buscador extends Component{
    
    buscarRef = React.createRef();

    obtenerDato = (e) => {
           e.preventDefault();
 
           //Se toma el valor del input
           const termino = this.buscarRef.current.value;
       
           //Se envía al componente principal
        this.props.datoBuscado(termino);

    }

    render(){
        return (
            <form onSubmit={this.obtenerDato}>
               <div align="center">
                 <img src="img/logo.png" alt=""/>
                 </div>
                <div className="row">
                  <div className="form-goup col-md-0">
                    <img src="img/search.png" alt=""/>
                  </div>
                  <div className="form-group col-md-6">
                    <input ref={this.buscarRef} type="text" className="form-control form-control-lg" placeholder="Find your image.
                    Example: lion"/>
                  </div>
                  <div className="form-group col-md-3">
                    <input type="submit" className="btn btn-lg btn-primary btn-block" value="Search..."/>
                  </div>
               </div>
            </form>
         );
    }
}


export default Buscador;
