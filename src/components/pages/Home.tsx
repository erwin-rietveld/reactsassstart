import React from "react";
import useBodyClass from "../../helpers/useBodyClass";
import useSetPageTitle from "../../helpers/useSetPageTitle";
import PropTypes from "prop-types";

const Home = ({pagetitle}: {pagetitle: string}) => {
    useBodyClass(["body--home"]);
    useSetPageTitle(pagetitle);

    return (
        <article className={`app__content__page page page--home`}>
            Homepage
        </article>
    )
}

Home.propTypes = {
    pagetitle: PropTypes.string,
}

export default Home;