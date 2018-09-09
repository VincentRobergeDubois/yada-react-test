export const currency = (locale: string, value: number): string => {
  return new Intl.NumberFormat(locale, { style: "currency", currency: "CAD" }).format(value);
};
