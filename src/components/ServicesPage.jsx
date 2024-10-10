import React from 'react';
import '../assets/css/contact-page.css';
import img01 from '../assets/images/page-2_img01.jpg';
import img02 from '../assets/images/page-2_img02.jpg';
import img03 from '../assets/images/page-2_img03.jpg';
import img04 from '../assets/images/page-2_img04.jpg';
import img07 from '../assets/images/parallax2.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCoffee, faFlag, faComments, faDiamond } from '@fortawesome/free-solid-svg-icons';

function ServicesPage() {
  return (
    <main>
 <section className="bg1 well7">
  <div className="container">
  <div className="row">
  <div className="grid_4">
    <div className="box">
      <div className="box_aside">
        <div className="circle_sm"><FontAwesomeIcon icon={faUsers} /></div>
      </div>
      <div className="box_cnt__no-flow">
        <h5>Accueil personnalisé et professionnel</h5>
        <p>Nous offrons un accueil chaleureux et des consultations personnalisées pour comprendre vos besoins dentaires uniques.</p>
      </div>
    </div>
  </div>
  <div className="grid_4">
    <div className="box">
      <div className="box_aside">
        <div className="circle_sm"><FontAwesomeIcon icon={faCoffee} /></div>
      </div>
      <div className="box_cnt__no-flow">
        <h5>Confort maximal durant votre visite</h5>
        <p>Détendez-vous dans notre espace d’attente convivial avec des rafraîchissements et accès Wi-Fi pendant que vous attendez votre rendez-vous.</p>
      </div>
    </div>
  </div>
  <div className="grid_4">
    <div className="box">
      <div className="box_aside">
        <div className="circle_sm"><FontAwesomeIcon icon={faFlag} /></div>
      </div>
      <div className="box_cnt__no-flow">
        <h5>Technologies de pointe</h5>
        <p>Nous utilisons les dernières technologies pour garantir des soins précis et efficaces, réduisant ainsi le temps de vos séances.</p>
      </div>
    </div>
  </div>
</div>

  </div>
</section>

<section className="well6">
  <div className="container">
    <div className="row">
      <div className="grid_8">
        <h5>Nos services exclusifs</h5>
        <div className="row">
          <div className="grid_4 wow fadeInLeft" data-wow-delay="0.2s">
            <img src={img01} alt="" />
            <h6>Implantologie dentaire de haute précision</h6>
            <p>Nos spécialistes en implantologie utilisent des techniques avancées pour un résultat esthétique et durable.</p>
          </div>
          <div className="grid_4 wow fadeInLeft">
            <img src={img02} alt="" />
            <h6>Orthodontie pour tous les âges</h6>
            <p>Offrez-vous le sourire de vos rêves avec nos solutions d’orthodontie adaptées tant aux enfants qu’aux adultes.</p>
          </div>
          
        </div>
        <div className="row">
          <div className="grid_4 wow fadeInLeft" data-wow-delay="0.2s">
            <img src={img01} alt="" />
            <h6>Implantologie dentaire de haute précision</h6>
            <p>Nos spécialistes en implantologie utilisent des techniques avancées pour un résultat esthétique et durable.</p>
          </div>
          <div className="grid_4 wow fadeInLeft">
            <img src={img02} alt="" />
            <h6>Orthodontie pour tous les âges</h6>
            <p>Offrez-vous le sourire de vos rêves avec nos solutions d’orthodontie adaptées tant aux enfants qu’aux adultes.</p>
          </div>
          
        </div>
        <div className="row">
          <div className="grid_4 wow fadeInLeft" data-wow-delay="0.2s">
            <img src={img01} alt="" />
            <h6>Implantologie dentaire de haute précision</h6>
            <p>Nos spécialistes en implantologie utilisent des techniques avancées pour un résultat esthétique et durable.</p>
          </div>
          <div className="grid_4 wow fadeInLeft">
            <img src={img02} alt="" />
            <h6>Orthodontie pour tous les âges</h6>
            <p>Offrez-vous le sourire de vos rêves avec nos solutions d’orthodontie adaptées tant aux enfants qu’aux adultes.</p>
          </div>
          
        </div>
      </div>
      <div className="grid_4">
        <h5>Nos principes de soin</h5>
        <ul className="index-list wow fadeInRight">
          <li className='services-column'>
            <div>
              <h6>Engagement envers l’excellence</h6>
              <p>Nous nous engageons à fournir les meilleurs soins possibles avec une attention constante à la qualité et au confort.</p>
            </div>
          </li>
          <li className='services-column'>
            <div>
              <h6>Approche centrée sur le patient</h6>
              <p>Chaque traitement est personnalisé pour répondre aux besoins spécifiques de nos patients, garantissant des résultats optimaux.</p>
            </div>
          </li>
          <li>
            <div>
              <h6>Intégrité et transparence</h6>
              <p>Nous pratiquons une politique de transparence totale envers nos patients concernant les traitements et les tarifs.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="parallax parallax_3" >
<div 
  className="parallax_image" 
  style={{
    backgroundImage: `url(${img07})`, 
    backgroundColor: 'inherit', 
    height: '703px', 
    transform: 'translate3d(0px, -30.3504px, 0px)'
  }}
></div>
<div className="container" style={{position: 'relative', zIndex: 2}}>
      <div className="row">
      <div className="preffix_7 grid_5">
        <h2>Des services dentaires complets et personnalisés</h2>
      </div>
    </div>
  </div>
</section>


<section className="well8">
  <div className="container tc">
    <h3>Nos meilleures recommandations</h3>
    <div className="row">
      <div className="grid_6 wow fadeInUp">
        <img src={img03} alt="" />
        <p className="text2">Explorez nos traitements avancés et découvrez comment nous pouvons vous aider à maintenir une santé dentaire optimale.</p>
        <a className="btn" href="#">en savoir plus</a>
      </div>
      <div className="grid_6 wow fadeInUp" data-wow-delay="0.2s">
        <img src={img04} alt="" />
        <p className="text2">Découvrez nos procédures esthétiques pour améliorer votre sourire et votre confiance en vous.</p>
        <a className="btn" href="#">en savoir plus</a>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}

export default ServicesPage;
