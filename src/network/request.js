import axios from 'axios'

export function request(config) {
  // 两种方法基本相同
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    method: "get",
    timeout: 5000
  });

  // axios的拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config // 拦截后放行请求的信息
  }, error => {
    console.log(error);
  });
  // 响应拦截
  instance.interceptors.response.use(config => {
    // console.log(config);
    return config.data // 拦截后放行请求的信息
  }, error => {
    console.log(error);
  });

  // 发送网络请求
  return instance(config)
}