import { time } from "console";
import * as fs from "fs";
import * as path from "path";
import { hourlySales } from "../interfaces";

export function getHighestHourByAverageTransactionVolume(): hourlySales{
  const transactionsPath = path.join("test-case-1");
  const dailyTransactions = fs.readdirSync(transactionsPath);

  const hourlyVolumes: {
    [hour: string]: { totalVolume: number; count: number };
  } = {};

  dailyTransactions.forEach((file) => {
    const data = fs.readFileSync(path.join(transactionsPath, file), "utf8");
    const transactions = data.split("\n");

    transactions.forEach((transaction) => {
      if (transaction.trim() === "") return;

      const transactionLine = transaction.split(",");
      const transactionTime = transactionLine[1];
      const saleAmount = parseFloat(transactionLine[3]);

      const hour = transactionTime.slice(11, 13);
      const minute = transactionTime.slice(14, 16);
      const timeSlot = `${hour}:${minute}`;

      if (!hourlyVolumes[timeSlot]) {
        hourlyVolumes[timeSlot] = { totalVolume: 0, count: 0 };
      }

      hourlyVolumes[timeSlot].totalVolume += saleAmount;
      hourlyVolumes[timeSlot].count += 1;
    });
  });

  let highestAverageVolume: number = 0;
  let highestTimeSlot: string = "";

  for (const timeSlot in hourlyVolumes) {
    const averageVolume =
      hourlyVolumes[timeSlot].totalVolume / hourlyVolumes[timeSlot].count;
    if (averageVolume > highestAverageVolume) {
      highestAverageVolume = averageVolume;
      highestTimeSlot = timeSlot;
    }
  }

  return { highestTimeSlot, highestAverageVolume };
}
