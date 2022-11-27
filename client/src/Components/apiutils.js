import axios from "axios";

// , setImportTrigger, setImportCompleteTrigger
export const postContacts = async (contactArr) => {
    // console.log('in postContact', newData);
    const res = await fetch('http://localhost:5000/v1/contacts', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token')
        },
        body: JSON.stringify(contactArr)
    })

    return res.json();
} 

// export async function deleteContact(id) {
//     await fetch('/v1/contacts/' + id, {
//         method: "DELETE",
//     })
//         .then(res => console.log(res))
//         .catch((e) => console.log(e));
// }

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
        const res = await axios.get(
            'http://localhost:5000/v1/contacts', 
            {headers: 
                {'Authorization': localStorage.getItem('token')}
            })

        return res
    } catch (e) {
        console.log(e)
    };
}