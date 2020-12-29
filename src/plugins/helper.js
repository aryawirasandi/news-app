const global = {
    methods : {
        getImage(url){
            if(url === null){
                return "https://via.placeholder.com/200"
            }else{
                return url;
            }
        }
    }
}

export default global;