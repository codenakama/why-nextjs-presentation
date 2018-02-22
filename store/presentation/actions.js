import * as types from "./actionTypes";

export function nextPage() {
    return { type: types.NEXT_PAGE }
}

export function previousPage() {
    return { type: types.PREVIOUS_PAGE }
}