import { useState } from "react";

const initialShoppingListData = [
  {
    id: 1,
    title: "Pane",
    quantity: 3,
  },
  {
    id: 2,
    title: "Latte",
    quantity: 1,
  },
  {
    id: 3,
    title: "Vino",
    quantity: 10,
  },
];

const initialFormData = {
  title: "",
  quantity: 1,
  urgent: false,
};

function App() {
  const [shoppingList, setShoppingList] = useState(initialShoppingListData);

  const [formData, setFormData] = useState(initialFormData);

  const handleFormField = (value, fieldName) => {
    setFormData((currentState) => ({ ...currentState, [fieldName]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // pushare il nuovo prodotto nell'array
    const newProduct = {
      id: shoppingList[shoppingList.length - 1].id + 1,
      title: formData.title,
      quantity: formData.quantity,
    };
    setShoppingList((currentState) => [...currentState, newProduct]);
    // Reset dei campi
    setFormData(initialFormData);
  };

  const emptyList = () => {
    setShoppingList([]);
  };

  const handleDelete = (productId) => {
    setShoppingList((currentState) =>
      currentState.filter((product) => product.id !== productId)
    );
  };

  return (
    <div>
      <h1>Lista della spesa</h1>
      <ul>
        {shoppingList.map((product) => (
          <li key={product.id}>
            {product.title} <strong>{product.quantity}</strong>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDelete(product.id)}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
      <button onClick={emptyList}>Cancella lista</button>
      <hr />
      <h3>Aggiungi Prodotto</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Nome prodotto</label>
          <input
            id="title"
            type="text"
            value={formData.title}
            onChange={(e) => handleFormField(e.target.value, "title")}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantità</label>
          <input
            id="quantity"
            type="number"
            min={1}
            value={formData.quantity}
            onChange={(e) => handleFormField(e.target.value, "quantity")}
          />
        </div>
        <div>
          <label htmlFor="urgent">Urgente</label>
          <input
            type="checkbox"
            checked={formData.urgent}
            onChange={(e) => handleFormField(e.target.checked, "urgent")}
          />
        </div>
        <button type="submit">Invia</button>
      </form>
    </div>
  );
}

export default App;
