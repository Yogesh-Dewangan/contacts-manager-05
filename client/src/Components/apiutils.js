import axios from "axios";

export async function postContacts(contactArr, setImportTrigger, setImportCompleteTrigger) {
    console.log('in postContact', contactArr);
    await fetch('http://localhost:5000/v1/contacts', {
        method: "POST",
        headers: {
            // "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token')
        },
        body:JSON.stringify(contactArr)
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

export async function deleteContacts(arrayOfContactsId) {
    await fetch('/v1/contacts', {
        method: "DELETE",
        body: arrayOfContactsId
    })
        .then(res => console.log(res))
        .catch((e) => console.log(e));
}

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

export const getContacts = async () => {
    try {
        await axios.get(
            'https://localhost:5000/v1/contact', 
            {headers: 
                {'Authorization': localStorage.getItem('token')}
            })
    } catch (err) {
        console.log(err)
    };
}