// import styles from "../src/components/Product/product.module.css";
import styles from "@/app/components/Product/product.module.css";
import StateReducer from "./context/StateReducers";
import { initialStates } from "./context/StateReducers";
import { StateProvider } from "./context/StateContext";
import HomePage from "./home/page";
import NavBar from "./components/navigation/NavBar";
type State = {
  _id: string;
  title: string;
  client: string;
  images: Array<string>;
  gitHubLink: string;
  deploymentLink: string;
};
type Action = {
  type: string;
  payload: any;
};

type Reducer = (state: State[], action: Action) => State[];
function App() {
  return (
    <StateProvider
      reducer={StateReducer as unknown as Reducer}
      initialState={initialStates}
    >
      <HomePage />
    </StateProvider>
  );
}

export default App;
