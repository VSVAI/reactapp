import './sass/dist/menu.css';
import './sass/main.scss';

function Menu() {
    return ( <
        nav className = "menu hide-for-desktop  " >
        <
        input type = "checkbox"
        href = "#"
        className = "menu-open"
        name = "menu-open"
        id = "menu-open" / >
        <
        label className = "menu-open-button"
        for = "menu-open" >
        <
        span className = "lines line-1" > < /span> <
        span className = "lines line-2" > < /span> <
        span className = "lines line-3" > < /span> < /
        label >

        <
        a href = "#"
        className = "menu-item blue" > < /a> <
        a href = "#"
        className = "menu-item green" > < /a> <
        a href = "#"
        className = "menu-item red" > < /a>

        <
        /nav>
    );
}

export default Menu;