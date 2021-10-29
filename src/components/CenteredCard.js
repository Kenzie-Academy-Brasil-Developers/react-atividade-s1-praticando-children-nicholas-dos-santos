import "./style.css";

const CenteredCard = ({ children }) => {
  return (
    <div className="CenteredCard__div">
      <span>{children}</span>
    </div>
  );
};

export default CenteredCard;
