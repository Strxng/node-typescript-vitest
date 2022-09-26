import { Appointment } from "../../entities/appointment";
import { AppointmentsRepository } from "../appointments-repository";
import { areIntervalsOverlapping } from 'date-fns'

export class InMemoryAppointmentsRepository implements AppointmentsRepository {
  public items: Appointment[] = []

  create(appointment: Appointment): Promise<void> {
    this.items.push(appointment)
    return Promise.resolve()
  }

  findOverlappingAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null> {
    const overlappingAppointment = this.items.find((appointment) => {
      return areIntervalsOverlapping(
        {start: startsAt, end: endsAt},
        {start: appointment.startsAt, end: appointment.endsAt},
        {inclusive: true}
      )
    })

    return Promise.resolve(overlappingAppointment || null)
  }
}