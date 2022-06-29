import { useDispatch, useSelector } from "react-redux";
import { dropUser, getUsers } from "../redux/usersSlice";
import { Button, Input, Modal, Table } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useState } from "react";

const UsersTable = () => {
  const datasource = useSelector(getUsers);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [modalData, setModalData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const onEdit = (username, email, address) => {
    setUsername(username);
    setEmail(email);
    setAddress(address);
    setModalData([username, email, address]);
    setModalVisible(true);
  };

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
      render: (record, index) => {
        return (
          <ButtonGroup>
            <Button
              icon={<EditOutlined />}
              onClick={() =>
                onEdit(record.username, record.email, record.address)
              }
            >
              Edit
            </Button>
            <Button
              icon={<DeleteOutlined />}
              onClick={() =>
                dispatch(dropUser({ id: record.id, index: index }))
              }
            >
              Delete
            </Button>
          </ButtonGroup>
        );
      },
    },
  ];

  return (
    <>
      <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        okText={"Save changes"}
      >
        <Input.Group>
          <Input
            placeholder={"Username"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder={"Address"}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Input.Group>
      </Modal>
      <Table dataSource={datasource} columns={columns} />
    </>
  );
};

export default UsersTable;
