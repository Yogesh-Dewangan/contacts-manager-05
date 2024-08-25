import './App.css';
import {useState} from 'react';
import DragNDrop from './Components/DragNDrop';
import { DeleteConfirmationPopup, DeletedPopup } from './Components/deletePopups';

function App() {

  const [importTrigger, setImportTrigger] = useState(false);
  const [deleteTrigger, setDeleteTrigger] = useState(false);
  const [deleteCompleteTrigger, setDeleteCompleteTrigger] = useState(false);

  return <div className="App">
    {/* <main>
      <h3>Welcome to Contacts Manager App's PopUp</h3>
      <br/><br/>
      <button onClick={() => setButtonPopup(true)}>Open PopUp</button>
      <PopUp trigger={bottonPopup} setTrigger={setButtonPopup}>
        <h3>My PopUp</h3>
        <p>Botton triggeeed popup</p>
      </PopUp>
    </main> */}
    
    <DragNDrop importTrigger={importTrigger} setImportTrigger={setImportTrigger}/>

    {(deleteTrigger) ? <DeleteConfirmationPopup setDeleteTrigger={setDeleteTrigger} setDeleteCompleteTrigger={setDeleteCompleteTrigger}/> : ""}

    {(deleteCompleteTrigger) ? <DeletedPopup /> : ""}
    
    <button onClick={() => setImportTrigger(true)}>Import</button>
    <button onClick={() => setDeleteTrigger(true)}>Delete</button>
  </div>
    
}

export default App;
