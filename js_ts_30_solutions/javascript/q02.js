// Q2. Score Difference
const scoresA = [10, 20, 30, 40];
const scoresB = [7, 18, 25, 35];

const length = Math.min(scoresA.length, scoresB.length);

for (let i = 0; i < length; i++) {
  console.log(scoresA[i] - scoresB[i]);
}
