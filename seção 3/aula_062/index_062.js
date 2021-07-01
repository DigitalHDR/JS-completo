function numero(num) {
    if (typeof num !== 'number') return num
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    if (num % 3 === 0) return 'fizz'
    if (num % 5 === 0) return 'buzz'
    if (num % 3 !== 0 && num % 5 !== 0) return num
}

console.log('a', numero('a'))
for (let i = 0; i <= 100; i++) {
    console.log(i, numero(i))
}
