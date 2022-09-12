
import React, { Component } from 'react';

import './rounded-image.scss';

interface RoundedImageProps {
    svg?: React.ElementType;
    text?: string;
}

class RoundedImage extends Component<RoundedImageProps> {

    render() {
        const SVG: React.ElementType = this.props.svg || (() => <></>);
        return (
            <div className="RoundedImage">
                <div>
                    <SVG className="svg" />
                    <p className="text">{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default RoundedImage;