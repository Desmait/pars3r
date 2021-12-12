import axios from 'axios';
import cheerio from 'cheerio';
const getRate = async (date, currency) => {
    try {
        const res = await axios.get(
            `https://minfin.com.ua/currency/banks/${currency}/${date}`
        );
        const $ = cheerio.load(res.data);
        let oddText = $("span", ".mfcur-nbu-full-wrap").text();
        let oddText2 = $('[data-title="Средний курс"]').children().remove().end().text();
        let nbu = Number(
            $(".mfcur-nbu-full-wrap").text().replace(oddText, "").replace(/\n/g, "")
        );
        let average = String(
            oddText2.replace(/\n/g, "/").replace('//', '-').replace(/\//g, '')
        );
        return {
            nbu: nbu,
            average: average
        };
    } catch (err) {
        console.log("cant fetch", err);
    }
};
export default getRate;
