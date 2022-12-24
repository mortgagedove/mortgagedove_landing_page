<template>
    <div>
        <NavbarThree />
        <TopHeaderThree />
        <!-- <MainBanner /> -->
        <!-- <div id="home" class="banner-buy-area">
            <div class="container-fluid">
                
            </div>    
        </div> -->
        <div class="container">
            <div class="buy-house-title-sub">
                <h1>We’re Not Just Your Typical Mortgage Lender</h1>
            </div>
            <div class="buy-house-title-sub2">
                <h2>We’re Your Partner In Making Your Dream Come True</h2>
            </div>
            <div class="buy-house-content-title">
                <p>Our goal at Mortgage Dove is to make it as easy as possible for every American to own a home without having to go through a complicated process on their own. </p>
                <p>We envision the home buying process to be a smooth transaction for people from different walks of life whether through online or physical mortgage lender experience to meet the needs of our clients. </p>
                <p>We are dedicated to promoting homeownership for everyone, regardless of their status under applicable law, including those who have exercised their right under the Consumer Credit Protection Act in good faith.</p>
            </div>
            <div class="buy-house-content-title">
                <h2>We Offer Customized Mortgage Lender Experience</h2>
                <p>Mortgage Dove makes home financing convenient for every American.</p> 
                <p>You can count on us to provide a home buying experience tailored to your personal needs and financial situation. We strive to give you the peace of mind that your home financing goals can be achieved.</p>  
            </div>

            <div class="buy-house-content-title">
                <h2>We Provide a Quick and Easy Process</h2>
                <p>Mortgage Dove allows you to process your mortgage online from the comfort of your own home. We save you the time and hassle of traveling and standing in line. </p> 
                <p>Our team will also guide you through the mortgage application process if you have no experience with online transactions.</p>  
                <p>Count on us to provide prompt, personalized service that makes your mortgage experience as stress-free and convenient as possible.</p>
            </div>

            <div class="buy-house-content-title">
                <h2>Why Choose Mortgage Dove </h2>
                    <ul class="">
                    <li>Mortgage Loan options tailored to your needs </li>
                        <h7>We ensure that our clients have the information they need to obtain the right mortgage, regardless of their specific goals.</h7>
                    <li>Monitor Your Mortgage 24/7</li>
                        <h7>Our tools will always keep you updated on the status of your loan.</h7>
                    <li>Expert assistance and advice</li>
                        <h7>Not sure what type of mortgage loan are you looking for? Get advice from some of the best experts in the field through a fast and easy online application process. 
                    </h7>
                    </ul>
            </div>
        </div>
        <FooterThree />
    </div>
</template>

<style>
ul.a {
  list-style-type: circle;
  padding-left: 320px;
  padding-right: 320px;
  position: relative;
}
ul.num {
  padding-left: 320px;
  padding-right: 320px;
  position: relative;
}
</style>

<script>
import NavbarThree from '../Layouts/NavbarThree'
import TopHeaderThree from '../Layouts/TopHeaderThree'
import MainBanner from '../HomeSeven/MainBanner'
import FooterThree from '../Layouts/FooterThree'

export default {
    name: 'AboutUs',
        components: {
        TopHeaderThree,
        NavbarThree,
        MainBanner,
        FooterThree,
    }
}
</script>