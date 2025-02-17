import { Link, NavLink } from 'react-router-dom';

function NavigationBar() {
    return (
        <nav className='clearfix'>
            <NavLink to='/home' activeClassName='active'>Home</NavLink>
            <NavLink to='/comics' activeClassName='active'>Comics</NavLink>
            <NavLink to='/characterdetail' activeClassName='active'>Character Detail</NavLink>
            <NavLink to='/browscharacters' activeClassName='active'>Browse Characters</NavLink>
        </nav>
    )
}

export default NavigationBar;