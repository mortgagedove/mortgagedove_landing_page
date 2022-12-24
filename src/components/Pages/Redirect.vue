<template>
   <h2>Home Page</h2>
   <button @click="checkUser()">Authenticate Me</button>
</template>

<script>
   export default {
       name:'Redirect',
      data(){
         return{
            isLoggedIn: true,
         }
      },
      methods: {
         checkUser() {
            window.location.href = "/thanks";
         },
      },
   };
</script>