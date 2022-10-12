import './App.css';
import Index from './Components/Index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataTable from './Components/BusinessProcessDataTable'
import Index2 from './Components/Demo/Index';
import BusinessProcess from './Components/Demo/BusinessProcess';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Index />} />
          <Route  element={<Index2 />} />
          <Route path='Table' element={<DataTable/ >} />
          <Route path='/AddBusinessProcess' element={<BusinessProcess/ >} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
