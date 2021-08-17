import { Grommet, Header } from "grommet";
import TodosList from "./components/TodosList";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <TodosList />
    </Grommet>
  );
}

export default App;
