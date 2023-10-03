function calculate() {
    let WorkingHours, RatePerhour;
    WorkingHours = parseInt(document.getElementById("hours").value);
    RatePerhour = parseInt(document.getElementById("rate").value);
    const overtimeRate = 1.5;
    const ReqularyHours = 40;
    let overtimeHours = 0;
    let regularPay = 0;
    let overtimePay = 0;
    if (WorkingHours > ReqularyHours) {
        overtimeHours = WorkingHours - ReqularyHours;
        regularPay = ReqularyHours * RatePerhour;
        overtimePay = overtimeHours * overtimeRate;
    }
    else {
        regularPay = WorkingHours * RatePerhour;
    }
    sum = regularPay + overtimePay;
    document.getElementById("answer").value = sum;
}