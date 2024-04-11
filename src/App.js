import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/contacts/Contact";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    // const {name, tel, email} = Contact.this.props;
    <div className="App">
      <Navbar title="React JS Client Panel " />

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
