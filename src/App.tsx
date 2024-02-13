import { FC, useState, useEffect, useLayoutEffect } from 'react';

import './style.css';
import {
  App,
  ConfigProvider,
  Form,
  FormInstance,
  Select,
  Input,
  Button,
  Typography,
} from 'antd';

import axios from 'axios'

interface PSD {
   name: string;
   ip: string;
   mac: any;
}

// type Server = {
//   id: number;
//   name: string;
//   network: ServerNetwork;
// };

// type User = {
//   id: number;
//   email: string;
//   first_name: string;
// };

// type GetUsersResponse = {
//   data: User[];
// };

// const api = axios.create({
//   baseURL: 'https://ipsec.psk1-s.ru/',
//   headers: { accept: 'application/json' },
// });
async function getUsers() {
  return { users: 1 };
    try {
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get<GetUsersResponse>(
        'https://reqres.in/api/users',
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );
      console.log(JSON.stringify(data, null, 4));
      // 👇️ "response status is: 200"
      console.log('response status is: ', status);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
}


export const Apps: FC<{ name: string; username?: string }> = ({ name }) => {


  
  const [requestState, setRequestState] = useState();
  useLayoutEffect(() => {
    getUsers();
  });


  return (
    <App key={"App"}>
      <Typography>
        <Typography.Title>Title</Typography.Title>
      </Typography>

    </App>
  );
};
