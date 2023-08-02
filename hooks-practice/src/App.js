import "./App.css";
import Counter from "./components/Counter";
import Posts from "./components/Posts";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Counter />
      </ThemeProvider>
      <ThemeProvider>
        <Posts />
      </ThemeProvider>
    </div>
  );
}

export default App;
