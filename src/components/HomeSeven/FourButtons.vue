<template>
    <div class="three-loan-area five-loan-area ptb-100">
        <div class="container">
            <!-- <div class="one-section-title three-section-title"> -->
                <!-- <span class="sub-title">READ OUR HELPFUL GUIDES</span> -->
                <!-- <h2>We Have Offer To You</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diusmod mlaboret dolore magnad minim veniamquaera</p> -->
            <!-- </div> -->
            <div class="five-loan-slider">
                <carousel 
                    :autoplay="5000"
                    :settings="settings"
                    :breakpoints="breakpoints"
                >
                    <slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="loan-item">
                            <i :class='slide.icon'></i>
                            <h3>{{slide.title}}</h3>
                            <p>{{slide.description}}</p>
                            <a :href="slide.link">
                                READ MORE
                                <i class='bx bx-right-arrow-alt'></i>
                            </a>
                        </div>
                    </slide>

                    <!-- <template #addons>
                        <Pagination />
                    </template> -->
                </carousel>
            </div>
            <div class="one-section-title three-section-title">
                <a href="/contact-us" class="main-default-btn">Apply Now</a>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default defineComponent ({
    name: 'WhatsYouExpect',
    components: {
        Carousel,
        Slide,
        Pagination
    },

    data: () => ({
        carouselItems: [
            {
                id: 1,
                icon: 'bx bx-home',
                title: 'Home Buyers Guide',
                description: 'Follow our step-by-step guide to learn how to buy a home.',
                link: "/buy-house"
            },
            {
                id: 2,
                icon: 'bx bx-wrench',
                title: 'Refinance Guide',
                description: 'Learn how refinancing can help you save money.',
                link:"/refinance"
            },
            {
                id: 3,
                icon: 'bx bx-dollar-circle',
                title: 'Learning Center',
                description: 'Inform yourself you need to know before taking a loan.',
                link:"/learning-center"
            },
            {
                id: 4,
                icon: 'bx bx-calculator',
                title: 'Mortgage Calculator',
                description: "Calculate your monthly payment using today's rates.",
                link:"/calculator"
            },
        ],
        // carousel settings
        settings: {
            snapAlign: 'center',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            0: {
				itemsToShow: 1,
                snapAlign: 'center',
			},
            600: {
                itemsToShow: 2,
                snapAlign: 'end',
            },
            1000: {
                itemsToShow: 4,
                snapAlign: 'end',
            },
        },
    }),
})
</script>