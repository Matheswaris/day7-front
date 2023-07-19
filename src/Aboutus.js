import React from 'react'
import './Aboutus.css';
// import { Link } from 'react-router-dom';

function Aboutus() {
  return (
    <div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container">
    <img class="mainImg" src="https://media.istockphoto.com/id/1385970223/photo/great-idea-of-a-marketing-strategy-plan-at-a-creative-office.jpg?s=2048x2048&w=is&k=20&c=_E_buvj4I15suYVQq7Y7iWHKku2qx7AYp7Ui4dJtkSE="></img>
    <div class="allText aboveText">
      <p class="text-blk headingText">
       <marque> Our Mission</marque>
      </p>
      <p class="text-blk subHeadingText"><font color="green">"We are the world’s most significant leading
      agency for digital marketing, content
      marketing, and SEO since 2003."</font>
      </p>
      <p class="text-blk description"><font color="blue">
      We’ve helped to substantially grow many of the most successful and fastest growing brands in the world that include Ferrari, AT&T, and many enterprise and small to midsize businesses.
</font>
      </p>
      <button class="explore">
        Explore
      </button>
    </div>
  </div>
  <div class="responsive-container-block Container bottomContainer">
    <img class="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/xpraup2.svg"></img>
    <div class="allText bottomText">
      <p class="text-blk headingText">
        Our Vision
      </p>
      <p class="text-blk subHeadingText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p class="text-blk description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
      </p>
      <button class="explore">
        Explore
      </button>
    </div>
  </div>
</div>
)
}

export default Aboutus