import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';
import * as jwtDecode from 'jwt-decode';
 
export const adalConfig = {
  // tenant: '1b59fec5-1d4e-4835-8dc9-41f3e5a6ae9d',
  // clientId: '7c60b2af-e970-4c05-8278-67564929e213',
  tenant: '93838cca-6334-421f-83b8-8727c93326e3',
  clientId: '0bd686c6-1d88-4ae5-9112-055adc3e6874',
  endpoints: {
    // api: '00000002-0000-0000-c000-000000000000',
    api: '00000003-0000-0000-c000-000000000000',
  },
  //'http://localhost:3000'
  postLogoutRedirectUri: 'https://ibu-it-portal.herokuapp.com',
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

export const checkIfPowerUser = (userIdToVerify) => {
  const decoded = jwtDecode(localStorage.getItem('adal.idtoken'));
  if(decoded.email && decoded.email.indexOf('@ibu.edu.ba') !== -1) return true;
  return false;
}

