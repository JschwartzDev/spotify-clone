const RecentSearchCard = () => {
  return (
    <div className="card-wrapper r-b p-5 h-box m-5">
      <img
        src="https://imgs.search.brave.com/AGc_88Cy4fdcHX4P-gvmO61ENIlZfTrAJeYTUYW57TU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZm9udHNpbnVz/ZS5jb20vc3RhdGlj/L3VzZS1tZWRpYS1p/dGVtcy8xODEvMTgw/OTI0L3VwdG8tNzAw/eGF1dG8vNjNiOTJj/YTkvQWxsJTIwb2Yl/MjBNZSUyMGNvdmVy/LmpwZWc"
        alt=""
        className="w-100 r-b"
      />
      <div className="details flex-col-start">
        <div className="w-100 mb-10">Song Name</div>
        <div className="w-100">Artists</div>
      </div>
    </div>
  );
};

export default RecentSearchCard;
