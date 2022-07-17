import styled from "styled-components";
import React from 'react'

//create a Title component that will render an <h1> tag with some styles
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`


//Create a Wrapper component that will render a <section> tag with some styles
const Wrapper = styled.section`
    padding: 4em;
    margin-top: 1em;
    background: papayawhip;
`

//use Title and Wrapper like any other React component - except they are styled!

function HelloWorld() {
  return (
    <>
        <Wrapper>
            <Title>
                Hello World
            </Title>
        </Wrapper>
    </>
  )
}

export default HelloWorld