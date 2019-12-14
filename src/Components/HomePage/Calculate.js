import React, { Component } from 'react';
import { Slider } from 'antd';

 class Calculate extends Component {
    customTooltip = (value) =>{
        return (<span className="text-tooltip">{`$${value}   ` } <br/>invested</span>)

    }
    getValue = (value) =>{
        this.props.getMoney(value)
    }
    render() {
        return (
           <Slider min={20000} defaultValue={20000} max={1000000} step={20000} tooltipVisible={true} tipFormatter={this.customTooltip} onChange={value=>this.getValue(value)}> </Slider>
        );
    }
}

export default Calculate;
