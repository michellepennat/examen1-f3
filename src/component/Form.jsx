import { useState } from "react";
import Card from "./Card";

function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [carBrandName, setCarBrandName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (
      carBrandName.startsWith(" ") ||
      carBrandName.length < 3 ||
      firstName.length < 6
    ) {
      props.onError();
      console.log();
    } else {
      props.onSubmit(firstName, carBrandName);
    }
  }

  return (
    <Card title="Ingresa la marca de tu carro">
      <form onSubmit={handleSubmit}>
        <p>¿Qué marca de carro tienes?</p>
        <input
          onChange={(event) => setCarBrandName(event.target.value)}
          type="text"
          value={carBrandName}
        />
        <p>Escribe tu nombre</p>
        <input
          onChange={(event) => setFirstName(event.target.value)}
          type="text"
          value={firstName}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </Card>
  );
}

export default Form;
