import { useEffect, useRef } from "react"


const Form = () => {
    const formRef = useRef<HTMLFormElement>(null)

    const onSubmit = (e: SubmitEvent) => {
        e.preventDefault()
        console.log("Event from submit",e)
    }

    useEffect(() => {
        if(formRef.current){
            formRef.current.addEventListener("submit",onSubmit)
        }
    },[formRef])

    return <form action="" ref={formRef}>
        <input name="name" placeholder="Name"></input>
        <input name="age" placeholder="Age" type="number"></input>
        <input name="email" placeholder="mail@gmail.com" type="email"></input>

        <button type="submit">
            Submit
        </button>
    </form>
}

export default Form