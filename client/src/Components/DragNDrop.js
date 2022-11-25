import React, { useState } from "react";
import './styles/dragNdrop.css'
import { ImportCompletePopup, ImportPopup } from "./importPopups";
import { getContacts } from "./apiutils";

export default function DragNDrop({importTrigger, setImportTrigger}) {
    
    const [importCompleteTrigger, setImportCompleteTrigger] = useState(false);

    return <>
        <ImportPopup importTrigger={importTrigger} setImportTrigger={setImportTrigger} setImportCompleteTrigger={setImportCompleteTrigger}/>
        {(importCompleteTrigger) ? (<ImportCompletePopup/>) : ""}
    </>
}