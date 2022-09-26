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
})