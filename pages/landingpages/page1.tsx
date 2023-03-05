import { NextPage } from 'next';
import { Fragment, useEffect } from 'react';
// -------- custom component -------- //
import { Hero5 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { Pricing4 } from 'components/blocks/pricing';
import { Clients1 } from 'components/blocks/clients';
import { Process4 } from 'components/blocks/process';
import { Services6 } from 'components/blocks/services';
import { CTA2 } from 'components/blocks/call-to-action';
import { Testimonial7 } from 'components/blocks/testimonial';
import { Tiles6, Tiles7, Tiles8, Tiles9 } from 'components/elements/tiles';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import { setCookie } from 'cookies-next';
import pageData from 'data/adwatt';

const Demo5: NextPage = () => {
  // useEffect(() => {
  //   setCookie('landing-page', 'page1');
  // })
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          logoAlt="logo-dark"
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero5 title={pageData.heroTitle} subtitle={pageData.subtitle} />

        <section className="wrapper bg-light">
          <div className="container pb-4 pb-md-2 mb-lg-21 mb-xl-23">
            {/* ========== service-1 section ========== */}
            <Services6
              bulletColor="red"
              colOne={<Tiles7 />}
              rowClassNames="mb-14 mb-md-18"
              title={pageData.features.listTitle}
              description={`Promote your business in one, two or several of our Host Partner locations. Be exclusive or semi-exclusive in any Host Partner location.

              Become a Host Partner

              Get your own screen that promotes your own content at the same time playing your business in other non-competitive Host Partner locations.

              Closed Network Partner

              Get your own dedicated screen that showcases only your content while at the same time promoting your business in other Host Partner locations. `}
            />
          </div>
        </section>

        {/* ========== our process section ========== */}
        <Process4 />

        {/* ========== call to action section ========== */}
        <CTA2 />
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default Demo5;
