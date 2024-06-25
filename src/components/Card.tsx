import { CardProps } from "../interface";
import "./Card.css";

export const Card = (props: CardProps) => {
  const { img, title, text, link, refName } = props;
  
  return (
    <div className="card">
      {img && <img src={img} className="card-img-top" alt="image cap"></img>}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">
          {refName}
        </a>
      </div>
    </div>
  );
};
