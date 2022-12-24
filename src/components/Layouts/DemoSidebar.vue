<template>
    <div>
        <div 
            class="demo-side-icon" 
            v-on:click="isDemoMethod(isDemo)"
        >
            <button type="button" class="modal-btn">
                <span>CONTACT US</span>
            </button>
        </div>

        <div 
            class="demos-side-content" 
            v-if="isDemo"
        >
            <div class="modal-header">
                <h2>CONTACT US</h2>
                <button 
                    type="button" 
                    class="close" 
                    v-on:click="isDemoMethod(isDemo)"
                >
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                    <!-- <div class="col-lg-6 col-md-12"> -->
                        <div class="main-banner-form-wrap">
                            <h6>Contact us and apply for the mortgage option most suitable to your needs.</h6>
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'DemoSidebar',
    data (){
        return {
            isDemo: false,

                typeloan:'',
                hometype:'',
                proprtytype:'',
                note:'',
                firstname:'',
                lastname:'',
                email:'', 
        }
    },
    methods: {
        isDemoMethod(isDemo){
            console.log(this.isDemo)
            return this.isDemo = !isDemo
        },
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
    }
}
</script>