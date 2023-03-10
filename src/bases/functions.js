// Arrow Function retorno implicito
export const getUser = () => ({
    uid: '1R4521',
    username: 'jcarlosj',
    name: 'Juan',
});

export const getActiveUser = ( username, name ) => ({
    uid: '1R4521',
    username: username.toLowerCase(),
    name
});