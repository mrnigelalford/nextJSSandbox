import { FC } from 'react';
import { slideInDownAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero5: FC<HeroProps> = (props) => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-6 pb-5 pt-md-14 pb-md-5 text-center">
        <div className="row">
          <div className="col-md-10 col-lg-8 col-xl-8 col-xxl-6 mx-auto mb-13">
            <h1 className="display-1 mb-4" style={slideInDownAnimate('0ms')}>
              {props.title}
            </h1>

            <p className="lead fs-lg px-xl-12 px-xxl-6 mb-7" style={slideInDownAnimate('300ms')}>
              {props.subtitle}
            </p>

            <div className="d-flex justify-content-center" style={slideInDownAnimate('600ms')}>
              <span style={slideInDownAnimate('900ms')}>
                <NextLink href="#" title="Get Started" className="btn btn-primary rounded mx-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero5;
