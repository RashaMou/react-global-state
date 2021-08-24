import { AppStateProvider } from "./AppContext";
import "./App.css";
import BookList from "./components/BookList";
import Header from "./components/Header";

function App() {
  return (
    <AppStateProvider>
      <div className="App">
        <Header />
        <div className="lists">
          <BookList />
          <BookList completeList />
        </div>
      </div>
    </AppStateProvider>
  );
}

export default App;
