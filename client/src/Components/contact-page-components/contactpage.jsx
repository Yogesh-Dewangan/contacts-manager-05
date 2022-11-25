import React, { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { Buttons, CardContact, Cardheaders } from "./card"
import NavBar from "./navbar"

const Contacts = () => {

    const [deleteTrigger, setDeleteTrigger] = useState(false);

    var data = [

        {
            name: "vineetha",
            designation: "student",
            company: "10x",
            industry: "IT",
            email: "vineetha@gmail.com",
            phoneNumber: 572348778,
            country: "India"
        },
        {
            name: "ankit",
            designation: "student",
            company: "10x",
            industry: "IT",
            email: "ankit@gmail.com",
            phoneNumber: 767486765,
            country: "India"
        },
        {
            name: "yogesh",
            designation: "student",
            company: "10x",
            industry: "IT",
            email: "yogesh@gmail.com",
            phoneNumber: 76758628,
            country: "India"
        }
    ]
    const [contacts, setcontacts] = useState(data)
  
    useEffect(()=>{
        getcontacts()
        
    },[])
    const getcontacts=async ()=>{
        try{
            let res=await axios.get('/v1/contacts')  // ('https://jsonplaceholder.typicode.com/posts')
            res=await res.data
           // setcontacts(res)
            console.log(res);
       // setcontacts(data)
        }catch(err){
            console.log(err)
        };
    }
    
    return (
        <>  <div>
            <NavBar getproducts={getcontacts} setcontacts={setcontacts}/>
        </div>
            <div className="contacts">
            <div className="btn-container">
            <Buttons deleteTrigger={deleteTrigger} setDeleteTrigger={setDeleteTrigger}/>
            </div>
            <table>
                <thead>
       
                    <Cardheaders />
                </thead>
                <tbody>
                    {
                        contacts.length>0?contacts.map((contact, index) => {
                            //console.log(contact);
                            const { name, designation, company, industry, email, phoneNumber, country } = contact;
                            //console.log(name, designation, company, industry, email, phoneNumber, country)
                           let len=contacts.length
                            let val=index
                            return (
                                 <CardContact contact={contact} key={index} deleteTrigger={deleteTrigger} setDeleteTrigger={setDeleteTrigger}/>
                            )

                        })
                        :<tr>No result found</tr>
                        
                    }
                </tbody>


            </table>

        </div>
        </>
        
    )
}
export default Contacts