import { FC, useEffect, useLayoutEffect } from 'react';

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

import { Bash } from 'node-bash';

// interface ServerNetwork {
//   ip: string;
// }

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
  //   try {
  //     // 👇️ const data: GetUsersResponse
  //     const { data, status } = await axios.get<GetUsersResponse>(
  //       'https://reqres.in/api/users',
  //       {
  //         headers: {
  //           Accept: 'application/json',
  //         },
  //       }
  //     );
  //     console.log(JSON.stringify(data, null, 4));
  //     // 👇️ "response status is: 200"
  //     console.log('response status is: ', status);
  //     return data;
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       console.log('error message: ', error.message);
  //       return error.message;
  //     } else {
  //       console.log('unexpected error: ', error);
  //       return 'An unexpected error occurred';
  //     }
  //   }
}
console.log(Bash);

type RequestState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: any }
  | { status: 'error'; error: Error };

const [requestState, setRequestState] = useState<RequestState>({
  status: 'idle',
});

export const Apps: FC<{ name: string; username?: string }> = ({ name }) => {
  useLayoutEffect(() => {
    getUsers();
  });
  return (
    <App>
      <Typography>
        <Typography.Title>T</Typography.Title>
      </Typography>
      <Form>
        <Form.Item name={'users'}>
          <Select />
        </Form.Item>
      </Form>
    </App>
  );
};
