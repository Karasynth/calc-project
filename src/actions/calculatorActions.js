
function addToEquation(operator) {
    return {
        type: "ADD_TO_EQUATION",
        operator
    };
};

function clearEquation() {
    return {
        type: "CLEAR_EQUATION",
    };
};

export default {
    addToEquation,
    clearEquation
};