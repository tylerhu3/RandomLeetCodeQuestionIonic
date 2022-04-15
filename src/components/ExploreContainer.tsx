import './ExploreContainer.css';

interface ContainerProps {
  name: string;
  url: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, url }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p> <a target="_blank" rel="noopener noreferrer" href={url}> Try the Question </a></p>
    </div>
  );
};

export default ExploreContainer;
