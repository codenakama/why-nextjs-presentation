// this file is loaded before components are rendered
// import babelPolyfill from 'babel-polyfill';
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { initGlobalStyles } from 'cot-experience';

initGlobalStyles();

class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html lang="en">
                <Head>
                    <title>Why NextJs - NPM Crew by Ricardo Abreu</title>
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta charSet="utf-8" />

                    <link
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                        async
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
                        async
                        rel="stylesheet"
                    />
                    <link href="./static/styles/main.css" rel="stylesheet" />
                    <meta name="viewport" content="width=device-width" />

                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;
