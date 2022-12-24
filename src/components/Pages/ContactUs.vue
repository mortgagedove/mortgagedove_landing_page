<template>
    <div>
        <NavbarThree />
        <TopHeaderThree />

        <div class="container">
            <!-- <div class="modal-body"> -->
                    <!-- <div class="col-lg-6 col-md-12"> -->
                        <div class="main-banner-form-wrap" style="margin-left: 350px;">
                            <div class="get-qualified">
                                <h1>Contact us</h1>
                            </div>
                            <h2 style="margin-top: 10px;">Apply for the mortgage option most suitable to your needs.</h2>
                            <form method="post" @submit.prevent="send">
                                <div class="form-group">
                                    <label>Type of loan</label>
                                
                                    <div class="select-box">
                                        <select id="typeloan" name="typeloan" v-model="typeloan">
                                            <option value="Refinance a home">Refinance a home</option>
                                            <option value="Buy a new home">Buy a new home</option>
                                            <option value="Take cash out">Take cash out</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Home description</label>
                                
                                    <div class="select-box">
                                        <select id="hometype" name="hometype" v-model="hometype">
                                            <option value="Single family">Single family</option>
                                            <option value="Multifamily">Multifamily</option>
                                            <option value="Condominium">Condominium</option>
                                            <option value="Townhouse">Townhouse</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Property Use</label>
                                
                                    <div class="select-box">
                                        <select id="propertytype" name="propertytype" v-model="propertytype">
                                            <option value="Primary residence">Primary residence</option>
                                            <option value="Secondary home">Secondary home</option>
                                            <option value="Primary residence">Secondary home</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Please write any other useful information such as Estimated home value, mortgage balance, how much cash you would like to borrow, credit profile, etc.</label>
                                    <div class="select-box">
                                        <textarea class="form-control" rows="4" cols="5" id="note" name="note" v-model="note"></textarea>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="select-box">
                                        <input type="text" class="form-control" placeholder="First Name" id="firstname" name="firstname" v-model="firstname">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="select-box">
                                        <input type="text" class="form-control" placeholder="Last Name" id="lastname" name="lastname" v-model="lastname">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="select-box">
                                        <input type="text" class="form-control" placeholder="Email" id="email" name="email" v-model="email">
                                    </div>
                                </div>

                                <div class="calculat-button">
                                    <button type="submit" class="default-btn">Submit</button>
                                </div>
                            </form>
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


        .get-qualified {
            text-align: center;
            margin-left: 30px;
            margin-right: 30px;
        }
</style>

<script>
import NavbarThree from '../Layouts/NavbarThree'
import TopHeaderThree from '../Layouts/TopHeaderThree'
import MainBanner from '../HomeSeven/MainBanner'
import FooterThree from '../Layouts/FooterThree'

export default {
    name: 'ContactUs',

        data(){

            return{
                // hometype:'',
                // homeval:'',
                // mortbal:'',
                // state:'',
                // zipcode:'',
                // yourage:'',
                // spouseage:'',
                // firstname:'',
                // lastname:'',
                // email:'',
                // phone:''
                typeloan:'',
                hometype:'',
                proprtytype:'',
                note:'',
                firstname:'',
                lastname:'',
                email:'',     
            };
    },
    
    methods:{
        async send(){
            
            const axios = require('axios');
            let payload={
                hometype: this.typeloan,
                homeval: this.hometype,
                mortbal: this.propertytype,
                state: this.note,
                zipcode: "NA",
                yourage: "NA",
                spouseage: "NA",
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                phone: "NA"
            };

            let result = await axios.post('http://164.92.108.26:8080/v1/send_mail', payload, {headers: {'Content-type': 'application/x-www-form-urlencoded'}});
            
            let response = result.data.toString();
            console.log(response);
            if (response.includes('Successfully')){
                window.location.href = "/thanks";
            } else{
                window.location.href = "/thanks";
            }
        }
    },

        components: {
        TopHeaderThree,
        NavbarThree,
        MainBanner,
        FooterThree,
        }
}
</script>