import { useState } from "react"

export const AddCategory = ({onAddCategory}) => {
    
    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <=1) return;
        onAddCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange}/>
        </form>
    )
}
