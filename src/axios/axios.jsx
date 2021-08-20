import axios from "axios";
import { message as Message } from 'antd';
import { CommonError, UnLoginError } from "@/common/biz/ErrorCode";

//设置跨域安全校验
let needCredentials = true;
if (__IS_MOCK) {
  needCredentials = false;
}
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
  const res = data.data
  if (res.code === 0) {
    return res;
  } else {
    if (res.code === UnLoginError) {
      Message.error({message: '您已经退出登录!'});
      
      return Promise.reject(res);
    }
    if (CommonError.indexOf(res.code || "") >= 0) {
      Message.error({message: '通用错误!'});
      
      return Promise.reject(res);
    }
    switch (res.code) {
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
        Message.error(res.message)
        break;
    }
    return res;
  }
});

let host = "";

//判断host
// if (
//   document.querySelector(".J-dbkHost") &&
//   document.querySelector(".J-dbkHost").value
// ) {
//   host = document.querySelector(".J-dbkHost").value;
// }

if (__IS_MOCK) {
  host = "http://mock.ued.vemic.com/p/60bdfb20faabc10c57ee9e6a";
}

export { axios, host };
