const AboutArtist = ({ data }) => {
  return (
    <div className="about-artist-wrapper r-b m-5 p-5">
      <h3>About the artist</h3>
      <img
        src="https://images.unsplash.com/photo-1710065574765-a685385c6d9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMTEzODY2Mw&ixlib=rb-4.0.3&q=80&w=200"
        alt=""
        className="artist-image"
      />
      <h3>{data}</h3>
      <div className="monthly-listeners-wrapper">
        <span>monthly listeners number*</span>
        <br />
        <div className="flex-row-between pr-5">
          <span>monthly listeners</span>
          <button className="follow-btn">follow</button>
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
