<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex justify-between">
        <h2>News App</h2>
      </div>
      <v-spacer></v-spacer>
      <div>
           <v-btn color="primary" elevation="2" fab icon></v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    artilces : []
  })
};
</script>