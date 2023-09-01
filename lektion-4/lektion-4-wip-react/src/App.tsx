import Card from "./components/Card";
import Text from "./components/Text";
import Userinfo from "./components/Userinfo";

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
      <Userinfo
        name="Jonatan Vahlberg"
        age={26}
        email="jonatan.vahlberg@willandskill.se"
        greeting="Hi i am a fullstack developer @ Will & Skill"
      >
        Contact me!
      </Userinfo>
    </div>
  );
}

export default App;
