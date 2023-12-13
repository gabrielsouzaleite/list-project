import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  margin: 4rem auto 0;
  justify-content: space-between;
`

export const NewListItemButton = styled.button`
  border: 0;
  border-radius: 8px;
  padding: 0.5rem;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['green-500']};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.5s;
  }
`
