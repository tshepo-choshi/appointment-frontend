

export interface Appointment{
    id: number;
    userId: number;
    branchCode: string;
    description: string;
    startTime: string;
}

export interface AppointmentDto{
    userId: number;
    branchCode: string;
    description: string;
    startTime: string;
    email: string;
}