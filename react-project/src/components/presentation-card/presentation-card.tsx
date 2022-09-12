import './presentation-card.scss';

import bkgImage from '../../images/bkg-image.jpg';
import profileImage from '../../images/profile-image.png';
import Button from '../button/button';

import { ReactComponent as MailSVG } from '../../images/mail.svg';

function PresentationCard() {
    return (
        <div className="PresentationCard">
            <div className="bkg">
                <img className="image" src={bkgImage} alt=""></img>
            </div>
            <div className="content">
                <div className="section">
                    <div className="item-section">
                        <div className="presentation">
                            <p className="label">
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