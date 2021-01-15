import React, { Component } from 'react';
import './siderStyle.css'; 
import linkedin from './linkedin.jpg'
import mail from './email.jpg'
import phone from './phone.jpg'

class SiderFooter extends Component {

   constructor(props){
      super(props);
      this.state={}
   }

   render(){
      return(
         <div  className="siderFooter" >
            <a id="linkedinSvg" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/marvin-prioux-khaye/">
               <img className="svg" src={linkedin} alt="linkedin"/>
            </a>
  
            <a id="mailSvg" href="mailto:marvin.priouxkhaye@hotmail.fr">
               <img className="svg" src={mail} alt="mail"/>
            </a> 

            <a id="phoneSvg" href="# " onClick={this.props.phoneClick}>
               <img className="svg" src={phone} alt="mail"/>
            </a> 
         </div>
      );
   }
}

export default SiderFooter;