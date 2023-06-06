import { Foto } from './../models/Foto.interface';
import { FotoService } from './../services/foto.service';
import { Component } from '@angular/core';
import { ActionSheetController, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewWillEnter {
  fotos: Foto[] = [];

  constructor(
    private fotoService: FotoService,
    private actionSheetController: ActionSheetController
  ) {}

  ionViewWillEnter() {
    this.getFotos();
  }

  async ngOnInit() {
    await this.fotoService.carregarFotosSalvas();
  }

  tirarFoto() {
    this.fotoService.tirarFoto();
  }

  public async showActionSheet(foto: Foto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Fotos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.fotoService.deletePicture(foto, position);
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {

      }
      }]
    });
    await actionSheet.present();
  }

  getFotos() {
    this.fotos = this.fotoService.fotos;
  }
}
