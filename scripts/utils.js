export const computeConversion = (unitsToConvert, val) => {
    // Checking for invalid input
    if (typeof unitsToConvert !== "string" || isNaN(val))
        return "error";
    
    if (unitsToConvert === "celsius")
        return val * (9 / 5) + 32;
    
    if (unitsToConvert === "fahrenheit")
        return (val - 32) * 5 / 9;
    
    if (unitsToConvert === "kilograms")
        return val * 2.205;
    
    if (unitsToConvert === "pounds")
        return val / 2.205;
    
    // Invalid unit was given
    return "error";
};