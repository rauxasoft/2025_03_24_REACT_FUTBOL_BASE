
export interface Estadisticas {
    idEquipo:number;                    //  1
    nombreEquipo: string;               //  2

    localPartidosJugados: number;       //  3 
    localPartidosGanados: number;       //  4
    localPartidosEmpatados: number;     //  5
    localPartidosPerdidos: number;      //  6
    localGolesFavor: number;            //  7
    localGolesContra: number;           //  8

    visitantePartidosJugados: number;   //  9
    visitantePartidosGanados: number;   // 10
    visitantePartidosEmpatados: number; // 11
    visitantePartidosPerdidos: number;  // 12
    visitanteGolesFavor: number;        // 13
    visitanteGolesContra: number;       // 14

    totalPartidosGanados: number;       // 15
    totalPartidosEmpatados: number;     // 16
    totalPartidosJugados: number;       // 17
    totalPartidosPerdidos: number;      // 18
    totalGolesContra: number;           // 19
    totalGolesFavor: number;            // 23

    localPuntos: number;                // 20
    visitantePuntos: number;            // 21

    totalPuntos: number;                // 22

    
}
  
export interface EstadisticasEquipo {
    equipo: string;
    estadisticas: Estadisticas;
}
  
// Definimos el tipo que contiene todos los equipos, usando un índice numérico.
export type Clasificacion = Record<string, EstadisticasEquipo>;