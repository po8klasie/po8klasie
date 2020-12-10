import React, { HTMLProps, ReactNode, forwardRef } from 'react';
import styled from '../styling/styled';

const Input = styled.input`
  padding: 0.5em 0.5em;
  background: ${(props) => props.theme.colors.light};
  border: 2px solid transparent;
  border-radius: 10px;
  font-size: 1.2em;
  transition: 0.3s all;
  display: block;
  width: 100%;
  &:focus {
    border: 2px solid rgb(200, 200, 200);
  }
`;
const InputWithAddonWrapper = styled.div<{ addonPosition: 'left' | 'right' }>`
  display: inline-flex;
  flex-direction: ${(props) => (props.addonPosition === 'left' ? 'row' : 'row-reverse')};
  input {
    ${(props) =>
      props.addonPosition === 'left'
        ? `
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
       `
        : `
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
       `}
    &:focus {
      border-color: transparent;
    }
  }
  span.addon {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.primaryLight};
    padding: 0.2em 1em;
    ${(props) =>
      props.addonPosition === 'left'
        ? `
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    `
        : `
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    `}
  }
`;
interface InputWithAddonProps extends HTMLProps<HTMLInputElement> {
  addon: ReactNode;
  addonPosition: 'left' | 'right';
}

export const InputWithAddon = forwardRef<HTMLDivElement, InputWithAddonProps>((props, ref) => (
  <InputWithAddonWrapper ref={ref} addonPosition={props.addonPosition}>
    <span className="addon">{props.addon}</span>
    <Input {...props} size={15} />
  </InputWithAddonWrapper>
));
export default Input;
