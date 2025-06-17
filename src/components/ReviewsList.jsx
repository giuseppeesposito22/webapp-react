import ReviewCard from "./ReviewCard";

export default function ReviewsList({ reviews }) {
  return (
    <section className="reviews my-5">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </section>
  );
}
