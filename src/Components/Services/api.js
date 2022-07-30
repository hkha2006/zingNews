import axios from "axios"

const url = {
    baseUrl: "https://6299fb267b866a90ec4703c9.mockapi.io/zingnews",
    reactjs: "/newZing",
    reactjs2:"/Book"
}

const instance = axios.create({
    baseURL: url.baseUrl,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Accept": "application/json"
    }
})

const api = {
    url,
    instance,
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete: instance.delete
}

export default api;