import { getCustomRepository } from 'typeorm';

import Appointment from '../models/appointment';
import AppointmentRepository from '../repositories/AppointmentsRepository';
import { startOfHour } from 'date-fns';
import appError from '../errors/AppError';
import AppError from '../errors/AppError';


interface Request {
    provider_id: string,
    date: Date;
}

/**
 * Dependency Inversion (SOLID)
 */
class CreateAppointmentService {

    public async Execute({ date, provider_id}: Request): Promise<Appointment> {

        const appointmentsRepository = getCustomRepository(AppointmentRepository);

        const appointmentDate = startOfHour(date);

        const findAppointmentInSameDate = await appointmentsRepository.findByDate(appointmentDate);

        if(findAppointmentInSameDate){
            throw new AppError('This appointment is already booked', 401);
        }

        const newAppointment = appointmentsRepository.create({
            provider_id,
            date: appointmentDate
        });

        await appointmentsRepository.save(newAppointment);

        return newAppointment;
    }
}

export default CreateAppointmentService;
