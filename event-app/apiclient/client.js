import axios from "axios";
//url changed it 3001
const url = "http://localhost:3000/events/";

export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }

  async authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        //grab the token from local storage and send it with the request
        authorization: this.tokenProvider(),
      },
      data,
    }).catch((error) => {
      if (error.response.status === 403) {
        //clears the local storage
        this.logoutHandler();
        return Promise.reject();
      } else {
        throw error;
      }
    });
  }

  getEvents() {
    return this.authenticatedCall("get", url);
  }

  addEvent(data) {
    return this.authenticatedCall("post", `${url}create`, {
      title: data.title,
      completed: data.completed
    });
  }

  async login(username, password) {
    return await axios({
      method: "post",
      url: `${url}auth`,
      data: { username, password },
    });
  }
}
