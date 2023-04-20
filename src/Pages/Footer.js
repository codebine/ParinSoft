/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../CSS/main.css";
const Footer = () => {
  return (
    <div>
        <footer id="footer" class="footer">

<div class="container">
  <div class="row gy-4">
    <div class="col-lg-5 col-md-12 footer-info">
      <a href="index.html" class="logo d-flex align-items-center">
        <span>ParinSoft.</span>
      </a>
      <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
      <div class="social-links d-flex mt-4">
        <a href="#" class="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        <a href="#" class="facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        <a href="#" class="instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="#" class="linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
      </div>
    </div>

    <div class="col-lg-2 col-6 footer-links">
      <h4>Useful Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Terms of service</a></li>
        <li><a href="#">Privacy policy</a></li>
      </ul>
    </div>

    <div class="col-lg-2 col-6 footer-links">
      <h4>Our Services</h4>
      <ul>
        <li><a href="#">Web Design</a></li>
        <li><a href="#">Web Development</a></li>
        <li><a href="#">Product Management</a></li>
        <li><a href="#">Marketing</a></li>
        <li><a href="#">Graphic Design</a></li>
      </ul>
    </div>

    <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
      <h4>Contact Us</h4>
      <p>
        <strong>Phone:</strong> +1 5589 55488 55<br></br>
        <strong>Email:</strong> info@example.com<br></br>
      </p>

    </div>

  </div>
</div>

<div class="container mt-4">
  <div class="copyright">
    &copy; Copyright <strong><span>ParinSoft.</span></strong>. All Rights Reserved
  </div>
</div>

</footer>
    </div>
  )
}

export default Footer