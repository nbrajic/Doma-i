import { LaunchList } from "./components/LaunchList";
import { getPastLaunches, getName, getByYear } from "./service";
import { fillSb } from "./components/FillSb";

const app = document.querySelector('#app');
const header = document.querySelector('#header');
const sb = document.querySelector('#sb');

fillSb();

getPastLaunches().then(res => {
    app.append(LaunchList(res.data));
});

getName().then(res => {
    header.textContent = res.data.name;
    header.style.color = '#ffffff';
    header.style.fontSize = 'xx-large';
});

sb.addEventListener('change', function(){
    LaunchList([]).textContent = '';
    getByYear(sb[sb.selectedIndex].value).then(res => {
        app.append(LaunchList(res.data))
    });
});