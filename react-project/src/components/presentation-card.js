import './presentation-card.css';

import bkgImage from '../images/bkg-image.jpg';
import profileImage from '../images/profile-image.png';
import Button from './button';

import {ReactComponent as MailSVG} from '../images/mail.svg';

function PresentationCard() {
    return (
        <div className="PresentationCard">
            <div className="bkg">
                <img className="image" src={bkgImage} alt=""></img>
                <div className="blur-filter"></div>
            </div>
            <div class="section">
                <div>
                    <div className="item-section">
                        <div className="presentation">
                            <p>
                                Hi,<br />
                                I am Paolo,<br />
                                developer
                            </p>
                            <Button text="Contact Me Now" svg={MailSVG}/>
                        </div>
                    </div>
                    <div className="item-section">
                        <img className="profile-image" src={profileImage} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PresentationCard;