import "./App.css";
import { featuresArr } from "./utils/features";
import { Card } from "./component/Card";

function App() {
  return (
    <main>
      <section id='feature'>
        <h1>Reliable, efficient delivery</h1>
        <h2>Powered by Technology</h2>
        <p className='header'>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
        <div className='cards-container'>
          {featuresArr.map((feature) => {
            return (
              <Card
                key={feature.heading}
                header={feature.heading}
                para={feature.para}
                icon={feature.icon}
                colorScheme={feature.colorScheme}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
