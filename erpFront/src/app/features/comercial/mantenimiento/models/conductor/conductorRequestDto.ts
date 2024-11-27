export class ConductorRequestDto {
  constructor(

  ) {}

  public conductorId?: number;// Opcional para creación, requerido para actualización.
  public unidadMineraId: number = 0;
  public codigoPersona: string = '';
  public proveedorId?: number;
  public estado?: string; // 'A' para Activo, 'I' para Inactivo
  public usuario: string = '' // Usuario que realiza la operación
}
