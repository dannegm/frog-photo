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

export const getUnrepeatedRandomInt = (min, max, canLoop = false) => {
    let generated = [];

    const getUnrepeated = () => {
        if (generated.length > max - min) {
            if (!canLoop) {
                return null;
            }

            generated = [];
        }

        const num = getRandomInt(min, max);

        if (generated.includes(num)) {
            return getUnrepeated();
        }

        generated.push(num);
        return num;
    };

    return getUnrepeated;
};

export const sequence = (size) => Array.from(Array(size), (_, index) => index);
