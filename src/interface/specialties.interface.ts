import { Result } from "./common.interface"

export interface ListSpecialties {
  id_especialidad: number,
  imagen_url: string
  nombre: string
}

export interface ListSpecialtiesOut extends Result{
  data: ListSpecialties[]
}
