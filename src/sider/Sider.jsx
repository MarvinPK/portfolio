import React, { Component } from 'react';
import SiderFooter from './SiderFooter';
import SiderMiddle from './SiderMiddle';
import SiderTop from './SiderTop';
import './siderStyle.css'; 



class Sider extends Component{
	
	constructor(props){
      super(props);
      this.state={
         
      }
      
  }

   render(){
      return(
         
         <div className="sider">
            <SiderTop></SiderTop>
            <SiderMiddle menus={this.props.menus} handleClickMenu={this.props.handleClickMenu}></SiderMiddle>
            <SiderFooter phoneClick={this.props.phoneClicked}></SiderFooter> 
         </div>
      );
   }
}
export default Sider;