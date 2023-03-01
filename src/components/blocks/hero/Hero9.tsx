import { FC } from 'react';
import Typewriter from 'typewriter-effect';
import { slideInDownAnimate, zoomInAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';

interface HeroProps {
 heroTitle: string;
 typewriterOptions: string[],
 subtitle: string;
 cta: string;
}

const Hero9: FC<HeroProps> = (props) => {
  // typewriter options
  const OPTIONS = {
    loop: true,
    autoStart: true,
    strings: props.typewriterOptions
  };

  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pb-12 pt-md-14 pb-md-17">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 mt-lg-n2 text-center text-lg-start order-2 order-lg-0">
            <h1 className="display-1 mb-5 mx-md-10 mx-lg-0" style={slideInDownAnimate('600ms')}>
               {props.heroTitle}<br />
              <span className="typer text-primary text-nowrap">
                <Typewriter options={OPTIONS} />
              </span>
            </h1>

            <p className="lead fs-lg mb-7" style={slideInDownAnimate('900ms')}>
              {props.subtitle}
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate('1200ms')}>
                <NextLink title={props.cta} href="/contact" className="btn btn-lg btn-primary rounded me-2" />
              </span>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row">
              <div className="col-3 offset-1 offset-lg-0 col-lg-4 d-flex flex-column">
                <div className="ms-auto mt-auto" style={zoomInAnimate('300ms')}>
                  <img
                    className="img-fluid rounded shadow-lg"
                    src="/img/locationExamples/gymLobby.png"
                    alt="demo"
                  />
                </div>
              </div>

              <div className="col-4 col-lg-4" style={zoomInAnimate('0ms')}>
                  <img
                    className="w-100 img-fluid rounded shadow-lg"
                    src="/img/locationExamples/coffeeShop.png"
                    alt="demo"
                  />
              </div>

              <div className="col-4 col-lg-4">
                <div className="ms-auto mt-auto" style={zoomInAnimate('300ms')}>
                  <img
                    className="img-fluid rounded shadow-lg"
                    src="/img/locationExamples/barbershop.png"
                    alt="demo"
                    style={{marginTop: '55%'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero9;
