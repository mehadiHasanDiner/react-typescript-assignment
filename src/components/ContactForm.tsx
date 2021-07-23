import React, { useState } from 'react';
import { IState as Props } from "../App";

interface IProps {
    setContact: React.Dispatch<React.SetStateAction<Props["people"]>>
    people: Props["people"]
}

const ContactForm: React.FC<IProps> = ({ setContact, people }) => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        age: "",
        url: "",
        remarks: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target.value)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if (!input.name || !input.age) return

        setContact([
            ...people,
            {
                name: input.name,
                email: input.email,
                age: parseInt(input.age),
                url: input.url,
                remarks: input.remarks,
                key: input.name
            }
        ]);

        setInput({
            name: "",
            email: "",
            age: "",
            url: "",
            remarks: ""
        })
    }
    
    return (
        <div>
            <div className="AddToList">

                <input
                    value={input.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Name"
                    className="AddToList-input"
                    name="name"
                />

                <input
                    onChange={handleChange}
                    type="email"
                    placeholder="Email"
                    className="AddToList-input"
                    value={input.email}
                    name="email"
                />

                <input
                    onChange={handleChange}
                    type="number"
                    placeholder="Age"
                    className="AddToList-input"
                    value={input.age}
                    name="age"
                />

                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Image Url"
                    className="AddToList-input"
                    value={input.url}
                    name="url"
                />

                <input
                    onChange={handleChange}
                    placeholder="Remarks"
                    className="AddToList-input"
                    value={input.remarks}
                    name="remarks"
                    type="text"

                />

                <button onClick={handleClick} className="AddToList-btn">Add to Contact</button>
            </div>
        </div>
    );
};

export default ContactForm;