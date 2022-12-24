<template>
    <div 
        @click="scrollToTop()" 
        :class="['back-to-top-btn', {'go-top': isTop}]"
    >
        <i class="bx bxs-up-arrow-alt"></i>
    </div>
</template>

<script>
export default {
    name: 'BackToTop',
    data (){
        return {
            isTop: false
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isTop = true
            } else {
                that.isTop = false
            }
        })
    }
}
</script>