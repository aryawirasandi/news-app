/** @const global | @type {Object} use to return global data, function for all component or pages */

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