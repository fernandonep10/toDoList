import Home from "./src/screens/home";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar hidden={false} backgroundColor={"#131016"} />
      <Home />
    </>
  );
}
