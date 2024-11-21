import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import "./Clients.css";

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState("");
  const [inputValue, setInputValue] = useState("");

  const fetchClients = async (inputValue) => {
    const response = await fetch(`/api/clients?query=${inputValue}`);
    const data = await response.json();
    return data.map((client) => ({ value: client.id, label: client.name }));
  };

  const handleClientChange = (client) => {
    setSelectedClient(client);
    if (client) {
      setInputValue(client.label);
    } else {
      setInputValue("");
    }
  };

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  const handleSaveClient = async () => {
    const clientToSave = inputValue;
    if (clientToSave) {
      await fetch('/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: clientToSave }),
      });
      setInputValue("");
      setSelectedClient("");
    }
  };

  return (
    <div className="clients-container">
      <h3 className="clients-title">Clients</h3>
      <AsyncSelect
        className="search-bar"
        loadOptions={fetchClients}
        onChange={handleClientChange}
        placeholder="Search or Add Client"
        inputValue={inputValue}
        onInputChange={handleInputChange}
        isClearable
      />
      <button onClick={handleSaveClient} className="save-button">Add Client</button>
    </div>
  );
};

export default Clients;