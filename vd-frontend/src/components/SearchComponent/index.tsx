import { useState } from "react"
import styled from "styled-components"

const InputStyled = styled.input`
  width: 98%;
  padding: 10px;
  font-family: "Manrope";
  background:rgba(209, 216, 224, 0.35);
  border: 0.5px solid black;
  border-radius: 8px;

  &::placeholder {
    color: grey;
    font-style: italic;
  }
`

type SearchComponentProps = {
  searchFunction: (text: string) => void,
  placeholder: string,
  type: string,
}

export default function SearchComponent({
  searchFunction,
  placeholder,
  type = "text",
}: SearchComponentProps) {
    const [localInput, setLocalInput] = useState("")
    
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentText = e.target.value
      setLocalInput(currentText)
      searchFunction(currentText)
    }

  return (
    <InputStyled
      type={type}
      value={localInput}
      onChange={handleInput}
      placeholder={placeholder}
    />
  )
}
