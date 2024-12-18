import styled from "styled-components"

const StatBlockStyled = styled.div`
  * {
    font-size: 14px;
  }

  min-width: 150px;
  padding: 5px 10px 5px 10px;
  border-radius: 8px;
  
`

const StatType = styled.div`
 h2 {
  color: grey;
  margin: 0;
 }
 
 margin-bottom: 5px;
`


const StatDiv = styled.div`
  p {
    color: black;
    margin: 0;
  }
`



export default function StatsBlock({
  stat,
  type,
} : {
  stat: string,
  type: string,
}) {
  return (
    <StatBlockStyled>
      <StatType>
        <h2>
          {type}
        </h2>
      </StatType>
      <StatDiv>
        <p>
          {stat}
        </p>
      </StatDiv>
    </StatBlockStyled>
  )
}
