import styled from "styled-components"

const NavbarWrap = styled.div`
  width: 100%;
  height: 60px;
  background: #5352ed;
  padding: 15px 0px 5px 15px;
  display: flex;

  h1 {
    color: white;
    margin: 0;
  }
`

export default function Navbar() {
  return (
    <NavbarWrap>
      <h1>
        Phlo 🌿
      </h1>
    </NavbarWrap>
  )
}
