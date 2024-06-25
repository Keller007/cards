import "./App.css";
import { Card } from "./components/Card"; 
 import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  return (
    <>
      <Card
        img="https://random-image-pepebigotes.vercel.app/api/random-image "
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        link="."
        refName="Go somewhere"
      />
      <Card
        title="Special title treatment"
        text="With support text below as a natural lead-in to additional content."
        link="."
        refName="Go somewhere"
      />
    </>
  );
}

export default App;
