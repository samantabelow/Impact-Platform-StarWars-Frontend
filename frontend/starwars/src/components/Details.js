import { useParams } from "react-router-dom";

const Details = ({ location }) => {
  const { characterName } = useParams();

  return <div>{characterName}</div>;
};

export default Details;
