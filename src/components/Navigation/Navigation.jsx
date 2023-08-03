import { Nav, ExampleLi,ExampleUl,ExampleA, Container} from './Navigation.styled';
// NavList, NavItem,StyledLink
// import {CategorySearchSelector} from './Selector/SelectorServices';
export const Navigation = () => {
    // const navItems = [
    //     { href: `/Home`, text: 'Home' },
    //     { href: '/Services', text: 'Services' },
       
    //     { href: '/Book us online', text: 'Book us online' },
    //     { href: '/Reviews', text: 'Reviews' },
    //     { href: '/Completed jobs', text: 'Completed jobs' },
    //     { href: '/About us', text: 'About us' },
    //     { href: '/Contact us', text: 'Contact us' },
    //   ];
   
    return (
          <Container>
                    <Nav>

          <ExampleUl >
                    <ExampleLi ><ExampleA  href="/Home">Home</ExampleA></ExampleLi>
                    <ExampleLi> <select name= "Services" >
                    <option value="value1">Services</option>
                    <option value="value1">For each</option>
                    <option value="value1">Description of service</option>
                    <option value="value1">Picture</option>
                    <option value="value1">Option to book online</option>
                    <option value="value1">Air duct cleaning</option>
                    <option value="value1">Dryer vent cleaning</option>
                    <option value="value1">Bathroom fan cleaning</option>
                    <option value="value1">Chimney cleaning</option>
                    <option value="value1">Comercial air duct cleaning</option>
                    </select></ExampleLi>
                    <ExampleLi ><ExampleA  href="/Book us online ">Book us online</ExampleA></ExampleLi>
                    <ExampleLi><ExampleA  href="/Reviews ">Reviews</ExampleA></ExampleLi>
                    <ExampleLi><ExampleA  href="/Completed jobs ">Completed jobs</ExampleA></ExampleLi>
                    <ExampleLi><ExampleA  href="/About us ">About us</ExampleA></ExampleLi>
                    <ExampleLi><ExampleA  href="/Contact us ">Contact us</ExampleA></ExampleLi>
                    </ExampleUl>
                    </Nav>


{/* <NavList>
{navItems.map(({ href, text }) =>( 
<NavItem>
        <StyledLink to={href}>
              <span>{text}</span>
            </StyledLink>
</NavItem>)
)}
</NavList> */}


          </Container>

 



   
    )
}

