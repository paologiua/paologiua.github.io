import './presentation-card.css';

import bkgImage from '../images/bkg-image.jpg';
import profileImage from '../images/profile-image.png';
import Button from './button';

import {ReactComponent as MailSVG} from '../images/mail.svg';

function PresentationCard() {
    return (
        <div className="PresentationCard">
            <img className="bkg-image" src={bkgImage} alt=""></img>
            <div className="blur-filter"></div>
            {/* <div className='content'>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-sm-12 col-lg-6 centered-content">
                            <div className="presentation">
                                <p>
                                    Hi,<br />
                                    I'm Paolo,<br />
                                    developer
                                </p>
                                <Button text="Contact Me Now" svg={MailSVG}/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 centered-content">
                            <img className="profile-image" src={profileImage} alt=""></img>
                        </div>
                    </div>
                </div>
            </div> */}

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