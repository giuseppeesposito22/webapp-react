import RatingStar from "./RatingStar";

export default function ReviewCard({ review }) {
  return (
    <div className="review-card" key={review.id}>
      <div className="user-review">{review.name[0]}</div>
      <div>{review.text}</div>
      <div>
        <RatingStar vote={review.vote} />
      </div>
    </div>
  );
}
