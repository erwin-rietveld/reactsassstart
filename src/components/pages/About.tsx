import React from "react";
import useBodyClass from "../../helpers/useBodyClass";
import useSetPageTitle from "../../helpers/useSetPageTitle";
import PropTypes from "prop-types";

const About = ({pagetitle}: {pagetitle: string}) => {
    useBodyClass(["body--about"]);
    useSetPageTitle(pagetitle);

    return (
        <article className={`app__content__page page page--about`}>
            About
        </article>
    )
}

About.propTypes = {
    pagetitle: PropTypes.string,
}

export default About;