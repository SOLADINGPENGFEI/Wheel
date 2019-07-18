//防抖 非立即执行
export function Debounce(func, ms=500) {
    let timer = 0;

    return function() {
        window.clearTimeout(timer)
        timer = setTimeout(() => {
            func()
        },ms)
    }
}

//截流 时间戳版
export function Throttle(func, ms=500) {
   let start = +new Date()

   return function() {
       let current = +new Date()
       if(current - start > ms) {
           func()
           start = current
       }
   }
}