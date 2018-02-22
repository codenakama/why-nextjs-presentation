
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
import { Title, Heading1, Paper, Icon, Button } from "cot-experience"
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
                <Paper>
                    <Flex justify="center" mb={3}>
                        <Heading1>{title}</Heading1>
                    </Flex>
                    <Flex justify="center" mb={3}>
                        <Title>Advantages</Title>
                    </Flex>
                    <Flex justify="center">
                        <Box w={1 / 2}>
                            <ul>
                                <li>
                                    Components are written in React
                                </li>

                                <li>
                                    Simple Server Side Rendering out of the box
                                </li>
                                <li>
                                    Error handling and in your face error screens so you don't have to waste time finding them
                                </li>
                                <li>
                                    Hot module replacement - in dev allows for the previous errors shown in screen and gone after fixing, in production allows for hot fixes without customers noticing or needing a full deployment (although not sure we should be doing hot fixes, but could happen...)
                                </li>
                                <li>
                                    Super fast 🚀
                                </li>
                            </ul>
                        </Box>
                    </Flex>
                    <Flex justify="center">
                        <Button href="https://github.com/zeit/next.js" target="_blank" primary solid >NEXT.js On Github</Button>
                    </Flex>
                </Paper >
            </Layout >
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