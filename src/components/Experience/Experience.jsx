import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      position: "Full Stack Software Developer",
      company: "Vision For Humanity",
      location: "Auckland, New Zealand",
      duration: "Sep 2024 - Present",
      responsibilities: "Implementing responsive UIs, Integrating APIS.",
    },
    {
      position: "Senior Software Developer",
      company: "Danertu Technology Co.",
      location: "Zhuhai, China",
      duration: "Jan 2019 - July 2022",
      responsibilities:
        "Led the development of ticket ordering website and APIs.",
    },
    {
      position: "Software Developer",
      company: "Veknet Technology Co.",
      location: "Zhuhai, China",
      duration: "Apr 2016 - July 2018",
      responsibilities: "Created ads management platform and APIs.",
    },
    {
      position: "Software Developer",
      company: "Gainet Technology Group",
      location: "Guangzhou, China",
      duration: "Agu 2014 - Mar 2016",
      responsibilities: "Developed e-commercial platforms and game APIs.",
    },
  ];

  return (
    <section id="experience" className="experience-section py-5 bg-light">
      <div className="container">
        <h2 className="experience-title text-center mb-5">My Experience 🌟</h2>
        <div className="row gy-4">
          {experiences.map((exp, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="experience-card p-4 shadow-lg rounded h-100 text-center">
                <h3 className="experience-position mb-2">{exp.position}</h3>
                <h5 className="experience-company text-muted mb-3">
                  {exp.company}
                </h5>
                <p className="experience-detail">
                  <span className="icon">📍</span> {exp.location}
                </p>
                <p className="experience-detail">
                  <span className="icon">🗓</span> {exp.duration}
                </p>
                <p className="experience-detail">
                  <span className="icon">✔</span> {exp.responsibilities}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
