import { useDispatch, useSelector } from "react-redux";
import {dropUser, getUsers} from "../redux/usersSlice";
import { Button, Table } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const UsersTable = () => {
  const datasource = useSelector(getUsers);
  const dispatch = useDispatch();

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
      render: (data, index) => {
        return (
          <ButtonGroup>
            <Button icon={<EditOutlined />}>Edit</Button>
            <Button
              icon={<DeleteOutlined />}
              onClick={() => dispatch(dropUser({ id: data.id, index: index }))}
            >
              Delete
            </Button>
          </ButtonGroup>
        );
      },
    },
  ];

  return <Table dataSource={datasource} columns={columns} />;
};

export default UsersTable;
