import Freecureencyapi from "@everapi/freecurrencyapi-js";

const freecureencyapi = new Freecureencyapi(
  "fca_live_OuF0BNMBpfk39l6XIVJVpLvdqRtEvQk8Trdnevpf"
);

export async function convertCurrency(fromCurrency, toCurrency, units) {
  const res = await freecureencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });

  const multiplier = res.data[toCurrency];
  return multiplier * units;
}
