import React from 'react'
import '../assets/css/Footer.css'

function Footer() {
    return (
        <footer>
            <div className='footer-content'>
                <div className="footer-box">
                    <h4>About</h4>
                    <span>
                        <a href="">About us</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact us</a>
                        <a href="#">Blog</a>
                        <a href="#">Investors</a>
                    </span>
                </div>
                <div className="footer-box">
                    <h4>Discover Udemy</h4>
                    <span>
                        <a href="">Get the app</a>
                        <a href="#">Teach on Udemy</a>
                        <a href="#">Plans and Pricing</a>
                        <a href="#">Blog</a>
                        <a href="#">Help and Support</a>
                    </span>
                </div>
                <div className="footer-box">
                    <h4>Udemy for Business</h4>
                    <span>
                        <a href="#">Udemy Business</a>
                    </span>
                </div>
                <div className="footer-box">
                    <h4>Legal & Accessibility</h4>
                    <span>
                        <a href="#">Accessibility statement</a>
                        <a href="#">Privacy policy</a>
                        <a href="#">Sitemap</a>
                        <a href="#">Terms</a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer