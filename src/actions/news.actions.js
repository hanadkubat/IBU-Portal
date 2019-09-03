import { newsApi } from '../api';

export const getAllNews = () => (dispatch) => {
    dispatch(request())
    newsApi.getAll()
    .then(data => {
        dispatch(success(data))
    })
    .catch(error => {
        console.log(error)
        dispatch(failure(error))
    })

    function request() { return { type: "GET_NEWS_REQUEST" } }
    function success(news) { return { type: "GET_NEWS_SUCCESS", news } }
    function failure(error) { return { type: "GET_NEWS_FAILURE", error } }
}

export const deleteNews = (id) => (dispatch) => {
    dispatch(request())
    newsApi.deleteNews(id)
    .then(data => {
        dispatch(success(id))
    })
    .catch(error => {
        console.log(error)
        dispatch(failure(error))
    })

    function request() { return { type: "DELETE_NEWS_REQUEST" } }
    function success(id) { return { type: "DELETE_NEWS_SUCCESS", newsId: id } }
    function failure(error) { return { type: "DELETE_NEWS_FAILURE", error } }
}

export const addNews = (formData) => (dispatch) => {
    dispatch(request())
    newsApi.addNews(formData)
    .then(data => {
        dispatch(success(data))
    })
    .catch(error => {
        console.log(error)
        dispatch(failure(error))
    })
    
    function request() { return { type: "ADD_NEWS_REQUEST" } }
    function success(news) { return { type: "ADD_NEWS_SUCCESS", news } }
    function failure(error) { return { type: "ADD_NEWS_FAILURE", error } }
}