import React, { Component } from 'react';

import './button.scss';

interface ButtonProps {
    svg?: React.ElementType;
    text?: string;
}

class Button extends Component<ButtonProps> {

    render() {
        const SVG: React.ElementType = this.props.svg || (() => <></>);
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