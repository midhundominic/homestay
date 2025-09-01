// Save token
export const setToken = (token: string) => {
    localStorage.setItem("admin_token", token);
  };
  
  // Get token
  export const getToken = () => {
    return localStorage.getItem("admin_token");
  };
  
  // Remove token
  export const removeToken = () => {
    localStorage.removeItem("admin_token");
  };
  