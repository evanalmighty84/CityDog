import Container from '../Container';

import defaultBanner from '../../videos/soccerkids3.mp4';

const HeroContent = ({ imageSrc = defaultBanner, children }) => {
  return (
    <div className="hero">
      <div className="img_wrapper">
        <img src={imageSrc} alt="banner" height="450px" />
        <div className="overlay"></div>
      </div>
      <div className="content">
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default HeroContent;
