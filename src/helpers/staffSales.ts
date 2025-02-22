import * as fs from "fs";
import * as path from "path";

export function getStaffWithMostSalesPerMonth() {
  const transactionsPath = path.join("test-case-1");
  const dailyTransactions = fs.readdirSync(transactionsPath);

  const staffSales: {
    [month: string]: {
      [staffId: string]: number;
    };
  } = {};

  dailyTransactions.forEach((file) => {
    const data = fs.readFileSync(path.join(transactionsPath, file), "utf8");
    const transactions = data.split("\n");

    transactions.forEach((transaction) => {
      if (transaction.trim() === "") return;

      const transactionLine = transaction.split(",");
      const staffId = transactionLine[0];
      const transactionTime = transactionLine[1];
      const saleAmount = parseFloat(transactionLine[3]);

      const month = transactionTime.slice(0, 7);

      if (!staffSales[month]) {
        staffSales[month] = {};
      }

      if (staffSales[month][staffId]) {
        staffSales[month][staffId] += saleAmount;
      } else {
        staffSales[month][staffId] = saleAmount;
      }
    });
  });

  const staffData: {
    [month: string]: {
      staffId: string;
      totalSales: number;
    };
  } = {};

  for (const month in staffSales) {
    let highestSales = 0;
    let topStaffId = "";

    for (const staffId in staffSales[month]) {
      if (staffSales[month][staffId] > highestSales) {
        highestSales = staffSales[month][staffId];
        topStaffId = staffId;
      }
    }

    staffData[month] = { staffId: topStaffId, totalSales: highestSales };
  }

  return staffData;
}
