// TODO: ts封装axios

import axios from "axios";
import { message as Message } from 'antd';
import { CommonError, UnLoginError } from "@/common/biz/ErrorCode";

//设置跨域安全校验
let needCredentials = true;

axios.defaults.withCredentials = needCredentials;

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    Message.error({message: '请求失败!'});
    return Promise.resolve(err);
  }
);
axios.interceptors.response.use((data) => {
  console.log(data)
  const res = data
  if (res.status === 200) {
    return res;
  } else {
    if (res.status === UnLoginError) {
      Message.error({message: '您已经退出登录!'});
      
      return Promise.reject(res);
    }
    if (CommonError.indexOf(res.status || "") >= 0) {
      Message.error({message: '通用错误!'});
      
      return Promise.reject(res);
    }
    switch (res.status) {
      case 1007:
        
        break;
      case 1008:
        
        break;
      case 1009:
        
        break;
      case 1997:
       
        break;
      case 1998:
        
      default:
        Message.error(res.statusText)
        break;
    }
    return res;
  }
});

let host = "";

export { axios, host };
