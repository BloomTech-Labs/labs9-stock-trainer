import React from "react";
import { Container, Header, Placeholder } from "semantic-ui-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Indicators.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true,
  pauseOnDotsHover: true,
  pauseOnHover: true,
  arrows: false
};

const Indicators = () => (
  <Container className="slidersContainer">
    <Slider className="slidersSlider" {...settings}>
      <div>
        <Header as="h3">Indicator 1</Header>
        <Placeholder>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </div>
      <div>
        <Header as="h3">Indicator 2</Header>
        <Placeholder>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </div>
      <div>
        <Header as="h3">Indicator 3</Header>
        <Placeholder>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </div>
    </Slider>
  </Container>
);

export default Indicators;
