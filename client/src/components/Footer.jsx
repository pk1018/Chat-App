//import React from "react"
import "../assets/styles/footer.css";

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-3 mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can find useful links to understand / contact us</p>
                <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
              width="70px"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Socials</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Instagram</a></li>
                    <li><a href="#!">Linkedin</a></li>
                    <li><a href="#!">Facebook</a></li>
                    <li><a href="#!">Email</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Code</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Github</a></li>
                    <li><a href="#!">Author 1: Rushabh</a></li>
                    <li><a href="#!">Author 2: Pranav</a></li>
                    <li><a href="#!">Docs</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Related</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Socket io</a></li>
                    <li><a href="#!">React documentation</a></li>
                    <li><a href="#!">Working</a></li>
                    <li><a href="#!">Integration</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> Chatapp </a>
    </div>

</footer>

export default Footer;