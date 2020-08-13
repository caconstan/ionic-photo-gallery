import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  public photos;

  constructor(public photoService: PhotoService) { }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
    console.log("addPhotoToGallery: tab 2 photos length: " + this.photos.length);
    console.log("addPhotoToGallery: photoService length: " + this.photoService.photos.length);

  }

  async ngOnInit() {
    await this.photoService.loadSaved();
    this.photos = this.photoService.photos;
    console.log("ngOnInit: tab 2 photos length: " + this.photos.length);
    console.log("ngOnInit: photoService length: " + this.photoService.photos.length);
  }
}
