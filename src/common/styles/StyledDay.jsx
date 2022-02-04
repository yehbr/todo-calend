import styled, { css } from 'styled-components'

const WrappedDay = styled.div`
  min-width: 50px;
  min-height: 100px;
  border: 1px solid #d4d4d8;
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.lastDay &&
    css`
      background-color: #f4f4f5;
      border: 1px solid #e4e4e7;
      color: #a1a1aa;
    `}
  ${(props) =>
    props.presentDay &&
    css`
      border: 1px solid #a1a1aa;
    `}
`

const NumberDay = styled.div`
  align-self: flex-end;
  font-weight: 500;
  padding: 0.25rem;
  margin-bottom: 0.25rem;
  ${(props) =>
    props.weekendDay &&
    css`
      color: #8b5cf6;
    `}
  ${(props) =>
    props.presentDay &&
    css`
      font-weight: 700;
      color: #15803d;
      border-radius: 50%;
      background-color: #bbf7d0;
    `}
`

const Event = styled.div`
  ${(props) =>
    props.green &&
    css`
      background-color: #dcfce7;
      color: #166534;
    `}
  ${(props) =>
    props.red &&
    css`
      background-color: #fee2e2;
      color: #b91c1c;
    `}
  ${(props) =>
    props.orange &&
    css`
      background-color: #ffedd5;
      color: #9a3412;
    `}
  font-size: .875rem;
  margin-top: 0.25rem;
  padding: 3px;
  border-radius: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    z-index: 999;
    position: relative;
    overflow: visible;
    min-width: fit-content;
  }
`

export { WrappedDay, NumberDay, Event }
