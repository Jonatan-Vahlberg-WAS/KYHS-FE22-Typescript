import Card from "./components/Card";
import Text from "./components/Text";

function App() {
  return (
    <div className="App">
      <Card
        backgroundColor="#ddcddd"
        elevated
      >
        Hello world
      </Card>
      <Text
        highlightedWord="ipsum"
        style={{
          color: "blue"
        }}
        onClickHiglightedWord={() => {
          alert(`Highlighted word is ipsum`)
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate dolorem explicabo non magni fugit, ut rerum error. Aperiam ab repudiandae soluta, illum adipisci nesciunt expedita iste! Nesciunt, animi tempore!
      </Text>
    </div>
  );
}

export default App;
