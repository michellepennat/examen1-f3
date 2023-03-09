function Favorite(props) {
  return (
    <div className="content">
      <h2>Hola {props.name}</h2>
      <p>Sabemos que tu marca de carro favorita es {props.favorite}</p>
    </div>
  );
}

export default Favorite;
