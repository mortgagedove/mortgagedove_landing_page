<template>
    <div id="home" class="banner-buy-area">
        <div class="container-fluid">
            <div class="banner-buy-content">
                <h1>A Trusted American Mortgage Lender</h1>
                <h5 style="color: white;">From refinance to buying a new house, we offer a wide range of mortgage options suitable to your needs, because building your future is not an easy task.</h5>

                <!-- <ul class="banner-buy-btn">
                    <li>
                        <a href="#" class="main-default-btn">Buy a Home</a>
                    </li>
                    <li>
                        <a href="#" class="main-optional-btn">Refinance</a>
                    </li>
                </ul> -->
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainBanner',
    data (){
        return {
            isPopup: false,
        }
    },
    methods: {
        isPopupMethod(isPopup){
            console.log(this.isPopup)
            return this.isPopup = !isPopup
        }
    }
}
</script>