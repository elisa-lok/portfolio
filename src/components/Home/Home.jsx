import "./Home.css";
import avatar from "../../assets/images/avatar.jpg";

const Home = () => {
  return (
    <section id="home" className="about-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={avatar}
              alt="Elisa's Profile"
              className="profile-photo img-fluid rounded-circle shadow-lg"
            />
          </div>
          <div className="col-md-8">
            <h1 className="about-title display-4 mb-4">
              About Me{" "}
              <span role="img" aria-label="wave">
                👋
              </span>
            </h1>
            <p className="about-text lead">
              Hello! I'm <span className="highlight">Elisa</span>, a passionate
              <span className="highlight"> software developer</span> with over{" "}
              <strong>7 years</strong> of experience in crafting{" "}
              <span className="emphasis">innovative solutions</span>. 🌟 I excel
              in blending{" "}
              <span className="emphasis">problem-solving skills</span> with a
              deep commitment to delivering
              <em> user-centric</em>, high-quality digital experiences.
            </p>
            <p className="about-text lead">
              My journey spans building{" "}
              <span className="highlight">scalable e-commerce platforms</span>,
              developing
              <span className="highlight"> RESTful APIs</span>, and designing{" "}
              <span className="highlight">intuitive user interfaces</span>. Each
              project is a chance to 🚀 innovate, optimize, and exceed
              expectations, driving tangible results for businesses and
              delighting end-users. 💻
            </p>

            <div className="social-links mt-4 mb-3">
              <a
                href="https://www.linkedin.com/in/elisa-lok/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon me-3"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/elisa-lok"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-icon"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
