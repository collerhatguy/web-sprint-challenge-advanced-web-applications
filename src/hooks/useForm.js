import { useEffect, useState } from "react";

const useForm = (initialState) => {
    const [formState, setFormState] = useState(initialState);
    const [error, setError] = useState("")

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    }

    useEffect(() => {
        formState.username === "" || formState.password === "" 
            ? 
            setError("Username or Password not valid.")
            :
            setError("")
    }, [formState])

    return [formState, handleChange, error]
}

export default useForm;