import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

const IMAGE_DIR = 'stored-images';

interface LocalFile {
  name:string;
  path:string;
  data:string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }
  
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    // image.webPath will contain a path that can be set as an image src.
  // You can access the original file using image.path, which can be
  // passed to the Filesystem API to read the raw data of the image,
  // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  
  }
  public async addNewToCamera(){
     // Take a photo
     const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    var imageUrl = capturedPhoto.webPath;

    // Can be set to the src of an image now
  // imageElement.src = imageUrl;
    console.log('tagcekmamenkamera',imageUrl )
  }
}
