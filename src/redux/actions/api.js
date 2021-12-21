import axios from "axios";

const baseUrl = 'http://localhost:4000/'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    blogs(url = baseUrl+'api/v1/blogs/') {
        return {
            allBlogs: () => axios.get(url),
            idBlog: id => axios.get(url + id),         
        }
    }
}
