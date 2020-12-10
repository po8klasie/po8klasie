import React, { forwardRef, Ref, HTMLProps } from 'react';
import styled from '../styling/styled';

const CheckboxInput = styled.input`
  position: absolute; // take it out of document flow
  opacity: 0; // hide it

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  // Box.
  & + label:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.colors.primary};
  }

  // Box hover
  &:hover + label:before {
    background: rgba(0, 0, 0, 0.05);
  }

  // Disabled state label.
  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  // Disabled box.
  &:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }

  // Checkmark. Could be replaced with an image
  &:checked + label:after {
    content: '';
    position: absolute;
    left: 6px;
    top: 10px;
    background: ${(props) => props.theme.colors.primary};
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 ${(props) => props.theme.colors.primary},
      4px 0 0 ${(props) => props.theme.colors.primary},
      4px -2px 0 ${(props) => props.theme.colors.primary},
      4px -4px 0 ${(props) => props.theme.colors.primary},
      4px -6px 0 ${(props) => props.theme.colors.primary},
      4px -8px 0 ${(props) => props.theme.colors.primary};
    transform: rotate(45deg);
  }
`;

const Checkbox = forwardRef((props: HTMLProps<HTMLInputElement>, ref: Ref<HTMLInputElement>) => (
  <CheckboxInput {...props} type="checkbox" ref={ref} />
));

export default Checkbox;
