import FormCreate from "./components/FormCreate";
import Header from "./components/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./redux/usersSlice";
import UsersTable from "./components/UsersTable";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Header />
      <FormCreate />
      <UsersTable />
    </>
  );
}

export default App;
