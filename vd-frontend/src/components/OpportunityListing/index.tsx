import { Opportunity } from '../../types/entities';
import OpportunityCard from '../OpportunityCard';
import styled from 'styled-components';

const StyledUL = styled.ul`
  list-style: none;
  padding: 20px 0;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 0px;
`

type OpportunitiesListingProps = {
  opportunities: Array<Opportunity>
}

/**
 * @function OpportunitiesListing
 * @returns stateless component for rendering a list of
 * opportunities provided.
 */
export default function OpportunitiesListing({
  opportunities,
}: OpportunitiesListingProps) {

  return (
    <StyledUL>
      {opportunities.map((opportunity) => (
        <li key={opportunity.id}>
          <OpportunityCard
            opportunity={opportunity}
          />
        </li>
      ))}
    </StyledUL>
  )
}
