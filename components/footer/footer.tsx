import Widgets from "./widgets";
import Copyright from "./copyright";
import { footer } from "./data";
const { widgets, payment } = footer;

const Footer: React.FC = () => (
  <footer className="bg-gray-200 border border-gray-300 pt-20 px-3 md:px-0">
    <Widgets widgets={widgets} />
    <Copyright />
  </footer>
);

export default Footer;
