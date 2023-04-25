import React from "react";
import useBodyClass from "../../../helpers/useBodyClass";
import useSetPageTitle from "../../../helpers/useSetPageTitle";
import PropTypes from "prop-types";

const HomeMobile = ({pagetitle}: {pagetitle: string}) => {
    useBodyClass(["body--homemobile"]);
    useSetPageTitle(pagetitle);

    return (
        <article className={`app__content__page page page--homemobile`}>
            Homepage mobile
        </article>
    )
}

HomeMobile.propTypes = {
    pagetitle: PropTypes.string,
}

export default HomeMobile;