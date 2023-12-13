import styled, { css } from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'

export const ListContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`
export const ListTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface TypeToggleProps {
  variant: 'checked' | 'unchecked'
}

export const ListLine = styled.tr<TypeToggleProps>`
  ${(props) =>
    props.variant === 'checked'
      ? css`
          opacity: 0.1;
        `
      : css`
          opacity: 1;
        `}
`

export const ListCheckbox = styled(Checkbox.Root)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const ListCheckboxItem = styled.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
`

export const ListCheckboxCheck = styled(Checkbox.Indicator)`
  width: 1rem;
  height: 1rem;
  background: ${(props) => props.theme['green-500']};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
  font-weight: bold;
`
