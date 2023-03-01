import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

const Contact2: FC = () => {
  return (
    <div className="row gx-0">
      <div
        className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start d-none d-md-block"
        style={{ backgroundImage: 'url(/img/photos/tm1.jpg)' }}
      />
    </div>
  );
};

export default Contact2;
