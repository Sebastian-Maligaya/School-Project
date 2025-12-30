function StrandCard({ strand }) {
    return (
         <div className="card">
            <div className="icon">{strand.icon}</div>
            <span className="tag">{strand.tag}</span>
            <h3 className="title">{strand.title}</h3>
            <p className="description">
              {strand.description}
            </p>
          </div>
    );
}

export default StrandCard;