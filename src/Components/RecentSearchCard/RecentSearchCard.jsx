const RecentSearchCard = ({ album }) => {
  return (
    <div className="card-wrapper r-b p-5 h-box m-5">
      <img src={album.images[1].url} alt="" className="w-100 r-b" />
      <div className="details flex-col-start">
        <div className="w-100 mb-10">{album.name}</div>
      </div>
    </div>
  );
};

export default RecentSearchCard;
