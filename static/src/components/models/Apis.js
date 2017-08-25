import Ajax from '../ajax';

class Apis {
  store = {};

  async get(id) {
    if (this.store[id]) {
      return this.store[id];
    } else {
      let api = (await Ajax.get('/apis/' + id)).data;
      return this.store[id] = api;
    }
  }
}

export default new Apis();