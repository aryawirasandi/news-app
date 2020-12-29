import VueRouter from "vue-router";
import Homepage from "@/pages/Homepage.vue";
import Article from "@/pages/Article.vue";

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Homepage },
        { path: "/article/:id", component: Article }
    ]
});

export default router

