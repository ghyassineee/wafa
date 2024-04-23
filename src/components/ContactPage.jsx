import React, { useState } from 'react';

import '../assets/css/contact-page.css'
function ContactPage() {
  // State for form inputs
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
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
    // Here you would usually send the formState to your server via an API
    console.log(formState);
    // Reset form or show a success message
  };

  return (
    <main>
 

      <section className="well6">
        <div className="container">
          <div className="row">
            <div className="grid_8">
              <h5>contact form</h5>
              <form id="contact-form" className='contact-form mt1' onSubmit={handleSubmit}>
                <fieldset>
                  <div className="input-wrap">
                    <label className="name">
                      <input type="text" name="name" placeholder="Name*:" value={formState.name} onChange={handleChange} />
                    </label>
                
                    <label className="email">
                      <input type="text" name="email" placeholder="E-mail*:" value={formState.email} onChange={handleChange} />
                    </label>
                    <label className="phone">
                      <input type="text" name="phone" placeholder="Phone:" value={formState.phone} onChange={handleChange} />
                    </label>
                  </div>
                  <label className="message">
                    <textarea name="message" placeholder="Message*:" value={formState.message} onChange={handleChange} />
                  </label>
                  <button className="btn" type="submit">Submit comment</button>
                </fieldset>
              </form>
            </div>
            <div className="grid_4">
              <h5>our address</h5>
              <p>Easemosera secaerat ai kesesasetrsego etay se Proin vitae nunc tristique, porta magna in, gravida nunc. Fusce lobortis </p>
              <h6>Centre Urbain Nord, Tunis, Résidence New Tower, 2eme Etage, Cabinet B2-4</h6>
              <address className="addr2">
          
                <dl>

                  <dt>Telephone:</dt>
                  <dd><a href="callto:+21653446514">+216 53 44 65 14</a></dd>
                </dl>
                <dl>

                <dt>Whatsapp:</dt>
                  <dd><a  href="tel:+21653446514">+216 53 44 65 14</a></dd>
                </dl>
                <p>
                  E-mail: <a className="link1" href="mailto:dr-wafazaiem@gmail.com">dr-wafazaiem@gmail.com</a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </section>
  

    </main>
  );
}

export default ContactPage;
