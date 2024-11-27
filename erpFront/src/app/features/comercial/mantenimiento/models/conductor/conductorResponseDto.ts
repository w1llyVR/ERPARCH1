export class ConductorResponseDto {
  constructor(
    public conductorId: number,
    public unidadMineraId: number,
    public codigoPersona: string,
    public proveedorId?: number,
    public estado?: string,
    public creaUsuario?: string,
    public creaFecha?: Date,
    public modificaUsuario?: string,
    public modificaFecha?: Date
  ) {}
}
