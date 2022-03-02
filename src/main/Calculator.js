import React, { Component } from 'react'
import './Calculator.css'
import Display from '../components/Display/Display'
import Button from '../components/Button/Button'

class Calculator extends Component {
    


    state = {
        displayValue: '0',
        num1: null,
        num2: null,  
    
    }



    clearMemory = () => {
        this.setState({displayValue: 0})
        this.setState({num1:null})
        this.setState({num2:null})
    }

    setOperation = (operation) => {
        
        if(operation == '='){
            let result = this.state.num1 + this.state.num2
            this.setState({displayValue: result})
        }
    

        else if (operation == '+'){
            let result = this.state.num1 + this.state.num2
            this.setState({displayValue: result})
        }

        else if (operation == '-'){
            let result = this.state.num1 - this.state.num2
            this.setState({displayValue: result})
        }

        else if (operation == '*'){
            let result = this.state.num1 * this.state.num2
            this.setState({displayValue: result})
        }

        else if (operation == '/'){
            let result = this.state.num1 / this.state.num2
            this.setState({displayValue: result})
        }
    }
   

    addDigit = (digit) => {
        let result = this.state.displayValue + digit
        if(this.state.num1 == null) {
            this.setState({num1: parseInt(digit)}
            )
            return

        } else {this.setState({num1: parseInt(result)})}

        this.setState({displayValue: digit})
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} className="result"></Display> 
                <Button label="AC" triple clear={this.clearMemory} />
                <Button label="/" operation click={this.setOperation} />
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" operation click={this.setOperation}/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" operation click={this.setOperation}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="1" click={this.addDigit}/>
                <Button label="+" operation click={this.setOperation}/>
                <Button label="0" double click={this.addDigit}/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" operation click={this.setOperation}/>
            </div>
        )
    }
}

export default Calculator