import { adalApiFetch } from "./config/adalConfig";
import { apiUrl } from './config/apiConfig';
import { toast } from "react-toastify";


const BASE_URL = "https://graph.windows.net/hanadkubathotmail.onmicrosoft.com";
const NODE_API_URL = apiUrl + "/api";
const NODE_STATIC_URL = apiUrl + "/uploads";

export const signedInUser = {
  options: {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adal.idtoken")
    }
  },
  getInfo: () =>
    adalApiFetch(
      fetch,
      `${BASE_URL}/me?api-version=1.6&$select=displayName,objectId,objectType,userType,thumbnailPhoto`,
      signedInUser.options
    ).then(res => res.json()),

  getUserPhoto: (userId) =>
    adalApiFetch(fetch, `https://graph.microsoft.com/v1.0/me/photo/$value`, signedInUser.options).then(res =>
      res.json()
    )
};

//headers for NON AUTH ROUTES
const headers = {
  Authorization: "Bearer " + localStorage.getItem("adal.idtoken"),
  "Content-Type": "application/json"
};

//error handler for fetch API requests
const handleErrors = response => {
  if (!response.ok) {
    toast.error('Error occured!')
    throw Error(response.statusText);
  }
  return response;
};

export const staticFiles = {
  getImage: filename =>
    fetch(`${NODE_STATIC_URL}/${filename}`, {
      headers: { Authorization: headers.Authorization },
    })
      .then(handleErrors)
      .then(res => res.blob())
};

export const suggestionsApi = {
  getAll: () =>
    fetch(`${NODE_API_URL}/suggestion/all`, { headers })
      .then(handleErrors)
      .then(res => res.json()),

  getOne: suggestionId =>
    fetch(`${NODE_API_URL}/suggestion/one/${suggestionId}`, { headers })
      .then(handleErrors)
      .then(res => res.json()),

  addSuggestion: (title, content) =>
    fetch(`${NODE_API_URL}/suggestion/add`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        title,
        content
      })
    })
      .then(handleErrors)
      .then(res => {
        toast.success('Suggestion added successfuly, waiting for approval');
        return res.json()
      }),

  approveSuggestion: id =>
    fetch(`${NODE_API_URL}/suggestion/approve`, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        suggestionId: id,
        approved: true
      })
    })
      .then(handleErrors)
      .then(res => {
        toast.success('Suggestion approved successfuly');
        return res.json()
      }),

  updateSuggestion: (id, updateData) => 
    fetch(`${NODE_API_URL}/suggestion/update`, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        suggestionId: id,
        updateData
      })
    })
      .then(handleErrors)
      .then(res => {
        toast.success('Suggestion updated successfuly');
        return res.json()
      }),

  deleteSuggestion: id =>
    fetch(`${NODE_API_URL}/suggestion/delete`, {
      method: "DELETE",
      headers,
      body: JSON.stringify({
        suggestionId: id
      })
    })
      .then(handleErrors)
      .then(res => {
        toast.success('Suggestion deleted successfuly');
        return res.json()
      }),
};

export const commentsApi = {
  addComment: (content, suggestionId) =>
    fetch(`${NODE_API_URL}/comment/add`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        content,
        suggestionId
      })
    })
      .then(handleErrors)
      .then(res => {
        toast.success('Added comment successfuly');
        return res.json(); 
      }),

  getAll: () =>
    fetch(`${NODE_API_URL}/comment/all`, { headers })
      .then(handleErrors)
      .then(res => res.json()),

  deleteComment: id =>
    fetch(`${NODE_API_URL}/comment/delete`, {
      method: "DELETE",
      headers,
      body: JSON.stringify({
        commentId: id
      })
    })
      .then(handleErrors)
      .then(res => {
        toast.success('Comment deleted successfuly');
        return res.json(); 
      }),

  updateOne: (id, newContent) =>
    fetch(`${NODE_API_URL}/comment/updateOne`, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        content: newContent,
        commentId: id
      })
    })
      .then(handleErrors)
      .then(res => {
        toast.success('Comment updated successfuly');
        return res.json(); 
      }),
};

export const newsApi = {
  addNews: formData =>
    fetch(`${NODE_API_URL}/news/add`, {
      method: "POST",
      headers: { Authorization: headers.Authorization },
      body: formData
    })
      .then(handleErrors)
      .then(res => {
        toast.success('News article added successfuly');
        return res.json()
      }),

  getAll: () =>
    fetch(`${NODE_API_URL}/news/all`, { headers })
      .then(handleErrors)
      .then(res => res.json()),

  getOne: newsId =>
    fetch(`${NODE_API_URL}/news/article/${newsId}`, { headers })
      .then(handleErrors)
      .then(res => res.json()),

  deleteNews: id =>
    fetch(`${NODE_API_URL}/news/delete`, {
      method: "DELETE",
      headers,
      body: JSON.stringify({
        newsId: id
      })
    })
      .then(handleErrors)
      .then(res => {
        toast.success('News article deleted successfuly');
        return res.json()
      }),
};
