/*
<UserInfo 
				name="John Doe" 
				age={25} 
				email="johndoe@example.com" 
				greeting="Hello">
	        I can only be a string
      </UserInfo>
*/

import React, { useState } from "react";
import Card from "./Card";
import { User } from "./UserContact";

interface UserinfoProps {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>
    greeting?: string;
    children?: string
} 

const Userinfo = (props: UserinfoProps) => {
    const [mailSent, setMailSent] = useState(false); //Inferred state

    const {
        user,
        greeting,
        children,
        setUser
    } = props
    return <Card
    backgroundColor="#ddcddd"
    elevated
    >
        <h3>{user.name}, {user.age}</h3><br></br>
        {!mailSent && <a href="#" onClick={(e) => {
            e.preventDefault()
            setMailSent(true)
        }}>{user.email}</a>}
        {mailSent && <p>Mail has been sent</p>}
        <p>{greeting && greeting}</p>
        <button
            onClick={(e) => {
                setUser(undefined)
            }}
        >Log out</button>
        <div>
            {children}
        </div>
    </Card>
}


export default Userinfo