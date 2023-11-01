import S1 from "../../assets/icons/Star.svg";
import S2 from "../../assets/icons/StarFill.svg";
import S3 from "../../assets/icons/StarHalf.svg";

export default function Stars({ rating, total }) {
  function renderStars() {
    const stars = [];
    const maxRating = 5;

    for (let i = 1; i <= maxRating; i++) {
      if (i <= rating) {
        stars.push(<img key={i} width={14} height={14} src={S2} />);
      } else if (i - 0.5 <= rating) {
        stars.push(<img key={i} width={14} height={14} src={S3} />);
      } else {
        stars.push(<img key={i} width={14} height={14} src={S1} />);
      }
    }

    return stars;
  }

  return (
    <div className="flex items-center justify-start gap-2">
      <div className="grid grid-cols-5">{renderStars()}</div>
      <span>{total} avalições</span>
    </div>
  );
}
