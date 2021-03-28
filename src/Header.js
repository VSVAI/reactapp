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
        className = "header__logo hide-for-desktop" >
        <
        img img src = "https://lh3.googleusercontent.com/biTDJEBqV-PbPZVY0PcQw5uSuwTS_Dbxvi0_yVsuDSHq8X-3voEWKo-YmiHuihxZBI4nXwl2LXvkhm1Xdzdm9CKYoEjSRzvbMtieZkVq2DyFUsLCVGcQDSeMWiwIg_zvaqhvx6k06ICQiWZ9RFXhDbthFwpoKgX4BmzTsKDy-Rh-xqpsEW3Qy7eDOiVMeAaNcts7aISB4qsBG_N-BrHeeyaj5xBo-FVspO5qFBFOxihnVrRlif8Dt6JtvIv_BH8CX4_iKY-y5euB41fZaInd2rluGnTgNbIJnZ_2qBJsG5SfQFJ7xmWILooORHDC8J3eTnRSDaOWPHbH_NZK5yWZ8BDZtM-SKEReqp2WqnXvIpXghpvuASzAc7o5bEBgg8qGFUa0McGDHrvrLMn_BI1d50mP6vgGXOvSv-cx7sIodYv2_B_7y6ujeeCLIz8Q6YPKtvogAkXhHZ0za01VzyZhZniR9M2NP9Lxx0P5rsowOUS9XzJf3JBTqEgscf7DcL9ljioN7_NLbOrPqUTw88yMqzHkSX-eSkphRVTsiOApjDMUc_BQwS3dfjXDFOn4sYvJWDQsEHCDgKPzDInOvt7eU-mbd4ZLXrjmnpFz1DMWPP3DTR8VM93bSt4yLN4TbsfyEqkbYqCfTauGtxTUsApIVvjvqmO5_BpDdwhhcwwAAjBIPmmH5khK1F0SNxUoUCQ=w239-h240-no?authuser=0" / >


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

        className = "hide-for-mobile hide-for-desktop" > Porfolio < /a> <
        a href = "# "
        id = "button-project"

        className = "hide-for-mobile hide-for-desktop" > Projects < /a> <
        a href = "# "
        id = "button-app"

        className = "hide-for-mobile hide-for-desktop" > Apps < /a> <
        a href = "# "
        id = "button-about"

        className = "hide-for-mobile hide-for-desktop" > Article < /a> <
        a href = "https://www.buymeacoffee.com/vsvai"
        target = "blank" >
        <
        a className = " header__cta hide-for-desktop " > buy me a coffee < /a> < /
        a > <
        /div> < /
        nav >

        <
        /header>


    );
}

export default Header;