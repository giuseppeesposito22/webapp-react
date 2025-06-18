export default function Loader({ show }) {
  console.log("LOADER STATUS", show);

  if (!show) return <></>;

  return (
    <div className="loader">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
