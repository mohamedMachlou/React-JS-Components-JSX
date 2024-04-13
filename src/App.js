import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./components/navbar/Navbar";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    // const {name, tel, email} = Contact.this.props;
    <div className="App">
      <Navbar />
      <Contacts />
    </div>
  );
}

export default App;
