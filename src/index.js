import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class UmutiLanding extends Component {
    constructor(props) {
        super(props);
        this.renderGetStartedButton = this.renderGetStartedButton.bind(this);
    }
    renderGetStartedButton(loggedIn) {
        if (!loggedIn) {
            return (
                <span>
                    <a to="/signup">
                        <button className="blue-btn">Get Started</button>
                    </a>
                </span>
            );
        }

        return <span />;
    }
    render() {
        const { children, loggedIn } =  this.props;
        return (
            <div>
                 {/* header does here */}
                 <div>
                     {children}
                 </div>
                <div className="row reset-row top-banner">
                    <div className="col-lg-10 col-md-10 col-sm-12 offset-md-1">
                        <div className="col-lg-5 col-md-5 col-sm-12 landing-content">
                            <div className="content-title">
                                <div>Rwanda</div>
                                <div>Pharmaceutical</div>
                                <div>Procurements</div>
                            </div>
                            <div className="content-desc">With service levels that meets international standards in speed, reliability, security, accessibility and at affordable prices.</div>
                            <div className="content-btn">
                                {this.renderGetStartedButton(loggedIn)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row reset-row bottom-banner">
                    <div className="col-lg-10 col-md-10 col-sm-12 offset-md-1">
                        <div className="col-lg-5 col-md-5 col-sm-12 offset-lg-7 offset-md-7 landing-content">
                            <div className="content-title">
                                <div>National</div>
                                <div>Pharmacy</div>
                                <div>Council</div>
                            </div>
                            <div className="content-desc">
                                National Pharmacy Council is to enable a national approach to the regulation and control of pharmacy profession
                                and accreditation of institution's training programs. The NPC is intended to work in collaboration with the different 
                                institutions of the government of Rwanda, other health professional organizations, other regulatory agencies and the 
                                general public to identity issues and trends in pharmacy practice that requires collegiate approach and attention.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row reset-row happyClient">
                    <div className="col-md-8 col-sm-10 col-xs-12 offset-md-2 offset-sm-1">
                        <div className="happyTitle">Happy Clients</div>
                    </div>
                </div>
                <div className="row reset-row landing-footer">
                    <div className="col-md-10 col-sm-12 offset-md-1">
                        <div>Copyright UMUTI 2018</div>
                        <div><a to="/">Terms of Services</a> and <a to="/">Privacy Policies</a></div>
                    </div>
                </div>
            </div>  
        );
    }
};

export default UmutiLanding;


