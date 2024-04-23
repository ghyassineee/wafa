import React, { useState } from 'react';
import '../assets/css/DevisForm.css';

function DevisPage() {
  // State for form inputs, including new fields
  const [formState, setFormState] = useState({
    nom: '',
    prenom: '',
    birthdate: '',
    adresse: '',
    email: '',
    phone: '',
    maladieAllergie: '',
    medicaments: '',
    message: '',
    radioPanoramique: null,
    photoClinique: null,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormState((prevState) => ({
        ...prevState,
        [name]: files[0], // Only taking the first file for each file input
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually handle the form submission, such as sending the formState to your server
    console.log(formState);
    // Reset form or show a success message
  };

  return (
    <main>
  <section className="well6">
  <div className="container">
    <div className="row">
      <div className="grid_12">
        <h5>Demandez votre devis gratuitement !</h5>
        <form id="contact-form" className='contact-form mt1' onSubmit={handleSubmit}>
          <fieldset>
            <div className="input-wrap">
              <label className="form-label">
                Nom:
                <input className="unique-input-field" type="text" name="nom" placeholder="Nom*" value={formState.nom} onChange={handleChange} />
              </label>
              
              <label className="form-label">
                Prénom:
                <input className="unique-input-field" type="text" name="prenom" placeholder="Prénom*" value={formState.prenom} onChange={handleChange} />
              </label>
              
              <label className="form-label">
                Date de naissance:
                <input className="unique-input-field" type="date" name="birthdate" value={formState.birthdate} onChange={handleChange} />
              </label>
            </div>
            <div className="input-wrap">
              <label className="form-label">
                Adresse:
                <input className="unique-input-field" type="text" name="adresse" placeholder="Adresse" value={formState.adresse} onChange={handleChange} />
              </label>

              <label className="form-label">
                Email:
                <input className="unique-input-field" type="email" name="email" placeholder="Email*" value={formState.email} onChange={handleChange} />
              </label>

              <label className="form-label">
                Téléphone:
                <input className="unique-input-field" type="tel" name="phone" placeholder="+216" value={formState.phone} onChange={handleChange} />
              </label>
            </div>
            <div className="input-wrap">
              <label className="form-label">
                Souffrez-vous d'une maladie / allergie ?
                <input className="unique-input-field" type="text" name="maladieAllergie" placeholder="Détails ici" value={formState.maladieAllergie} onChange={handleChange} />
              </label>

              <label className="form-label">
                Prenez-vous des médicaments ?
                <input className="unique-input-field" type="text" name="medicaments" placeholder="Détails ici" value={formState.medicaments} onChange={handleChange} />
              </label>
              <label className="form-label">
                Autre question a ajouter ?
                <input className="unique-input-field" type="text" name="medicaments" placeholder="Détails ici" value={formState.medicaments} onChange={handleChange} />
              </label>
            </div>
         
            <label className="form-label">
              Message:
              <textarea className="unique-input-field" name="message" placeholder="Votre message ici" value={formState.message} onChange={handleChange}></textarea>
            </label>

            <div className="file-input-wrap">
              <label className="form-label file-label">
                Joindre votre radio panoramique datant de moins de 3 mois:
                <input type="file" name="radioPanoramique" onChange={handleChange} />
              </label>

              <label className="form-label file-label">
                Joindre une photo clinique:
                <input type="file" name="photoClinique" onChange={handleChange} />
              </label>
            </div>

            <button className="btn" type="submit">Envoyer la demande</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</section>


    </main>
  );
}

export default DevisPage;
