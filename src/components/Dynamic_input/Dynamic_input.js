import React, { useState } from "react";

const Dynamic_input = () => {
const addMore = { fname: "add", lname: "more" };
    const [ajay, setAjay] = useState([{ fname: "a", lname: "s" }, { fname: "d", lname: "f" }, { fname: "g", lname: "h" }]);

    const onInputChange = (e, i) => {
        const { name, value } = e.target;

        var ddd = ajay.map((user, index) => (
            index == i ?
                Object.assign(user, { [e.target.name]: e.target.value }) : user
        ))

        setAjay(ddd)
    }

    const addUser =(e) =>{
        e.preventDefault();
        setAjay([...ajay,addMore])
    }


    // const createSection = () => {
    //     return (
    //         <>
    //             <label for="fname">First name:</label><br />
    //             <input onChange={(e) => onInputChange(e, i)} type="text" id="fname" name="fname" value={item.fname} /><br />
    //             <label for="lname">Last name:</label><br />
    //             <input onChange={(e) => onInputChange(e, i)} type="text" id="lname" name="lname" value={item.lname} /><br />
    //         </>
    //     )
    // }

    return (
        <>
            <form>
                {
                    ajay.map((item, i) => {
                        return (
                            <>
                             <div key={i}>
                             count {i+1}
                             <label for="fname">First name:</label><br />
                                <input onChange={(e) => onInputChange(e, i)} type="text" id="fname" name="fname" value={item.fname} /><br />
                                <label for="lname">Last name:</label><br />
                                <input onChange={(e) => onInputChange(e, i)} type="text" id="lname" name="lname" value={item.lname} /><br />
                            
                             </div>
                            </>
                        )
                    })

                    
                }
<button onClick={(e)=>addUser(e)}>add more</button>

            </form>
        </>
    )
}

export default Dynamic_input