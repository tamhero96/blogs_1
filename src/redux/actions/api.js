import axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com/'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    blogs(url = baseUrl+'posts/') {
        return {
            allBlogs: () => axios.get(url),
            idBlog: id => axios.get(url + id),         
        }
    }
}
