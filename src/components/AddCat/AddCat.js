import react, { useState } from 'react';

const AddCat = () => {

    const [user, setUser] = useState([{ fname: '' }, { fname: '' }, { fname: '' }]);

    const onInputChange = (e, i) => {
        const { name, value } = e.target;
        const list = [...user];
        console.log(list);
        list[i][name] = value;
        setUser(list);

    }


    return (
        <>
            {user.map((item, i) => {
                return (
                    <input type="text" value={item.fname} name="fname" onChange={e => onInputChange(e, i)} placeholder="Enter name" required="" />

                )
            })}
        </>
    )
}

export default AddCat;