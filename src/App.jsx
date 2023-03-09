import Header from "./component/Header";
import Form from "./component/Form";
import { useState } from "react";
import Error from "./component/Error";
import Favorite from "./component/Favorite";

function App() {
  const [firstName, setFirstName] = useState("");
  const [carBrandName, setCarBrandName] = useState("");
  const [error, setError] = useState("");

  function handleCar(firstName, carBrandName) {
    const newName = firstName;
    const newCarBrandName = carBrandName;
    setFirstName(newName);
    setCarBrandName(newCarBrandName);
  }

  return (
    <div className="container">
      <Header title="Carros" />
      <Form
        onError={() =>
          setError("Por favor chequea que la información sea correcta")
        }
        onSubmit={handleCar}
      />
      <Error text={error} />
      <hr />
      <Favorite name={firstName} favorite={carBrandName} />
    </div>
  );
}

export default App;
