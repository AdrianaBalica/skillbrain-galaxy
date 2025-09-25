function getParameters(a, b) {
    return {
        a: a,
        b: b,
    };
}

const parameters = getParameters(1, 2);

delete parameters.b;

console.log("Rezultatul este ", parameters);