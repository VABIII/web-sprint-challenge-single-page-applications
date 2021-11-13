import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5%; 

h2 {
  text-decoration: underline;
}   
a  {
  text-decoration: none;
  color: lightgray;
}   
a:hover {
  font-size: 1.25rem;
}    
`

export default function Contact() {

    return(
        <StyledDiv>
            <h2>Contact Us</h2>
            <p>Phone: 867-5309</p>
            <p>123 Anywhere, USA</p>
            <a href="">www.LambdaEats.com</a>
        </StyledDiv>
            )

}













































