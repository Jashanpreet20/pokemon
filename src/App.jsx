import { ThemeProvider } from "./components/Context/ThemeProvider";
import Section from "./components/Section";

function App() {
  return (
    <>
      <ThemeProvider>
        <Section />
      </ThemeProvider>
    </>
  );
}

export default App;
