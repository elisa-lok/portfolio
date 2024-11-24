const Header = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menus = [
    { id: "home", text: "Home" },
    { id: "experience", text: "Experience" },
    { id: "skills", text: "Skills" },
    { id: "projects", text: "Projects" },
    { id: "contact", text: "Contact" },
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-brand btn btn-link"
            onClick={() => handleScrollTo("home")}
          >
            Elisa's Portfolio
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {menus.map((item) => (
                <li key={item.id} className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={() => handleScrollTo(item.id)}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
