export const loadState = () => {
    try {
        const localState = localStorage.getItem('state');    
        if (localState === null) {
            return undefined;
        } 
        return JSON.parse(localState);
    }
    catch (error) {
        return undefined;
    }
}

export const persistState = (state) => {
    try {
        const localState = JSON.stringify(state);
        localStorage.setItem('state',localState);
    }
    catch (error) {
        return error;
    }
}