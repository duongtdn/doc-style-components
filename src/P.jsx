"use strict"

import React from "react"
import styled from "styled-components"
import DocStyleFactory from "@duongtdn/doc-style-factory"

const docStyleFactory = new DocStyleFactory()

const Container = styled.p`
  margin: 6px 0;
  font-size: 1.2em;
`

export default function P({ children }) {

  const content = docStyleFactory.create(children)

  return (
    <Container>
      {
        content?.map(
          ({text, style}, index) => <span style={style} key = {index}>{text}</span>
        )
      }
    </Container>
  )
};
