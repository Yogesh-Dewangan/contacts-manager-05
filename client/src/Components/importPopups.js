import React, { useState } from 'react';
import PopUp from './PopUp';
import {parse} from 'papaparse';
import {postContacts} from './apiutils';
import importImg from './images/importImg.svg'
import completedImg from './images/completedImg.svg'

export function ImportPopup({importTrigger, setImportTrigger, setImportCompleteTrigger}) {
    
    const [highlighted, setHighlighted] = useState(false);
    const [contactsN, setContactsN] = useState("");

    const dragHandler = (e) => {
        e.preventDefault();
    }

    const dropHandler = (e) => {
        e.preventDefault();
        setHighlighted(false);
        setContactsN([]);
        // console.log(e.dataTransfer.files);
        Array.from(e.dataTransfer.files)
            .filter(file => file.type === "text/csv")
            .forEach( async (file) => {
                let text = await file.text();
                // console.log('text', text);
                let result = parse(text, {header: true})
                // console.log('result.data', result.data);
               
                setTimeout(() => {
                    setContactsN((contactsN) => ({
                        ...contactsN,
                        ...result.data
                    }))
                }, 0);
            })

            // console.log('newContacts', newContacts);
            
            setTimeout(() => {
                console.log('contacts', contactsN);
                postContacts(contactsN, setImportTrigger, setImportCompleteTrigger)
            }, 10);
        
    }

    return (importTrigger) ? (<PopUp>
        <div
            className={`dragndrop ${highlighted ? 'highlight' : ''}`} 
            onDragOver={dragHandler}
            onDrop={dropHandler}
            onDragEnter={() => {
                setHighlighted(true);
            }}
            onDragLeave={() => {
                setHighlighted(false);
            }}
        >
            <div className="img-container">
                <img src={importImg} alt="importImg"/>
            </div>
            <h3>Import File</h3>
            <p>Drag and drop a CSV file to upload</p>
            <button className="close-btn" onClick={() => setImportTrigger(false)}>Cancel</button>
        </div>
    </PopUp>) : "";
    
}

export function ImportCompletePopup(importCompleteTrigger) {
    return <PopUp>
        <div className='importcomplete'>
            <div className="img-container">
                <img className="checkedImg" src={completedImg} alt="importCompleteImg"/>
            </div>
            <h3>Import Complete</h3>
            <p>CSV File is Updated</p>
        </div>
    </PopUp>
}