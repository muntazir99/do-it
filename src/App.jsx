import Header from "./components/Header.jsx";
import Doitnow from "./components/Doitnow.jsx";
import Aboutus from "./components/Aboutus.jsx";
import OurServices from "./components/OurServices.jsx";
import AdditionalServicesButton from "./components/Additionalservices.jsx";
import ContactUs from "./components/Contactus.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Doitnow />
      <Aboutus />
      <OurServices />
      <AdditionalServicesButton />
      <ContactUs />
    </div>
  );
}

export default App;
