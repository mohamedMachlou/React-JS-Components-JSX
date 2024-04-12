import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/contacts/Contact";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // const {name, tel, email} = Contact.this.props;
    <div className="App">
      <Navbar />

      <Contact
        name="Mohamed MACHLOU"
        tel="0653508459"
        email="medmachlou@gmail.com"
      />
      <Contact
        name="Abderrahim MACHLOU"
        tel="0653508445"
        email="amachlou@gmail.com"
      />
    </div>
  );
}

export default App;
