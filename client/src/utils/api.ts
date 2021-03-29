import axios from "axios";

class API {

    axios;

    constructor() {

        this.axios = axios.create();

    }

    /**
     * @param {String} name 
     * @param {String} value 
     */
    setHeader( name: string, value:any ) {

        if( value )

            this.axios.defaults.headers.common[name] = value;

        else

            delete this.axios.defaults.headers.common[name];

    }

    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.password
     * 
     * @returns {Promise}
     */
    register( userData:any ) {

        return this.axios.post("/api/register", userData);

    }


    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.password
     * 
     * @returns {Promise}
     */
    login( userData:any ) {

        return this.axios.post("/api/login", userData);

    }

    authenticated() {

        return this.axios.post("/api/authenticated");

    }

    getAllArtByUser(id:string) {
        return this.axios("/api/cruddodge/artbyuser/" + id);
    }

    getUserById(id:string) {
        return this.axios("/api/users/"+ id);
    }

    getAllArt(){
        // this function is effectively async because it returns a promise
        return this.axios.get("/api/art");
    }

    postArt(artLocation: string, imagePath: string, title: string, description: string, category: string, size: string, price: string, user_id: string) {

        return this.axios.post("/api/art",
        {
            user: user_id,
            name: title,
            description: description,
            category: category,
            size: size,
            price: price,
            location: artLocation,
            imagePath: imagePath
        });
    }

}

export default new API();