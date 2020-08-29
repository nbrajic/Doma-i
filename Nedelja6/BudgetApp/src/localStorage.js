var data = [], nextId = 1; 

export function insert(entry) {
    entry.id = nextId++;
    data.push(entry);
    window.localStorage.setItem('storageArray', JSON.stringify(data));
    return entry.id;
}

export function remove(element) {
    data.splice(data.findIndex(el => element.id == el.id ), 1);
    window.localStorage.setItem('storageArray', JSON.stringify(data));
}

export function selectAll() {
    const storageData = window.localStorage.getItem('storageArray');
    if (storageData == null) {
        data =  [];
        nextId = 1;
    }
    else {
        data = JSON.parse(window.localStorage.getItem('storageArray'));
        nextId = data[data.length - 1].id+1;
    }
    return data;
}