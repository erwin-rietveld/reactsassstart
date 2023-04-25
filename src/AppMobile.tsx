import {Suspense, useEffect, useState} from 'react'
import { isIE } from 'react-device-detect';
import {Outlet, useLocation} from "react-router-dom";
import useBodyClass from "./helpers/useBodyClass";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Loader} from "./Loader";

function AppMobile() {
    useBodyClass(["body--mobile"]);

    const [isLoading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    if (isIE) return (
        <main className="browsernotice">
            <div className="text-error">
                Woops! This browser is not supported. <br /><br />
                <a href="https://www.google.nl/chrome" target="_blank">Download new browser</a>
            </div>
        </main>
    )
    return (
        <main className={`appmobile`}>
            <TransitionGroup component={null} exit={true}>
                <CSSTransition
                    key={location.pathname}
                    timeout={1000}
                    classNames="page"
                    addEndListener={(node, done) =>
                        node.addEventListener("transitionend", done, false)
                    }
                >
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </CSSTransition>
            </TransitionGroup>
        </main>
    )
}

export default AppMobile
