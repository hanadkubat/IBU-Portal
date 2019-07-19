import { adalApiFetch } from "./adalConfig";

/*const headers = new Headers();
const bearer = "Bearer " + localStorage.getItem('adal.idtoken');
headers.append("Authorization", bearer);*/

const BASE_URL = "https://graph.windows.net/hanadkubathotmail.onmicrosoft.com";
const options = {
  method: "GET",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("adal.idtoken")
  }
};

//kenan@hanadkubathotmail.onmicrosoft.com
//Gobo3786
//console.log(localStorage.getItem('adal.idtoken'))
//https://docs.microsoft.com/en-us/previous-versions/azure/ad/graph/howto/azure-ad-graph-api-supported-queries-filters-and-paging-options#CommonQueries

export const signedInUser = {
  getInfo: () => adalApiFetch(
    fetch,
    `${BASE_URL}/me?api-version=1.6&$select=displayName,objectId,objectType,userType,thumbnailPhoto`,
    options
  ).then(res => res.json())
};
