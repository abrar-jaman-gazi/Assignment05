import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import Stack from "./components/Stack";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load data");
        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to load technologies");
        setLoading(false);
      });
  }, []);


  const addToStack = (technology) => {
  const alreadyAdded = stack.some((item) => item.id === technology.id);

  if (alreadyAdded) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setStack([...stack, technology]);

  toast.success(`${technology.name} added to your stack!`);
};

  const removeFromStack = (id) => {
  const item = stack.find((technology) => technology.id === id);

  setStack(stack.filter((technology) => technology.id !== id));

  if (item) {
    toast.info(`${item.name} removed from your stack.`);
  }
};

  
const removeAll = () => {
  if (stack.length === 0) {
    toast.warning("Your stack is already empty!");
    return;
  }

  setStack([]);

  toast.info("All technologies removed from your stack.");
};
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />

        <section id="technologies" className="technology-section">
          <div className="section-heading">
         
            <h2>
             <span id="build">Explore the </span><span className="gradient-text">Technologies</span>
            </h2>
            <p>Pick one technology per category to build your ideal stack.</p>
          </div>

          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading technologies...</p>
            </div>
          ) : (
            <div className="technology-layout">
             
              {loading ? (
  <div className="loading">
    <div className="spinner"></div>
    <p>Loading technologies...</p>
  </div>
) : (
  <TechnologyList
    technologies={technologies}
    stack={stack}
    addToStack={addToStack}
  />
)}
              <Stack
                stack={stack}
                onRemove={removeFromStack}
                onRemoveAll={removeAll}
              />
            </div>
          )}
        </section>

       
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  );
}

export default App;