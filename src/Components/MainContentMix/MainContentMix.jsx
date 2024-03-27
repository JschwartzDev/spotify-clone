const MainContentMix = ({ name, image, id }) => {
  return (
    <div className="mix-wrapper m-10 r-b h-box p-5" key={id}>
      <div className="image">
        <img src={image} alt="" className="r-b w-100" />
      </div>
      <div className="details">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default MainContentMix;
