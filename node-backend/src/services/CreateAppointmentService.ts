import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointments';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ date, provider }: Request): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findBydate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointments is already booked');
    }

    const appointment = this.appointmentsRepository.crete({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
