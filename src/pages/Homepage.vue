<template>
  <div>
    <v-row>
      <v-col  sm="12" md="4" v-for="(article, id) in articles" :key="id" class="card__wrapper-col">
      <card>
        <template v-slot:content>
          <v-img max-height="155" :src="getImage(article.urlToImage)"/>
          <v-container>
            <v-card-text>
              {{ article.title }}
            </v-card-text>
            <v-divider/>
            <v-card-subtitle>
              {{ article.description }}
            </v-card-subtitle>
            <v-card-actions>
              <v-row>
                <v-col cols="12">
                    <v-btn elevation="3" block class="text-capitalize" color="primary">Read The Article</v-btn>
                </v-col>
                <v-col cols="12"> 
                    <v-btn
                    elevation="3"
                    block
                    margin="0"
                     class="text-capitalize"
                     color="secondary"
                >Later</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-container>
        </template>
      </card>
      </v-col>
    </v-row>
  </div> 
</template>
<script>
import Card from "@/components/Card.vue";
import { mapGetters } from "vuex";
export default {
  name: "Homepage",
  data: () => ({
    articles : []
  }),
  components : {
    Card
  },
  methods : {
   async getArticles(){
     const response = await this.axios.get("/top-headlines");
     return this.articles = await response.data.articles;
   }
  },
  computed : {
    ...mapGetters("ReadLater", [
      "saved"
    ])
  },
  mounted(){
    this.getArticles();
  }
};
</script>
<style lang="scss" scoped>
  .card{
    &__wrapper{
      &-col{
        min-height: 300px;
      }
    }
  }
</style>