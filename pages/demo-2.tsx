import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Hero2 } from 'components/blocks/hero';
import { Team2 } from 'components/blocks/team';
import { About2 } from 'components/blocks/about';
import { Navbar } from 'components/blocks/navbar';
import { Footer4 } from 'components/blocks/footer';
import { Clients1 } from 'components/blocks/clients';
import { Process2 } from 'components/blocks/process';
import { Services3 } from 'components/blocks/services';
import { Portfolio1 } from 'components/blocks/portfolio';
import { Testimonial6 } from 'components/blocks/testimonial';
import Topbar from 'components/elements/Topbar';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';

const Demo2: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== topbar section ========== */}
      <Topbar />

      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar
          language
          logoAlt="logo"
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-light">
          <div className="container pt-8 pt-md-14">
            {/* ========== hero section ========== */}
            <Hero2 />

            {/* ========== our clients section ========== */}
            {/* <div className="px-lg-5 mb-14 mb-md-17">
              <Clients1 />
            </div> */}

            {/* ========== what we do section ========== */}
            <Services3 />

          </div>
          <div className="container">
            {/* ========== who are we section ========== */}
            <About2 />

            {/* ========== testimonial section ========== */}
            <Testimonial6 />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer4 />
    </Fragment>
  );
};

export default Demo2;
