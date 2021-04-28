import { BASE_URL_BOOK_API } from './const';

class BookApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  getBooks(keyword) {
    return fetch(`${this.baseUrl}?q=${keyword}`, {
      headers: this.headers,
    }).then((res) => res.json());
  }
}

const bookApi = new BookApi({
  baseUrl: BASE_URL_BOOK_API,
});

export default bookApi;
