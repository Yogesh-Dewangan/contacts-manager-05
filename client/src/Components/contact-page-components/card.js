import React, { useState } from "react";
import deleted from "./images/im/delete.png"
import edited from "./images/edit.png";
import importd  from "./images/im/v1.png"
import filter from "./images/filter.png";
import DragNDrop from '../DragNDrop';
import { DeleteConfirmationPopup, DeletedPopup } from '../deletePopups';

import { Link } from "react-router-dom";
export function CardContact({ contact, setDeleteTrigger }) {


    // console.log(contact)
    return (
        <tr>

            <td> <input type="checkbox" /></td>
            <td className="td">{contact.name}</td>
            <td className="td">{contact.designation}</td>
            <td className="td">{contact.company}</td>
            <td className="td">{contact.industry}</td>
            <td className="td">
                <div className="tooltip">
                {contact.email}
                <span className="tooltiptext"> {contact.email}</span>
                </div>
               
                </td>
            <td className="td">{contact.phoneNumber}</td>
            <td className="td">{contact.country}</td>
            <td className="td" style={{display:"flex",flexDirection:"row"}}>
                <button onClick={() => setDeleteTrigger(true)}><img src={deleted} alt="deleteImg"/></button>
                <button><img src={edited} alt="editImg"/></button>
            </td>
        </tr>
    )

}
export function Cardheaders() {
    return (
        <tr>
            <td > <input type="checkbox" /></td>
            <td className="text"  >Name</td>
            <td className="text">Designation</td>
            <td className="text">Company</td>
            <td className="text">Industry</td>
            <td className="text">Email</td>
            <td className="text">Phone number</td>
            <td className="text">Country</td>
            <td className="text">Action</td>
        </tr>
    )
}
export function Buttons({deleteTrigger, setDeleteTrigger}) {

    const [importTrigger, setImportTrigger] = useState(false);
    const [deleteCompleteTrigger, setDeleteCompleteTrigger] = useState(false);

    return (
        <div className="header-btns">
            <div>
                <div className="left-btn">

                    <button className="btn left">
                        <i className="fa fa-calendar" aria-hidden="true"></i>

                        . select date .

                        <i className="fa-regular fa-angle-down"></i>

                    </button>

                    <button className="btn left">
                        <img src={filter} alt="filterImg"/>
                        Filter .
                    </button>
                    <DragNDrop importTrigger={importTrigger} setImportTrigger={setImportTrigger}/>

                    {(deleteTrigger) ? <DeleteConfirmationPopup setDeleteTrigger={setDeleteTrigger} setDeleteCompleteTrigger={setDeleteCompleteTrigger}/> : ""}

                    {(deleteCompleteTrigger) ? <DeletedPopup /> : ""}
                    <button className="btn right">Export</button>
                    <button className="btn right" onClick={() => setImportTrigger(true)}><img src={importd} alt="importImg"/> Import</button>
                    <button className="btn right" onClick={() => setDeleteTrigger(true)}><img src={deleted} alt="deleteImg"/> Delete</button>

                


                </div>
                
                    
            </div>
        </div>


    )
}
export function Li(){
    return(<li>
        vinee
    </li>)
}