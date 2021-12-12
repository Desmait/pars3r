import getRate from "./getRate.js";
const createRawData = async (incomes) => {
    return await incomes.reduce(async (acc, curr) => {
        let rawDataArray = await acc;
        let rate = await getRate(curr.date, curr.currency);
        rawDataArray.push({
            ...curr,
            rate_nbu: rate.nbu.toFixed(2),
            rate_average: rate.average
        });
        return rawDataArray;
    }, Promise.resolve([]));
};
export default createRawData;
