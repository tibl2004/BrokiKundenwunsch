import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Formular.scss'; // Importieren Sie die SCSS-Datei

const Formular = () => {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    telefonnummer: '',
    adresse: '',
    plz: '',
    ort: '',
    geschlecht: '',
    artikelname: '',
    menge: '',
    farbe: '',
    groesse: '',
    beschreibung: ''
  });

  useEffect(() => {
    // Daten aus dem LocalStorage abrufen
    const storedKontaktData = JSON.parse(localStorage.getItem('kontaktData'));
    if (storedKontaktData) {
      // Kontakt-Daten im State aktualisieren, wenn sie im LocalStorage vorhanden sind
      setFormData((prevData) => ({
        ...prevData,
        ...storedKontaktData
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Speichern der Kontakt Daten im LocalStorage
    localStorage.setItem('kontaktData', JSON.stringify(formData));
    console.log('Kontakt Daten gespeichert:', formData);

    try {
      // Daten an Backend senden
      const response = await axios.post('https://backendkunden.onrender.com/api/v1/kunden', formData);
      console.log('Daten erfolgreich an die Datenbank gesendet:', response.data.data);
      
      // Daten erfolgreich gesendet, Formular leeren
      setFormData({
        vorname: '',
        nachname: '',
        telefonnummer: '',
        adresse: '',
        plz: '',
        ort: '',
        geschlecht: '',
        artikelname: '',
        menge: '',
        farbe: '',
        groesse: '',
        beschreibung: ''
      });
      
      // Erfolgreich gesendete Daten aus dem LocalStorage entfernen
      localStorage.removeItem('kontaktData');
    } catch (error) {
      console.error('Fehler beim Senden der Daten an die Datenbank:', error);
    }
  };

  return (
    <form className="formular" onSubmit={handleSubmit}>
      <h2>Artikel</h2>
      <div className="form-group">
        <label>Artikelname:</label>
        <input
          type="text"
          name="artikelname"
          value={formData.artikelname}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Menge:</label>
        <input
          type="number"
          name="menge"
          value={formData.menge}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Farbe:</label>
        <input
          type="text"
          name="farbe"
          value={formData.farbe}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Größe:</label>
        <input
          type="text"
          name="groesse"
          value={formData.groesse}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Beschreibung:</label>
        <textarea
          name="beschreibung"
          value={formData.beschreibung}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <h2>Kontakt</h2>
      <div className="form-group">
        <label>Geschlecht:</label>
        <select
          name="geschlecht"
          value={formData.geschlecht}
          onChange={handleChange}
          required
        >
          <option value="">Bitte wählen</option>
          <option value="männlich">Männlich</option>
          <option value="weiblich">Weiblich</option>
        </select>
      </div>
      <div className="form-group">
        <label>Vorname:</label>
        <input
          type="text"
          name="vorname"
          value={formData.vorname}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Nachname:</label>
        <input
          type="text"
          name="nachname"
          value={formData.nachname}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Telefonnummer:</label>
        <input
          type="text"
          name="telefonnummer"
          value={formData.telefonnummer}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Adresse:</label>
        <input
          type="text"
          name="adresse"
          value={formData.adresse}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>PLZ:</label>
        <input
          type="text"
          name="plz"
          value={formData.plz}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Ort:</label>
        <input
          type="text"
          name="ort"
          value={formData.ort}
          onChange={handleChange}
          required
        />
      </div>
      
      
      <button type="submit" className="submit-button">Absenden</button>
    </form>
  );
};

export default Formular;
