import createRawData from "./helpers/createRawData.js";

(async () => {
    //you can change international currency cod and date in format YYYY-MM-DD

    const incomes = [
        { currency: "USD", date: "2021-12-12" },
        { currency: "USD", date: "2021-12-11" },
        { currency: "USD", date: "2021-12-10" },
        { currency: "CZK", date: "2021-12-09" },
        { currency: "CZK", date: "2021-12-08" },
        { currency: "CZK", date: "2021-12-07" },
        { currency: "EUR", date: "2021-12-06" },
        { currency: "EUR", date: "2021-12-05" },
        { currency: "EUR", date: "2021-12-04" },
        { currency: "PLN", date: "2021-12-03" },
        { currency: "PLN", date: "2021-12-02" },
        { currency: "PLN", date: "2021-12-01" }
    ];
    const rawData = await createRawData(incomes);

    console.table(rawData);
})();
