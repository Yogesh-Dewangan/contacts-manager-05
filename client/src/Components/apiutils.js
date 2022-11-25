import axios from "axios";

export async function postContacts(contactsN, setImportTrigger, setImportCompleteTrigger) {
    await fetch('/v1/contacts', {
        method: "POST",
        headers: {
            // "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            data: contactsN})
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setImportTrigger(false);
            setImportCompleteTrigger(true);
            setTimeout(() => {
                setImportCompleteTrigger(false)
            }, 2000);
            
        })
        .catch((e) => console.log(e));
} 

export async function deleteContact(id) {
    await fetch('/v1/contacts/' + id, {
        method: "DELETE",
    })
        .then(res => console.log(res))
        .catch((e) => console.log(e));
}

// export async function deleteContacts(arrayOfContactsId) {
//     await fetch('/v1/contacts', {
//         method: "DELETE",
//         body: arrayOfContactsId
//     })
//         .then(res => console.log(res))
//         .catch((e) => console.log(e));
// }

// export async function getContacts(setContactList) {
//     await fetch('/v1/contacts', {
//         method: "GET"
//     })
//         .then(res => res.json())
//         .then(res => {
//             setContactList(res)
//         })
//         .catch((e) => console.log(e));
// }