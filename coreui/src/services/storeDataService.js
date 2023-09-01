import http from "../utils/http-common";

class TutorialDataService {
  getAll() {
    return http.get("/store");
  }

  get(id) {
    return http.get(`/store/${id}`);-
  }

  create(data) {
    return http.post("/store", data);
  }

  update(id, data) {
    return http.put(`/store/${id}`, data);
  }

  delete(id) {
    return http.delete(`/store/${id}`);
  }

  search(data) {
    return http.get(`/store?title=${title}`);
  }
}

export default new TutorialDataService();
