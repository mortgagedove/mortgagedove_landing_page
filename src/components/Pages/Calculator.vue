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
                <h1 style="text-align: center;">Mortgage Loan Calculator</h1>
            </div>
            <div class="buy-house-content-title">
                <div class="bg-white py-10 rounded shadow mb-3">
                    <div class="align">
                        <label for="price" style="padding-right: 40px;">Home Price</label>
                        <input
                            class="p-2 mb-4 border rounded"
                            name="price"
                            type="text"
                            v-model="price"/>
                        <label style="padding-left: 5px">USD</label>
                    </div>
                    <div class="align">
                        <label for="price" style="padding-right: 10px;">Down Payment</label>
                        <input
                            class="p-2 mb-4 border rounded"
                            name="price"
                            type="text"
                            v-model="downPayment"
                        />
                        {{ downPaymentPercentage }}
                    </div>

                    <div class="align">
                        <label for="borrowedAmount" style="padding-right: 20px;">Loan Amount</label>
                        <input
                            class="p-2 mb-4 border rounded"
                            v-model="principle"
                            type="text"
                            name="borrowedAmount"
                        />
                        <label style="padding-left: 5px">USD</label>
                    </div>
                </div>
            </div>

             <h2 style="font-weight: bold;">How to calculate your mortgage payment</h2>
             <p>In the "Home price" section, you can either enter the price (if you're buying) or the current value (if you're refinancing).</p>
             <p>In the "Down payment" field, enter your down payment (if you're buying) or your equity (if you're refinancing). A down payment is a cash you pay to buy a home, and home equity is the value of the home minus what you owe.</p>

             <p>If you're using a desktop, enter your interest rate on the right side under "Interest rate". You can adjust the length of the mortgage by clicking the plus and minus signs under "Loan term."</p>

            <p>When using a mobile device, tap "Refine Results" to find the rate field, and then use the plus and minus signs to select "Loan term."</p>
            <p>It is possible to enter your figures for property taxes, homeowners insurance, and homeowners association fees. You can easily edit the amount by clicking on it.</p>
            <p>You can view a comparison of different loan terms by clicking "Compare common loan types" on the mortgage calculator. You can view the change in principal balance, principal paid (equity), and interest paid by clicking "Amortization". If you are using a mobile device, scroll down to see "Amortization."</p>


            <h2 style="font-weight: bold;">Formula for calculating your mortgage payment</h2>
            <p>A mortgage payment is calculated as follows: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]</p>

            <p>In this case, the variables are:</p>
            <ul class="buy-house-content-title">
                    <li>M = monthly mortgage payment</li>
                    <li>P = the principal amount</li>
                    <li>i = your monthly interest rate. Lenders likely list interest rates as an annual figure. Divide by 12 to include each month of the year. If your rate is 5%, your monthly rate will be 0.05/12 = 0.004167.</li>
                    <li>n = number of payments over the loan duration. A 30-year fixed rate mortgage means:   n = 30 years x 12 months per year or 360 payments.</li>
                    </ul>

                    <h2 style="font-weight: bold;">How can a mortgage calculator help</h2>

                    <p>Calculating how much house cost you can afford begins with calculating your monthly house payment. Your monthly payment is likely to make up the majority of your living expenses.</p> 
                    <p>A mortgage calculator gives you an idea of how much your mortgage payment will be when you purchase a home or refinance one. The calculator allows you to run scenarios by changing loan details. </p>

                    <p>Below are the benefits of using a mortgage calculator.</p>
                    <ul class="buy-house-content-title">
                    <li>1. Choose the right term length for your home loan. Your monthly payment will be lower with a 30-year fixed-rate mortgage, but you will pay more interest over its lifetime. Your monthly payment will be higher with a 15-year fixed-rate mortgage, but your total interest will be reduced. </li>
                    <li>2. Consider an ARM if it makes sense. ARMs initially have a "teaser" rate, but the rate changes over time. You may want to consider a 5/1 ARM if you plan to stay in the house for just a few years. When the introductory rate expires, you should consider how much your monthly mortgage payment can change, particularly if interest rates are going up.</li>
                    <li>3. Overbuying a home. If you factor in all the costs, including taxes, insurance, and private mortgage insurance, the mortgage payment calculator can give you a realistic estimate of your monthly payments.</li>
                    <li>4. Assess if you have enough money down. You can put down just a little money these days with minimum down payments as low as 3%. If you are trying to decide what the best down payment is for you, a mortgage payment calculator may be able to help you.</li>
                    </ul>

                    <h2 style="font-weight: bold;">Is it better to invest in the long-term or the short-term?</h2>

                    <p>Loan terms refer to how long it takes you to pay back your loan. Short-term loans usually have lower interest rates than long-term loans, so throughout the loan, you will pay less interest. In contrast, longer-term loans have lower monthly payments.</p> 

                    <h2 style="font-weight: bold;">How interest rate is determined</h2>
                    <p>You may not be aware that many factors influence your mortgage rate. Here are just a few examples:</p>

                    <ul class="buy-house-content-title">
                    <li>Type of loan</li>
                    <li>Credit history</li>
                    <li>Loan amount</li>
                    <li>Down payment amount</li>
                    </ul>

                    <p>The interest rate on your loan depends on the level of risk lenders predict for your loan, that's why your rate is influenced by so many factors. Furthermore, mortgage rates fluctuate daily based on market trends.</p>

                    <h2 style="font-weight: bold;">What lenders consider when determining your loan amount</h2>
                    <p>To lend you money, lenders must assess your ability to repay it. This assessment is based on several factors, one of which is the debt-to-income ratio.</p>

                    <p>Debt-to-income ratio is how much of your pretax income goes toward monthly debt payments, which include mortgages, auto payments, student loans, minimum credit card payments, and child support. The most favorable debt-to-income ratios are 36% or less - or a maximum of $1,800 per month on a $5,000 income.</p>
                    <h2 style="font-weight: bold;">Increase in monthly mortgage payment</h2>
                    <p>Over time, your monthly payment may increase if:</p>

                    <ul class="buy-house-content-title">
                    <li>The cost of property taxes and homeowners insurance goes up. The costs of these items are typically included in mortgage payments.</li>
                    <li>The mortgage loan servicer charges you for late payments.</li>
                    <li>During the adjustment period, the rate on your adjustable-rate mortgage rises.</li>
                    </ul>

        </div>
        <FooterThree />
    </div>
</template>

<style>

.align{
    margin-left: 380px;
    padding-top: 30px;
}

</style>

<script>
import NavbarThree from '../Layouts/NavbarThree'
import TopHeaderThree from '../Layouts/TopHeaderThree'
import MainBanner from '../HomeSeven/MainBanner'
import FooterThree from '../Layouts/FooterThree'

export default {
    name: 'Calculator',
        components: {
        TopHeaderThree,
        NavbarThree,
        MainBanner,
        FooterThree,
    },
      data() {
    return {
      price: 0,
      downPayment: 0
    }
  },
  computed: {
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