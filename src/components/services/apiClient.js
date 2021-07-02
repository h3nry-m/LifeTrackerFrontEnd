import axios from "axios";

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
    this.tokenName = "life_tracker_token";
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem(this.tokenName, token);
  }

  async request({ endpoint, method = "GET", data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (error) {
      console.error({ errorResponse: error.response });
      const message = error?.response?.data?.error?.message;
      return { data: null, error: message || String(error) };
    }
  }

  //EXERCISE STUFF-----------------------------------
  async listUserExercises(user) {
    return await this.request({
      endpoint: `exercise`,
      method: `GET`,
      data: user,
    });
  }

  async activityExercises(user) {
    return await this.request({
      endpoint: `exercise/activity`,
      method: `GET`,
      data: user,
    });
  }

  async createExercise(info) {
    return await this.request({
      endpoint: `exercise/create`,
      method: `POST`,
      data: info,
    });
  }

  //FOOD STUFF-----------------------------------
  async listUserFood(user) {
    return await this.request({
      endpoint: `food`,
      method: `GET`,
      data: user,
    });
  }

  async activityFood(user) {
    return await this.request({
      endpoint: `food/activity`,
      method: `GET`,
      data: user,
    });
  }

  async createFood(info) {
    return await this.request({
      endpoint: `food/create`,
      method: `POST`,
      data: info,
    });
  }

  // LOGIN STUFF-----------------------------------
  //helps with keeping the token persistent
  async fetchUserFromToken() {
    return await this.request({ endpoint: `auth/me`, method: `GET` });
  }

  async loginUser(credentials) {
    return await this.request({
      endpoint: `auth/login`,
      method: `POST`,
      data: credentials,
    });
  }

  async signupUser(credentials) {
    return await this.request({
      endpoint: `auth/register`,
      method: `POST`,
      data: credentials,
    });
  }

  async logoutUser() {
    this.setToken(null);
    localStorage.setItem(this.tokenName, "");
  }
}

export default new ApiClient(
  process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001"
);
