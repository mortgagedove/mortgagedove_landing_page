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
                <h1>Learn everything you need to know about Mortgage loans</h1>
            </div>

            <div class="">
                <h2>Getting a mortgage loan is not a simple process - the more you know the better decision you take when it comes building your future</h2>
            </div>
            <!-- <div class="center_card"> -->

            <div class="">
                <p style="font-weight: bold;">Recent Articles</p>
                <div class="o-Grid--auto">
                    <a href="">
                    <div class="card">
                        <img src="../../assets/img/house1.jpg" alt="Avatar" style="width:100%">
                            <div class="container">
                                <h7><b>How Much Money Do You Need To Buy A House?</b></h7> 
                            </div>
                    </div>
                    </a>
                    <a href="">
                    <div class="card">
                        <img src="../../assets/img/house7.jpeg" alt="Avatar" style="width:100%">
                            <div class="container">
                                <h7><b>Where You Live: Primary Residence, Vacation Home</b></h7> 
                            </div>
                    </div>
                    </a> 
                    <a href=""> 
                    <div class="card">
                        <img src="../../assets/img/house5.jpeg" alt="Avatar" style="width:100%">
                            <div class="container">
                                <h7><b>How to Buy a Hpouse with no money Down?</b></h7> 
                            </div>
                    </div>
                    </a> 
                </div>
            </div>
 
             <div class="">
                <p style="font-weight: bold;">All Articles</p> 
                <div class="o-Grid--auto">
                    <a href="">
                    <div class="card">
                        <img src="../../assets/img/house5.jpeg" alt="Avatar" style="width:100%">
                            <div class="container">
                                <h7><b>How Much Money Do You Need To Buy A House?</b></h7> 
                            </div>
                    </div>
                    </a>
                    <a href="">
                    <div class="card">
                        <img src="../../assets/img/house6.jpeg" alt="Avatar" style="width:100%">
                            <div class="container">
                                <h7><b>Where You Live: Primary Residence, Vacation Home</b></h7> 
                            </div>
                    </div>
                    </a> 
                    <a href=""> 
                    <div class="card">
                        <img src="../../assets/img/house7.jpeg" alt="Avatar" style="width:100%">
                            <div class="container">
                                <h7><b>How to Buy a Hpouse with no money Down?</b></h7> 
                            </div>
                    </div>
                    </a> 
                </div>
            </div>
        <!-- </div> -->
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

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 80%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}

.center_card{
    text-align: center;
}

.o-Grid--auto {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(320px,1fr));
    row-gap: 2rem;
    -webkit-column-gap: 1.25rem;
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem;
    /* padding-left: 350px;
    padding-right: 300px; */
    margin-bottom: 50px;
}
</style>

<script>
import NavbarThree from '../Layouts/NavbarThree'
import TopHeaderThree from '../Layouts/TopHeaderThree'
import MainBanner from '../HomeSeven/MainBanner'
import FooterThree from '../Layouts/FooterThree'

export default {
    name: 'Learn',
        components: {
        TopHeaderThree,
        NavbarThree,
        MainBanner,
        FooterThree,
    }
}
</script>