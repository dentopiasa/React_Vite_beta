import {Component} from "react";

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Hello Philippe"
        }
        //this.clickHandler = this.clickHandler.bind(this) /*OFFICIAL*/
    }
      // clickHandler() {
        //    this.setState ({
          //  message: "Goodbye"
            //})
        //}
        clickHandler= () => {
            this.setState({
                message: "goodbye"
            })
        } 

     
  
    render() {
    return (
        <div>
            <div>{this.state.message}</div>
            {/*<button onClick={this.clickHandler.bind(this)}>Click</button> FIRST WAY */}
            {/*<button onClick={() =>this.clickHandler()}>Click</button>  SECOND WAY */}
            <button onClick={this.clickHandler}>Click</button>
        </div>
        )
    }
}

export default EventBind