import styled from 'styled-components'

const WrappedCalendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
`

const NameDay = styled.div`
  text-align: right;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 0.75rem;
  &:first-letter {
    text-transform: uppercase;
  }
`

const Title = styled.h1`
  &:first-letter {
    text-transform: uppercase;
  }
`

const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    user-select: none;
    cursor: pointer;
    font-size: 1.5rem;
    &:first-child {
      margin-right: 2rem;
    }
    &:last-child {
      margin-left: 2rem;
    }
  }
  svg:hover {
  }
`

export { WrappedCalendar, NameDay, Title, Head }
