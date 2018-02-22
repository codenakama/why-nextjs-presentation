
import React from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import Immutable from "seamless-immutable";
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
import { Title, Heading1, Button } from "cot-experience"
import { Flex, Box } from "grid-styled";


class Index extends React.Component {
    static async getInitialProps({ pathname, store, isServer }) {
        const state = store.getState();

        return { isServer }
    }

    componentDidMount() { }

    render() {
        const { title } = this.props;

        return (
            <Layout>
                <Flex justify="center" mb={4}>
                    <Heading1>{title}</Heading1>
                </Flex>

                <Flex justify="center">

                    <Button href="https://next-retail-mvxckijcqe.now.sh/" solid primary target="_blank">Books On Tap</Button>
                </Flex>

            </Layout>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    // do mapping of actions to props here
    // can also just do this.props.dispatch(myactionhere) inside a lifecycle event
});

const mapStateToProps = state => {

    return { title: state.presentation.currentPage.title }
}

const initStore = initialState => {
    // Nasty duck typing, you should find a better way to detect
    if (!Immutable.isImmutable(initialState)) initialState = Immutable(initialState);
    return createStore(
        combineReducers(reducers),
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index);