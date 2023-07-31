import {NavList, NavItem, Nav, StyledLink} from './Navigation.styled'

export const Navigation = () => {
    const navItems = [
        { href: `/Home`, text: 'Home' },
        { href: '/Services', text: 'Services' },
        { href: '/Book us online', text: 'Book us online' },
        { href: '/Reviews', text: 'Reviews' },
        { href: '/Completed jobs', text: 'Completed jobs' },
        { href: '/About us', text: 'About us' },
        { href: '/Contact us', text: 'Contact us' },
      ];
   
    return (
        <Nav>
<NavList>
{navItems.map(({ href, text }) =>( 
<NavItem>
        <StyledLink to={href}>
              <span>{text}</span>
            </StyledLink>
</NavItem>)
)}
</NavList>
        </Nav>
    )
}

