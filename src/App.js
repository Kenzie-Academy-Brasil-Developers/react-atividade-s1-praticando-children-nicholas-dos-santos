import CenteredCard from "./components/CenteredCard.js";
import "./App.css";

function App() {
  const users = [
    { Dev: "Nicholas", Idade: 23 },
    { Dev: "Isabella", Idade: 21 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <CenteredCard>
          <p>{users[0].Dev}</p>
          <p>{users[0].Idade}</p>
        </CenteredCard>
        <CenteredCard>
          <p>{users[1].Dev}</p>
          <p>{users[1].Idade}</p>
        </CenteredCard>
      </header>
    </div>
  );
}

export default App;
