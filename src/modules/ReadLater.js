const ReadLater = {
    namespaced: true,
    state : {
        savedArticle: [{
            id : 1,
            name : "this is article one",
            description : "this is the description"
        }]
    },
    mutations:{},
    actions:{},
    getters:{
        saved(state){
            return state.savedArticle;
        }
    }
}

export default ReadLater;