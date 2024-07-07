function generateFibonacci() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    if (numberInput <= 0) {
        resultDiv.innerHTML = 'Please enter a positive number.';
        return;
    }

    const n = parseInt(numberInput);
    let fibSeries = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }

    resultDiv.innerHTML = `Fibonacci Series: ${fibSeries.slice(0, n).join(', ')}`;
}
