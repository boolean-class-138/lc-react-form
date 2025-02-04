import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    quantity: 0,
    available: false,
  });

  /**
   * Funzione che aggiorna il formData
   * @param {*} fieldName chiave dell'oggetto formData (title, quantity)
   * @param {*} value nuovo valore da impostare
   */
  const handleFormField = (fieldName, value) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [fieldName]: value,
    }));
  };

  /**
   * Funzione che aggiunge un nuovo elemento alla lista
   * @param {*} event l'evento submit
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    setList((currentList) => [...currentList, formData]);

    // Reset del form data
    setFormData({
      title: "",
      quantity: 0,
      available: false,
    });
  };

  return (
    <div>
      <h1>Lista</h1>

      <ul>
        {list.map((item) => (
          <li key={item.title}>
            {item.title} - {item.quantity} -{" "}
            {item.available ? "disponibile" : "non disponibile"}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Inserisci il titolo"
          value={formData.title}
          onChange={(event) => handleFormField("title", event.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Inserisci quantità"
          value={formData.quantity}
          onChange={(event) => handleFormField("quantity", event.target.value)}
        />
        <br />
        <input
          type="checkbox"
          value={formData.available}
          onChange={(event) =>
            handleFormField("available", event.target.checked)
          }
        />
        <button type="submit">Invia</button>
      </form>
    </div>
  );
}
