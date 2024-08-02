import classNames from "classnames/bind";
import styles from "./Header.module.css";
import { Container } from "react-bootstrap";
import Button from "../Button/Button";

const cx = classNames.bind(styles);

function Header() {
  return (
    <Container>
      <div className={cx("wrapper")}>
        <div className={cx("left")}>
          <h2 className={cx("logo")}>flowt</h2>

          <ul>
            <li>Home</li>
            <li>Solutions</li>
            <li>Pricing</li>
            <li>Developers</li>
          </ul>
        </div>
        <div>
          <Button outline>Log in</Button>
          <Button primary>Publish App</Button>
        </div>
      </div>
    </Container>
  );
}

export default Header;
