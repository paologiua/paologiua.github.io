import React, {Component} from 'react';

import './rounded-image.css';

class RoundedImage extends Component {

    render() {
        const SVG = this.props.svg ? this.props.svg : () => {return <></>};
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