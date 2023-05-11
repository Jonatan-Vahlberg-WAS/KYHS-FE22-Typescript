import React from "react";

interface UserInfoProps {
  name: string;
  age: number;
  email: string;
  greeting?: string;
  children: string;
}

const UserInfo: React.FC<UserInfoProps> = ({
    name,
    age,
    email,
    greeting,
    children
}) => {
    return (
        <div>
            <h2>User Information</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>Greeting: {greeting}</p>
            {children}
        </div>
    );
}

export default UserInfo;