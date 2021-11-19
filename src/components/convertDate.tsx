const convertDate = (params: any) => {
    const date = new Date(params);

    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
    const weekday = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(date)
    
    
    return `${weekday} ${day}, ${month} ${year}`
    
   
}

export default convertDate;