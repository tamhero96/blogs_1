import axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com/todos/'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    postBlog(url = baseUrl) {
        console.log(axios.get(url));
        return {
            fetchAll: () => axios.get(url)            
        }
    }
}
