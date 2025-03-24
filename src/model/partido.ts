import { Arbitro } from "./arbitro";
import { Equipo } from "./equipo";

export interface TipoLance {
    nombre: string;
}

export interface Lance {
    minuto: number;
    comentario: string;
    tipoLance: TipoLance;
}

export interface Partido {
    id: number;
    numeroJornada: number;
    arbitro: Arbitro;
    fecha: Date;
    local: Equipo;
    visitante: Equipo;
    estado: string;
    golesLocal: number;
    golesVisitante: number;
    lances: Lance[];
}
