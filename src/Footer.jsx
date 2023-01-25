import twitter from "./assets/Twitter Icon.svg";
import facebook from "./assets/Facebook Icon.svg";
import instagram from "./assets/Instagram Icon.svg";
import linkedin from "./assets/Linkedin Icon.svg";
import github from "./assets/GitHub Icon.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://twitter.com/AndrewFerenchuk" target="_blank">
        <img src={twitter} alt="twitter-logo" className="social twitter" />
      </a>
      <a href="https://www.facebook.com/ferenchuk.a" target="_blank">
        <img src={facebook} alt="facebook-logo" className="social facebook" />
      </a>
      <a href="https://www.instagram.com/ferik.aa/" target="_blank">
        <img
          src={instagram}
          alt="instagram-logo"
          className="social instagram"
        />
      </a>
      <a href="https://www.linkedin.com/in/ferenchuk-andrey/" target="_blank">
        <img src={linkedin} alt="linkedin-logo" className="social linkedin" />
      </a>
      <a href="https://github.com/ferikand" target="_blank">
        <img src={github} alt="github-logo" className="social github" />
      </a>
    </footer>
  );
}
