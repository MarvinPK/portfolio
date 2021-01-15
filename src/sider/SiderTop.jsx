import React, { Component } from 'react';
import photo from './moi.jpg';
import './siderStyle.css'; 

class SiderTop extends Component{
	
	constructor(props){
      super(props);
      this.state={}
  }


   render(){
      return(
         <div className="siderTop">
               <img src={photo} alt="moi"></img>
               <h4 className="nomPrenom">PRIOUX-KHAYE Marvin</h4>          
         </div>
      );
   }
}
export default SiderTop;