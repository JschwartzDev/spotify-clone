const FooterSongDetails = () => {
  return (
    <div className="footer-details-wrapper flex-row-start mb-10 ml-10 w-25">
      <img
        className="footer-details-image r-b"
        src="https://imgs.search.brave.com/AGc_88Cy4fdcHX4P-gvmO61ENIlZfTrAJeYTUYW57TU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZm9udHNpbnVz/ZS5jb20vc3RhdGlj/L3VzZS1tZWRpYS1p/dGVtcy8xODEvMTgw/OTI0L3VwdG8tNzAw/eGF1dG8vNjNiOTJj/YTkvQWxsJTIwb2Yl/MjBNZSUyMGNvdmVy/LmpwZWc"
      ></img>
      <div className="flex-row-start ml-10 mt-10">
        <h4 className="w-100 h-underline">Song Name</h4>
        <span className="h-underline">Artist Name</span>
      </div>
    </div>
  );
};

export default FooterSongDetails;
