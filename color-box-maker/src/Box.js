import React, { Component } from 'react';

class Box extends Component {
    render () {
        return (
            <div>
                <div style={{
                    backgroundColor: this.props.color,
                    height: `${this.props.height}em`,
                    width: `${this.props.width}em`
                    }}>
                </div>
                <button onClick={this.props.removeBox}>Remove the box!</button>
            </div>
        )
    }
}
export default Box;