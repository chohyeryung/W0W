export const _getYYYYMM = () => {
    const timezoneOffset = new Date().getTimezoneOffset() * 60000;
    const timezoneDate = new Date(Date.now() - timezoneOffset);
    return timezoneDate.toISOString().substring(0, 7);
};