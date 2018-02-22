import Immutable from 'seamless-immutable';
import * as types from './actionTypes';
import Router from "next/router"

const initialState = Immutable({
    pages: [{ title: "Why NextJs?", path: "/" },
    { title: "History time...", path: "/history" },
    { title: "ES6 Changes Everything", path: "/es6" },
    { title: "Boilerplates, boilerplates everywhere!", path: "/boilerplates" },
    { title: '"Gazillions" of boilerplates, forever dying in the Github sea , tried to address this problem.', path: "/github" },
    { title: "NextJs To The Rescue", path: "/next" },
    { title: "Demo", path: "/demo1" }

    ],
    currentPage: { title: "Why NextJs?", path: "/" },
    currentPageIndex: 0
});

export default function reduce(state = initialState, action) {
    switch (action.type) {
        case types.NEXT_PAGE: {
            let { currentPageIndex, pages } = state;

            if ((currentPageIndex + 1) < pages.length) {
                const nextPageIndex = currentPageIndex + 1;
                navigate(pages[nextPageIndex].path)
                return Immutable.merge(state, { currentPageIndex: nextPageIndex, currentPage: pages[nextPageIndex] })
            }
        }

        case types.PREVIOUS_PAGE: {
            let { pages, currentPageIndex } = state;


            if (currentPageIndex - 1 > 0 || currentPageIndex - 1 === 0) {
                const nextPageIndex = currentPageIndex - 1;
                navigate(pages[nextPageIndex].path)
                return Immutable.merge(state, { currentPageIndex: nextPageIndex, currentPage: pages[nextPageIndex] })
            }
        }

        default:
            break;
    }

    return state;
}

function navigate(path) {
    Router.replace(path)
    console.log(Router);
}