import styled from "styled-components"

const LogoBlockCard = styled.div`
  background-color: #70a1ff;
  width: 80px;
  height: 40px;
  border-radius: 8px;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
  }
`

export default function LogoBlock() {

  return (
    <LogoBlockCard>
      <p>
        Logo
      </p>
    </LogoBlockCard>
  )
}
