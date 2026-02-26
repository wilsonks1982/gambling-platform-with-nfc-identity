const fs = require("fs");
const path = require("path");

const resultPath = path.join(__dirname, "..", "..", "..", "math-test");
var isValid = true;

async function getHits(state) {
  let betIndex = 4;
  let denomIndex = 4;
  let bets = [1, 2, 3, 4, 5];
  const denomValues = [1, 2, 5, 10, 20, 50, 100, 200, 500];
  const host = "127.0.0.1:9001";
  const uid = "534510e1";
  const egmId = `WAS-100${Math.floor(Math.random() * 6) + 1}`;

  try {
    const res = await fetch(
      `http://${host}/api/v1/spin?uid=${uid}&betIndex=${betIndex}&denomIndex=${denomIndex}&s1=0&s2=0&s3=0&isGaffingOn=False&egmId=${egmId}`
    );
    const answer = await res.json();
    if (answer.ok !== 1) {
      console.error(answer);
      isValid = false;
    }
    console.log("RESPONSE", answer);
    state.amountSpent += bets[betIndex] * denomValues[denomIndex];
    if (answer.totalWin > 0) {
      state.amountWon += answer.totalWin;
      state.hits += 1;
    }
  } catch (e) {
    console.log("ERROR", e);
    isValid = false;
  }
}

async function runTest() {
  const chartData = [];
  const state = { hits: 0, amountSpent: 0, amountWon: 0 };
  const totalSpins = 2097152;

  for (let i = 1; i <= totalSpins; i++) {
    if (!isValid) break;
    await getHits(state);

    const probBySpins = (state.hits / i) * 100;
    const probByAmount =
      state.amountSpent > 0 ? (state.amountWon / state.amountSpent) * 100 : 0;
    console.log("Totol Spins =", i);
    console.log("Hit% =", probBySpins);
    console.log("Payout% =", probByAmount);

    if (i % 5000 === 0) {
      chartData.push({
        spin: i,
        hitRate: parseFloat(probBySpins.toFixed(2)),
        profitRate: parseFloat(probByAmount.toFixed(2)),
      });
    }
  }

  const resultText = `
Last Tested On: ${new Date()}
Total Spins: ${totalSpins}
Total Hits: ${state.hits}
Total Amount Spent: ${state.amountSpent}
Total Amount Won: ${state.amountWon}
Hits% : ${((state.hits / totalSpins) * 100).toFixed(2)}%
Payout%: ${((state.amountWon / state.amountSpent) * 100).toFixed(2)}%
`;
  if (isValid) {
    fs.writeFileSync(path.join(resultPath, "test_results.txt"), resultText);
    fs.writeFileSync(
      path.join(resultPath, "chart_data.json"),
      JSON.stringify(chartData, null, 2)
    );
    console.log("✔ Test complete. Files saved in the current path.");
  } else {
    console.error("Test could not complete. No files were written or saved.");
  }
}

runTest();
