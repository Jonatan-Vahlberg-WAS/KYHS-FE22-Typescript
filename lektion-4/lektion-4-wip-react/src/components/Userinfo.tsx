/*
<UserInfo 
				name="John Doe" 
				age={25} 
				email="johndoe@example.com" 
				greeting="Hello">
	        I can only be a string
      </UserInfo>
*/

import Card from "./Card";

interface UserinfoProps {
    name: string;
    age: number;
    email: string;
    greeting?: string;
    children?: string
} 

const Userinfo = (props: UserinfoProps) => {
    const {
        name,
        age,
        email,
        greeting,
        children
    } = props
    return <Card
    backgroundColor="#ddcddd"
    elevated
    >
        <h3>{name}, {age}</h3><br></br>
        <a href={`mailto:${email}`}>{email}</a>
        <p>{greeting && greeting}</p>
        <div>
            {children}
        </div>
    </Card>
}


export default Userinfo