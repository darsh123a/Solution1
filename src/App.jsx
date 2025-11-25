import "./App.css";
import CardList from "./components/CardList";
import ExtensionHeader from "./components/ExtensionHeader";
import MainContainer from "./components/MainContainer";
import MainHeader from "./components/MainHeader";
import { ThemeProvider } from "./components/ThemeContext.jsx";
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext.jsx";
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`w-full h-full min-h-screen  pt-5 ${
          theme === "light" ? "bg-white" : "bg-gray-700"
        }`}
      >
        <MainContainer>
          <ExtensionHeader />
          <CardList />
        </MainContainer>
      </div>
      ]{" "}
    </>
  );
}

export default App;
