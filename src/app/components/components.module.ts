import { IonicModule } from '@ionic/angular';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';

@NgModule({
  declarations: [PhotosListComponent, PhotoUploadComponent],
  exports: [PhotosListComponent, PhotoUploadComponent],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
