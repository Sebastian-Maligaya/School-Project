import "./Homepage.css";

function HorizontalCard(props) {

  return (
    <div className="Horizontal-card">
        
        <div className="card-icon"><img src={props.icon} alt="icon" /></div>

        <div className="card-content">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    </div>
  );
}

export default HorizontalCard;


