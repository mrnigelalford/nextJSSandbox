import { NextPage } from 'next';
import { Fragment, useEffect } from 'react';
// -------- custom component -------- //
import { FAQ2 } from 'components/blocks/faq';
import { Hero9 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { Clients3 } from 'components/blocks/clients';
import { Pricing6 } from 'components/blocks/pricing';
import { Process9 } from 'components/blocks/process';
import { Services12 } from 'components/blocks/services';
import { Testimonial10 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';
import { setCookie } from 'cookies-next';
import NextLink from 'components/reuseable/links/NextLink';

// -------- icons -------- //
import Rocket from 'icons/lineal/Rocket';
import Shield from 'icons/lineal/Shield';
import Savings from 'icons/lineal/Savings';

// -------- data -------- //
import { accordionList2 } from 'data/faq';
import Megaphone from 'icons/lineal/Megaphone';
import pageData from 'data/adwatt';


const Demo9: NextPage = () => {
  // useEffect(() => {
  //   setCookie('landing-page', 'page2');
  // })

  // self-serve programmatic advertising platform used by exceptional digital marketers like you

  // cta send user to form

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
        // button={
        //   <a
        //     href="#"
        //     data-bs-toggle="modal"
        //     data-bs-target="#modal-signin"
        //     className="btn btn-sm btn-primary rounded-pill"
        //   >
        //     Sign In
        //   </a>
        // }
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper mb-8">
        {/* ========== hero section ========== */}
        <Hero9 heroTitle={pageData.heroTitle} typewriterOptions={pageData.typewriterOptions} subtitle={pageData.subtitle} cta={'Get Started'} />

        <section className="wrapper bg-light">
          <div className="container py-14 pt-md-17 pb-md-25" style={{ paddingBottom: 'revert !important' }}>
            {/* ========== clients section ========== */}
            {/* <Clients3 /> */}

            {/* ========== why choose section ========== */}
            <Services12
              title={pageData.service.title}
              subtitle={pageData.service.subtitle}
              description={pageData.features.description}
              features={pageData.features.list}
              cta={pageData.features.cta}
              blocks={pageData.service.blocks}
              listTitle={pageData.features.listTitle}/>
          </div>
        </section>

        {/* ========== testimonial section ========== */}
        {/* <Testimonial10 /> */}

        <section style={{ display: 'none' }} className="wrapper bg-light">
          <div className="container py-14 py-md-17">
            {/* ========== how it works section ========== */}
            {/* <Process9 /> */}

            {/* ========== pricing section ========== */}
            <Pricing6 title={pageData.pricing.title} subtitle={pageData.pricing.subtitle} cta={pageData.pricing.cta} pricingList={pageData.pricing.pricingList} />
          </div>
        </section>

        {/* ========== faq section ========== */}
        <section style={{display: 'none'}}>
          <FAQ2 titleColor="muted" accordionList={accordionList2} />
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default Demo9;
