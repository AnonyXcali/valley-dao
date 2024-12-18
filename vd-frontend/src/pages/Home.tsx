import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { useFetchOpportunitiesQuery } from '../store/slices/apiSlice'
import { useDebounce } from '../hooks/useDebounce'
import SearchComponent from '../components/SearchComponent'
import LoadingComponent from '../components/Loader'
import ErrorComponent from '../components/Error'
import OpportunitiesListing from '../components/OpportunityListing'
import ZeroState from '../components/ZeroState'
import { ItemsPerPage } from '../components/PaginationComponent'
import styled from 'styled-components'
import { Pages } from '../components/PaginationComponent'


const HomeWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
  background: #fff;
  padding: 20px 0px 20px 0px;

  @media(max-width: 1024px) {
    width: 100%;
  }
`

const SectionWrap = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0px 10px 0px;
`

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: -17px;


  h1, p {
    margin: 0;
  }

  p {
    max-width: 300px;
    margin-top: 8px;
  }
`


/**
 * @function OpportunitiesHome
 * @returns This component is the root page of the application
 * 
 * 1) It uses global state from react-redux for
 *   - Managing the current page size
 *   - Managing the current page
 *   - Structure the application for
 *      - Search Component
 *      - Number of Items in a Page
 *      - Listing of Opportunities
 *          - Rendering an Opportunity
 *      - Showing page buttons for pagination
 */
const OpportunitiesHome: React.FC = () => {
  const itemsPerPage: number = useSelector((state: RootState) => state.paginationReducer.itemsPerPage)
  const page: number = useSelector((state: RootState) => state.paginationReducer.pageNumber)
  const [searchQuery, setSearchQuery] = useState(''); // Manage search input locally
  const { data: opportunities, error, isLoading } = useFetchOpportunitiesQuery(searchQuery)
  
  //Running a debounce search with delay of 500ms after
  //user stops typing
  const debouncedSearch = useDebounce(
    (value: string) => {
      setSearchQuery(value);
      console.log("Debounced Query:", value);
    },
    500
  );

  //Running a search after 2 valid keystrokes.
  const handleSearchChange = (text: string) => {
    if(text.length >= 2 || !text.length) {
      debouncedSearch(text);
    }
  };

  //Paginating based on number of items in the page and
  //current page number.
  const paginatedValues = opportunities && opportunities.slice(
    (page - 1) * itemsPerPage, 
    page * itemsPerPage
  )

  return (
    <HomeWrapper>
      <SectionWrap>
        <img src="/valley_dao.png" height={200} width={200}/>
        <DescriptionWrap>
          <h1>Funding Opportunities</h1>
          <p>
            The Valley DAO Community is made up of Growers. They collectively help both the organisation and one another grow.
          </p>
        </DescriptionWrap>
      </SectionWrap>
     
      <SearchComponent
        searchFunction={handleSearchChange}
        placeholder="Search for opportunities..."
        type="text"
      />

      <ItemsPerPage />

      {isLoading && (
        <LoadingComponent />
      )}

      {error && (
        <ErrorComponent />
      )}

      {paginatedValues && paginatedValues.length > 0 ? (
        <OpportunitiesListing
          opportunities={paginatedValues}
        />
      ) : (
        <ZeroState />
      )}


      {opportunities && opportunities.length > 0 && (
        <Pages
          totalButtons={Math.floor(opportunities.length / itemsPerPage)}
          currentPage={page}
        />
      )} 

    </HomeWrapper>
  );
};

export default OpportunitiesHome