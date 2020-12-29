<template>
        <v-navigation-drawer v-model="drawer" absolute
      temporary>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                List Of the News
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-container>
              <v-divider/>
              <v-list 
                dense
                rounded
              >
               <v-list-item v-for="(item, id) in items" :key="id" link>
                    <v-list-item-content>
                    <v-list-item-title>
                        {{ item.title }}
                    </v-list-item-title>
                </v-list-item-content>
               </v-list-item>
              </v-list>
          </v-container>
        </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      navProp: {
        height: "100%",
        width: 256,
        position: "fixed",
      },
      items : [
          {
              title : "Headline News"
          },
          {
              title : "Headline News"
          },
          {
              title : "Headline News"
          },
      ]
    };
  },
  computed: {
      drawer : {
          get(){
              return this.$store.state.Navigation.drawer;
          },
          set(newValue){
             return newValue;
          }
      }
  },
};
</script>
