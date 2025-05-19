import Home from "./src/screens/home";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar hidden={true} backgroundColor="#000" />
      <Home />
    </>
  );
}
