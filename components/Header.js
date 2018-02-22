import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigation } from 'cot-experience';
import styled from 'styled-components';

const StyledNav = styled(Navigation) `
    & img {
        height: 72px;
    }
`


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <StyledNav logo="./static/images/logo.svg" items={[]} />
        );
    }
}

Header.propTypes = {};

Header.defaultProps = {};

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Header);
