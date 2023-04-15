import { auth } from "../../firebase/firebase";
import { Header } from "../components/mainPage/Header";
import { TodoListContainer } from "../components/mainPage/TodoListContainer";

export const MainPage = () => {
  console.log(auth.currentUser);
  return (
    <div>
      <Header />
      <TodoListContainer />
    </div>
  );
};
