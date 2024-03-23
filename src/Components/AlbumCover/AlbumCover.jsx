const AlbumCover = ({ data }) => {
  return (
    <div className="album-cover-wrapper flex-col-start m-5 p-5 r-b w-100">
      <div className="w-100">
        <h3 className="mb-10">{data}</h3>
      </div>
      <div className="w-100">
        <img
          src="https://imgs.search.brave.com/AGc_88Cy4fdcHX4P-gvmO61ENIlZfTrAJeYTUYW57TU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZm9udHNpbnVz/ZS5jb20vc3RhdGlj/L3VzZS1tZWRpYS1p/dGVtcy8xODEvMTgw/OTI0L3VwdG8tNzAw/eGF1dG8vNjNiOTJj/YTkvQWxsJTIwb2Yl/MjBNZSUyMGNvdmVy/LmpwZWc"
          alt="nothing for now"
          className="w-100 h-100 r-b mb-5"
        />
      </div>
      <div className="w-100">
        <h3 className="mb-10">{data}</h3>
        <span>name</span>
      </div>
    </div>
  );
};

export default AlbumCover;
