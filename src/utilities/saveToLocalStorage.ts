function saveToLocalStorage(saveObj:any,key:string){
localStorage.setItem(key, saveObj);
}

function getFromLocalStorage(key:string){
    return localStorage.getItem(key);
}

export {saveToLocalStorage,getFromLocalStorage}