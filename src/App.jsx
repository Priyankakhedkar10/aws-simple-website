import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="hero">
        <img
          src="https://avatars.githubusercontent.com/u/173941003?v=4"
          alt="Profile"
          className="profile-img"
        />

        <h1>Priyanka Khedkar</h1>

        <p className="title">Frontend Developer</p>

        <p className="description">
          Passionate about building modern and responsive web applications using
          React.
        </p>

        <button>Contact Me</button>
      </header>

      <section className="skills">
        <h2>Skills</h2>

        <div className="skill-box">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </section>
    </div>
  );
}

export default App;