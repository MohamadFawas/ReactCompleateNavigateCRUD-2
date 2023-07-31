
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nabar from './layout/Nabar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddUser from './users/AddUser';
import ViewUser from './users/ViewUser';
import Delete from './users/Delete';
import EditUser from './users/EditUser';
// import ViewUser from './users/ViewUser';
function App() {
  return (
    <div>
      <Router>

      <Nabar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addUser" element={<AddUser/>}/>
        <Route exact path="/viewUser/:id" element={<ViewUser/>}/>
        <Route exact path="/delete/:id" element={<Delete/>}/>
        <Route exact path="/editUser/:id" element={<EditUser/>}/>
      </Routes>
      

      </Router>
      
    </div>
  );
}


export default App;
