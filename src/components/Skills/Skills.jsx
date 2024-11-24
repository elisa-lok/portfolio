import "./Skills.css";

const Skills = () => {
  const skillsData = {
    "Programming Languages": ["C#", "JavaScript", "Python", "PHP", "Ruby"],
    "Frameworks and Libraries": [
      "ASP.NET Core",
      "ReactJS",
      "Node.js",
      "Django",
      "Laravel",
      "Yii",
      "CodeIgniter",
      "Next.js",
    ],
    Databases: ["MySQL", "PostgreSQL", "MongoDB", "SQLite3", "Firebase"],
    "Cloud Platforms": ["Azure", "AWS"],
    "Package Management and Version Control": ["Webpack", "Vite", "npm", "Vercel", "Git"],
    DevOps: ["Docker", "Kubernetes", "CI/CD pipelines"],
  };

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <h2 className="skills-title text-center mb-5">My Technical Arsenal 🛠️</h2>
        <div className="row">
          {Object.entries(skillsData).map(([category, items], index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card skill-card shadow-sm h-100">
                <div className="card-header text-white custom-card-header text-center">
                  <h5 className="card-title">{category}</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {items.map((skill, idx) => (
                      <li
                        key={idx}
                        className="list-group-item d-flex align-items-center"
                      >
                        <span className="icon me-2">✅</span> {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
