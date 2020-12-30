const Navigation = {
    namespaced: true,
    state : {
        drawer : false,
    },
    mutations:{
        setDrawer: state => state.drawer = !state.drawer
    },
    actions:{
        setDrawer(context){
            context.commit('setDrawer');
        }
    },
    getters:{
        drawer(state){
            return state.drawer;
        }
    }
}

export default Navigation;
