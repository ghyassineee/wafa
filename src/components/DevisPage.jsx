import React, { useState } from 'react';
import '../assets/css/DevisForm.css';
import PhoneInput from "react-phone-number-input";

function DevisPage() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneInputChange = (value, country, e, formattedValue) => {
    // Update the state with the new phone number value
    setPhoneNumber(value);
  };
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
             
                <input className="unique-input-field" type="text" name="nom" placeholder="Nom*" value={formState.nom} onChange={handleChange} />
              </label>
              
              <label className="form-label">
                <input className="unique-input-field" type="text" name="prenom" placeholder="Prénom*" value={formState.prenom} onChange={handleChange} />
              </label>
              
              <label className="form-label">
                <input className="unique-input-field" type="date" name="birthdate" value={formState.birthdate} onChange={handleChange} />
              </label>
           
            </div>
       
            <div className="input-wrap">
              <label className="form-label">
                <input className="unique-input-field" type="text" name="adresse" placeholder="Adresse" value={formState.adresse} onChange={handleChange} />
              </label>

              <label className="form-label">
                <input className="unique-input-field" type="email" name="email" placeholder="Email*" value={formState.email} onChange={handleChange} />
              </label>

              <label className="form-label">
              <PhoneInput
    placeholder="Phone number"
    value={phoneNumber}
        onChange={handlePhoneInputChange}
    defaultCountry="TN"
    international
    countryCallingCodeEditable={false} // Keep this to prevent editing of the country code
    style={{  display: 'flex' }} // Ensures the input takes the full width

  />              </label>
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
         
            <div className="file-input-wrap ">

              <label className="form-label file-label">
              Joindre votre radio panoramique datant de moins de 3 mois:

                <input type="file" name="radioPanoramique" onChange={handleChange} />
              </label>

              <label className="form-label file-label">
                Joindre une photo clinique:
                <input type="file" name="photoClinique" onChange={handleChange} />
              </label>
            </div>
            <label className="form-label">
              Message:
              <textarea className="unique-input-field" name="message" placeholder="Votre message ici" value={formState.message} onChange={handleChange}></textarea>
            </label>
  


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
