import React, { Component } from 'react';
import  SiteSearch from './SiteSearch';
import Top from './Top'
import MenuTop from './MenuTop';
import './style.scss'

 class Header extends Component {
     constructor(props) {
         super(props);
         this.state = {
             openSearch :false,

         }
     }
     UNSAFE_componentWillMount()
     {
         window.addEventListener('scroll',this.handleScroll,true)
     }
     handleScroll = () =>{
         this.setState({
            openSearch : false,
        })
         
     }
     componentWillUnmount()
     {
         window.removeEventListener('scroll',this.handleScroll)
     }


     
     handleOpenSearch = () => {
         const {openSearch} = this.state;
        this.setState({
            openSearch : !openSearch
        })
     }

    render() {
        const {openSearch} = this.state;

        return (
            <div className="header" >
              {/* {  openSearch ? <SiteSearch/> : "" } */}
                <SiteSearch openSearch = {openSearch}/>
                <Top/>
                <MenuTop handleOpenSearch ={this.handleOpenSearch}/>
            

                
            </div>
        );
    }
}

export default Header;
