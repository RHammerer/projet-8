import "./rating.css";
import GrayStar from "../../assets/gray-star.svg";
import RedStar from "../../assets/red-star.svg";

export default function Rating({ rating }) {
  const array = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {array.map((score) => {
        if (score <= rating) {
          return <img src={RedStar} alt="etoile rouge " />;
        }
        return <img src={GrayStar} alt="etoile grise " />;
      })}
    </div>
  );
}
