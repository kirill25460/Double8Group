import { Container,ExpPic,ExpTtl,ExpList,ExpItem,ExpItTtl1,ExpItText1,ExpItTtl2,ExpItText2,ExpItTtl3,ExpItText3,UnderLane } from "./Experience.styled"
import Exp1 from "images/Experience1.png";
import Exp2 from "images/Experience2.png";
import Exp3 from "images/Experience3.png";


export const Experience = () => {
    return(
    <>
    <Container>
        <ExpTtl>10+ YEARS OF EXPERIENCE</ExpTtl>
        <ExpList>
            <ExpItem>
                <ExpPic src={Exp1} alt="Exp1"/>
                <ExpItTtl1>1200+ SATISFIED  CUSTOMERS</ExpItTtl1>
                <ExpItText1>An open feedback system and an honest evaluation of work are, in our opinion, the main tools for growth and development. 
                    Text text Text text Text text Text text Text text Text text Text text Text text Text text Text text Text text Text text Text 
                    text Text text Text text Text text Text text Text text Text text Text text </ExpItText1>
            </ExpItem>
            <ExpItem>
                <ExpPic src={Exp2} alt="Exp2"/>
                <ExpItTtl2>A WIDE RANGE OF SERVICES</ExpItTtl2>
                <ExpItText2>An open feedback system and an honest evaluation of work are, in our opinion, the main tools for growth and development. 
                    Text text Text text Text text Text text Text text Text text Text text Text text Text text Text text Text text Text text 
                    Text text Text text Text text Text text Text text Text text Text text Text text </ExpItText2>
            </ExpItem>
            <ExpItem>
                <ExpPic src={Exp3} alt="Exp3"/>
                <ExpItTtl3>MORE THAN 30 HIGHLY QUALIFIED EMPLOYEES</ExpItTtl3>
                <ExpItText3>An open feedback system and an honest evaluation of work are, in our opinion, the main tools for growth and development. 
                    Text text Text text Text text Text text Text text Text text Text text Text text Text text Text text Text text Text text Text text 
                    Text text Text text Text text Text text Text text Text text Text text </ExpItText3>
            </ExpItem>
        </ExpList>

        <UnderLane> </UnderLane>
    </Container>
    </>
    )
}