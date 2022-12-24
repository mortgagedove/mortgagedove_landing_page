<template>
    <nav :class="['main-navbar navbar navbar-expand-md navbar-light', {'is-sticky': isSticky}]">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                <img class="black-logo" src="../../assets/img/logob.png" alt="Logo">
                <!-- <img class="white-logo" src="../../assets/img/logo-two.png" alt="Logo"> -->
            </router-link>

            <div 
                class="navbar-toggler" 
                @click="active = !active" :aria-pressed="active ? 'true' : 'false'"
                v-bind:class="{ 'active': button_active_state }"
                v-on:click="button_active_state = !button_active_state"
            >
                <i class='bx bx-menu'></i>
                <i class='bx bx-x'></i>
            </div>

            <div class="collapse navbar-collapse" :class="{ toggler: active }">
                <ul class="navbar-nav">
                    <li class="nav-item">
 
                    </li>
                    <li class="nav-item">

                    </li>
                    <li class="nav-item">

                    </li>
                    <li class="nav-item">

                    </li>
                    <li class="nav-item">
                       <input type="search" id="form1" class="form-control" placeholder='Search' />
                    </li>
                    <li class="nav-item p-2 ms-5">
                        <span>Call Us:</span> <a href="tel:4234543123678">800-605-3128</a>
                    </li>
                </ul>
            </div>
            <div class="side-nav">
                <!-- <a class="side-nav-left log-in" href="#">Log In</a> -->
                <a class="sign-up" href="/contact-us">Apply Now</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarThree',
}
</script>