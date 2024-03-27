import FooterSongDetails from "../FooterSongDetails/FooterSongDetails";
import FooterSongControls from "../FooterSongControls/FooterSongControls";
import FooterDeviceControls from "../FooterDeviceControls/FooterDeviceControls";

const Footer = ({ token }) => {
  return (
    <div className="footer-wrapper flex-row-between w-100">
      <FooterSongDetails />
      <FooterSongControls token={token} />
      <FooterDeviceControls />
    </div>
  );
};

export default Footer;
