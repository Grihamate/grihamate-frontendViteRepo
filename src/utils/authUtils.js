// get token from the local storage
export const getToken = () => {
  return localStorage.getItem("token");
};
// fetch user details
export const getUser=()=>{
    return localStorage.getItem('user')
}