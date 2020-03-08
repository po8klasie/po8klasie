import styled from "../styling/styled";
import React, {FC} from "react";

const Input = styled.input`
  padding: 0.2em .5em;
  background: rgba(230, 230, 230);
  border: 2px solid transparent;
  border-radius: 5px;
  font-size: 1.2em;
  outline: none;
  transition: 0.3s all;
  display: block;
  font-family: ${props => props.theme.fonts.secondary};
  &:focus {
    border: 2px solid rgb(200, 200, 200);
  }
`;
const InputWithAddonWrapper = styled.div`
  display: flex;
  input{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  span{
    display: flex;
    align-items: center;
    background: black;
    color: white;
    padding: .2em .5em;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;
interface InputWithAddonProps extends React.HTMLProps<HTMLInputElement>{
        addon: string;
}

export const InputWithAddon = React.forwardRef<HTMLDivElement, InputWithAddonProps> ((props, ref) => (
    <InputWithAddonWrapper ref={ref}>
            <Input {...props} />
            <span>{props.addon}</span>
    </InputWithAddonWrapper>
))
export default Input;