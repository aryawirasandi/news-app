<template>
  <v-app>
    <Header :title="title"/>
    <v-main>
       <Navigation/>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation.vue";
export default {
  name: "App",
  components: {
    Header,
    Navigation
  },
  data(){
    return {
      title : "Headline News"
    }
  }
};
</script>