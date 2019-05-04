import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../css/managemenu.css';

class ManageMenuApp extends Component {
    constructor(props) {
        super(props);
        this.state = { inputs: ['input-0'] };
        this.state = { inputs: ['input-0'] };
    }

    render() {
        return(
            <div className="manageForm">
                <h4>Add new Menu</h4>
                <div className="manageContent">

                    Title : <input type="text" id="title" className="" name="title" placeholder="Title"/> <br/>

                    Category :  <input className="category" type="radio" name="category" value=""/> Tom
                                <input className="category" type="radio" name="category" value=""/> Pad
                                <input className="category" type="radio" name="category" value=""/> Toth <br/>

                    <form>
                        Time : <input type="number" min="1" max="100"/>
                    </form>

                    <form>
                        <div id="dynamicInput">
                            Ingredients : {this.state.inputs.map(input => <input key={input} />)}
                        </div>
                    </form>
                    <button onClick={ () => this.appendInput1() }>
                        +
                    </button>

                    <form>
                        <div id="dynamicInput">
                            Directions : {this.state.inputs.map(input => <input key={input} />)}
                        </div>
                    </form>
                    <button onClick={ () => this.appendInput2() }>
                        +
                    </button>

                    <br/><br/>
                    <div className="btnSave">
                        <input type="submit" value="Save"/>
                    </div>

                </div>
            </div>
        );
    }

    appendInput1() {
        var newInput1 = `input-${this.state.inputs.length}`;
        this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput1]) }));
    }

    appendInput2() {
        var newInput2 = `input-${this.state.inputs.length}`;
        this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput2]) }));
    }
}

export default ManageMenuApp;