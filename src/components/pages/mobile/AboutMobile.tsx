import React from "react";
import useBodyClass from "../../../helpers/useBodyClass";
import useSetPageTitle from "../../../helpers/useSetPageTitle";
import PropTypes from "prop-types";

const AboutMobile = ({pagetitle}: {pagetitle: string}) => {
    useBodyClass(["body--aboutmobile"]);
    useSetPageTitle(pagetitle);

    return (
        <article className={`app__content__page page page--aboutmobile`}>
            About mobile
        </article>
    )
}

AboutMobile.propTypes = {
    pagetitle: PropTypes.string,
}

export default AboutMobile;