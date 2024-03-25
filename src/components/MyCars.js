import React, { Component } from 'react'
import Car from './Cars';
import Wrapper from './Wrapper';
import MyHeader from './MyHeader';

class MyCars extends Component {

    state = {
        carsList: ["Peugeot", "Citroen", "Mercedes"]
    }

    render() {
        console.log(this.props.title);
        return (
        <div>
            <Wrapper>
                <MyHeader
                    myStyle={this.props.color}
                >
                    {this.props.title}
                </MyHeader>
            </Wrapper>
            <Car color="red">{this.state.carsList[0]}</Car>
            <Car color="black">{this.state.carsList[1]}</Car>
            <Car color="">{this.state.carsList[2]}</Car>

        </div>
        )
    }
}
export default MyCars;