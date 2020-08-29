import {Launch} from './Launch';

const launchList = document.createElement('div');
launchList.className = 'launch-list';

export const LaunchList = (arr) => {
    arr.forEach(launch => {
        launchList.append(Launch(launch))
    });
    return launchList;
};
