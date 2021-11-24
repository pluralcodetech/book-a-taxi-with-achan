const convertTime = (time?: any) => {
    var hours = time.split(":")[0];
    var minutes = time.split(":")[1];
    var suffix = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    hours = hours < 10 ? "0" + hours : hours;

    var displayTime = hours + ":" + minutes + " " + suffix;
    return displayTime;
};

export default convertTime;