function memoization() {
    let cacheValue = {};

    return function (inputValue) {
        if (inputValue in cacheValue) {
            console.log('inside cache value');
            return cacheValue[inputValue];
        }
        else {
            console.log('inside new value');
            return cacheValue[inputValue] = inputValue + 20;
        };
    };
};


const result = memoization();
console.log(result(20));
console.log(result(20));
//using simple variable 

function _memoization() {
    let _cacheValue = null;

    return function (inputValue) {
        if (_cacheValue !== null) {
            console.log('inside cache value');
            return _cacheValue;
        }
        else {
            console.log('inside new value');
            return _cacheValue = inputValue + 20;
        }
    }

}

const _result = _memoization();
console.log(_result(30));
console.log(_result(30));