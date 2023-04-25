import {NavLink} from "react-router-dom";
import {useState} from "react";
import settings from "../Settings";

export const MainMenu = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const toggleMenu = () => {
        if(isOpenMenu) {
            document.body.classList.remove("mainmenu--open");
            document.body.classList.add("mainmenu--is--closing");
            setTimeout(() => document.body.classList.remove("mainmenu--is--closing"), settings.itemClosingAnimationLength);
        } else {
            document.body.classList.remove("mainmenu--is--closing");
            document.body.classList.add("mainmenu--open")
        }
        setIsOpenMenu(current => !current)
    }

    const handleMenuClick = () => {
        toggleMenu();
    }

    return (
        <>
            <section className={`mainmenu app__mainmenu`}>
                <div className="mainmenu__button" onClick={toggleMenu}>

                </div>
            </section>
            <section className="mainmenucontent app__mainmenucontent">
                <nav className="mainmenucontent__navigation">
                    <ul className="mainmenucontent__navigation__list">
                        <li className="mainmenucontent__navigation__listitem">
                            <NavLink to={`/`} className="mainmenucontent__navigation__link" onClick={handleMenuClick}>
                                 Home
                            </NavLink>
                        </li>
                        <li className="mainmenucontent__navigation__listitem">
                            <NavLink to={`/about`} className="mainmenucontent__navigation__link" onClick={handleMenuClick}>
                                About
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    )

}