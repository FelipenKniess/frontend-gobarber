import { Router} from 'express';
import {startOfHour, parseISO} from 'date-fns';

import AppointmentRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentRepository();

appointmentsRouter.post('/', (request, response) => {
    try {
        const { provider, date } = request.body;

        const parsedDate = parseISO(date);

        const createAppointment = new CreateAppointmentService(appointmentsRepository);

        const newAppointment = createAppointment.Execute({ date: parsedDate, provider });
        return response.json(newAppointment);

    } catch(err){
        return response.status(400).json({ error: err.message })
    }
});

appointmentsRouter.get('/', (request, response) => {
    const appointments = appointmentsRepository.all();

    return response.json(appointments);
})

export default appointmentsRouter;

