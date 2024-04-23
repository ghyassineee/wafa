import React, { useState } from 'react';
import '../assets/css/contact-page.css';

function ReservationPage() {
  // Updated state with date and heure
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    date: '', // Added date
    heure: '', // Added heure (time)
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    // Implement submission logic
  };

  return (
    <main>
      <section className="well6">
        <div className="container">
          <div className="row">
            <div className="grid_8">
              <h5>Prenez un rendez vous</h5>
              <form id="contact-form" className='contact-form mt1' onSubmit={handleSubmit}>
                <fieldset>
                  <div className="input-wrap">
                    <label className="name">
                      <input type="text" name="name" placeholder="Name*:" value={formState.name} onChange={handleChange} />
                    </label>
                    <label className="phone">
                      <input type="text" name="phone" placeholder="Phone Number*:" value={formState.phone} onChange={handleChange} />
                    </label>
                    <label className="email">
                      <input type="text" name="phone" placeholder="E-mail adress:" value={formState.phone} onChange={handleChange} />
                    </label>
                   
                  </div>
                  <div className="input-wrap">
                  <label>
                      <input type="date" name="birthdate" placeholder="jj/mm/aaaa" value={formState.birthdate} onChange={handleChange} />
                    </label>
                  <label className="date">
        <input
          type="date"
          name="date"
          placeholder="Date*:"
          value={formState.date}
          onChange={handleChange}
          className="your-custom-class-for-inputs" // Make sure to apply the same class as other inputs
        />
      </label>
      <label className="heure">
        <input
          type="time"
          name="heure"
          placeholder="Time*:"
          value={formState.heure}
          onChange={handleChange}
          className="your-custom-class-for-inputs" // Make sure to apply the same class as other inputs
        />
      </label>
     
      </div>

                  <label className="message">
                    <textarea name="message" placeholder="Message*:" value={formState.message} onChange={handleChange} />
                  </label>
                  <button className="btn" type="submit">Submit reservation</button>
                </fieldset>
              </form>
            </div>
            <div className="grid_4">
              <h5>Doctor's Calendar</h5>
              {/* Placeholder for calendar integration */}
              <div className="calendar-placeholder" style={{textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '5px'}}>
                Calendar will be integrated here.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ReservationPage;
