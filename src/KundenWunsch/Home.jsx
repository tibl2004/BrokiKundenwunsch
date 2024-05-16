import React from 'react';
import './Home.scss'; // Import SCSS file

const Home = () => {
  const handleButtonClick = () => {
    window.location.href = '/formular'; // Assuming /artikel-wunsch is the route for the ArtikelWunschFormular
  };

  return (
    <div className="home-container">
      <h1>Willkommen beim Berner Broki!</h1>
      <p>Wir freuen uns, Sie bei uns begrüßen zu dürfen.</p>
      <p>Hier können Sie Ihre Artikelwünsche für das Berner Broki angeben.</p>
      <button onClick={handleButtonClick} className="wish-button">Artikelwunsch angeben</button>
    </div>
  );
};

export default Home;
