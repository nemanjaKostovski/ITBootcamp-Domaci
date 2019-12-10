const SPACEX_API = 'https://api.spacexdata.com/v3';
const LAUNCHES_PAST = '/launches/past';
const LAUNCHES_UPCOMING = '/launches/upcoming';
const LAUNCHES_ROADSTER = '/roadster';
const LAUNCHES_INFO = '/info';


export function getPastLaunches() {
    return fetch(`${SPACEX_API}${LAUNCHES_PAST}`).then(res => res.json());
}

export function getUpcomingLaunches() {
    return fetch(`${SPACEX_API}${LAUNCHES_UPCOMING}`).then(res => res.json());
}

export function getRoadster() {
    return fetch(`${SPACEX_API}${LAUNCHES_ROADSTER}`).then(res => res.json());
}

export function getInfo() {
    return fetch(`${SPACEX_API}${LAUNCHES_INFO}`).then(res => res.json());
}