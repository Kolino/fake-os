export const displayTime = (hours, minutes) => {
    if (isNaN(hours) || isNaN(minutes)) return "-1";
    if (hours < 0 || hours > 23) return "-1";
    if (minutes < 0 || minutes > 59) return "-1";

    const isPm = hours >= 12;
    const addZero = minutes < 10;

    return `${hours}:${addZero ? "0" + minutes : minutes} ${isPm ? "PM" : "AM"}`;
};