<template>
    <div>
        <div id="home" class="three-banner-area four-banner-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container-fluid">
                        <div class="row align-items-center">

                                <div class="banner-form">
                                    <div class="one-section-title three-section-title">
                                        <h1>Mortgage calculator</h1>
                                        <h2>Calculate your monthly payment</h2>
                                    </div>
                                    <div class="tabs">
                                        <ul class="tabs__header">
                                            <li 
                                                class="tabs__header-item" 
                                                v-for="tab in tabs" 
                                                v-on:click="selectTab (tab.id)" 
                                                v-bind:class="{ 'active': activeTab == tab.id }"
                                                :key="tab.id"
                                            >
                                                {{tab.name}}
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tabs__container">
                                        <ul 
                                            class="tabs__list"
                                            ref='tabsList'
                                        >
                                            <li 
                                                class="tabs__list-tab"
                                                v-for="tab in tabs"
                                                v-bind:class="{ 'active': activeTab == tab.id }"
                                                :key="tab.id"
                                            >
                                                <form method="post" @submit.prevent="send">
                                                    <div class="row">
                                                        <div class="col-sm-6 col-lg-6">
                                                            <div class="form-group">
                                                                <label>
                                                                    <i class='bx bx-dollar-circle'></i>
                                                                </label>
                                                                <input type="text" class="form-control" placeholder="Home Price">
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6 col-lg-6">
                                                            <div class="form-group">
                                                                <label>
                                                                    <i class='bx bx-dollar-circle'></i>
                                                                </label>
                                                                <input type="text" class="form-control" placeholder="Down Payment">
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6 col-lg-6">
                                                            <div class="form-group">
                                                                <label>
                                                                    <i class='bx bx-calculator'></i>
                                                                </label>
                                                                <input type="text" class="form-control" placeholder="Interest Rate">
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6 col-lg-6">
                                                            <div class="form-group">
                                                                <label>
                                                                    <i class='bx bx-dollar'></i>
                                                                </label>
                                                                <input type="text" class="form-control" placeholder="Monthly Home Association fee">
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <div class="form-group">
                                                                <label>
                                                                    <i class='bx bxs-check-circle'></i>
                                                                </label>
                                                                <select class="form-select" aria-label="Loan Terms">
                                                                    <option selected>Years</option>
                                                                    <option value="1">30 Years</option>
                                                                    <option value="1">25 Years</option>
                                                                    <option value="1">20 Years</option>
                                                                    <option value="2">15 Years</option>
                                                                    <option value="3">10 Years</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6 col-lg-6">
                                                            <div class="form-group">
                                                                <label>
                                                                    <i class='bx bx-dollar'></i>
                                                                </label>
                                                                <input type="text" class="form-control" placeholder="Yearly Property Taxes">
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6 col-lg-6">
                                                            <div class="form-group">
                                                                <label>
                                                                    <i class='bx bx-dollar'></i>
                                                                </label>
                                                                <input type="email" class="form-control" placeholder="Yearly Homeowners Insurance">
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <button type="submit" class="cmn-banner-btn">
                                                                Calculate Payment
                                                                <i class='bx bx-right-arrow-alt'></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div 
            class="popup-video" 
            v-if="isPopup"
        >
            <div class="d-table">
                <div class="d-table-cell">
                    <div 
                        class="popup-overlay-close"
                        v-on:click="isPopupMethod(isPopup)"
                    >
                        <div class="popup-overlay-close-line"></div>
                        <div class="popup-overlay-close-line"></div>
                    </div>
                    <div class="play-video">
                        <iframe src="https://www.youtube.com/embed/bk7McNUjWgw"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Quote',
    data (){
        return {
            isPopup: false,
            activeTab: 1,
            offsetRight: 0,

            price: 0,
            downPayment: 0,
            
            tabs: [
                {
                    id: 1,
                    name: 'Purchase',
                },
                {
                    id: 2,
                    name: 'Refinance',
                },
            ]
            
        }
    },
    methods: {
        isPopupMethod(isPopup){
            console.log(this.isPopup)
            return this.isPopup = !isPopup
        },
        selectTab (id) {
            let tabsList = this.$refs.tabsList
            this.activeTab = id
            this.offsetRight = tabsList.clientWidth * (id - 1)
            tabsList.style.right = this.offsetRight + 'px'
        },
        send(){
            
                window.location.href = "/calculator";
        }
    },
    mounted () {
        let tabsList = this.$refs.tabsList
        tabsList.style.right = this.offsetRight + 'px'
    },
    computed: {
        products(){
            return this.$store.state.products.all.filter(item => {
                return item.productsType === 'left-sidebar'
            })
        },
        principle: function() {
            return this.price - this.downPayment
        },
        downPaymentPercentage: function() {
            return ((this.downPayment / this.price) * 100).toPrecision(3) + '%'
        }
    },
    filters: {
        round(number) {
        return Math.round(number)
        }
    }
}
</script>