import Navbar from "../../components/navbar/NavBar";
import {NavLink} from "react-router-dom"

const Home = () => {
       return (
              <>

                     <Navbar />

                     <div>
  {/* Header */}
  <header id="header" className="header">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="text-container">
            <h1 className="h1-large">The #1 CRM app <span className="replace-me">in Africa</span></h1>
            <p className="p-large">all business, young startups</p>
            <NavLink className="btn-solid-lg" to="/register">Sign up for free</NavLink>
          </div> {/* end of text-container */}
        </div> {/* end of col */}
        <div className="col-lg-6">
          <div className="image-container">
            <img className="img-fluid" src="../asset/images/sk-n.svg" alt="alternative" />
          </div> {/* end of image-container */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </header> {/* end of header */}
  {/* end of header */}
  {/* Features */}
  <div id="features" className="cards-1">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="h2-heading">Ioniq CRM application is packed with <span>awesome features</span></h2>
        </div> {/* end of col */}
      </div> {/* end of row */}
      <div className="row">
        <div className="col-lg-12">
          {/* Card */}
          <div className="card">
            <div className="card-icon">
              <span className="fas fa-headphones-alt" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Customer Lists</h4>
              <p>Et blandit nisl libero at arcu. Donec ac lectus sed tellus mollis viverra. Nullam pharetra ante at nunc elementum</p>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <div className="card-icon green">
              <span className="far fa-clipboard" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Sales Tracking</h4>
              <p>Vulputate nibh feugiat. Morbi pellent diam nec libero lacinia, sed ultrices velit scelerisque. Nunc placerat justo sem</p>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <div className="card-icon blue">
              <span className="far fa-comments" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Reporting Tool</h4>
              <p>Ety suscipit metus sollicitudin euqu isq imperdiet nibh nec magna tincidunt, nec pala vehicula neque sodales verum</p>
            </div>
          </div>
          {/* end of card */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of cards-1 */}
  {/* end of services */}
  {/* Details 1 */}
  <div id="details" className="basic-1 bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xl-5">
          <div className="text-container">
            <h2>Manage your customer’s expectations and get them to trust you</h2>
            <p>Vestibulum ullamcorper augue ex, imperdiet tincidunt tellus bibendum inconsectetur rutrum mauris orbi scelerisque cursus augue, ac suscipit sem mattis at ut suscipit</p>
            <a className="btn-solid-reg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Modal</a>
          </div> {/* end of text-container */}
        </div> {/* end of col */}
        <div className="col-lg-6 col-xl-7">
          <div className="image-container">
            <img className="img-fluid" src="../asset/images/details-1.svg" alt="alternative" />
          </div> {/* end of image-container */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of basic-1 */}
  {/* end of details 1 */}
  {/* Details Modal */}
  <div id="staticBackdrop" className="modal fade" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="row">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          <div className="col-lg-8">
            <div className="image-container">
              <img className="img-fluid" src="../asset/images/details-modal.jpg" alt="alternative" />
            </div> {/* end of image-container */}
          </div> {/* end of col */}
          <div className="col-lg-4">
            <h3>Goals Setting</h3>
            <hr />
            <p>In gravida at nunc sodales pretium. Vivamus semper, odio vitae mattis auctor, elit elit semper magna ac tum nico vela spider</p>
            <h4>User Feedback</h4>
            <p>Sapien vitae eros. Praesent ut erat a tellus posuere nisi more thico cursus pharetra finibus posuere nisi. Vivamus feugiat</p>
            <ul className="list-unstyled li-space-lg">
              <li className="d-flex">
                <i className="fas fa-chevron-right" />
                <div className="flex-grow-1">Tincidunt sem vel brita bet mala</div>
              </li>
              <li className="d-flex">
                <i className="fas fa-chevron-right" />
                <div className="flex-grow-1">Sapien condimentum sacoz sil necr</div>
              </li>
              <li className="d-flex">
                <i className="fas fa-chevron-right" />
                <div className="flex-grow-1">Fusce interdum nec ravon fro urna</div>
              </li>
              <li className="d-flex">
                <i className="fas fa-chevron-right" />
                <div className="flex-grow-1">Integer pulvinar biolot bat tortor</div>
              </li>
              <li className="d-flex">
                <i className="fas fa-chevron-right" />
                <div className="flex-grow-1">Id ultricies fringilla fangor raq trinit</div>
              </li>
            </ul>
            <a id="modalCtaBtn" className="btn-solid-reg" href="#your-link">Details</a>
            <button type="button" className="btn-outline-reg" data-bs-dismiss="modal">Close</button>
          </div> {/* end of col */}
        </div> {/* end of row */}
      </div> {/* end of modal-content */}
    </div> {/* end of modal-dialog */}
  </div> {/* end of modal */}
  {/* end of details modal */}
  {/* Details 2 */}
  <div className="basic-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="image-container">
            <img className="img-fluid" src="../asset/images/details-2.png" alt="alternative" />
          </div> {/* end of image-container */}
        </div> {/* end of col */}
        <div className="col-lg-6">
          <div className="text-container">
            <h2>Anyone can start using the app with minimum skills</h2>
            <p>Velit dictum non proin egestas convallis nunc, eu auctor massa. Nam hendrerit, eros ut viverra lobortis, mauris nisi porta risus, placerat dignissim tellus auctor masse</p>
            <ul className="list-unstyled li-space-lg">
              <li className="d-flex">
                <i className="fas fa-square" />
                <div className="flex-grow-1">Fusce ipsum augue, ultrices rutrum est accel, pulvin</div>
              </li>
              <li className="d-flex">
                <i className="fas fa-square" />
                <div className="flex-grow-1">Fermentum elit. Vestibulum cursuso bibendum viverra</div>
              </li>
              <li className="d-flex">
                <i className="fas fa-square" />
                <div className="flex-grow-1">Quisque blandit pulvinar metus, eu sta malesuada</div>
              </li>
            </ul>
          </div> {/* end of text-container */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of basic-2 */}
  {/* end of details 2 */}
  {/* Testimonials */}
  <div className="slider-1 bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="h2-heading">Few words from our clients</h2>
        </div> {/* end of col */}
      </div> {/* end of row */}
      <div className="row">
        <div className="col-lg-12">
          {/* Card Slider */}
          <div className="slider-container">
            <div className="swiper-container card-slider">
              <div className="swiper-wrapper">
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="../asset/images/testimonial-1.jpg" alt="alternative" />
                    <div className="card-body">
                      <p className="testimonial-text">Tortor sodales eget. Vivamus imperdiet leo eu risus tincidunt uris. Proin placerat, urna hendrerit placerat erase convallis</p>
                      <p className="testimonial-author">Jude Thorn - Designer</p>
                    </div>
                  </div>
                </div> {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="../asset/images/testimonial-2.jpg" alt="alternative" />
                    <div className="card-body">
                      <p className="testimonial-text">Eros volutpat ante mauris euismod sem, ut varius nisi lectus in urna. Integer luctus, nunc eget maximus intem, orci risus</p>
                      <p className="testimonial-author">Roy Smith - Developer</p>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="../asset/images/testimonial-3.jpg" alt="alternative" />
                    <div className="card-body">
                      <p className="testimonial-text">Sed congue ex quam, sit amet venenatis dolor lacinia vulputate. Nunc pulvinar ex ex, sit amet scelerisque tellus pretium semper</p>
                      <p className="testimonial-author">Marsha Singer - Marketer</p>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="../asset/images/testimonial-4.jpg" alt="alternative" />
                    <div className="card-body">
                      <p className="testimonial-text">Etiam est lorem, interdum non semper ut, bibendum vitae ante. Pellente sollicitun sagittis lectus. Aenean in comod</p>
                      <p className="testimonial-author">Tim Shaw - Designer</p>
                    </div>
                  </div>
                </div> {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="../asset/images/testimonial-5.jpg" alt="alternative" />
                    <div className="card-body">
                      <p className="testimonial-text">Quisque nec turpis placerat, accumsan lorem lobortis, vestibulum elit. Fusce finibus nisl varius semper elementum vivamus</p>
                      <p className="testimonial-author">Lindsay Spice - Marketer</p>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="../asset/images/testimonial-6.jpg" alt="alternative" />
                    <div className="card-body">
                      <p className="testimonial-text">Vulputate sed tellus nec, imperdiet luctus purus. Morbi lobortis massa a mi interdum condimentum. Integer non gravida nisi</p>
                      <p className="testimonial-author">Ann Blake - Developer</p>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}
              </div> {/* end of swiper-wrapper */}
              {/* Add Arrows */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
              {/* end of add arrows */}
            </div> {/* end of swiper-container */}
          </div> {/* end of slider-container */}
          {/* end of card slider */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of slider-1 */}
  {/* end of testimonials */}
  {/* Invitation */}
  <div className="basic-3">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h4>Ioniq will change the way you think about CRM solutions due to it’s advanced tools and integrated functionalities</h4>
          <a className="btn-outline-lg page-scroll" href="sign-up.html">Sign up for free</a>
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of basic-3 */}
  {/* end of invitation */}
  {/* Pricing */}
  <div id="pricing" className="cards-2 bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="h2-heading">Free forever tier and 2 pro plans</h2>
        </div> {/* end of col */}
      </div> {/* end of row */}
      <div className="row">
        <div className="col-lg-12">
          {/* Card */}
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <img className="decoration-lines" src="../asset/images/decoration-lines.svg" alt="alternative" /><span>Free tier</span><img className="decoration-lines flipped" src="../asset/images/decoration-lines.svg" alt="alternative" />
              </div>
              <ul className="list-unstyled li-space-lg">
                <li>Fusce pulvinar eu mi acm</li>
                <li>Curabitur consequat nisl bro</li>
                <li>Reget facilisis molestie</li>
                <li>Vivamus vitae sem in tortor</li>
                <li>Pharetra vehicula ornares</li>
                <li>Vivamus dignissim sit amet</li>
                <li>Ut convallis aliquama set</li>
              </ul>
              <div className="price">Free</div>
              <a href="sign-up.html" className="btn-solid-reg">Sign up</a>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <img className="decoration-lines" src="../asset/images/decoration-lines.svg" alt="alternative" /><span>Advanced</span><img className="decoration-lines flipped" src="../asset/images/decoration-lines.svg" alt="alternative" />
              </div>
              <ul className="list-unstyled li-space-lg">
                <li>Nunc commodo magna quis</li>
                <li>Lacus fermentum tincidunt</li>
                <li>Nullam lobortis porta diam</li>
                <li>Announcing of invita mro</li>
                <li>Dictum metus placerat luctus</li>
                <li>Sed laoreet blandit mollis</li>
                <li>Mauris non luctus est</li>
              </ul>
              <div className="price">$19<span>/month</span></div>
              <a href="sign-up.html" className="btn-solid-reg">Sign up</a>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <img className="decoration-lines" src="../asset/images/decoration-lines.svg" alt="alternative" /><span>Professional</span><img className="decoration-lines flipped" src="../asset/images/decoration-lines.svg" alt="alternative" />
              </div>
              <ul className="list-unstyled li-space-lg">
                <li>Quisque rutrum mattis</li>
                <li>Quisque tristique cursus lacus</li>
                <li>Interdum sollicitudin maec</li>
                <li>Quam posuerei pellentesque</li>
                <li>Est neco gravida turpis integer</li>
                <li>Mollis felis. Integer id quam</li>
                <li>Id tellus hendrerit lacinia</li>
              </ul>
              <div className="price">$29<span>/month</span></div>
              <a href="sign-up.html" className="btn-solid-reg">Sign up</a>
            </div>
          </div>
          {/* end of card */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of cards-2 */}
  {/* end of pricing */}
  {/* Questions */}
  <div className="accordion-1">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="h2-heading">Frequent questions</h2>
        </div> {/* end of col */}
      </div> {/* end of row */}   
      <div className="row">
        <div className="col-lg-12">
          <div className="accordion" id="accordionExample">
            {/* Accordion Item */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How can I contact you quickly and get a reasonable quote more for my project?</button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">Sed lacinia cursus viverra. Nunc sed libero euismod, congue dui a, vulputate quam. Pellentesque neque nisi, ultrices ut ipsum ac, mattis sollicitudin neque. Ut ac nunc sem. Etiam id erat facilisis magna sagittis porta. Donec eu dolor eu dolor finibus sodales consectetur, et condimentum elit tincidunt</div>
              </div>
            </div>
            {/* end of accordion-item */}
            {/* Accordion Item */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Is the Free Tier available for unlimited time or it will end more words after a while?</button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">Mauris faucibus placerat nisl. Sed eros odio, posuere at felis quis, tincidunt facilisis nibh. Nulla in ante sem. Nam aliquam urna nisi, cursus semper dolor convallis at. Duis vulputate est in consectetur, et condimentum elit tincidunt libero consectetur, et condimentum suis vulputate est in libero</div>
              </div>
            </div>
            {/* end of accordion-item */}
            {/* Accordion Item */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Can I use the app on mobile devices or it’s limited more words to desktop use?</button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">Nullam at diam at mi facilisis consectetur at non turpis. Proin a felis nisi. Sed at orci rutrum, tincidunt magna vel, pharetra libero. Proin mauris orci, faucibus eget malesuada vel, consectetur, et condimentum elit tincidunt pellentesque vitae ligula. Pellentesque euismod tincidun</div>
              </div>
            </div>
            {/* end of accordion-item */}
          </div> {/* end of accordion */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of accordion-1 */}
  {/* end of questions */}
</div>

              </>
       );

}

export default Home;