import React, { Component } from 'react'
import Wrapper from './Wrapper';
import MyHeader from './MyHeader';


const Car = ({children, color}) => {
    return children ? (
        <Wrapper>
            <p>Marque : {children}</p>
            {color ? <p>Couleur : {color} </p>: <p>Couleur : néant</p>}
        </Wrapper>
    ) : <p style={{backgroundColor: 'pink', width: '400px', padding: '10px', margin: "auto"}}>Pas de data</p>
};

class MyCars extends Component {

    noCopy = () => {
        alert('Merci de ne pas copier le texte')

    }

    addStyle = (e) =>{
        console.log(e.target);
        if(e.target.classList.contains('styled')){
            e.target.classList.remove('styled');
        } else {
            e.target.classList.add('styled');
        }

    }

    state = {
        carsList: ["Peugeot", "Citroen", "Mercedes"]
    }

    render() {
        
        return (
        <div>
            <Wrapper>
                <MyHeader
                    myStyle={this.props.color}
                >
                    {this.props.title}
                </MyHeader>
            </Wrapper>
            <p onCopy={this.noCopy} onMouseOver={this.addStyle} >lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
            <Car color="red">{this.state.carsList[0]}</Car>
            <Car color="black">{this.state.carsList[1]}</Car>
            <Car color="">{this.state.carsList[2]}</Car>
            <Wrapper>
                <MyHeader
                    myStyle={this.props.color}
                >
                    Hello world
                </MyHeader>
            </Wrapper>
        </div>
        )
    }
}
export default MyCars;

