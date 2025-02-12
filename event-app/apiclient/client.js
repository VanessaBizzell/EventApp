import axios from "axios";

const url = "https://eventapp-6d95.onrender.com/events/";



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
      console.log(error);
      // if (error.response.status === 403) {
      //   //clears the local storage
      //   this.logoutHandler();
      //   return Promise.reject();
      // } else {
      //   throw error;
      // }
    });
  }

  getEvents() {
    return this.authenticatedCall("get", url);
  }

  addEvent(data) {
    return this.authenticatedCall("post", `${url}create`, {
      eventName: data.eventName,
      location: data.location,
      date: data.date,
      time: data.time,
      summary: data.summary,
    });
  }

  deleteEventByID(eventID) {
    return this.authenticatedCall("delete", `${url}${eventID}`);
  }

  async login(username, password) {
    return await axios({
      method: "post",
      url: `${url}auth`,
      data: { username, password },
    });
  }
}
