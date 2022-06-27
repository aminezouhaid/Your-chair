import React from 'react'
import './css/Footer.css'

export default function Footer() {
  return (
    <div>
        
<footer class="footer-distributed" id='Footer'>

			<div class="footer-left">
			<a href="/"> <img className='imglogo' src={require("./img/logo2.png")}alt="" /></a>


				<h3>Y'our <span>Chair</span></h3>

				<p class="footer-links">

					<a href="#" class="link-1">Home</a>
					
					<a href="#">Poduct</a>
				
					<a href="#">Our Bonuses</a>
				
					<a href="#">About</a>
					
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">Y'our Chair @ 2022</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>382 Molay Hassan </span>Youssoufia,Maroc</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+212 6 89 42 95 31</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">yourchair@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa-brands fa-facebook-square"></i></a>
					<a href="#"><i class="fa-brands fa-twitter-square"></i></a>
					<a href="#"><i class="fa-brands fa-linkedin"></i></a>
					<a href="#"><i class="fa-brands fa-github"></i></a>

				</div>

			</div>

		</footer>
    </div>
  )
}
