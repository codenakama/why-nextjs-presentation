
import React from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    createStore,
    applyMiddleware,
    bindActionCreators,
    combineReducers
} from 'redux';
import withRedux from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../store/reducers';
import Layout from "../components/Layout";
import { Title, Heading1, Label, Icon } from "cot-experience"
import { Flex, Box } from "grid-styled";
import Router from "next/router"
import styled from 'styled-components';

const CenterBox = styled(Box) `
text-align: center;
`

const LargeSpan = styled.span`
font-size: 4em;
`

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    static async getInitialProps({ pathname, store, isServer }) {
        const state = store.getState();
        const { title } = state.presentation.currentPage;

        return { isServer }
    }



    componentDidMount() {

    }


    render() {
        const { title } = this.props;

        return (
            <Layout>
                <Flex justify="center" mb={4}>
                    <Heading1>{title}</Heading1>
                </Flex>
                <Flex align="center">
                    <CenterBox w={1 / 5} justify="center">
                        <img alt="nextjs" src="/static/images/next_logo.png" />
                    </CenterBox>
                    <CenterBox w={1 / 5} justify="center">
                        <LargeSpan>+</LargeSpan>
                    </CenterBox>
                    <CenterBox w={1 / 5} justify="center">
                        <img alt="nextjs" src="/static/images/react_logo.png" />
                    </CenterBox>
                    <CenterBox w={1 / 5} justify="center">
                        <LargeSpan>=</LargeSpan>
                    </CenterBox>
                    <CenterBox w={1 / 5} justify="center">
                        <Icon name="favorite" primary style={{ fontSize: "4em" }} />
                    </CenterBox>
                </Flex>
            </Layout>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    // do mapping of actions to props here
    // can also just do this.props.dispatch(myactionhere) inside a lifecycle event
});

const mapStateToProps = state => ({
    title: state.presentation.currentPage.title
})

const initStore = initialState =>
    createStore(
        combineReducers(reducers),
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );

Index = withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index);

export default Index;