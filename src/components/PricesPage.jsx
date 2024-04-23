import React from 'react';
import '../assets/css/contact-page.css';
import img01 from '../assets/images/page-3_img01.jpg';
import img07 from '../assets/images/parallax3.jpg';

function PricesPage() {
  return (
    <main>
      <section className="bg1 well7">
        <div className="container">
          <h5>Quick guide to achieve dazzling smile</h5>
          <ul className="row index-list2">
            <li className="grid_4">
              <div>
                <h6>tristique porta magna</h6>
                <p>Deloamert yasemosera secaerat ai kesesasetrsego etayse Proin vitae nunc tristique, porta</p>
              </div>
            </li>
            <li className="grid_4">
              <div>
                <h6>iravida nun usc lobortis</h6>
                <p>Proirenert yasemosera secaerat ai kesesasetrsego etayse Proin vitae nunc tristique, porta </p>
              </div>
            </li>
            <li className="grid_4">
              <div>
                <h6>Fusce lobortis sem</h6>
                <p>Esemosera secaerat ai kesesas etrsego etayse Proin vitae nunc tristique, porta magn</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="well9">
        <div className="container">
          <h5>how much does it cost?</h5>
          <div className="row">
            <div className="grid_8 wow fadeInLeft">
              <h6>Proin vitae nunc tristique porta magna in gravida nunc Fusce lobortis sem vitae risus dignissim fermentum Mauris arcu </h6>
              <p>Vivamus luctus risus et purus consecteturnec pulvinar neque dictumnteger porttitor dolor a mattis venenatis. Nunc id velit eget lorem semper facilisis ut sed lectus. Donec interdum urna a velit pulvinar, nec sollicitudin leo tristique. Sed mollis massa sit amet ligula aliquet interdum. Maecenas et aliquam nisl. Proin non viverra nibh. </p>
              <br />
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis varius tortor eget suscipit pellentesque. Suspendisse consectet</p>
              <a className="btn1" href="#">more</a>
            </div>
            <div className="grid_4 wow fadeInRight">
              <img src={img01} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class="parallax parallax_3" data-url={img07}>
      <div 
  className="parallax_image" 
  style={{
    backgroundImage: `url(${img07})`, 
    backgroundColor: 'inherit', 
    height: '703px', 
    transform: 'translate3d(0px, -30.3504px, 0px)'
  }}
></div>
  <div class="container" style={{position: 'relative', zIndex: 2}}>
    <div class="row">
      <div class="grid_6">
        <h2>Providing proper treatment for each individual</h2>
      </div>
    </div>
  </div>
</section>

      <section className="well9">
  <div className="container">
    <h5>our prices</h5>
    <div className="row">
      <div className="grid_4">
        <h6>Fusce lobortis sem vitae risus di gnissim fermentum Mau</h6>
        <p>Feque dictumnteger porttitor dolor a mattis venenatis. Nunc id velit eget lorem semper facilisis ut sed lectus. Donec interdum urna a velit pulvinar, nec sollicitudin leo tristique. Sed mollis massa sit amet </p>
        <br />
        <ul className="list2 wow fadeInUp">
          <li>
            <div className="list2_aside">$12.10</div>
            <div className="list2_no-flow">Lorem ipsum dolor siteme</div>                
          </li>
          <li>
            <div className="list2_aside">$23.87</div>
            <div className="list2_no-flow">Amet consectetuer adipiscing elit</div>  
          </li>
          <li>
            <div className="list2_aside">$10.22</div>
            <div className="list2_no-flow">Praesent vestibulum molestie</div>  
          </li>
          <li>
            <div className="list2_aside">$24.82</div>
            <div className="list2_no-flow">Acus enean nonummy hendrer</div>  
          </li>
          <li>
            <div className="list2_aside">$16.68</div>
            <div className="list2_no-flow">Mauris phasellus porta fusce</div>  
          </li>
          <li>
            <div className="list2_aside">$23.87</div>
            <div className="list2_no-flow">Phasellus porta fusce suscipit</div>  
          </li>             
        </ul>
      </div>
      <div className="grid_4">
        <h6>fermentum Mauris arcu magna lacinia vitae nulla eget</h6>
        <p>Nunc id velit eget lorem semper facilisis ut sed lectus. Donec interdum urna a velitpulvi nar, nec sollicitudin leo tristique. Sed mollis massa sit amet ligula aliquet interdum. Mae cenas et aliquam nisl</p>
        <br />
        <ul className="list2 wow fadeInUp">
          <li>
            <div className="list2_aside">$23.87</div>
            <div className="list2_no-flow">Amet consectetuer adipiscing elit</div>                
          </li>
          <li>
            <div className="list2_aside">$10.22</div>
            <div className="list2_no-flow">Praesent vestibulum molestie</div>                
          </li>
          <li>
            <div className="list2_aside">$24.82</div>
            <div className="list2_no-flow">Acus enean nonummy hendrer</div>                
          </li>
          <li>
            <div className="list2_aside">$16.68</div>
            <div className="list2_no-flow">Mauris phasellus porta fusce</div>                
          </li>
          <li>
            <div className="list2_aside">$23.87</div>
            <div className="list2_no-flow">Phasellus porta fusce suscipit</div>                
          </li>
          <li>
            <div className="list2_aside">$12.10</div>
            <div className="list2_no-flow">Lorem ipsum dolor siteme</div>                
          </li>
          <li>
            <div className="list2_aside">$23.87</div>
            <div className="list2_no-flow">Amet consectetuer adipiscing elit </div>                
          </li>
          <li>
            <div className="list2_aside">$10.22</div>
            <div className="list2_no-flow">Praesent vestibulum molestie </div>                
          </li>
        </ul>
      </div>
      <div className="grid_4">
        <h6>nulla eget consectetur sodales purus. Vivamus luctus risus </h6>
        <p>Donec interdum urna a velitpulvi nar, nec sollicitudin leo tristique. Sed mollis massa sit amet ligula aliquet interdum. Mae cenas et aliquam nisl. Proin non viverra nibh. Ves tibulum ante ipsum primis</p>
        <br />
        <ul className="marked-list wow fadeInUp">
          <li>Pestibulum molestieenean nonummy</li>
          <li>Hendreritivamus eget nibh vel metus</li>
          <li>Etiam cursus leo psum</li>
          <li>Nulla facilisii primis neclaoreet</li>
          <li>Aenean nec eros luctus</li>
          <li>Vestibulum ante faucibus orci</li>
          <li>Ultrices posuere itudin </li>
          <li>Suspendisse sollic velitaugue</li>
          <li>Ut pharetra augue nec</li>           
        </ul>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}

export default PricesPage;
