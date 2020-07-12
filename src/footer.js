import React from 'react';

const Footer = () => {
    return(
        <>
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-6 col-md-3 mt-4">
                    <div><h4 className="text-white">ADDRESSE</h4></div>
                    <div><h6 className="text-white">2953</h6></div>
                    <div><h6 className="text-white">Sector-48</h6></div>
                    <div><h6 className="text-white">Faridabad</h6></div>
                </div>
                <div className="col-6 col-md-3 mt-4">
                    <div><h4 className="text-white">Terms & Conditions</h4></div>
                    <div><a href="./"><h6 className="text-white">Read Company Policies</h6></a></div>
                </div>
                <div className="col-6 col-md-3 mt-4">
                    <div><h4 className="text-white">Contact</h4></div>
                    <div><a href="./"><h6 className="text-white">Contact Info</h6></a></div>
                </div>
                <div className="col-6 col-md-3 mt-4">
                    <div><h4 className="text-white">Social Media!</h4></div>
                    <span><a href="./"><i className="fab fa-facebook-f text-white"></i></a></span> &nbsp;
                    <span><a href="./"><i className="fab fa-instagram text-white"></i></a></span>
                </div>
            </div>
        </div>
    </footer>
    <div className="container">
        <div className="row" id="bottom-bar">
            <div className="col-8">
                
                <h6 className="text-black-50 font-weight-bold">Copyright &copy; Aman Mehta</h6>            
            </div>
            <div className="col-4">
                <span><img src="./assets/images/cc_visa.gif" alt="visa"></img></span>
                <span><img src="./assets/images/cc_mc.gif" alt="master"></img></span>
                <span><img src="./assets/images/cc_amex.gif" alt="amex"></img></span>
                <span><img src="./assets/images/cc_pp.gif" alt="paypal"></img></span>
            </div>
        </div>
    </div>
        </>
    );
}

export default Footer;