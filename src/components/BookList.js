import { useAppState } from "../AppContext";

export default function BookList({ completeList }) {
  let [{ toRead, completed }, dispatch] = useAppState();
  return (
    <div>
      <h1>{completeList ? `Completed` : `To Read`}</h1>
      <ul>
        {!completeList &&
          toRead.map((book, index) => {
            return (
              <li
                key={index}
                onClick={() => dispatch({ type: "READ_BOOK", book: book })}
              >
                {book}
              </li>
            );
          })}
        {completeList &&
          completed.map((book, index) => {
            return (
              <li
                key={index}
                onClick={() => dispatch({ type: "UNDO_READ", book: book })}
              >
                {book}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
