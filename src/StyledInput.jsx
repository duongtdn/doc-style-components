"use strict"

import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import DocStyleFactory from '@duongtdn/doc-style-factory'

const docStyleFactory = new DocStyleFactory()

const Container = styled.div`
`
const Label = styled.div`
`
const Input  = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #2196F3;
  background: ${props => props.$isFocus? '#9e9e9e' : 'inherit'};
  color:  ${props => props.$isFocus? '#000' : 'inherit'};
  padding: 6px;
  font-family: inherit;
  outline: none;
`

export default function StyledInput ({ label, onChange }) {

  const texts = useMemo(
    () => docStyleFactory.create(label)
  , [label]);

  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  return(
    <Container>
      <Label>
      {
        texts?.map(
          ({text, style}, index) => <span style={style} key = {index}>{text}</span>
        )
      }
      </Label>
      <div>
        <Input
          type = 'text'
          value = {value}
          onChange = {onChangeInput}
          $isFocus = {isFocus}
          onFocus = {e => setIsFocus(true)}
          onBlur = {e => setIsFocus(false)}
        />
      </div>
    </Container>
  );

  function onChangeInput(e) {
    setValue(e.target.value);
    onChange(e.target.value);
  }

}
