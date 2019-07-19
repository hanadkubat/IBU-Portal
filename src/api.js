import { adalApiFetch } from "./config/adalConfig";

const BASE_URL = "https://graph.windows.net/hanadkubathotmail.onmicrosoft.com";
const options = {
  method: "GET",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("adal.idtoken")
  }
};

export const signedInUser = {
  getInfo: () => adalApiFetch(
    fetch,
    `${BASE_URL}/me?api-version=1.6&$select=displayName,objectId,objectType,userType,thumbnailPhoto`,
    options
  ).then(res => res.json())
};
