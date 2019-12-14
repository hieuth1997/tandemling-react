import React, { Component } from 'react';
import classNames from 'classnames'
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { Search } = Input;
 class SiteSearch extends Component {
     handleSearch = (value) =>{
         console.log(value)


     }
    render() {
        const {openSearch} = this.props;
        
        return (
          <div className={classNames("notifi",{"open-search":openSearch})}>
                <div className="container pd-4" >
                <Search placeholder="Search" onSearch={(value) => this.handleSearch(value)}  enterButton />
                
            </div>
          </div>
        );
    }
}

export default  SiteSearch;
