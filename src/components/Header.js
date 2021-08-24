import { useAppState } from "../AppContext";

function Header() {
  let [{ completed, toRead }] = useAppState();
  return (
    <header className="App-header">
      Reading Challenge
      <div>
        We read {completed.length} {completed.length === 1 ? `book` : `books`}{" "}
        out of {toRead.length}
      </div>
    </header>
  );
}

export default Header;
