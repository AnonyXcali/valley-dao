import { Opportunity } from "../../types/entities"
import styled from "styled-components"
import MatchingScore from "./matchingScore"
import LogoBlock from "./Logoblock"
import StatBlock from "./StatBlock"

const StyledOpportunityCard = styled.div`
  width: 381px;
  min-height: 300px;
  border-radius: 8px;
  border: 1px solid #d1d8e0;
  padding: 20px 15px;
  background:rgba(245, 215, 106, 0.04);
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardTitle = styled.div`
  h3 {
    margin-bottom: 5px;
  }
`

const CardDescription = styled.div`
  h3 {
    margin-top: 0px;
  }
`

const CardStatistics = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

type OpportunityCardProps = {
  opportunity: Opportunity,
}

export default function OpportunityCard({
  opportunity,
}: OpportunityCardProps) {

  const statsObj: Record<string, {
    type: string,
    value: string,
  }> = {
    location: {
      type: "Location",
      value: opportunity.location,
    },
    deadline: {
      type: "Deadline",
      value: opportunity.deadline,
    },
    chequeSize: {
      type: "Cheque Size",
      value: opportunity.chequeSize,
    },
    type: {
      type: "Type",
      value: opportunity.type,
    }
  }

  const sentenceShortener = (text: string) => {
    if(text.length <= 70) {
      return text
    }
    return `${text.slice(0, 70)}....`
  }
  
  return (
    <StyledOpportunityCard>
      <CardHeader>
        {/**Random Color Logo*/}
        <LogoBlock />
        {/**Matching Score*/}
        <MatchingScore
          score={opportunity.matchingScore}
        />

      </CardHeader>
      <CardTitle>
        <h3>{opportunity.title}</h3>
      </CardTitle>
      <CardDescription>
        <p>{sentenceShortener(opportunity.description)}</p>
      </CardDescription>
      <CardStatistics>
        {statsObj && Object.keys(statsObj).map((item) => (
          <StatBlock
            type={statsObj[item].type}
            stat={statsObj[item].value}
          />
        ))}
      </CardStatistics>
    </StyledOpportunityCard>
  )
}