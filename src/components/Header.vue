<template>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="setDrawer"/>
      <v-spacer></v-spacer>
      <div>
           <v-btn color="primary" elevation="2" fab icon></v-btn>
      </div>
    </v-app-bar>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name : "Header",
    props : {
        title : {
            type : String,
        }
    },
    methods:{
        ...mapActions('Navigation', [
            'setDrawer'
        ])
    }
}
</script>