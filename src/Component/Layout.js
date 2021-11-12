import React from "react";
import PropTypes from "prop-types";
import Header from "./Header"
import Footer from "./Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const defaultProps = {};

export default function Component(props) {
    const { children } = props;

    return (
        <>
            <Header />
            <div className="section" style={{}}>{children}</div>
            <Footer />
        </>
    );
}

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;
