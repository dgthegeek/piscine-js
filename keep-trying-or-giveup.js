function retry(count = 3, callback = async () => {}) {
    async function retryFunction(...args) {
        try {
            const res = await callback(...args);
            return res;
        } catch (e) {
            if (count > 0) {
                return retry(count - 1, callback)(...args);
            } else {
                throw e;
            }
        }
    }

    return retryFunction;
}

function timeout(delay = 0, callback = async () => {}) {
    async function timeoutFunction(...args) {
        const timeoutPromise = new Promise((resolve) =>
            setTimeout(resolve, delay, Error('timeout'))
        );

        const functionCallPromise = new Promise((resolve) =>
            resolve(callback(...args))
        );

        const res = await Promise.race([timeoutPromise, functionCallPromise]).then(
            (res) => res
        );

        if (res instanceof Error) {
            throw res;
        }

        return res;
    }

    return timeoutFunction;
}
