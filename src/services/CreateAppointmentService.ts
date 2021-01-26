import { getCustomRepository } from 'typeorm';

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

    public async Execute({ date, provider}: Request): Promise<Appointment> {

        const appointmentsRepository = getCustomRepository(AppointmentRepository);

        const appointmentDate = startOfHour(date);

        const findAppointmentInSameDate = await appointmentsRepository.findByDate(appointmentDate);

        if(findAppointmentInSameDate){
            throw Error('This appointment is already booked');
        }

        const newAppointment = appointmentsRepository.create({
            provider,
            date: appointmentDate
        });

        await appointmentsRepository.save(newAppointment);

        return newAppointment;
    }
}

export default CreateAppointmentService;
