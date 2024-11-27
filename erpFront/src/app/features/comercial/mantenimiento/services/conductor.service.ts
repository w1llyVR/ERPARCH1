import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConductorResponseDto} from '../models/conductor/conductorResponseDto';
import {ConductorRequestDto} from '../models/conductor/conductorRequestDto';
import {RegistroResponse, Response} from '../../../../shared/models/Response';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {
  private readonly baseUrl = 'https://localhost:7076/api/conductor';

  constructor(private http: HttpClient) {
  }

  getAllByUnidadMineralId(unidadMineralId: number): Observable<Response<ConductorResponseDto[]>> {
    return this.http.get<Response<ConductorResponseDto[]>>(`${this.baseUrl}/unidad-minera/${unidadMineralId}`);
  }

  create(conductor: ConductorRequestDto): Observable<RegistroResponse> {
    return this.http.post<RegistroResponse>(`${this.baseUrl}`, conductor);
  }

  update(conductorId: number, conductor: ConductorRequestDto): Observable<RegistroResponse> {
    return this.http.put<RegistroResponse>(`${this.baseUrl}/${conductorId}`, conductor);
  }

  delete(conductorId: number, modificaUsuario: string): Observable<RegistroResponse> {
    return this.http.delete<RegistroResponse>(`${this.baseUrl}/${conductorId}?modificaUsuario=${modificaUsuario}`);
  }
}
