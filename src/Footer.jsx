import twitter from "./assets/Twitter Icon.svg";
import facebook from "./assets/Facebook Icon.svg";
import instagram from "./assets/Instagram Icon.svg";
import linkedin from "./assets/Linkedin Icon.svg";
import github from "./assets/GitHub Icon.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="">
        <img src={twitter} alt="twitter-logo" className="social twitter" />
      </a>
      <a href="">
        <img src={facebook} alt="facebook-logo" className="social facebook" />
      </a>
      <a href="">
        <img
          src={instagram}
          alt="instagram-logo"
          className="social instagram"
        />
      </a>
      <a href="">
        <img src={linkedin} alt="linkedin-logo" className="social linkedin" />
      </a>
      <a href="">
        <img src={github} alt="github-logo" className="social github" />
      </a>
    </footer>
  );
}
