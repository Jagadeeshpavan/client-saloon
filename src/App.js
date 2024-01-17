import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewAppointment from './components/newappointment';
import Appointments from './components/appointments';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import PurchaseProduct from './components/PurchaseProduct';
import InventoryList from './components/InventoryList';
import Suppliers from './components/Suppliers';
import EditAppointments from './components/EditAppointments';
import React,{useState,createContext} from 'react'


import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import AddSupplier from './components/AddSupplier';



import AddService from './components/AddService';
import BillingForm from './components/Billing';
import ServiceForm from './components/Service';
import Inventory from './components/InventoryLogic';
import AddCustomer from './components/AddCustomer';
import CustomerTable from './components/CustomerTable';
 import CustomerDetails from './components/CustomerDetails';
 import CustomerDetailsPopup from './components/CustomerDetailsEdit';
import StockSelfUse from './components/StockSelfUse';

 export const store = createContext();
function App() {
   const [token,setToken] = useState(null);
  return (
    <div >
          <store.Provider value={[token,setToken]}>   
   <Router>
    <Routes>

      <Route path='/' element={<LoginPage/>}/> 
     {/* <Route path='/Login' element={<Login/>}/>  */}
      {/* <Route path='/register' element={<Register/>}/> */}
       <Route path="/dashboard" element={<Dashboard/>}/>   
       <Route path="/appointments" element={<Appointments />} />
      <Route path='/AddProduct' element={<AddProduct/>}/>
      <Route path='/ProductList' element={<ProductList/>}/>
      <Route path='/PurchaseProduct' element={<PurchaseProduct/>}/>
      <Route path='/InventoryList' element={<InventoryList/>}/>
      <Route path='/Suppliers' element={<Suppliers/>}/>
      <Route path='/EditAppointments' element={<EditAppointments/>}/>
      <Route path='/AddSupplier' element={<AddSupplier/>}/>
      
      
        
      <Route path='/AddService' element={<AddService/>}/>
      <Route path='/Billing' element={<BillingForm/>}/>
      <Route path='/Service' element={<ServiceForm/>}/>
      <Route path='/InventoryLogic' element={<Inventory/>}/>
      <Route path='/AddCustomer' element={<AddCustomer/>}/>
      <Route path='/CustomerTable' element={<CustomerTable/>}/>
      <Route path='/NewAppointment' element={<NewAppointment/>}/>
       <Route path='/CustomerDetails' element={<CustomerDetails/>}/> 
       <Route path='/CustomerDetailsEdit' element={<CustomerDetailsPopup/>}/> 
       <Route path='/StockSelfUSe' element={<StockSelfUse/>}/>  
       
    </Routes>
    </Router>   

          </store.Provider>    
    </div>
  );
}

export default App;
