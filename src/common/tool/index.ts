export function throttle<T>(fn: T, delay = 10000, config: { first?: boolean, end?: boolean } = { first: true, end: false }): T {
    let canRun: boolean = true;
    let oldTime = Date.now()
    if (typeof fn !== 'function') {
        throw new TypeError('类型错误，传入函数不是一个方法')
    }
    return function (this: unknown) {
        const args = arguments
        if (config.first && canRun) fn.apply(this, args as any)
        if (!canRun) return;
        canRun = false;
        let newTime = Date.now()
        if(newTime - oldTime >= delay) {
            config.end && fn.apply(this, args as any)
            canRun = true;
            oldTime = Date.now()
        }
    } as any;
}

export function debounce<T>(fn: T, time = 500, config: { first?: boolean, end?: boolean } = { first: true, end: false }): T {
    let timeout: any
    if (typeof fn !== 'function') {
        throw new TypeError('类型错误，传入函数不是一个方法')
    }
    return function (this: unknown) {
        const args = arguments
        if (config.first && !timeout) fn.apply(this, args as any)
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => {
            config.end && fn.apply(this, args as any)
            timeout = null
        }, time);
    } as any;
}