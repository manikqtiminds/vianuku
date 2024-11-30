import { ExpertiseSection } from './ExpertiseSection';
import { expertiseData } from './data';

const Expertise = () => {
  return (
    <div id="expertise">
      {expertiseData.map((data, index) => (
        <ExpertiseSection key={index} data={data} />
      ))}
    </div>
  );
};

export default Expertise;