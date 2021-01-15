import React, { Component } from 'react';
import './siderStyle.css'; 

class SiderMiddle extends Component{
	
	constructor(props){
      super(props);
      this.state={}     
  }
  

   render(){
      return(
         <div className="siderMiddle">
            <div className="verticalMenu">
               {this.props.menus.map((menu) => <a key={menu.id} href={menu.lien} className={menu.active?"active":""} 
                  onClick={()=>this.props.handleClickMenu(menu.id,menu)}>{menu.nom}</a>)}
            </div>         
         </div>
      );
   }
}
export default SiderMiddle;