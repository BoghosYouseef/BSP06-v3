<template>
  <div class="home">
    <LoginNavigationButton />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginNavigationButton from "../components/LoginNavButton.vue"
export default {
  name: "Home",
  components: {
    LoginNavigationButton,
    
  },
};

</script>
   <!--  <RegisterationNavigationButton /> -->
   
<!--import RegisterationNavigationButton from "../components/RegNavButton.vue"-->
// RegisterationNavigationButton,