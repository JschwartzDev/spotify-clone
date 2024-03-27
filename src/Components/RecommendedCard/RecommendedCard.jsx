const RecommendedCard = ({ image, name }) => {
  return (
    <div className="recommended-card-wrapper r-b flex-col-center m-10 h-box">
      <img src={image} alt="" className="w-100 h-75 r-b-top" />
      <div className="w-100 recommended-card-name-div">{name}</div>
    </div>
  );
};

export default RecommendedCard;
