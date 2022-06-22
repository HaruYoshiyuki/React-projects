import React, { Component } from 'react'
import uuid from 'uuid/v4'

class NewBoxForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            height: "", width: "", color: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit (evt) {
        evt.preventDefault();
        const newBox = {...this.state, id: uuid()}
        this.props.createBox(newBox);
        this.setState({
            height: "", width: "", color: "",
        })
    }
    handleChange (evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Height:  
                        <input id='height' name='height' value={this.state.height} onChange={this.handleChange}></input>
                    </label>
                </div>
                <div>
                    <label>Width:  
                        <input id='width' name='width' value={this.state.width} onChange={this.handleChange}></input>
                    </label>
                </div>
                <div>
                    <label>Background Color:  
                        <input id='color' name='color' value={this.state.color} onChange={this.handleChange}></input>
                    </label>
                </div>
                <input type='submit' value='Add a new box!'></input>
            </form>
        )
    }
}
export default NewBoxForm;