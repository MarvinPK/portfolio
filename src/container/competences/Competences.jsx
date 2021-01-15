import React, { Component } from 'react';
import '../containerStyle.css';

class Competences extends Component{

    constructor(props){
        super(props);
        this.state={} 
        
    }  

    render(){
        return(
            <div className="containerRight" style={{display : this.props.cssProps}}>
                <h1>{this.props.title}</h1>
                
            </div>
        );
     }
}

export default Competences;