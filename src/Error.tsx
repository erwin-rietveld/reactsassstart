import {isRouteErrorResponse, NavLink, useRouteError} from "react-router-dom";

export function Error() {
    const error = useRouteError();
    console.error(error);

    if (isRouteErrorResponse(error)) {
        return (
            <>
            <section className="apperror">
                <p className="text-paragraph">Oops, this page was not found. :( Please return to the <NavLink to={"/"}>Homepage</NavLink>.</p>
            </section>
            </>
        );
    } else {
        return (
            <></>
        )
    }
}