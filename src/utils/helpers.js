export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const makeParams = (params) => {
    const urlParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        urlParams.append(key, value);
    });

    return urlParams.toString();
};
