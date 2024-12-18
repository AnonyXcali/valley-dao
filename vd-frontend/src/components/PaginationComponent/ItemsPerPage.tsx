import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setItemsPerPage } from "../../store/slices/paginationSlice"
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  padding: 30px 10px 0px 10px;
  align-items: baseline;
  gap: 10px;
  font-size: 12px;
  justify-content: flex-end;

  select {
    height: 30px;
    width: 70px;
  }
`

export default function ItemsPerPage() {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: {
        value,
      }
    } = e
    dispatch(setItemsPerPage(parseInt(value, 10)))
  }

  return (
    <StyledDiv>
      <label>
        Items Per Page: 
      </label>
      <select
        onChange={handleChange}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </StyledDiv>
    
  )
}
