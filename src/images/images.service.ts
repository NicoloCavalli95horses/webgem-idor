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

  private images: Image[] = [];

  randomBoolean(){
    return Math.random() < 0.5;
  }

  generateImages(): Image[] {
    return [
      { id: crypto.randomUUID(), label: "red", is_premium: this.randomBoolean() },
      { id: crypto.randomUUID(), label: "blue", is_premium: this.randomBoolean() },
      { id: crypto.randomUUID(), label: "green", is_premium: this.randomBoolean() },
      { id: crypto.randomUUID(), label: "yellow", is_premium: this.randomBoolean() },
      { id: crypto.randomUUID(), label: "pink", is_premium: this.randomBoolean() },
      { id: crypto.randomUUID(), label: "orange", is_premium: this.randomBoolean()}
    ];
  }


  getAllImages() {
    this.images = this.generateImages();
    return this.images.map((i: Image) => {
      const image = {...i};
      delete image.label;
      return image; 
    });
  }


  getImage(id: string,) {
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
