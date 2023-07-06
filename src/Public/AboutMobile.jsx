import pp from "./qwe.jpg";

export default function AboutMobile() {
  return (
    <div className="main-cont contact about mobile">
      <span>Get To Know</span>
      <h2 style={{ marginBottom: "1em" }}>About Me</h2>
      <div className="abt-cont">
        <div className="pp-layer">
          <div className="front-img">
            <img src={pp} alt="Me" />
          </div>
          <div className="back-img"></div>
        </div>
        <div className="abt-layer">
          <span>
            <p>
              I'm a recently graduated IT Student with 2 year of experience in
              full stack web and android app development with React, Flutter and
              Laravel looking forward to growing my experience with other
              enthusiastic developers such as myself.
            </p>
          </span>
        </div>
        <div className="exp-layer">
          <a
            href="#contact"
            className="btn-link"
            style={{ display: "block", marginTop: "2em" }}
          >
            <button>Let's Talk</button>
          </a>
        </div>
      </div>
    </div>
  );
}
