/**
 *  Resolve given value after delay;
 *
 *  @param Mixed value
 *  @param Number delay, seconds (optional default 1s)
 *
 *  @return Promise
 */
const secondify = (value, delay=1) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), delay * 1000)
    });
}

/**
 * Show given after delay
 *
 * @param Mixed value
 * @param Number delay, seconds
 */
async function showWithDelay (value, delay) {
    console.log(await secondify(value, delay))
}

/**
 * Show each array items with delay
 *
 * @param Array arr
 * @param Number delay, seconds (optional default 1s)
 */
const showDelayedItems = (arr, delay = 1) => {
    let promise = Promise.resolve();
    arr.forEach((item) => promise = promise
        .then(() => showWithDelay(item,delay)));
}

export default showDelayedItems;
export {secondify, showWithDelay, showDelayedItems};

// demo mode
// use:
// node --require babel-register index.js
if(!module.parent) {
    let demoArray = [1,'2',[3],{item: 4}, true];
    showDelayedItems(demoArray);
}
