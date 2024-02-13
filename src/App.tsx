import { FC, useState, useEffect, useLayoutEffect } from 'react';
import { Route, Link } from "react-router-dom";

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

import './style.css';

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



export const Apps: FC<{ name: string; username?: string }> = ({ name }) => {


  
  const [requestState, setRequestState] = useState();
  useLayoutEffect(() => {
    // getUsers();

    console.log('effect loaded')
  });


  return (
    <App key={"App"}>
      <Typography>
        <Typography.Title>Title</Typography.Title>
      </Typography>

    </App>
  );
};
