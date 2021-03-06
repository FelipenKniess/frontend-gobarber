import { Router } from 'express';
import {getCustomRepository} from 'typeorm';
import {parseISO} from 'date-fns';

import CreateAppointmentService from '../services/CreateAppointmentService';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router();
appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {

    const appointmentRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentRepository.find();

    return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
    const { provider_id, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const newAppointment = await createAppointment.Execute({ date: parsedDate, provider_id });

    return response.json(newAppointment);
});

export default appointmentsRouter;
