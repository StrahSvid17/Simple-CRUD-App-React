import FormCreate from "./components/FormCreate";
import Header from "./components/Header";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchUsers} from "./redux/usersSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <>
      <Header />
      <FormCreate />
    </>
  );
}

export default App;
