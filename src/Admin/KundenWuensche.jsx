import React from 'react';

function KundenwunschAnzeige({ kundenwunsch }) {
  const {
    artikel,
    marke,
    maxPreis,
    vorname,
    nachname,
    adresse,
    plz,
    ort,
    anrede,
    mobil,
    bildLink
  } = kundenwunsch;

  return (
    <div className="kundenwunsch-anzeige">
      <h2>Kundenwunsch</h2>
      <p><strong>Artikelwunsch:</strong> {artikel}</p>
      <p><strong>Marke:</strong> {marke}</p>
      <p><strong>Max. Preis:</strong> {maxPreis}</p>
      <p><strong>Vorname:</strong> {vorname}</p>
      <p><strong>Nachname:</strong> {nachname}</p>
      <p><strong>Adresse:</strong> {adresse}</p>
      <p><strong>PLZ:</strong> {plz}</p>
      <p><strong>Ort:</strong> {ort}</p>
      <p><strong>Anrede:</strong> {anrede}</p>
      <p><strong>Mobil:</strong> {mobil}</p>
      {bildLink && <img src={bildLink} alt="Bild" />} {/* Wenn ein Bild vorhanden ist, zeige es an */}
    </div>
  );
}

export default KundenwunschAnzeige;
