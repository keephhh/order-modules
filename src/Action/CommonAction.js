// import {check, until, till, before, after, limit, every, and, sleep} from 'wait-promise';
import fetch from 'isomorphic-fetch'

export function fetchWithParams(url) {
    // if (params) {
    //     url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(params);
    // }

    return fetch(url, {
        headers: {
            Accept: 'application/json',
        },
        credentials: 'same-origin',
    });
}

// function queryParams(params) {
//     return Object.keys(params)
//         .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
//         .join('&');
// }

export function asyncAction(url, beginAction, finishAction) {
    return function (dispatch) {
        dispatch(beginAction());
        return fetchWithParams(url).then(response => response.json()).then(response => {
            if (response.data) {
                dispatch(finishAction(response.data));

            } else {
                console.log("failed: " + response.msg);
            }
        })
    }
}

export function getLocalTime (nS) {
    return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
}


