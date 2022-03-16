import './App.css';
import Test from "./components/Test"
import Employee from './components/Employee'
import Accordion from './components/Accordion'
import Balok from './pages/Balok';

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

        {/* <Test name="jaemin" city="Jeonju" fontColor="babyblue"
          avatar="https://smktelkom-mlg.sch.id/assets/frontend/images/image1001.png">
          Jaemin cakep sekali
          <button>Na Jaemin</button>
        </Test>
        <Test name="baekhyun" city="bucheon" fontColor="babyblue"
          avatar="https://smktelkom-mlg.sch.id/assets/upload/image/testi/img3.png">
          Love sekali
          <button>Byun Baekhyun</button>
        </Test> */}
      </div>





      {/* <div className='accordion' id='accordion1'>
        <Accordion id="item1" header="Header 1" parent="#accordion1">
          <Employee
            name="Undertaker"
            birthday="March 21th 2022"
            gender="Male"
            email="undertaker@smktelkom-mlg.sch.id"
            contact="091 765"
            division="Vice President"
            image="https://smktelkom-mlg.sch.id/assets/upload/image/testi/img3.png"
          />
        </Accordion>
        <Accordion id="item2" header="Header 2" parent="#accordion1">
          <Employee
            name="Jack Ma"
            birthday="March 14th 2022"
            gender="Male"
            email="jack@smktelkom-mlg.sch.id"
            contact="091 765"
            division="Manager"
            image="https://smktelkom-mlg.sch.id/assets/upload/image/testi/img2.png"
          />
        </Accordion>
        
      </div> */}

      {/* Tampilkan balok*/}
        <Balok title="Lemari"/>
      

    </div>
  );
}

export default App;
