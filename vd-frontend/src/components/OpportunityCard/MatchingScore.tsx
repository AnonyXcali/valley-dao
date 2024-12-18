import styled from "styled-components"

const MatchingScoreCard = styled.div`
  border-radius: 8px;
  background-color: ${props => props.color};
  width: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 0.5px solid #;
`

const Header = styled.div`
  font-size: 12px;
  p {
    margin: 0;
    color: black;
    color: ${props => props.color}
  }
`

const PercentageDiv = styled.div`
  p {
    text-align: right;
    font-size: 20px;
    margin: 0;
    color: ${props => props.color};
  }
`

/**
 * @function MatchingScore
 * @returns stateless component as a placeholder for Logo for
 * an opportunity.
 */
export default function MatchingScore({
  score,
}: {
  score: number,
}) {

  const getColor = () => {
    if(!score || (score >= 0 && score <= 39)) {
      return "#ff4d4d"
    } else if(score >= 40 && score <= 70) {
      return "#fffa65"
    } else {
      return "rgba(50, 255, 125, 0.33);"
    }
  }

  const getTextColor = () => {
    if(!score || (score >= 0 && score <= 39)) {
      return "red"
    } else if(score >= 40 && score <= 70) {
      return "orange"
    } else {
      return "#0f4523"
    }
  }


  return (
    <MatchingScoreCard
      color={getColor()}
    >
      <Header
        color={getTextColor()}
      >
        <p>Matching Score</p>
      </Header>
      <PercentageDiv
        color={getTextColor()}
      >
        <p>{score} %</p>
      </PercentageDiv>
    </MatchingScoreCard>
  )
}
