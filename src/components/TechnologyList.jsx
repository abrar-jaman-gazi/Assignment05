
import TechnologyCard from "./TechnologyCard";
function TechnologyList({ technologies, stack, addToStack }) {
  return (
    <div className="technology-grid">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          addToStack={addToStack}
          isAdded={stack.some((item) => item.id === technology.id)}
        />
      ))}
    </div>
  );
}

export default TechnologyList;