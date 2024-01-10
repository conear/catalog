export const showPrice = (valor) => {
  if (valor === "consultar") {
    return valor;
  } else {
    return parseFloat(valor.replace(".", "").replace(",", ".")).toLocaleString(
      "pt-br",
      { style: "currency", currency: "BRL" }
    );
  }
};
