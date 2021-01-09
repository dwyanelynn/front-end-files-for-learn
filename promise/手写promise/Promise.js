/* 
    自定义Promise函数模块
    (先不用commonJS或ES6的模块化语法，因为到时使用了还会去编译。所以先用ES5的模块化语法：IIFE)
*/
(function(window) {
    /* 
        executor：执行器函数（同步执行）
     */
    function Promise(executor) {
        this.status = 'pending'
        this.data = undefined
        this.callbacks = []     //  当前promise实例对象的then()里的回调函数。 每个元素的结构：{onResolved() {}, onRejected() {} }

        function resolve(value) {
            // 如果当前状态不是pending，直接结束
            if (this.status !== 'pending') {
                return
            }
            // 将状态改为resolved
            this.status = 'resolved'
            // 保存value数据
            this.data = value
            // 如果有待执行callback函数，立即异步执行回调函数onResolved。
            if(this.callbacks.length > 0) {
                // 模拟放入队列中，从而执行所有成功的回调。
                setTimeout(() => {
                    this.callbacks.forEach(callbacksObj => {
                        callbacksObj.onResolved(value)
                    })
                });
            }
        }
        function reject(reason) {
            if (this.status !== 'pending') {
                return
            }
            this.status = 'rejected'
            this.data = value
            if(this.callbacks.length > 0) {
                setTimeout(() => {
                    this.callbacks.forEach(callbacksObj => {
                        callbacksObj.onRejected(reason)
                    })
                });
            }
        }
        // 立即同步执行executor, 并设置了如果有throw error，将状态设置为rejected
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    Promise.prototype.then = function(onResolved, onRejected) {
    }
    Promise.prototype.catch = function(onRejected) {
    }
    Promise.resolve = function(value) {
    }
    Promise.reject = function(reason) {
    }
    Promise.all = function(promises) {
    }
    Promise.race = function(promises) {
    }
    window.Promise = Promise
})(window)