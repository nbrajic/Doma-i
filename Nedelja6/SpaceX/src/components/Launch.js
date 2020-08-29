export const Launch = (launch) => {
    const launchContainer = document.createElement('div');
    launchContainer.className = 'launch';
    launchContainer.innerHTML = 
    `<div class="inner-div-0">
    <img src="${launch.links.mission_patch}" alt="">
    </div>
    <div class="inner-div-1">
    <span>${launch.rocket.rocket_name}</span>
    </div>
    <div class="inner-div-2">
    <span>${launch.launch_year}</span>
    </div>`;
    return launchContainer;
};
