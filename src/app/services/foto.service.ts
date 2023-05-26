import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Foto } from '../models/foto.interface';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  // Criar a lista de fotos que vão estar armazenadas no dispositivo
  fotos: Foto[] = [];

  // Cria a variável que armazena o local físico (pasta) de armazenamento das fotos
  private FOTO_ARMAZENAMENTO: string = 'fotos';

  constructor() { }

  // Função para tirar / buscar novas fotos
  async tirarFoto() {
    // Chama a função de câmera e armazena o arquivo na constante
    const fotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri, // Dados baseados em arquivos / oferece melhor desempenho
      source: CameraSource.Camera, // Tira automaticamente uma nova foto com a câmera
      quality: 100 // Qualidade da imagem tirada, vai de 0 a 100
    });
  }
}
