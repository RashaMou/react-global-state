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
              <li key={index} onClick={() => console.log("HALLO")}>
                {book}
              </li>
            );
          })}
        {completeList &&
          completed.map((book, index) => {
            return (
              <li key={index} onClick={() => console.log("HALLO")}>
                {book}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
