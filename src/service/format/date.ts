export const date = (locale: string, value: Date): string => {
    return new Intl.DateTimeFormat(locale).format(value);
};

export const datetime = (locale: string, value: Date): string => {
    return new Intl.DateTimeFormat(locale, {
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        month: "numeric",
        second: "numeric",
        year: "numeric",
    }).format(value);
};
