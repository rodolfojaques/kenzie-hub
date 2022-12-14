import styled from "styled-components";

export const ButtonForm = styled.div`

width: ${({divSize}) => divSize};
text-align: center;

button{

    border-radius: 5px;
    border-style: none;
    color: #F8F9FA;
    background-color: ${({backcolor})=> backcolor};
    
    height: ${({sizeX})=> sizeX};
    width: ${({size})=> size};

    &:hover{
            border: solid #F8F9FA;   
    }   
}
`;