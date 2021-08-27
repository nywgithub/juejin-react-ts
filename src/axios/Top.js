import { axios, host } from "./axios";

export const getList = () => {
  return axios({
    url: `${host}/getinfo`,
    method: 'get'
  })
}