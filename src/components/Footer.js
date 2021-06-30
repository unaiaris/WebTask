import React from 'react';
import "./Footer.css"
const Footer = ()=>{
    return(
        <div className="footer p-3 mt-auto">
            <div className="text-center">
                <a href="#">About as</a>
                <a href="#"> / Terms / </a>
                <a href="#">Privacy Policy</a>
            </div>
            <div className="mt-3">
                <p className="text-center mb-0">
                    PLS is a registered service mark and other marks are service marks of PLS
                </p>
                <p className="text-center">
                    Financial Services, Inc. 2016 ©
                </p>
            </div>
            <div id="hola"></div>
        </div>
    )
}

export default Footer;