import styled from 'styled-components';


export const Container = styled.div`
display:flex;
  width: 375px;
  margin: 0 auto;
  padding: 0 16px;
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`;

export const Wrap = styled.div`

`

export const HomeWrap = styled.div`
height:794px;
background-color:#222021;
`
export const HomeText = styled.h2`
margin:0;
padding-top:215px;
font-family: Montserrat;
font-size: 75px;
font-weight: 600;
line-height: 61px;
letter-spacing: 0px;
text-align: left;
color: #F8821E;
text-shadow: 4px 4px 31px rgba(248,130,30,0.65);
`

export const HomePar = styled.p`
margin:0;
padding-top:32px;
color:#FFFFFF;
width: 611px;
height: 287px;
font-family: Montserrat;
font-size: 22px;
font-weight: 300;
line-height: 29px;
letter-spacing: 0px;
text-align: left;

`
export const AboutUsPic = styled.img`
width: 774px;
height: 763px;
padding-top: 30px;
padding-left:103px;

@media screen and (min-width: 1440px) {
} 
`;




export const MainPage = styled.div`
margin-top: 5px;

    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;


`

export const MainPicture = styled.img`
width:70%;
padding-top:15px;
display: block;
  margin-left: auto;
  margin-right: auto;

`;


export const MainText = styled.h2`
padding-top:15px;
display:flex;
align-items: center;
justify-content: center;
color:#fff;

`
export const MainPar = styled.p`
display:flex;
align-items: center;
justify-content: center;
color:#fff;
`

export const HomeList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 15px;
list-style: none;
`

export const HomeItem = styled.li`
display:flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;
width: 100%;
background: transparent;
align-items: stretch;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
width: calc((100% - 0px) / 1);
&:hover{box-shadow: 0 15px 20px rgba(32, 32, 32, .4);}
@media screen and (min-width: 768px) {
    
      width: calc((100% - 30px) / 2);
  
  }
  @media screen and (min-width: 1200px) {
   
      width: calc((100% - 60px) / 3);
    }
`



export const HomeItemButton = styled.button`
// background-color:#FF8C00
text-decoration: none;
display: inline-block;
width: 140px;
height: 45px;
line-height: 45px;
border-radius: 45px;
border:none;
margin: 10px 20px;
font-family: 'Montserrat', sans-serif;
font-size: 11px;
text-transform: uppercase;
text-align: center;
letter-spacing: 3px;
font-weight: 600;
color: #FF8C00;
background: white;
box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
transition: .3s;
&:hover{background: #FF8C00;
    box-shadow: 0 15px 20px rgba(32, 32, 32, .4);
    color: white;
    transform: translateY(-7px);}
`

export const PhoneButton = styled.button`
position: fixed;
bottom:50px;
right:50px;
background-color: #ffffff;
border-radius: 50%;
border: 12px;
cursor: pointer;
box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
&:hover{background-color: #202020;}
svg {
    fill: #202020;
  
    &:hover{fill: #FF8C00;}
  }

`



export const WhyUsTop = styled.h2`

display:flex;
align-items: center;
justify-content: center;
color:#fff;

`

export const WhyUsText = styled.p`

 color:#fff;
 width: 450px;


`
export const WhyPictures = styled.img`
width:385px;

`;

export const WhyWrapPictures = styled.div`


`;
export const WhyWrap = styled.div`
display:flex;
justify-content: center;
flex-direction: row-reverse;
align-items: center;
`;

export const WhyTextWrap = styled.div`

`

export const PicturesList = styled.ul`

list-style: none;
`;
export const PicturesItem = styled.li`

`
