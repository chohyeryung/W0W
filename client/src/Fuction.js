export const _getLastYYYYMM = () => {
    let now = new Date();
    let yyyy = now.getFullYear();
    let month = now.getMonth();
    
    if(month < 10) {
        month = `0${month}`
    }

    return yyyy+'-'+month

};

export const _getYYYYMM = () => {
    const timezoneOffset = new Date().getTimezoneOffset() * 60000;
    const timezoneDate = new Date(Date.now() - timezoneOffset);
    return timezoneDate.toISOString().substring(0, 7);
};