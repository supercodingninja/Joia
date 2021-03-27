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

    async fake_getAllArt(){
        return {data: [
            {
                name: "something",
                description: "blah, blah, blah",
                category: "dum",
                size: "big",
                price: "$1,000",
                location: "somewhere",
                date: Date.now(),
                imagepath: "https://ruinmyweek.com/wp-content/uploads/2016/05/really-funny-memes-y-u-no-guy-delicious-food.jpg"
            },
            {
                name: "something else",
                description: "meh...",
                category: "dum2",
                size: "big2",
                price: "$1,001",
                location: "somewhere else",
                date: Date.now(),
                imagepath: "https://i.pinimg.com/originals/10/e3/56/10e356d780f21a96292e69865fbc64b9.jpg"
            }
        ]};
    }

    getAllArt(){
        // this function is effectively async because it returns a promise
        return this.axios.get("/api/art");
    }

    postArt(artLocation: string, imagePath: string, title: string, description: string, type: string, category: string, size: string, price: string, user_id: string) {

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