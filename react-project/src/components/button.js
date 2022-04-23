import React, {Component} from 'react';

import './button.css';

class Button extends Component {

    render() {
        const SVG = this.props.svg ? this.props.svg : () => {return <></>};
        return (
            <div className="Button">
                <div>
                    <SVG className="svg" />
                    <p className="text">{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Button;