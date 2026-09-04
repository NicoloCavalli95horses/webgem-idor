//================
// Import
//================
import { Injectable, NotFoundException } from '@nestjs/common';
import { Image } from './images.interface';


//================
// Service class
//================
@Injectable()
export class ImagesService {

  private images: Image[] = [
    { id: crypto.randomUUID(), label: "blue", is_premium: false },
    { id: crypto.randomUUID(), label: "red", is_premium: true },
    { id: crypto.randomUUID(), label: "yellow", is_premium: false },
    { id: crypto.randomUUID(), label: "purple", is_premium: true },
  ];


  getAllImages() {
    return this.images;
  }


  getAllFreeImages() {
    return this.images.filter((img) => !img.is_premium);
  }


  getAllPremiumImages() {
    return this.images.filter((img) => img.is_premium);
  }


  getImage(id: string) {
    const img = this.images.find(i => i.id === id);

    if (img?.id) {
      return {
        ...img,
        content: (img.is_premium) ? 'secret content' : 'free content'
      }
    }
    throw new NotFoundException(`Image with and ID ${id} not found`);
  }
}
