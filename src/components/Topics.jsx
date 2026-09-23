function Topics() {
  return (
    <div className="topics">
      <h1 className="topics__title">Topics recommended for you</h1>
      <div className="topics__input">
        <input type="text" placeholder="Suggest a topic" />
        <button>Submit</button>
      </div>
      <div className="topics__container">
        <p>Website</p>
        <p>Css</p>
        <p>Javascript</p>
        <p>Aws</p>
        <p>Mongo DB</p>
        <p>Azure</p>
        <p>Docker</p>
        <p>GitHub</p>
        <p>React Js</p>
      </div>
    </div>
  );
}


export default Topics