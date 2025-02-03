import { useState } from "react";

function App() {
  const [productName, setProductName] = useState("");
  const [shoppingList, setShoppingList] = useState(["Pane", "Latte", "Vino"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // pushare il nuovo prodotto nell'array
    // const newShoppingList = [...shoppingList, productName]; // Deep clone dell'array
    setShoppingList((currentState) => [...currentState, productName]);
    // svuotiamo il campo input
    setProductName("");
  };

  const emptyList = () => {
    setShoppingList([]);
  };

  const handleDelete = (productToDelete) => {
    setShoppingList((currentState) =>
      currentState.filter((product) => product !== productToDelete)
    );
  };

  return (
    <div>
      <h1>Lista della spesa</h1>
      <ul>
        {shoppingList.map((product, index) => (
          <li key={index}>
            {product} <button onClick={() => handleDelete(product)}>🗑️</button>
          </li>
        ))}
      </ul>
      <button onClick={emptyList}>Cancella lista</button>
      <hr />
      <h3>Aggiungi Prodotto</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <button type="submit">Invia</button>
      </form>
    </div>
  );
}

export default App;
