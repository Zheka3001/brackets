module.exports = function check(str, bracketsConfig) {
    for (let j = 0; j < str.length; j++) {
        for(let i = 0; i < bracketsConfig.length; i++) {
            if (str[j] === bracketsConfig[i][0] 
                && str[j + 1] === bracketsConfig[i][1]) {
                    str = str.substr(0, j) + str.substr(j + 2, str.length - (j + 2));
                    j--;
                    i = -1;
            }
        }
    }
    return !str.length || false
}
