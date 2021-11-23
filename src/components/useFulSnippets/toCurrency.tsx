const toCurrency = (value: any, currency: string, lang?: undefined) => { 
    return Intl.NumberFormat(lang, {style: 'currency', currency}).format(value)
};

export default toCurrency;