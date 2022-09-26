import { Appointment } from "../entities/appointment"

interface CreateAppointmentRequest {
  customer: string
  startsAt: Date
  endsAt: Date
}

type CreateAppointmentResponse = Appointment

export class CreateAppointment {
  async execute({ customer, endsAt, startsAt }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const appointment = new Appointment({
      customer,
      startsAt,
      endsAt
    })
    
    return appointment
  }
}