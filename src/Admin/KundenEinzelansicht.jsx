import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './KundenEinzelansicht.scss'; // Importieren Sie die SCSS-Datei

const KundenEinzelansicht = () => {
  const { id } = useParams();
  const [kunde, setKunde] = useState(null);

  useEffect(() => {
    const fetchKundenwunsch = async () => {
      try {
        const response = await axios.get(`https://backendkunden.onrender.com/api/v1/kunden/${id}`);
        setKunde(response.data.data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten vom Backend:', error);
      }
    };

    fetchKundenwunsch();
  }, [id]);

  if (!kunde) {
    return <div className="kundenwunsch">Lade Kundenwunsch...</div>;
  }

  return (
    <div className="kundenwunsch">
      <div className="kundenwunsch-container">
        <h2>Kundenwunsch Detailansicht</h2>
        <p>Vorname: {kunde.vorname}</p>
        <p>Nachname: {kunde.nachname}</p>
        <p>Telefonnummer: {kunde.telefonnummer}</p>
        <p>Adresse: {kunde.adresse}</p>
        <p>PLZ: {kunde.plz}</p>
        <p>Ort: {kunde.ort}</p>
        <p>Geschlecht: {kunde.geschlecht}</p>
        <h3>Artikel</h3>
        <div className="artikel-details">
          <p>Artikelname: {kunde.artikelname}</p>
          <p>Menge: {kunde.menge}</p>
          <p>Farbe: {kunde.farbe}</p>
          <p>Größe: {kunde.groesse}</p>
          <p>Beschreibung: {kunde.beschreibung}</p>
        </div>
      </div>
    </div>
  );
};

export default KundenEinzelansicht;
