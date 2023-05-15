const sumAndSubtract = function (tokens) {
    for (let index = 0; index < tokens.length; index++) {
        const currentToken = tokens[index];
        if (currentToken === '-' || currentToken === '+') {
            const previousToken = tokens[index - 1];
            const nextToken = tokens[index + 1];
            const result = currentToken === '+'
                ? Number(previousToken) + Number(nextToken)
                : Number(previousToken) - Number(nextToken);
            tokens.splice(index - 1, 3, String(result));
            index -= 2;
        }
    }
    return tokens;
}

const multiplyAndDivision = function (tokens) {
    for (let index = 0; index < tokens.length; index++) {
        const currentToken = tokens[index];
        if (currentToken === '*' || currentToken === '/') {
            const previousToken = tokens[index - 1];
            const nextToken = tokens[index + 1];
            const result = currentToken === '*'
                ? Number(previousToken) * Number(nextToken)
                : Number(previousToken) / Number(nextToken);
            tokens.splice(index - 1, 3, String(result));
            index -= 2;
        }
    }
    return tokens;
}

const separa = function (parameters) {
    const expressionRegex = /([-+*/()]|\d+)/g;
    const tokens = parameters.match(expressionRegex);
    return tokens;
}

const verificaErros = function (tokens) {
    //example of input '45 + 5 - 9 / 2 * 6'
    const error = 'Malformed expression';

    //primeiro ou ultimo operando sem numero, only / and *
    const tokensLength = tokens.length;
    if (Number(tokens[0]) === '/' || Number(tokens[0]) === '*'
        || Number(tokens[tokensLength - 1]) === '/' || Number(tokens[tokensLength - 1]) === '*') {
        return error;
    }

    //procura more than one / or * consecutives.
    for (let index = 0; index < tokens.length; index++) {
        const currentToken = tokens[index];
        if (currentToken === '*' || currentToken === '/') {
            const nextToken = tokens[index + 1];
            if (currentToken === nextToken) {
                return error;
            }
        }
    }

    //or more than 2 + consecutives
    for (let index = 0; index < tokens.length; index++) {
        const currentToken = tokens[index];
        if (currentToken === '+') {
            const previousToken = tokens[index - 1];
            const nextToken = tokens[index + 1];
            if (previousToken === currentToken && currentToken === nextToken) {
                return error;
            }
        }
    }

    //parenteses mal formado
    const regex = /[()]/g;
    const parenthesesArray = tokens.join('').match(regex);
    if (parenthesesArray !== null) {
        if (parenthesesArray.length % 2 !== 0) {
            return error;
        }
    }

    return tokens;
}

const operate = function (operation) {
    const tokens = separa(operation);
    const error = verificaErros(tokens);
    let result = 0;
    //do pareteses first

    //result = 
    result = multiplyAndDivision(tokens);
    result = sumAndSubtract(tokens);
    
    return result[0];
}

module.exports = { sumAndSubtract, multiplyAndDivision, operate };
