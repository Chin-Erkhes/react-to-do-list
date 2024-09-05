const Div = (props) => {
    return (
      <div id={props.index} style={{ display: "flex", justifyContent: "center", marginTop: "10px", }}>
        <div className="list">
        <div>{props.list}</div>
        </div>
        <button onClick={props.onDelete}>delete</button>
        <button onClick={props.onEdit}>edit</button>
        <button onClick={props.onComplete}>complete</button>
      </div>
    );
  };
  
  export default Div;