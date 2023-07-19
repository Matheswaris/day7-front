import React from 'react'
import './Home.css';
//import { Link } from 'react-router-dom';

function Home() {
  return (
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="styles.css" />
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
</head>

<body>
  <header class="header">
  <div class="logo">
  <img src="https://tse4.mm.bing.net/th?id=OIP.RUtxa7z27oGcKHRNiJUAEgHaEn&pid=Api&P=0&h=180" alt="easyclass" />
  <h4>  Deo marketing</h4>
</div>
    <nav class="nav-items">
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Contact Us</a>
      <a href="#">Logout</a>
    </nav>
  </header>
  <main>
    <div class="intro">
      <h1>DEO MARKETING</h1>
      <p>The best marketing doesn't feel like marketing.</p>
      
    </div>
    <div class="achievements">
      <div class="work">
        <i class="fas fa-atom"></i>
        <p class="work-heading">Email Marketing</p>
        <p class="work-text"> Email marketing is a powerful form of direct marketing used to promote your business’s products and services.
        .</p>
      </div>
      <div class="work">
        <i class="fas fa-skiing"></i>
        <p class="work-heading">Social Media Management</p>
        <p class="work-text">“Build it, and they will come” only works in the movies. Social Media is a “build it, nurture it, engage them, and they may come and stay.”.</p>
      </div>
      <div class="work">
        <i class="fas fa-ethernet"></i>
        <p class="work-heading">SEO</p>
        <p class="work-text">Best way to sell something: don’t sell anything. Earn the awareness, respect, and trust of those who might buy.</p>
      </div>
    </div>
    <div class="about-me">
      <div class="about-me-text">
        <h2>About our site</h2>
        <p>Marketing has always been about how to reach (and sell to) an audience. What’s changed, as technology changes, is where you
        find
        that audience.
        .</p>
      </div>
      <img src="https://tse1.mm.bing.net/th?id=OIP.qafE5qj5JGhWSwCm3PQ9UAHaEK&pid=Api&P=0&h=180" alt="me"></img>
    </div>
  </main>
  <footer class="footer">
    <div class="copy">© Designer</div>
    <div class="bottom-links">
      <div class="links">
        <span>More Info</span>
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy policy</a>
        <a href="#">FAQ</a>
        <a href="#">Contact Information</a>
      </div>
      <div class="links">
        <span>Social Links</span>
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </footer>
</body>
</html>
  
)
}

export default Home