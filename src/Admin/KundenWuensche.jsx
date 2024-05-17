import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Kundenwunsch.scss'; // Importieren Sie die SCSS-Datei

const Kundenwunsch = () => {
  const [kundenwunsch, setKundenwunsch] = useState(null);

  useEffect(() => {
    const fetchKundenwunsch = async () => {
      try {
        const response = await axios.get('https://backendkunden.onrender.com/api/v1/kunden');
        setKundenwunsch(response.data.data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten vom Backend:', error);
      }
    };

    fetchKundenwunsch();
  }, []);

  if (!kundenwunsch) {
    return <div className="kundenwunsch">Lade Kundenwunsch...</div>;
  }

  return (
    <div className="kundenwunsch">
      {kundenwunsch.map((kunde, index) => (
        <Link to={`/kundenwuensche/${kunde.id}`} key={index} className="kundenwunsch-box">
          <h2>Kundenwunsch {index + 1}</h2>
          <p className="artikelname">{kunde.artikelname}</p>
          <p className="name">{kunde.vorname} {kunde.nachname}</p>
        </Link>
      ))}
    </div>
  );
};

export default Kundenwunsch;
