import './sass/main.scss'

function Header() {
    return (

        <
        header className = "header" >
        <
        nav id = "navbar"
        className = "flex flex-jc-sb" >
        <
        a href = "/"
        className = "header__logo" >
        <
        img src = "https://img.icons8.com/emoji/48/000000/-emoji-admission.png" /
        >

        <
        /a> <
        a href = "#"
        className = "header__menu hide-for-desktop " >
        <
        /a> <
        div className = "header__links  " >
        <
        a href = "# "
        id = "button-portfolio"

        className = "hide-for-mobile" > Porfolio < /a> <
        a href = "# "
        id = "button-project"

        className = "hide-for-mobile" > Projects < /a> <
        a href = "# "
        id = "button-app"

        className = "hide-for-mobile" > Apps < /a> <
        a href = "# "
        id = "button-about"

        className = "hide-for-mobile" > Article < /a> <
        a href = "https://www.buymeacoffee.com/vsvai"
        target = "blank" >
        <
        button className = "button header__cta " > buy me a coffee < /button> < /
        a > <
        /div> < /
        nav >

        <
        /header>


    );
}

export default Header;