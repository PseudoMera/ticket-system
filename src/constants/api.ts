export const BASE_URL = process.env.REACT_APP_SERVER;

export const API = {
  register: `${BASE_URL}/user/signup`,
  login: `${BASE_URL}/user/signin`,
  getProfile: `${BASE_URL}/user/profile`,
  patchProfile: `${BASE_URL}/user/profile`,
  tickets: `${BASE_URL}/tickets`,
  getAllTickets: `${BASE_URL}/tickets/all`,
};
