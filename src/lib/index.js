export function objToQueryString(obj) {
    const keyValuePairs = [];
    if(obj){
        Object.keys(obj).map((key) =>
        keyValuePairs.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
      )
    );
    }
    return keyValuePairs.join("&");
  }

  const authFetch = (url, method, data) => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    if (localStorage.getItem("token")) {
     
      headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    }
    if (data) {
      return fetch(url, {
        method,
        body: JSON.stringify(data),
        headers,
      });
    }
    return fetch(url, {
      method,
      headers,
    });
  };
  
  
  export const postData = (url, data) => authFetch(url, "POST", data);
  
  export const getData = (url, data) => {
    if (data) {
      url = `${url}?${objToQueryString(data)}`;
    }
    return authFetch(url, "GET", null);
  };
  
  export const putData = (url, data) => authFetch(url, "PUT", data);