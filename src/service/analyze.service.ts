import { getHighestDailySalesVolume } from "../helpers/dailySalesVolume";
import { getHighestDailySalesValue } from "../helpers/dailySalesValue";
import { getMostSoldProductByVolume } from "../helpers/mostSoldProduct";
import { getStaffWithMostSalesPerMonth } from "../helpers/staffSales";
import { getHighestHourByAverageTransactionVolume } from "../helpers/getMostSalesPerHour";

export function getHighestSalesVolume() {
  const volume = getHighestDailySalesVolume();
  return volume;
}

export function getHighestDailySales() {
  const sale = getHighestDailySalesValue();
  return sale;
}

export function getMostSoldProduct() {
  const productData = getMostSoldProductByVolume();
  return productData;
}

export function getStaffsWithMostSales() {
  const salesData = getStaffWithMostSalesPerMonth();
  return salesData;
}

export function getHourWithMostTransactionsVolume() {
    const transactionData = getHighestHourByAverageTransactionVolume();
    return transactionData;
}
