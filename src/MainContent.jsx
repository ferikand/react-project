import Button from "./Button";
import Credentials from "./Credentials";
import Info from "./Info";

export default function MainContent() {
  return (
    <div className="main">
      <Credentials />
      <Button />
      <Info />
    </div>
  );
}
