import React from 'react';
import '../assets/css/contact-page.css';
import img01 from '../assets/images/page-4_img01.jpg';
import img02 from '../assets/images/page-4_img02.jpg';
import img03 from '../assets/images/page-4_img03.jpg';
import img04 from '../assets/images/page-4_img04.jpg';
import img05 from '../assets/images/page-4_img05.jpg';
import img07 from '../assets/images/parallax3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faInstagram } from '@fortawesome/free-brands-svg-icons';

function BlogPage() {
  return (
    <main>
      <section className="bg1 well7">
        <div className="container">
          <h5>Things You Need to Know</h5>
          <div className="row">
            <div className="grid_4">
              <img src={img01} alt="" />
            </div>
            <div className="grid_8">
              <h6>dignissim fermentum. Mauris arcu magna, lacinia</h6>
              <p>Proirenert yasemosera secaerat ai kesesasetrsego etayse Proin vitae nunc tristique, porta magna in, gravida nunc. Fusce lobortis sem vitae risus dignissim fermentum. Mauris arcu magna, lacinia vitae nulla eget, consectetur sodales purus. Vivamus luctus risus et purus consectetur, nec pulvinar neque dictum. Integer porttitor</p>
              <br />
              <p>Вolor a mattis venenatis. Nunc id velit eget lorem semper facilisis ut sed lectus. Donec interdum urna a velit pulvinar, nec sollicitudin leo tristique. Sed mollis massa sit amet ligula aliquet interdum. Maecenas et aliquam nisl. Proin non viverra</p>
            </div>
          </div>
        </div>
      </section>

      <section class="well6">
  <div class="container">
    <h5>Latest News & Events</h5>
    <div class="row">
      <div class="grid_6">
        <ul class="list1">
          <li>
            <div class="box2 wow fadeInLeft">
              <div class="box2_aside">
                <div class="circle"><time datetime="2014-12-30">30<span>dec</span></time></div>
              </div>
              <div class="box2_cnt__no-flow">
                <h6><a href="#">Aenean nec eros luctus</a></h6>
                <p>Easemosera secaeratai kesesasetrsego etayse lati sredsa eAliquam non dapibus neque. Suspendisse dui justo, ornare et posuere sit</p>
              </div>
            </div>
          </li>
          <li>
            <div class="box2 wow fadeInLeft">
              <div class="box2_aside">
                <div class="circle"><time datetime="2014-12-30">28<span>dec</span></time></div>
              </div>
              <div class="box2_cnt__no-flow">
                <h6><a href="#">Ultrices posuere itudin</a></h6>
                <p>Masaitaert yasemosera secaeratai keses asetrsego etayse latisredsa ernatur autditaut. Beonsequ untur magni dolores.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="box2 wow fadeInLeft">
              <div class="box2_aside">
                <div class="circle"><time datetime="2014-12-30">26<span>dec</span></time></div>
              </div>
              <div class="box2_cnt__no-flow">
                <h6><a href="#">Ut pharetra augue nec</a></h6>
                <p>Latisredsa ernatur autditaut. Beonsequ untur magni dot vestibulum massa libero, eget fringilla justo tempus eu! Pellentesqu</p>
              </div>
            </div>
          </li>
        </ul>                     
      </div>
      <div class="grid_6">
        <ul class="list1">
          <li>
            <div class="box2 wow fadeInRight">
              <div class="box2_aside">
                <div class="circle"><time datetime="2014-12-30">22<span>dec</span></time></div>
              </div>
              <div class="box2_cnt__no-flow">
                <h6><a href="#">doloertas miase nyras</a></h6>
                <p>Deloamert yasemosera secaeratai keses asetrsego etayse latisredsa ernatur autditaut. Beonsequ untur magni dolores.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="box2 wow fadeInRight">
              <div class="box2_aside">
                <div class="circle"><time datetime="2014-12-30">20<span>dec</span></time></div>
              </div>
              <div class="box2_cnt__no-flow">
                <h6><a href="#">veruyasa deliuas Kuseras</a></h6>
                <p>Masaitaert yasemosera secaeratai keses asetrsego etayse latisredsa ernatur autditaut. Beonsequ untur magni dolores.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="box2 wow fadeInRight">
              <div class="box2_aside">
                <div class="circle"><time datetime="2014-12-30">19<span>dec</span></time></div>
              </div>
              <div class="box2_cnt__no-flow">
                <h6><a href="#">mieryas delouyas keriase</a></h6>
                <p>Feruytasaert yasemosera secaer sehugasa asetrsego etayse latisredsa ernatur autditaut. Beonsequ untur magni dolores.</p>
              </div>
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
    backgroundImage: `url(${img07})`, // Use template literals here
    backgroundColor: 'inherit', 
    height: '703px', 
    transform: 'translate3d(0px, -40.027px, 0px)'
  }}
></div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div className="row">
            <div className="grid_5">
              <h2>Providing comprehensive dental services</h2>
            </div>
          </div>
        </div>
      </section>

      <section class="well9">
  <div class="container">
    <div class="row">
      <div class="grid_8 wow fadeInLeft">
        <h5>featured News</h5>
        <div class="row">
          <div class="grid_4">
            <div class="box2">
              <div class="box2_aside2">
                <img src={img02} alt=""/>
              </div>
              <div class="box2_cnt__no-flow">
                <h6><a href="#">fermentum Mau risarcu</a></h6>
                <p>Nunc id velit eget lorem semper facilisis ut sed lectus. Donec interdum urna a velit pulvinar, nec sollicitudin leo tristique.</p>
              </div>
            </div>
          </div>
          <div class="grid_4">
            <div class="box2">
              <div class="box2_aside2">
                <img src={img03} alt=""/>
              </div>
              <div class="box2_cnt__no-flow">
                <h6><a href="#">Maurisarcu mag nalacinia</a></h6>
                <p>Donec interdum urna a velit pulvinar, nec sollicitudin leo tristique. Sed mollis massa sit amet.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="line2"></div>
        <div class="row">
          <div class="grid_4">
            <div class="box2">
              <div class="box2_aside2">
                <img src={img04} alt=""/>
              </div>
              <div class="box2_cnt__no-flow">
                <h6><a href="#">arcu magna laci nia vitae nu</a></h6>
                <p>Donec interdum urna a velit pulvinar, nec sollicitudin leo tristique. Sed mollis massa sit amet ligula aliquet inter.</p>
              </div>
            </div>
          </div>
          <div class="grid_4">
            <div class="box2">
              <div class="box2_aside2">
                <img src={img05} alt=""/>
              </div>
              <div class="box2_cnt__no-flow">
                <h6><a href="#">vitae nulla eget consectetur</a></h6>
                <p>Sed mollis massa sit amet ligula aliquet interdum. Maecenas et aliquam nisl. Proin non viverra nibh.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid_4 wow fadeInRight">
        <h5>Instagram Feed</h5>
        <ul class="list1">
          <li>
            <div class="box2">
              <div class="box2_aside3">
              <span><FontAwesomeIcon icon={faInstagram} /></span>
              </div>
              <div class="box2_cnt__no-flow">
                <h6><a href="#">magna lacinia vitae nulla</a></h6>
                <p>Sed mollis massa sit amet ligula aliquet interdum. Maecenas et aliquam nisl. Proin non viverra nibh.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="box2">
              <div class="box2_aside3">
              <span><FontAwesomeIcon icon={faInstagram} /></span>
              </div>
              <div class="box2_cnt__no-flow">
                <h6><a href="#">vitae nulla eget, consectetur</a></h6>
                <p>Sed mollis massa sit amet ligula aliquet interdum. Maecenas et aliquam nisl. Proin non viverra nibh.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="box2">
              <div class="box2_aside3">
              <span><FontAwesomeIcon icon={faInstagram} /></span>
              </div>
              <div class="box2_cnt__no-flow">
                <h6><a href="#">magna lacinia vitae nulla</a></h6>
                <p>Sed mollis massa sit amet ligula aliquet interdum. Maecenas et aliquam nisl. Proin non viverra nibh.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}

export default BlogPage;
