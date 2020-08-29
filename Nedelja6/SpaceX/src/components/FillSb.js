const sb = document.querySelector('#sb');

export function fillSb() {
    const option1 = document.createElement('option');
    option1.textContent = '';
    sb.append(option1);
    for(let i = 2006; i<=2021; i++){
        if(i !== 2011){
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            sb.append(option);
        }
    }
}