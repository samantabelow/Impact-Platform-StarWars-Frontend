import { Link } from "react-router-dom";

const Card = ({ char }) => {
  const { name, gender, films, species } = char;
  return (
    <Link to={`/${name}`}>
      <p>{name}</p>
      <p>{gender}</p>
      <p>{films}</p>
      <p>{species}</p>
    </Link>
  );
};

export default Card;
