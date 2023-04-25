import { useState, Suspense } from 'react'
import { isIE } from 'react-device-detect';
import {SwitchTransition, CSSTransition, TransitionGroup} from "react-transition-group";
import {Outlet} from "react-router-dom";

import {MainMenu} from "./components/MainMenu";
import {Loader} from "./Loader";

function App() {
    const [isLoading, setLoading] = useState(true);

    if (isIE) return (
        <main className="browsernotice">
            <div className="text-error">
                Woops! This browser is not supported. <br /><br />
                <a href="https://www.google.nl/chrome" target="_blank">Download new browser</a>
            </div>
        </main>
    )
    return (
        <main className={`app`}>
            <MainMenu />
            <section className="app__content">
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
            </section>
        </main>
    )
}

export default App
