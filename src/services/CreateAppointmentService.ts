import Appointment from '../models/appointment';
import AppointmentRepository from '../repositories/AppointmentsRepository';
import { startOfHour } from 'date-fns';

interface Request {
    provider: string,
    date: Date;
}

/**
 * Dependency Inversion (SOLID)
 */
class CreateAppointmentService {
    private appointmentsRepository: AppointmentRepository;

    constructor(appointmentsRepository: AppointmentRepository){
        this.appointmentsRepository = appointmentsRepository;
    }

    public Execute({ date, provider}: Request): Appointment {
        const appointmentDate = startOfHour(date);

        const findAppointmentInSameDate = this.appointmentsRepository.findByDate(appointmentDate);

        if(findAppointmentInSameDate){
            throw Error('This appointment is already booked');
        }

        const newAppointment = this.appointmentsRepository.create({
            provider,
            date: appointmentDate
        });

        return newAppointment;
    }
}

export default CreateAppointmentService;
