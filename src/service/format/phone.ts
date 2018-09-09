const extractAreaCode = (phone: string): string => {
  return `(${phone.substr(0, 3)})`;
};

export const formatPhone = (phone: string): string => {
  if (phone.length === 10) {
    return extractAreaCode(phone) + ` ${phone.substr(3, 3)}-${phone.substr(6, 4)}`;
  }
  return "";
};
