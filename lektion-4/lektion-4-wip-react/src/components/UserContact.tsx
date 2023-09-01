import { useState } from "react"
import Userinfo from "./Userinfo"; 

const UserContact = () => {
    const [user, setUser] = useState<User | undefined>({
        name: "Jonatan Vahlberg",
        age: 26,
        email: "jonatan.vahlberg@willandskill.se" 
    }) // Declared state with complex typing


    return <div>
        {user && <Userinfo
            user={user} 
            greeting="Hi i am a fullstack developer @ Will & Skill"
            setUser={setUser}
        />}
    </div>
}

export default UserContact