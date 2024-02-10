"use strict"

import React, { useState } from 'react'
import styled from 'styled-components'
import DocStyleFactory from '@duongtdn/doc-style-factory'

const docStyleFactory = new DocStyleFactory()

const Container = styled.label `
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  font-size: 16px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`
const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: ${props => props.$checked? '#2196F3' : '#eee' };
  border-radius: 6px;

  &:after {
    content: "";
    position: absolute;
    display: ${props => props.$checked? 'block' : 'none' };

    left: 9px;
    top: 2px;
    width: 8px;
    height: 16px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &:hover {
    background-color: ${props => props.$checked? "#f44336" : "#ccc"};
  }
`

export default function CheckBox({ label, onChange }) {

  const [checked, setChecked] = useState(false);

  const content = docStyleFactory.create(label)

  return (
    <Container>
      {
        content?.map(
          ({text, style}, index) => <span style={style} key = {index}>{text}</span>
        )
      }
      <Input
        type="checkbox"
        checked = {checked}
        onChange = {onToggleCheckBox}
      />
      <CheckMark $checked = {checked} />
    </Container>
  );

  function onToggleCheckBox() {
    setChecked(!checked);
    onChange && onChange(!checked);
  }

}