import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }
        this.createBox = this.createBox.bind(this);
    }
    createBox(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }
    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }
    render() {
        const boxes = this.state.boxes.map( box => (
            <Box key={box.id} height={box.height} width={box.width} color={box.color} removeBox={ () => this.remove(box.id)} />
        ))
        return (
            <div>
                <h1>Color Box Maker Thingy</h1>
                <NewBoxForm createBox={this.createBox} />
                {boxes}
            </div>
        )
    }
}

export default BoxList