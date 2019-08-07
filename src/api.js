import { adalApiFetch } from "./config/adalConfig";

const BASE_URL = "https://graph.windows.net/hanadkubathotmail.onmicrosoft.com";
const NODE_API_URL = "http://localhost:8000/api";

const options = {
  method: "GET",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("adal.idtoken")
  }
};

export const signedInUser = {
  getInfo: () =>
    adalApiFetch(
      fetch,
      `${BASE_URL}/me?api-version=1.6&$select=displayName,objectId,objectType,userType,thumbnailPhoto`,
      options
    ).then(res => res.json())
};

//headers for NON AUTH ROUTES
const headers = {
  Authorization: "Bearer " + localStorage.getItem("adal.idtoken"),
  "Content-Type": "application/json"
};

//error handler for fetch API requests
const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const suggestionsApi = {
  getAll: () =>
    fetch(`${NODE_API_URL}/suggestion/all`, { headers }).then(res =>
      res.json()
    ),

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
      .then(res => res.json()),

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
      .then(res => res.json()),

  deleteSuggestion: id =>
    fetch(`${NODE_API_URL}/suggestion/delete`, {
      method: "DELETE",
      headers,
      body: JSON.stringify({
        suggestionId: id
      })
    })
      .then(handleErrors)
      .then(res => res.json())
};
