const AboutArtist = ({ data }) => {
  return (
    <div className="about-artist-wrapper r-b m-5 p-5 w-100">
      <h3 className="mb-10">About the artist</h3>
      <img
        src="https://imgs.search.brave.com/FdxtiIN_OM894SmP2JCHbVPnJpLW2EhDFPPf75Zxmfo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS8zMDB4MzAwL2Qx/MmQyMWI4YzRiYjlh/NzUxNjAzZWEyOTBj/N2ExMmI3LmpwZw"
        alt=""
        className="artist-image mb-10"
      />
      <h3 className="mb-10 h-underline">{data}</h3>
      <div className="monthly-listeners-wrapper">
        <span>monthly listeners number*</span>
        <br />
        <div className="flex-row-between pr-5">
          <span>monthly listeners</span>
          <button className="button">follow</button>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor
          enim possimus illum iusto voluptas!
        </p>
      </div>
    </div>
  );
};

export default AboutArtist;
