import { FC } from 'react';
import Image from 'next/image';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
// -------- data -------- //
import footerNav from 'data/footer';

const Footer8: FC = () => {
  return (
    <footer className="bg-dark text-inverse">
      <div className="container py-13 py-md-15">
        <div className="row gy-6 gy-lg-0">
          <div className="col-sm-8 col-md-4">
            <div className="widget">
              <img style={{width: '100%'}} className="mb-4" src="/img/logo-dark.png" srcSet="/img/logo-dark@2x.png 2x" alt="" />

              <address className="pe-xl-15 pe-xxl-17">Marietta, GA</address>
              <NextLink title="nigel@adwatt.co" href="mailto:#" />
              <br /> (404) 635-6709
              {/* <SocialLinks className="nav social social-white" /> */}
            </div>
          </div>

          <div className="col-sm-12 col-md-4"></div>
          <div style={{display: 'none'}} className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Get in Touch</h4>
            </div>
          </div>

          <div className="col-sm-8 col-md-4">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Learn More</h4>
              <ul className="list-unstyled  mb-0">
                {footerNav.map(({ title, url }) => (
                  <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
              <p className="mb-5">Subscribe to our newsletter to get our news &amp; deals delivered to you.</p>

              <div className="newsletter-wrapper">
                <div id="mc_embed_signup2">
                  <form
                    method="post"
                    target="_blank"
                    className="validate dark-fields"
                    id="mc-embedded-subscribe-form2"
                    name="mc-embedded-subscribe-form"
                    action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a"
                  >
                    <div id="mc_embed_signup_scroll2">
                      <div className="mc-field-group input-group form-floating">
                        <input
                          type="email"
                          name="EMAIL"
                          id="mce-EMAIL2"
                          placeholder="Email Address"
                          className="required email form-control"
                        />

                        <label htmlFor="mce-EMAIL2">Email Address</label>
                        <input
                          value="Join"
                          type="submit"
                          name="subscribe"
                          id="mc-embedded-subscribe2"
                          className="btn btn-primary"
                        />
                      </div>

                      <div id="mce-responses2" className="clear">
                        <div className="response" id="mce-error-response2" style={{ display: 'none' }} />
                        <div className="response" id="mce-success-response2" style={{ display: 'none' }} />
                      </div>

                      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                        <input type="text" tabIndex={-1} name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" />
                      </div>

                      <div className="clear" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer8;
