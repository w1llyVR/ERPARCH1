import {Component, OnInit} from '@angular/core';
import {ConductorResponseDto} from '../../models/conductor/conductorResponseDto';
import {ConductorRequestDto} from '../../models/conductor/conductorRequestDto';
import {ConductorService} from '../../services/conductor.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  standalone: false,
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit{

  conductores: ConductorResponseDto[] = [];
  nuevoConductor: ConductorRequestDto = new ConductorRequestDto();
  unidadMineraId: number = 18; // Replace with dynamic data if needed
  isEditing: boolean = false;

  constructor(
    private conductorService: ConductorService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getConductores();
  }

  getConductores(): void {
    this.conductorService.getAllByUnidadMineralId(this.unidadMineraId).subscribe({
      next: (response) => {
        if (response.codeError === 200) {
          this.conductores = response.data;
        } else {
          this.showMessage(response.msj);
        }
      },
      error: (error: HttpErrorResponse) => {
        this.showMessage(`Error al obtener los conductores: ${error.message}`);
      }
    });
  }

  createConductor(): void {
    this.nuevoConductor.unidadMineraId = this.unidadMineraId;
    this.conductorService.create(this.nuevoConductor).subscribe({
      next: (response) => {
        if (response.codeError === 200) {
          this.getConductores();
          this.nuevoConductor = new ConductorRequestDto();
        }
        this.showMessage(response.msj);
      },
      error: (err: HttpErrorResponse) => {
        this.showMessage(`Error al crear conductor: ${err.message}`);
      }
    });
  }

  updateConductor(): void {
    if (!this.nuevoConductor.conductorId) return;

    this.conductorService.update(this.nuevoConductor.conductorId, this.nuevoConductor).subscribe({
      next: (response) => {
        if (response.codeError === 200) {
          this.getConductores();
          this.nuevoConductor = new ConductorRequestDto();
          this.isEditing = false;
        }
        this.showMessage(response.msj);
      },
      error: (err: HttpErrorResponse) => {
        this.showMessage(`Error al actualizar conductor: ${err.message}`);
      }
    });
  }

  editConductor(conductor: ConductorResponseDto): void {
    this.nuevoConductor = {
      ...conductor, // Spread properties from ConductorResponseDto
      usuario: '', // Provide a default or dynamic value for usuario
    };
    this.isEditing = true;
  }

  deleteConductor(conductorId: number): void {
    const modificaUsuario = 'admin'; // Replace with dynamic data if needed
    this.conductorService.delete(conductorId, modificaUsuario).subscribe({
      next: (response) => {
        if (response.codeError === 200) {
          this.getConductores();
        }
        this.showMessage(response.msj);
      },
      error: (err: HttpErrorResponse) => {
        this.showMessage(`Error al eliminar conductor: ${err.message}`);
      }
    });
  }

  private showMessage(message: string): void {
    this.snackBar.open(message, 'Ok', { duration: 2000 });
  }

}
