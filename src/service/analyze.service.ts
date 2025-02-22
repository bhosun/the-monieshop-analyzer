import { getHighestDailySalesVolume } from "../helpers/dailySalesVolume";
import { getHighestDailySalesValue } from "../helpers/dailySalesValue";
import { getMostSoldProductByVolume } from "../helpers/mostSoldProduct";
import { getStaffWithMostSalesPerMonth } from "../helpers/staffSales";
import { getHighestHourByAverageTransactionVolume } from "../helpers/getMostSalesPerHour";
import { DailySalesValue, DailySalesVolume, hourlySales, MostSoldProduct, StaffWithMostSales } from "../interfaces";

export function getHighestSalesVolume() {
  const volume: DailySalesVolume = getHighestDailySalesVolume();
  return volume;
}

export function getHighestDailySales() {
  const sale: DailySalesValue = getHighestDailySalesValue();
  return sale;
}

export function getMostSoldProduct() {
  const productData: MostSoldProduct  = getMostSoldProductByVolume();
  return productData;
}

export function getStaffsWithMostSales() {
  const salesData: StaffWithMostSales = getStaffWithMostSalesPerMonth();
  return salesData;
}

export function getHourWithMostTransactionsVolume() {
    const transactionData: hourlySales = getHighestHourByAverageTransactionVolume();
    return transactionData;
}
