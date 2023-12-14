import {Component} from "react"

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count : 0
        }
    }

    increase() {
        this.setState(prevState =>({
            count: prevState.count +1
    }))
    }
    decrease() {
        this.setState(prevState =>({
            count: prevState.count -1
    }))
    }
    reset() {
        this.setState({
            count: 0
        })
    }
    increaseFive() {
        this.increase()
        this.increase()
        this.increase()
        this.increase()
        this.increase()
    }

    render() {
        return (
            <div>
            <div>
                Count : {this.state.count}
            </div>
            <button onClick={()=> this.increase()}>increase</button>
            <button onClick={()=> this.decrease()}>decrease</button>
            <button onClick={()=> this.reset()}>reset</button>
            <button onClick={()=> this.increaseFive()}>increaseFive</button>

            </div>
        )
    }
}

export default Counter