import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

// Install Swiper modules
import img01 from '../assets/images/page-1_img01.jpg';
import img02 from '../assets/images/page-1_img02.jpg';
import img03 from '../assets/images/page-1_img05.jpg'; // Assuming the path is correct
import img04 from '../assets/images/parallax1.jpg';
import img05 from '../assets/images/page-1_img03.jpg';
import img06 from '../assets/images/page-1_img04.jpg';
import img07 from '../assets/images/parallax2.jpg';


function HomePage() {

    return(
      <main>
      <section className="bg1 well1">
        <div className="container tc">
          <h3 className="mod1">Bienvenue sur notre site !</h3>
          <p className="text1">Découvrez notre clinique dentaire, où professionnalisme et soin du détail vous garantissent une expérience sans égal. Nos spécialistes dédiés emploient les dernières technologies pour assurer votre confort et obtenir les meilleurs résultats. Chez nous, votre sourire est notre priorité.</p>
          <a className="btn2" href="#">en savoir plus</a>
        </div>
      </section>
      <section className="well2">
        <div className="container">
          <div className="row">
            <div className="grid_4 wow fadeInUp">
              <div className="box">
                <div className="box_aside">
                  <a href="#"><span className="fl-fill fl-fill-round-icons-persons11"></span></a>
                </div>
                <div className="box_cnt__no-flow">
                  <h5>Consultation personnalisée</h5>
                  <p>Nous prenons le temps de comprendre chaque besoin individuel pour proposer des soins sur mesure, adaptés à chaque patient.</p>
                  <a className="btn1" href="#">en savoir plus</a>
                </div>
              </div>
            </div>
            <div className="grid_4 wow fadeInUp" data-wow-delay="0.2s">
              <div className="box">
                <div className="box_aside">
                  <a href="#"><span className="fl-fill fl-fill-round-icons-new67"></span></a>
                </div>
                <div className="box_cnt__no-flow">
                  <h5>Technologies avancées</h5>
                  <p>Nous utilisons les dernières innovations dans le domaine dentaire pour garantir efficacité et confort lors de vos traitements.</p>
                  <a className="btn1" href="#">en savoir plus</a>
                </div>
              </div>
            </div>
            <div className="grid_4 wow fadeInUp" data-wow-delay="0.4s">
              <div className="box">
                <div className="box_aside">
                  <a href="#"><span className="fl-fill fl-fill-round-icons-photo164"></span></a>
                </div>
                <div className="box_cnt__no-flow">
                  <h5>Soins esthétiques</h5>
                  <p>Améliorez votre sourire avec nos solutions esthétiques, conçues pour harmoniser et embellir votre expression de manière naturelle.</p>
                  <a className="btn1" href="#">en savoir plus</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="parallax parallax_1" data-url={img04}>
        <div className="parallax_image" style={{
          backgroundImage: `url(${img04})`,
          backgroundColor: 'inherit',
          height: '703px',
          transform: 'translate3d(0px, -40.027px, 0px)'
        }}></div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div className="row">
            <div className="preffix_8 grid_4">
              <h2>Démarche de soin étape par étape</h2>
              <p>Nous vous guidons à travers chaque étape du traitement pour vous assurer compréhension et confort tout au long de votre parcours de soin.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="well3">
        <div className="container">
          <div className="row">
            <div className="grid_6 wow fadeInLeft">
              <h5>Actualités et événements</h5>
              <ul className="list1">
                <li>
                  <div className="box2">
                    <div className="box2_aside">
                      <div className="circle"><time datetime="2014-12-30">30<span>déc</span></time></div>
                    </div>
                    <div className="box2_cnt__no-flow">
                      <h6><a href="#">Dernières innovations en dentisterie</a></h6>
                      <p>Découvrez les nouvelles techniques qui révolutionnent les soins dentaires et améliorent le confort des patients.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="box2">
                    <div className="box2_aside">
                      <div className="circle"><time datetime="2014-12-30">28<span>déc</span></time></div>
                    </div>
                    <div className="box2_cnt__no-flow">
                      <h6><a href="#">Nos engagements envers la qualité</a></h6>
                      <p>Engagés dans une démarche qualité, nous vous assurons des soins respectueux des normes les plus élevées.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="box2">
                    <div className="box2_aside">
                      <div className="circle"><time datetime="2014-12-30">26<span>déc</span></time></div>
                    </div>
                    <div className="box2_cnt__no-flow">
                      <h6><a href="#">Prévenir plutôt que guérir</a></h6>
                      <p>Apprenez comment prendre soin de votre santé bucco-dentaire avec nos conseils préventifs et éviter des problèmes futurs.</p>
                    </div>
                  </div>
                </li>
              </ul>
              <a className="btn" href="#">lire plus</a>
            </div>
            <div className="preffix_1 grid_5">
              <div className="box3 wow fadeInRight">
                <img src={img01} alt=""/>
                <h4 className="mod1"><a href="#">Diagnostiquer des problèmes uniques & Chirurgie buccale</a></h4>
              </div>
              <div className="box3 wow fadeInRight">
                <img src={img02} alt=""/>
                <h4 className="mod1"><a href="#">Des standards élevés de traitement dentaire</a></h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg2 well4">
        <div className="container tc wow fadeInUp">
          <h3><span className="secondary">Améliorer</span> l'apparence de votre sourire!</h3>
          <div className="row">
            <div className="preffix_3 grid_6">
              <div class="item">
                <img src={img03} alt=""/>
              </div>
            </div>
          </div>
          <p className="text2">Nous sommes engagés à transformer votre sourire avec des traitements personnalisés qui mettent en avant votre beauté naturelle et renforcent votre confiance en vous.</p>
          <a className="btn" href="#">lire plus</a>
        </div>
      </section>
      <section className="well6">
        <div className="container">
          <h5>Nos avantages</h5>
          <div className="line1"></div>
          <div className="row">
            <div className="grid_4 wow fadeInUp" data-wow-delay="0.4s">
              <h4><a href="#">Facile à enlever</a></h4>
              <p>Nos solutions sont conçues pour une facilité d'utilisation maximale, assurant un confort inégalé et une adaptation rapide.</p>
              <a className="btn3" href="#">lire plus</a>
            </div>
            <div className="grid_4 wow fadeInUp" data-wow-delay="0.2s">
              <h4><a href="#">Pas de perçage</a></h4>
              <p>Profitez de traitements moins invasifs avec les techniques les plus avancées qui évitent le perçage traditionnel.</p>
              <a className="btn3" href="#">lire plus</a>
            </div>
            <div className="grid_4 wow fadeInUp">
              <h4><a href="#">Sûr & Viable</a></h4>
              <p>Tous nos traitements sont testés et approuvés pour leur efficacité et sécurité, garantissant votre santé et satisfaction.</p>
              <a className="btn3" href="#">lire plus</a>
            </div>
          </div>
        </div>
      </section>
      <section className="parallax parallax_2" data-url={img07}>
        <div className="parallax_image" style={{
          backgroundImage: `url(${img07})`,
          backgroundColor: 'inherit',
          height: '703px',
          transform: 'translate3d(0px, -30.3504px, 0px)'
        }}></div>
        <div className="container">
          <div className="row">
            <div className="preffix_4 grid_8">
              <div className="banner bg3">
                <h2>Donner à chaque patient l'opportunité<br/>de briller</h2>
                <a className="link-circle" href="#"><FontAwesomeIcon icon={faAngleRight} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    

        
    );
}

export default HomePage;
