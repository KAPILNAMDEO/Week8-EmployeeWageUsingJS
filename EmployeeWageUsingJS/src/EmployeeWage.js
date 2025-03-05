class EmployeeWage {
    constructor(name) {
        this.name = name;
        this.isPresent = Math.random() < 0.5 ? "Present" : "Absent";
        this.wagePerHour = 20;
        this.workHours = this.isPresent === "Present" ? this.getWorkHours() : 0; // Get work hours only if present
        this.dailyWage = this.workHours * this.wagePerHour; // Calculate wage
    }

    // Function to determine work hours
    getWorkHours() {
        let workType = Math.floor(Math.random() * 3); // 0, 1, or 2

        switch (workType) {
            case 0: return 0;  // No work
            case 1: return 4;  // Part-time (4 hours)
            case 2: return 8;  // Full-time (8 hours)
            default: return 0;
        }
    }

    getAttendance() {
        return `${this.name} is ${this.isPresent}`;
    }

    getDailyWage() {
        return `${this.name}'s Daily Wage: $${this.dailyWage} (Hours Worked: ${this.workHours})`;
    }
}

module.exports = EmployeeWage;
