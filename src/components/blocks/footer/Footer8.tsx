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
              <NextLink href="/contact" title="Join now" className="btn btn-primary rounded mx-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer8;
