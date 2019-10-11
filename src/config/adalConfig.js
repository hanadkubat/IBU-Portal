import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';
import * as jwtDecode from 'jwt-decode';
 
export const adalConfig = {
  tenant: '1b59fec5-1d4e-4835-8dc9-41f3e5a6ae9d',
  clientId: '7c60b2af-e970-4c05-8278-67564929e213',
  endpoints: {
    api: '00000002-0000-0000-c000-000000000000',
  },
  postLogoutRedirectUri: 'http://localhost:3000',
  cacheLocation: 'localStorage',
};
 
export const authContext = new AuthenticationContext(adalConfig);
 
export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);
 
export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);

export const checkIfCurrentUser = (userIdToVerify) => {
  const decoded = jwtDecode(localStorage.getItem('adal.idtoken'));
  if(userIdToVerify === decoded.oid) return true;
  return false;

}