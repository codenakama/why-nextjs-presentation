import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import Header from './Header';
import Container from './Container';
import * as presentationActions from "../store/presentation/actions"

import { presentation } from '../store/reducers';
const defaultTheme = {
    colorPrimary: '#27B161',
    colorDarkGrey: '#A4AAB3',
    colorShadow: '#000000',
    colorLightBlack: 'rgba(6, 31, 51, 0.7)',
    colorBlack: 'rgba(6, 31, 51, 1)',
    colorPrimaryEmphasis: '#148443',
    colorDanger: '#FF7183',
    breakpoints: [32, 48, 64],
};

const ContentContainer = styled.div`
  margin-top: 2em;
`;

class Layout extends Component {
    componentDidMount() {
        document.onkeydown = this.checkKey;
    }

    componentWillUnmount() {
        document.onkeydown = null;
    }

    checkKey = (e) => {

        e = e || window.event;

        if (e.keyCode == '38') {
            // up arrow
        }
        else if (e.keyCode == '40') {
            // down arrow
        }
        else if (e.keyCode == '37') {
            // left arrow
            this.props.dispatch(presentationActions.previousPage())
        }
        else if (e.keyCode == '39') {
            // right arrow
            this.props.dispatch(presentationActions.nextPage())
        }

    }

    render() {
        const { children, theme } = this.props;

        return (
            <ThemeProvider theme={defaultTheme}>
                <div style={{ marginBottom: '6em' }}>
                    <Header />
                    <Container>
                        <ContentContainer>{children}</ContentContainer>
                    </Container>
                </div>
            </ThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        theme: {},
    };
}

export default connect(mapStateToProps)(Layout);
