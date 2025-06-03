// src/MyComponent.jsx
import React, { useState, useEffect } from "react";

const MyComponent = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const data = await res.json();
        setUser(data);
      } catch (e) {
        console.error("Error al obtener datos", e);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <p>Cargando...</p>;
  if (!user) return <p>No se encontró usuario</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Name edited: {name}</p>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default MyComponent;
