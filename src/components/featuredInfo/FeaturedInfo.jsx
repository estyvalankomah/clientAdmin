import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem staff">
        <span className="featuredTitle">Staff</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">41</span>
        </div>
      </div>
      <div className="featuredItem students">
        <span className="featuredTitle">Students</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">25</span>
        </div>
      </div>
      <div className="featuredItem guests">
        <span className="featuredTitle">Guests</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">8</span>
        </div>
      </div>
    </div>
  );
}
