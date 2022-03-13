import './App.css';
import Test from "./components/Test"

function App() {
  return (
    <div>
      <div className="App">
        <h3 align="center">Custom Components</h3>
        {
          /**
           * nama element : h3
           * attributes/properties: align
           */
        }

        <Test name="jaemin" city="Jeonju" fontColor="babyblue"
        avatar="https://www.google.com/url?sa=i&url=https%3A%2F%2Feditornews.pikiran-rakyat.com%2Fentertainment%2Fpr-1312417293%2Fseperti-berjodoh-jaemin-nct-dan-penggemar-miliki-hobi-yang-sama&psig=AOvVaw3qZJalQSuiE_54-JaYcv67&ust=1647291065109000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICAysj7w_YCFQAAAAAdAAAAABAJ">
          Jaemin cakep sekali 
          <button>Na Jaemin</button>
        </Test>
        <Test name="baekhyun" city="bucheon" fontColor="babyblue"
        avatar="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kompasiana.com%2Fohimeldaa%2F5eba5f3bd541df72b47a43c2%2Fbaekhyun-exo-bertambah-usia-semakin-menggemaskan&psig=AOvVaw1lQOX5EoxnBhS6hEvOrhFb&ust=1647291148088000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDm-_D7w_YCFQAAAAAdAAAAABAP">
          Love sekali 
          <button>Byun Baekhyun</button>
        </Test>
      </div>

      <div></div>
    </div>
  );
}

export default App;
