import heroImage from "../assets/banner-stack.png";
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-label">DEVELOPER TECHNOLOGY HUB</span>
          <h1>
            <span id="build">Build Your Idea </span>
            <span className="gradient-text"> Development Stack</span>
          </h1>
          <p>
            Explore frontend, backend, database, 
            and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="hero-buttons">
            <a href="#technologies" className="primary-button">Explore Technologies</a>
            <a href="#about" className="secondary-button">Learn More</a>
          </div>
        </div>

        <div className="hero-visual">
         
           <img src={heroImage} alt="Dev Stack" />
          
        </div>
      </div>
    </section>
  );
}

export default Hero;