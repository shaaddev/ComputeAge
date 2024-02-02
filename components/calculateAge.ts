export function computeAge(year: number, month: number, day: number ){
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)){
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0){
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        ageDays += prevMonth.getDate();
        ageMonths--;
    }
    return {ageYears, ageMonths, ageDays};
}

export function current_date(){
    const now = new Date();
    const curr_year: number = now.getFullYear();
    const curr_month: string = (now.getMonth() + 1).toString().padStart(2, '0');
    const curr_day: string = now.getDate().toString().padStart(2, '0');

    return `${curr_year}-${curr_month}-${curr_day}`;
}