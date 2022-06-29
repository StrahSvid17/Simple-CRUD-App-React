import {useSelector} from "react-redux";
import {getUsers} from "../redux/usersSlice";
import {Table} from "antd";

const UsersTable = () => {
  const datasource = useSelector(getUsers);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Actions",
      key: "action",
      render: () => {
      },
    },
  ];

  return <Table dataSource={datasource} columns={columns}/>;
};

export default UsersTable;