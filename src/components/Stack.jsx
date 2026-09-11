import { FiX, FiTrash2 } from "react-icons/fi";

function Stack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="stack-panel">
      <div className="stack-header">
        <div>
          <span className="section-label">YOUR COLLECTION</span>
          <h2 id="Your">Your Stack</h2>
        </div>
        <span className="stack-count">{stack.length}</span>
      </div>

      <p className="selected-text">
        {stack.length} Technology{stack.length !== 1 ? "ies" : "y"} Selected
      </p>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon">+</div>
          <h3>Your stack is empty</h3>
          <p>Add technologies from the list to build your personalized stack.</p>
        </div>
      ) : (
        <>
          <div className="stack-items">
            {stack.map((technology) => (
              <div className="stack-item" key={technology.id}>
                <img src={technology.icon} alt={technology.name} />
                <div className="stack-item-info">
                  <h4>{technology.name}</h4>
                  <span>{technology.category}</span>
                </div>
                <button
                  className="remove-button"
                  onClick={() => onRemove(technology.id)}
                  aria-label={`Remove ${technology.name}`}
                >
                  <FiX />
                </button>
              </div>
            ))}
          </div>

          <button className="remove-all" onClick={onRemoveAll}>
            <FiTrash2 /> Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default Stack;