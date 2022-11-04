import {
  USER_TOKEN,
  BASE_URL
} from "../utils/constants";


class Api {
  constructor(setting) {
    this._url = setting.baseUrl; //** this._address */
    this._headers = setting.headers;
  }

  handelResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
    }
    return res.json();
  }

  getUserInformation() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this.handelResponse(res));
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this.handelResponse(res));
  }

  editUserInformation({
    job,
    name
  }) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about: job,
      }),
    }).then((res) => this.handelResponse(res));
  }

  addNewCard({
    name,
    link
  }) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link
      }),
    }).then((res) => this.handelResponse(res));
  }

  deleteOwnCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this.handelResponse(res));
  }

  likeCard(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => this.handelResponse(res));
  }

  removeCardLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this.handelResponse(res));
  }

  changeAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then((res) => this.handelResponse(res));
  }
}

export const api = new Api({
  baseUrl: BASE_URL,
  headers: {
    Authorization: USER_TOKEN,
    "Content-Type": "application/json",
  },
});