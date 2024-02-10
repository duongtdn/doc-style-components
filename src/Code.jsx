"use strict"

import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { editor } from "monaco-editor";

const Container = styled.pre`
  margin: 6px 0;
  padding: 16px;
  border-radius: 6px;
  background: ${props => props.$theme?.match('-dark') ? '#414141': '#f1f1f1' };
`

export default function Code({ language, theme, children }) {

  const ref = useRef();
  useEffect(() => {
    ref.current && editor.colorizeElement(ref.current, { theme, tabSize: 2 })
  }, [])

  return (
    <Container data-lang = {language} $theme = {theme || ''} ref = {ref}>
      {
        children
      }
    </Container>
  )

};
