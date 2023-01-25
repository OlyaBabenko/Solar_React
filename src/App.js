import './App.scss';
import Upper from "./Components/Upper/Upper";
import Services from "./Components/Services/Services";
import GreenTariff from "./Components/Green-tariff/Green-tariff";
import MiddleSection from "./Components/MiddleSection/MiddleSection";
import Clients from "./Components/Clients/Clients";
import Steps from "./Components/Steps/Steps";
import Footer from "./Components/Footer/Footer";
import data from "./data/data.json";

function App() {

  return (
    <div className="App">
        <Upper/>
        <Services data={data.servicesSection}/>
        <GreenTariff data={data.greenTariff}/>
        <MiddleSection/>
        <Clients data={data.clients}/>
        <Steps data={data.steps}/>
        <Footer data={data.footer}/>
    </div>
  );
}

export default App;
