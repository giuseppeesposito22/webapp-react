export default function RatingStar({ vote }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      i < vote ? (
        <i className="bi bi-star-fill mx-1"></i>
      ) : (
        <i className="bi bi-star mx-1"></i>
      )
    );
  }

  return <span>{stars}</span>;
}
