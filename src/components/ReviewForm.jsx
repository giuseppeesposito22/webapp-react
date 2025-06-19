export default function ReviewForm({
  formData,
  setFormData,
  handleReviewFormSubmit,
}) {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="row my-5" onSubmit={handleReviewFormSubmit}>
        <div className="col-6">
          <label htmlFor="NameInput" className="form-label">
            Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control"
            type="text"
            id="NameInput"
            required
          ></input>
        </div>
        <div className="col-6">
          <label htmlFor="voteInput" className="form-label">
            Vote
          </label>
          <input
            name="vote"
            value={formData.vote}
            onChange={handleInputChange}
            className="form-control"
            type="number"
            id="voteInput"
            min={1}
            max={5}
            required
          ></input>
        </div>
        <div className="col-12">
          <label htmlFor="textInput" className="form-label">
            Text
          </label>
          <textarea
            name="text"
            value={formData.text}
            onChange={handleInputChange}
            className="form-control"
            type="text"
            id="textInput"
            rows={5}
            required
          ></textarea>
        </div>
        <div className="col-4">
          <button className="btn btn-primary my-2">Add review</button>
        </div>
      </form>
    </>
  );
}
