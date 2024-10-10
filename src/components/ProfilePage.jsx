import React, { useState, useEffect } from 'react';
import '../assets/css/DevisForm.css';
import { Avatar, Button, Grid, TextField, Tab, Tabs, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneInput from "react-phone-number-input";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Snackbar } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e80675',
    },
  },
});

function ProfilePage() {


  const userId = localStorage.getItem("patientdataId");

  const [userData, setUserData] = useState({
    prenom: '',
    nom: '',
    email: '',
    contact: '',
    address: '',
  });
  const [errors, setErrors] = useState({
    nom: '',
    prenom: '',
    email: '',
    contact: '',
    address: ''
  });

  const validateField = (name, value) => {
    let errorMsg = '';
    switch (name) {
      case 'nom':
      case 'prenom':
      case 'address':
        if (!value.trim()) {
          errorMsg = 'This field is required.';
        }
        break;
      case 'email':
        if (value && !/\S+@\S+\.\S+/.test(value)) {
          errorMsg = 'Invalid email format.';
        }
        break;
      case 'contact':
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
  
  const [tabValue, setTabValue] = useState(0);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
const [selectedFile, setSelectedFile] = useState(null);


  useEffect(() => {
    console.log(userId)
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:1129/api/patient/getbyid`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        });
        if (response.ok) {
          const data = await response.json();
          setUserData({
            ...data,
            contact: data.phoneNumber,
            profilePicture: data.profilePhoto ? data.profilePhoto : null
          });
        } else {
          console.error('Failed to fetch user data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size > 200000) { // Check if file is greater than 200 KB
        setSnackbarMessage("File size should not exceed 200 KB.");
        setOpenSnackbar(true);
    } else if (file) {
        console.log("File selected:", file); // Debugging line to check file info
        setSelectedFile(file);
        setOpenDialog(true);
    }
};
const handleConfirmPhotoUpload = async () => {
  const formData = new FormData();
  formData.append('profilePhoto', selectedFile);

  try {
      const response = await fetch(`http://127.0.0.1:1129/api/patient/update-photo/${userId}`, {
          method: 'POST',
          body: formData,
      });

      if (!response.ok) {
          throw new Error(`Failed to upload photo: ${await response.text()}`);
      }

      const updatedData = await response.json();
      console.log("Updated data from server:", updatedData);  // Debugging line to check the response
      setUserData({
          ...userData,
          profilePhoto: updatedData.profilePhoto
      });
      alert('Profile photo updated successfully!');
      window.location.reload(); // Optional: You might want to handle this differently

  } catch (error) {
      console.error('Error uploading photo:', error);
      alert(error.message);
  } finally {
      setOpenDialog(false);
  }
};

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };



  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }));
    validateField(name, value);
  };
  

  const Input = styled('input')({
    display: 'none',
  });
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const hasErrors = Object.values(errors).some(error => error !== '');
    if (hasErrors) {
      setSnackbarMessage("Please correct the errors before submitting.");
      setOpenSnackbar(true);
      return;
    }
    const values = userData;
    const payload = {
      patientId: userId,
      nom: values.nom,
      prenom: values.prenom,
      address:values.address,
      email:values.email,

      phoneNumber: values.contact,
    };

    try {
 
      const response = await fetch(`http://127.0.0.1:1129/api/patient/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorMsg = await response.text();
        throw new Error(`Failed to update user: ${errorMsg}`);
      }

      const updatedData = await response.json();
      setSnackbarMessage("User updated successfully!");
      setOpenSnackbar(true);
      setUserData({ ...updatedData, contact: updatedData.phoneNumber });
    } catch (error) {
      console.error('Error updating user:', error);
      setSnackbarMessage(error.message);
      setOpenSnackbar(true);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <main>
        <section className="well6">
          <div className="container">
            <div className="row">
              <div className="grid_12">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
                    <Tab label="Modifier Profile" />
                    <Tab label="Consulter Reservation" />
                  </Tabs>
                </Box>
                {tabValue === 0 && (
                   <>
                  <form id="profile-form" className='contact-form mt1' onSubmit={handleFormSubmit}>
                    <Grid container spacing={2} justifyContent="center" paddingTop={3}>
                      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                        <label htmlFor="icon-button-file">
                          <Input accept="image/*" id="icon-button-file" type="file" onChange={handleFileChange} />
                          <Avatar
            src={userData.profilePhoto ? userData.profilePhoto.url : 'http://127.0.0.1:1129/uploads/default-avatar.webp'}

                            sx={{ width: 106, height: 106, cursor: 'pointer' }}
                            alt="Profile Picture"
                          />
                        </label>
                      </Grid>
                      <TextFieldGridItem label="Nom" name="nom" value={userData.nom} handleChange={handleChange} error={errors.nom} />
                      <TextFieldGridItem label="Prénom" name="prenom" value={userData.prenom} handleChange={handleChange} error={errors.prenom} />
                      <TextFieldGridItem label="Email" name="email" type="email" value={userData.email} handleChange={handleChange} error={errors.email} />
                      <Grid item xs={12} sm={6}>
                        <PhoneInput
                          placeholder="Numéro de téléphone"
                          value={userData.contact}
                          onChange={(value) => setUserData((prevState) => ({
                            ...prevState,
                            contact: value
                          }))}
                          international
                          countryCallingCodeEditable={false}
                          style={{ width: '100%' }}
                        />
                      </Grid>

                      <TextFieldGridItem  label="Adresse" name="address" value={userData.address} handleChange={handleChange} error={errors.address} />

                      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button className="btn" type="submit" variant="contained" sx={{ mt: 3 }}>Mettre à jour</Button>
                      </Grid>
                    </Grid>
                  </form>
                  <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
    <DialogTitle>Confirm Photo Upload</DialogTitle>
    <DialogContent>
        <DialogContentText>
            Are you sure you want to update your profile photo?
        </DialogContentText>
    </DialogContent>
    <DialogActions>
        <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
        <Button onClick={handleConfirmPhotoUpload} autoFocus>
            Upload
        </Button>
    </DialogActions>
</Dialog>

                  <Snackbar
                  open={openSnackbar}
                  autoHideDuration={6000}
                  onClose={() => setOpenSnackbar(false)}
                  message={snackbarMessage}
                />
               </>
                  
                )}
                {tabValue === 1 && (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker
                      displayStaticWrapperAs="desktop"
                      openTo="day"
                      value={selectedDate}
                      onChange={handleDateChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
};

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
        required={["nom", "prenom", "address"].includes(name)} // Set required attribute for specific fields
      />
    </Grid>
  );
}


export default ProfilePage;
