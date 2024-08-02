import { Col, Container, Row } from "react-bootstrap";
import style from "./Hero.module.css";
import classNames from "classnames/bind";
import Button from "../Button/Button";
import images from "../../assets/Image";

const cx = classNames.bind(style);

function Hero() {
  return (
    <div className={cx("wrapper")}>
      <Container>
        <Row>
          <Col className={cx("left")}>
            <div>
              <h1>App builder</h1>
              <h3>for iOS & Android</h3>
              <p>
                Our powerful app builder will help you build your desired app in
                minutes without coding knowledge and once your app is ready, you
                can publish it on Google Play and App Store.
              </p>
              <div className={cx("left-bottom")}>
                <Button primary>Publish App</Button>
                <Button outline>View Demo</Button>
              </div>
            </div>
          </Col>
          <Col className={cx("iPhone")}>
            <img src={images.iPhone.default} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
