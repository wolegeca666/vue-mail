import {request} from "./request";

export default {
  getMultidata() {
    return request({
      url: '/home/multidata'
    });
  }
}