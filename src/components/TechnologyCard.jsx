import { FiStar, FiPlus, FiCheck } from "react-icons/fi";

function TechnologyCard({
  technology,
  addToStack,
  isAdded
}) {
  return (
    <article className="technology-card">
      <div className="card-top">
        <div className="technology-icon">
          <img src={technology.icon} alt={technology.name} />
        </div>
        <span className="technology-badge">{technology.badge}</span>
      </div>

      <h3>{technology.name}</h3>
      <p className="technology-description">{technology.description}</p>

      <div className="technology-info">
        <span className="category-chip">{technology.category}</span>
        <span className="difficulty">{technology.difficulty}</span>
        <span
        className="rating"><FiStar fill="currentColor" />
          <span>{technology.rating}</span></span>
      </div>

      <div className="card-bottom">
     
        <button
  className={`add-button ${isAdded ? "added" : ""}`}
  onClick={() => addToStack(technology)}
  disabled={isAdded}
>
  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
</button>
      </div>
    </article>
  );
}

export default TechnologyCard;