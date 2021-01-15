import React, { Component } from 'react';
import './modalStyle.css';
import croix from './croix.svg';


class Modal extends Component{

    constructor(props){
        super(props);
        this.state={} 
        
    }
    
    

    render(){
        return(
            <div className="modalPhone">
                <section className="modal-main">
                    <h1>06 95 73 02 51</h1>
                    <a id="croixSvg" href="# " onClick={this.props.handleClose}>
                        <img className="svg" src={croix} alt="une croix"></img>
                    </a>
                </section>
            </div>
        );
     }
}

export default Modal;