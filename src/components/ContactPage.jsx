import React, { useState } from 'react';
import { Avatar, Button, Grid, TextField, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneInput from "react-phone-number-input";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Snackbar } from '@mui/material';

import '../assets/css/contact-page.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e80675',
    },
  },
});

function ContactPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const validateField = (name, value) => {
    let errorMsg = '';
    switch (name) {
      case 'name':
      case 'message':
        if (!value.trim()) {
          errorMsg = 'This field is required.';
        }
        break;
      case 'email':
        if (value && !/\S+@\S+\.\S+/.test(value)) {
          errorMsg = 'Invalid email format.';
        }
        break;
      case 'phone':
        if (value && !/^\+?[1-9]\d{1,14}$/.test(value)) {
          errorMsg = 'Invalid phone number format.';
        }
        break;
      default:
        break;
    }
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: errorMsg
    }));
  };

  const handlePhoneInputChange = (value) => {
    setPhoneNumber(value);
    validateField('phone', value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    validateField(name, value);
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
                  <h5>Contact Form</h5>
                </Box>
                <form id="contact-form" className='contact-form mt1' onSubmit={handleSubmit}>
                  <Grid container spacing={2} justifyContent="center" paddingTop={3}>
                    <TextFieldGridItem label="Name" name="name" value={formState.name} handleChange={handleChange} error={errors.name} />
                    <TextFieldGridItem label="Email" name="email" type="email" value={formState.email} handleChange={handleChange} error={errors.email} />
                    <Grid item xs={12} sm={6}>
                      <PhoneInput
                        placeholder="Phone number"
                        value={phoneNumber}
                        onChange={handlePhoneInputChange}
                        international
                        countryCallingCodeEditable={false}
                        style={{ width: '100%' }}
                      />
                      {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                      <Button className="btn" type="submit" variant="contained" sx={{ mt: 3 }}>Submit</Button>
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

function TextFieldGridItem({ label, name, type = "text", value, handleChange, error }) {
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
        error={!!error}
        helperText={error}
        variant="outlined"
        required={["name", "email", "message"].includes(name)} // Set required attribute for specific fields
      />
    </Grid>
  );
}

export default ContactPage;
