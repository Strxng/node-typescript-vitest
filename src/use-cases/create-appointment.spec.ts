import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/appointment";
import { InMemoryAppointmentsRepository } from "../repositories/in-memory/in-memory-appointments-repository";
import { createDate } from "../tests/utils/create-date";
import { CreateAppointment } from "./create-appointment";

describe('Create appointment', () => {
  it('should be able to create an appointment', () => {
    const appointmentsRepository = new InMemoryAppointmentsRepository()
    const createAppointment = new CreateAppointment(appointmentsRepository)

    const startsAt = createDate(1)
    const endsAt = createDate(2)

    expect(createAppointment.execute({
      customer: 'Leonardo Bazan',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment)
  })

  it('should not be able to create an appointment with overlapping dates', async () => {
    const appointmentsRepository = new InMemoryAppointmentsRepository()
    const createAppointment = new CreateAppointment(appointmentsRepository)

    await createAppointment.execute({
      customer: 'Leonardo Bazan',
      startsAt: createDate(2),
      endsAt: createDate(6)
    })

    //Starts after and ends after
    expect(createAppointment.execute({
      customer: 'Any customer',
      startsAt: createDate(3),
      endsAt: createDate(7)
    })).rejects.toBeInstanceOf(Error)

    //Starts before and ends before
    expect(createAppointment.execute({
      customer: 'Any customer',
      startsAt: createDate(1),
      endsAt: createDate(5)
    })).rejects.toBeInstanceOf(Error)

    //Starts before and ends after
    expect(createAppointment.execute({
      customer: 'Any customer',
      startsAt: createDate(1),
      endsAt: createDate(7)
    })).rejects.toBeInstanceOf(Error)

    //Starts after and ends before
    expect(createAppointment.execute({
      customer: 'Any customer',
      startsAt: createDate(3),
      endsAt: createDate(5)
    })).rejects.toBeInstanceOf(Error)

    //Starts and ends on the same day
    expect(createAppointment.execute({
      customer: 'Any customer',
      startsAt: createDate(2),
      endsAt: createDate(6)
    })).rejects.toBeInstanceOf(Error)
  })
})