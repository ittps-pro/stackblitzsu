import axios from 'axios'
// const api = axios.create({
//   baseURL: 'https://ipsec.psk1-s.ru/',
//   headers: { accept: 'application/json' },
// });


export default interface RequestData {
    id?: any | null,
    title: string,
    description: string,
    published?: boolean,
  }