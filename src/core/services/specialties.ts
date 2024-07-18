import { environment } from "../../env/environment";
import { ListSpecialtiesOut } from "../../interface/specialties.interface";


//* Lista todas las especialidades
export const getListSpecialties = async () => {
  try {
    const request = await fetch(
      `${environment.API_MASTER}/data/listarEspecialidades`,
      {
        method: "GET",
      }
    );

    const response: ListSpecialtiesOut = await request.json();
    return response;
  } catch (error) {
    throw new Error("Error al intentar conectar al servicio");
  }
};
