function getMaxLessThanK(n, k) {
    let max = 0;
    for (let i = 1; i <= n - 1; i++) {
        for (let j = i + 1; j <= n; j++) {
            let and = i & j;
            if (and > max && and < k) {
                max = and;
            }
        }
    }
    return max;
}