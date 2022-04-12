import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {
  
  state = {
    termino : '',
    imagenes : [],
    pagina : ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'end');
  }

  paginaAnterior = () =>{
    //leer el state de la pagina actual
    let pagina = this.state.pagina;
    //si la pagina es 1, no retroceder
    if(pagina===1) return null;    
    //restar una pagina a la actual
    pagina-=1;
    //agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultApi();
      this.scroll();
    });
    //console.log(pagina);
  }

  paginaSiguiente = () =>{
    //leer el state de la pagina actual
    let pagina = this.state.pagina;
    //sumar una pagina a la actual
    pagina+=1;
    //agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultApi();
      this.scroll();
    });
    //console.log(pagina);
  }

  consultApi = () =>{

    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=26596448-e55892ab39216661f81ae6eca&q=${termino}&per_page=30&page=${pagina}`;
    
    console.log(url);

      fetch(url)
       .then(respuesta => respuesta.json() )
       .then(resultado => this.setState({ imagenes : resultado.hits }) )


  }

  datoBuscado = (termino) => {
    this.setState({
      termino : termino,
      pagina: 1
    }, () => {
      this.consultApi();
    } );
  }
  
  render(){
    return (
      <div className="container">
       <div className="jumbotron">
         <h2 className="text-center">Image Search</h2>
         <Buscador
         datoBuscado={this.datoBuscado}
         />
       </div>
       <div className="row justify-content-center">
       <Resultado
        imagenes = {this.state.imagenes}
        paginaAnterior ={this.paginaAnterior}
        paginaSiguiente ={this.paginaSiguiente}             
       />
       </div>
      </div>
      
    );
  }
}

export default App;
