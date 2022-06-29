import {useSelector} from "react-redux";
import {getUsers} from "../redux/usersSlice";
import {Button, Table} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

const UsersTable = () => {
  const datasource = useSelector(getUsers);

  const columns = [
    {
      align: "center",
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      align: "center",
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      align: "center",
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      align: "center",
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      align: "center",
      title: "Actions",
      key: "action",
      render: () => {
      },
    },
  ];

  return <Table dataSource={datasource} columns={columns}/>;
};

export default UsersTable;