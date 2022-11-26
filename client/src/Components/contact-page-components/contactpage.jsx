import React, { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { Buttons, CardContact, Cardheaders } from "./card"
import NavBar from "./navbar"
import Pagination from "./pagination"
import { number } from "prop-types"
import deleted from "./images/im/delete.png"
import edited from "./images/edit.png";

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
    //const [perpage,setperpage]=useState([])
    const [currentpage, setcurrentpage] = useState(1)
    const [itemperpage, setitemperpage] = useState(3)


    const [pagenumberlimit, setpagenumberlimit] = useState(5)
    const [maxpagenumberlimit, setmaxpagenumberlimit] = useState(2)
    const [minpagenumberlimit, setminpagenumberlimit] = useState(0)

    const handleclick = (event) => {
        setcurrentpage(Number(event.target.id))
    }

    const pages = []
    for (let i = 1; i < Math.ceil(contacts.length / itemperpage); i++) {
        pages.push(i)

    }
    const renderconts = (conts) => {
        return (
            // <>{conts.map((con, index) => {
            //     //console.log(con);
            //     return (
            //         <div key={index} style={{ border: "1px solid black", margin: "1px" }}>
            //             <div> {con.title} </div>

            //         </div>
            //     )
            // })}</>

            <>{
                conts.map((contact, index) => {
                    //console.log(contact);
                    //const { name, designation, company, industry, email, phoneNumber, country } = contact;
                    //console.log(name, designation, company, industry, email, phoneNumber, country)
                    let len = contacts.length
                    let val = index
                    return (
                        <tr>

                            <td className="tdinp"> <input type="checkbox" /></td>
                            <td className="td">{contact.name}</td>
                            <td className="td">{contact.designation}</td>
                            <td className="td">{contact.company}</td>
                            <td className="td">{contact.industry}</td>
                            <td className="tdemail">
                                <div className="tooltip">
                                    {contact.email}
                                    <span className="tooltiptext"> {contact.email}</span>
                                </div>

                            </td>
                            <td className="td">{contact.phoneNumber}</td>
                            <td className="td">{contact.country}</td>
                            <td className="td" style={{ display: "flex", flexDirection: "row" }}>
                              
                                <button onClick={() => setDeleteTrigger(true)}><img className="actionimage" src={deleted} alt="deleteImg" /></button>
                                <button><img src={edited} alt="editImg" className="actionimage"/></button>
                            </td>
                        </tr>
                    )
                })
            }

            </>
        )

    }

    const indexoflatitem = currentpage * itemperpage;
    const indexoffirstitem = indexoflatitem - itemperpage;
    const currentItems = contacts.slice(indexoffirstitem, indexoflatitem)

    const renderpagenumbers = pages.map(pgnumber => {
        if (pgnumber < maxpagenumberlimit + 1 && pgnumber > minpagenumberlimit) {
            return (
                <li key={pgnumber} id={pgnumber} onClick={handleclick}
                    className={currentpage == pgnumber ? "active" : null} >
                    {pgnumber}
                </li>
            )
        }
        else {
            return null
        }

    })

    useEffect(() => {
        getcontacts()

    }, [])
    const getcontacts = async () => {
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            res = await res.data
            //setcontacts(res)
            //setperpage(res.slice(0,10))
            //console.log(perpage);
            // setcontacts(res)..
        } catch (err) {
            console.log(err)
        };
    }
    // const pageHandler=(pagenumber)=>{
    //     setperpage(currentItems)
    // }
    const handlenext = () => {
        setcurrentpage(currentpage + 1)
        if (currentpage + 1 > maxpagenumberlimit) {
            setmaxpagenumberlimit(maxpagenumberlimit + pagenumberlimit)
            setminpagenumberlimit(minpagenumberlimit + pagenumberlimit)
        }
    }
    const handleprev = () => {
        setcurrentpage(currentpage - 1)
        if ((currentpage - 1) % pagenumberlimit == 0) {
            setmaxpagenumberlimit(maxpagenumberlimit - pagenumberlimit)
            setminpagenumberlimit(minpagenumberlimit - pagenumberlimit)
        }
    }
    let pageIncrementbtn = null
    if (pages.length > maxpagenumberlimit) {
        pageIncrementbtn = <li onclick={handlenext}>&hellip;</li>
    }
    let pageDecrementbtn = null
    if (pages.length > maxpagenumberlimit) {
        pageDecrementbtn = <li onclick={handleprev}>&hellip;</li>
    }









    return (
        <div className="main">
            <div>
                <NavBar getproducts={getcontacts} setcontacts={setcontacts} />
            </div>
            <div className="contacts">
                <div className="btn-container">
                    <Buttons deleteTrigger={deleteTrigger} setDeleteTrigger={setDeleteTrigger}/>
                </div>


                <table>
                    <thead>

                        <Cardheaders setDeleteTrigger={setDeleteTrigger}/>
                    </thead>
                    <tbody>
                        {
                            renderconts(currentItems)
                        }
                    </tbody>


                </table>

            </div>
            <div className="pagenumbers-container">
                <ul className="pagenumbers">
                    <li>
                        <button onClick={handleprev}
                            disabled={currentpage == pages[0] ? true : false}
                        >prev</button>
                    </li>
                    {pageDecrementbtn}
                    {renderpagenumbers}
                    {pageIncrementbtn}
                    <li>
                        <button onClick={handlenext} disabled={currentpage == pages[pages.length] ? true : false}>next</button>

                    </li>

                </ul>
            </div>

        </div>

    )
}
export default Contacts