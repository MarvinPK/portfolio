import React, { Component } from 'react';
import Sider from './sider/Sider';
import Profil from './container/profil/Profil';
import Competences from './container/competences/Competences';
import Experiences from './container/experiences/Experiences';
import Diplomes from './container/diplomes/Diplomes';
import Autres from './container/autres/Autres';
import Modal from './container/modal/Modal';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component{
	
	constructor(props){
      super(props);
      this.state={
         showModal:false,
         menus:[
            {id:1,lien:"#",active:true,nom:"PROFIL"},
            {id:2,lien:"#",active:false,nom:"COMPETENCES"},
            {id:3,lien:"#",active:false,nom:"EXPERIENCES"},
            {id:4,lien:"#",active:false,nom:"DIPLOMES"},
            {id:5,lien:"#",active:false,nom:"AUTRES"}
         ]   
      }
      this.lowerCaseServiceUpperFirst=this.lowerCaseServiceUpperFirst.bind(this);
      this.handleClickMenu=this.handleClickMenu.bind(this);
      this.openModal=this.openModal.bind(this);
      this.closeModal=this.closeModal.bind(this);
      this.containerVisibility=this.containerVisibility.bind(this);
   }

   lowerCaseServiceUpperFirst(param){
      return param.charAt(0).toUpperCase() + param.substring(1).toLowerCase();
   }

   handleClickMenu(id, menu){
      let newMenus = [...this.state.menus];
      
      newMenus.forEach(unMenu => {
         if(unMenu.active){
            unMenu.active=false;
         }
      });
         
      menu.active = !menu.active;
      newMenus[id-1] = menu;

      this.setState({menus:newMenus});
      
   }

   openModal() { 
      this.setState({ 
         showModal : true
      });   
   }

   closeModal() {
      this.setState({
         showModal : false
      });
   }

   containerVisibility(idEntry){
      let unMenu = this.state.menus.find(menu => menu.id === idEntry);
      if(unMenu.active){
         return "block"
      }else{
         return "none"
      }
   }

   render(){
      return(
         <div>
            <Sider menus={this.state.menus} phoneClicked={this.openModal} handleClickMenu={this.handleClickMenu}></Sider>
            {this.state.showModal?<Modal handleClose={this.closeModal}></Modal>:<div></div>}
            <Profil cssProps={this.containerVisibility(1)} title={"Ce que vous devez savoir sur moi"}></Profil>
            <Competences cssProps={this.containerVisibility(2)} title={"Mes compétences"}></Competences>
            <Experiences cssProps={this.containerVisibility(3)} title={"Avec qui ai je déjà travaillé ?"}></Experiences>
            <Diplomes cssProps={this.containerVisibility(4)} title={"Ai-je fait l'école buissonnière ?"}></Diplomes>
            <Autres cssProps={this.containerVisibility(5)}></Autres>
         </div>
      );
   }
}
export default App;