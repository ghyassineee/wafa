import React, { useState, useEffect } from 'react';
import { Button, Grid, TextField, Box, MenuItem, Avatar, Snackbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PhoneInput from "react-phone-number-input";
import '../assets/css/DevisForm.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e80675',
    },
  },
});

function DevisPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('TN');
  const [formState, setFormState] = useState({
    nom: '',
    prenom: '',
    pays: 'TN',
    ville: '',
    email: '',
    phone: '',
    maladieAllergie: '',
    medicaments: '',
    message: '',
    radioPanoramique: null,
    photoClinique: null,
    birthdate: ''
  });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data.map((country) => ({
          name: country.name.common,
          code: country.cca2
        })));
      } catch (error) {
        console.error('Failed to fetch countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handlePhoneInputChange = (value) => {
    setPhoneNumber(value);
    setFormState((prevState) => ({
      ...prevState,
      phone: value
    }));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some(error => error !== '');
    if (hasErrors) {
      setSnackbarMessage("Please correct the errors before submitting.");
      setOpenSnackbar(true);
      return;
    }
    console.log(formState);
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        <section className="well6">
          <div className="container">
            <div className="row">
              <div className="grid_12">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <h5>Demandez votre devis gratuitement !</h5>
                </Box>
                <form id="contact-form" className='contact-form mt1' onSubmit={handleSubmit}>
                  <Grid container spacing={2} justifyContent="center" paddingTop={3}>
                    <TextFieldGridItem label="Nom" name="nom" value={formState.nom} handleChange={handleChange} />
                    <TextFieldGridItem label="Prénom" name="prenom" value={formState.prenom} handleChange={handleChange} />
                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        fullWidth
                        label="Pays"
                        name="pays"
                        value={formState.pays}
                        onChange={handleChange}
                        variant="outlined"
                        required
                      >
                        {countries.map(country => (
                          <MenuItem key={country.code} value={country.code}>
                            {country.name}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <TextFieldGridItem label="Ville" name="ville" value={formState.ville} handleChange={handleChange} />
                    <TextFieldGridItem label="Email" name="email" type="email" value={formState.email} handleChange={handleChange} />
                    <Grid item xs={12} sm={6}>
                      <PhoneInput
                        placeholder="Phone number"
                        value={phoneNumber}
                        onChange={handlePhoneInputChange}
                        defaultCountry="TN"
                        international
                        countryCallingCodeEditable={false}
                        style={{ width: '100%' }}
                      />
                    </Grid>
                    <TextFieldGridItem label="Date de naissance" name="birthdate" type="date" value={formState.birthdate} handleChange={handleChange} />
                    <TextFieldGridItem label="Souffrez-vous d'une maladie / allergie ?" name="maladieAllergie" value={formState.maladieAllergie} handleChange={handleChange} />
                    <TextFieldGridItem label="Prenez-vous des médicaments ?" name="medicaments" value={formState.medicaments} handleChange={handleChange} />
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button variant="contained" component="label" fullWidth>
                        Joindre votre radio panoramique
                        <input type="file" name="radioPanoramique" hidden onChange={handleChange} />
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button variant="contained" component="label" fullWidth>
                        Joindre une photo clinique
                        <input type="file" name="photoClinique" hidden onChange={handleChange} />
                      </Button>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                      <Button className="btn" type="submit" variant="contained" sx={{ mt: 3 }}>Envoyer la demande</Button>
                    </Grid>
                  </Grid>
                </form>
                <Snackbar
                  open={openSnackbar}
                  autoHideDuration={6000}
                  onClose={() => setOpenSnackbar(false)}
                  message={snackbarMessage}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}

function TextFieldGridItem({ label, name, type = "text", value, handleChange }) {
  return (
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label={label}
        name={name}
        type={type}
        placeholder={label}
        value={value}
        onChange={handleChange}
        variant="outlined"
        required={["nom", "prenom", "email"].includes(name)} // Set required attribute for specific fields
      />
    </Grid>
  );
}

export default DevisPage;
