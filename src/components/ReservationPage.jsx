import React, { useState } from 'react';
import { Button, Grid, TextField, Box, Snackbar, Typography, List, ListItem, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import PhoneInput from "react-phone-number-input";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import '../assets/css/contact-page.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e80675',
    },
  },
});

function ReservationPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formState, setFormState] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    email: '',
    phone: '',
    jour: '',
    heure: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [currentEvents, setCurrentEvents] = useState([]);

  const handlePhoneInputChange = (value) => {
    setPhoneNumber(value);
    setFormState((prevState) => ({
      ...prevState,
      phone: value
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
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

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  const theme = useTheme();
  const colors = {
    primary: {
      main: '#e80675',
    },
    greenAccent: {
      500: '#4caf50',
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        <section className="well6">
          <div className="container">
            <div className="row">
              <div className="grid_8">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <h5>Prenez un rendez-vous</h5>
                </Box>
                <form id="contact-form" className='contact-form mt1' onSubmit={handleSubmit}>
                  <Grid container spacing={2} justifyContent="center" paddingTop={3}>
                    <TextFieldGridItem label="Nom" name="nom" value={formState.nom} handleChange={handleChange} />
                    <TextFieldGridItem label="Prénom" name="prenom" value={formState.prenom} handleChange={handleChange} />
                    <TextFieldGridItem label="E-mail" name="email" type="email" value={formState.email} handleChange={handleChange} />
                    <Grid item xs={12} sm={6}>
                      <PhoneInput
                        placeholder="Numéro de téléphone*"
                        value={phoneNumber}
                        onChange={handlePhoneInputChange}
                        defaultCountry="TN"
                        international
                        countryCallingCodeEditable={false}
                        style={{ width: '100%' }}
                      />
                    </Grid>
                    <TextFieldGridItem label="Date de rendez vous" name="jour" type="date" value={formState.jour} handleChange={handleChange} />
                    <TextFieldGridItem label="Heure de rendez vous" name="heure" type="time" value={formState.heure} handleChange={handleChange} />
                    <TextFieldGridItem label="Date de naissance" name="dateNaissance" type="date" value={formState.dateNaissance} handleChange={handleChange} />
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
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                      <Button className="btn" type="submit" variant="contained" sx={{ mt: 3 }}>Envoyer la réservation</Button>
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
              <div className="grid_4">
                <Box sx={{ textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                  <h5>Calendrier du médecin</h5>
                  <Box flex="1 1 100%" ml="15px">
                    <FullCalendar
                      height="75vh"
                      plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin,
                      ]}
                      headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                      }}
                      initialView="dayGridMonth"
                      editable={true}
                      selectable={true}
                      selectMirror={true}
                      dayMaxEvents={true}
                      select={handleDateClick}
                      eventClick={handleEventClick}
                      eventsSet={(events) => setCurrentEvents(events)}
                      initialEvents={[
                        {
                          id: "12315",
                          title: "All-day event",
                          date: "2022-09-14",
                        },
                        {
                          id: "5123",
                          title: "Timed event",
                          date: "2022-09-28",
                        },
                      ]}
                    />
                  </Box>
                </Box>
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
        required={["nom", "prenom", "email"].includes(name)}
      />
    </Grid>
  );
}

export default ReservationPage;
