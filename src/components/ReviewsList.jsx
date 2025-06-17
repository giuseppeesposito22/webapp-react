import ReviewCard from "./ReviewCard";

const reviews = [
  {
    id: 1,
    movie_id: 1,
    name: "Alice",
    vote: 5,
    text: "A mind-bending masterpiece.",
    created_at: "2024-11-29T10:40:13.000Z",
    updated_at: "2024-11-29T10:40:13.000Z",
  },
  {
    id: 2,
    movie_id: 1,
    name: "Bob",
    vote: 4,
    text: "Great visuals and a compelling story.",
    created_at: "2024-11-29T10:40:13.000Z",
    updated_at: "2024-11-29T10:40:13.000Z",
  },
  {
    id: 3,
    movie_id: 1,
    name: "Charlie",
    vote: 3,
    text: "Confusing at times, but worth watching.",
    created_at: "2024-11-29T10:40:13.000Z",
    updated_at: "2024-11-29T10:40:13.000Z",
  },
];

export default function ReviewsList() {
  return (
    <section className="reviews my-5">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </section>
  );
}
