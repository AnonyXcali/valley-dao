import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setPage } from "../../store/slices/paginationSlice"
import styled from 'styled-components';

const StyledPageUL = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledButton = styled.button`
    cursor: pointer;
    height: 30px;
    width: 50px;
    padding: 5px;
    border: none;
    border-radius: 8px;
    color: white;
`


 /**
 * @function Pages
 * @returns A component for rendering page buttons for
 * based on total number of items provided by the backend
 * api
 * 
 * Uses state handling functions via react-redux
 */
export default function Pages({
  totalButtons,
  currentPage,
}: {
  totalButtons: number,
  currentPage: number,
}) {
  const dispatch = useDispatch<AppDispatch>();

   /**
 * @function handleChange
 * @returns void
 * 
 * Updates the global store for current page number.
 */
  const handleChange = (page: number) => {
    dispatch(setPage(page))
  }

  return (
    <div>
      <StyledPageUL>
        {new Array(totalButtons).fill(0).map((_, idx) => (
          <li
            key={idx}
          >
            <StyledButton
              style={{
                backgroundColor: `${currentPage === idx + 1 ? "rgb(63, 124, 237)" : "#70a1ff"}`
              }}
              type='button'
              onClick={() => handleChange(idx + 1)}
            >
              {idx + 1}
            </StyledButton>
          </li>
        ))}
      </StyledPageUL>
    </div>
  )
}
