<template>
    <div>
        <NavbarThree />
        <TopHeaderThree />
        <MainBanner />
        <FourButtons />
        <MortgageQuote />
        <FooterThree />
    </div>
</template>

<script>
import NavbarThree from '../Layouts/NavbarThree'
import TopHeaderThree from '../Layouts/TopHeaderThree'
import MainBanner from '../HomeSeven/MainBanner'
import MortgageQuote from '../Common/MortgageQuote'
import FooterThree from '../Layouts/FooterThree'
import FourButtons from '../HomeSeven/FourButtons'

export default {
    name: 'HomePageSeven',
    components: {
        TopHeaderThree,
        NavbarThree,
        MainBanner,
        FourButtons,
        MortgageQuote,
        FooterThree,
    }
}
</script>