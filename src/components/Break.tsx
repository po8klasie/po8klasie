import React from 'react'
import styled from '../styling/styled'

type BreakElementProps = {
    color?: 'primary' | 'secondary'
}
const BreakElement = styled.span<BreakElementProps>`
  width:100px;
  height:.5em;
  display:block;
  border-radius:3px;
  margin-bottom:.5em;
  background:#BA97FF;
`;

export default (props: BreakElementProps) => <BreakElement {...props} />
