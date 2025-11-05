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
    { id: "26ecef7e-4e27-426f-81c4-51a9cd41871f", is_premium: false },
    { id: "487b7235-204c-42eb-8535-42dd06999e75", is_premium: true },
    { id: "c7f4134d-b747-487f-872b-e0d20abac35c", is_premium: true },
    { id: "dc7499ab-c68f-43b1-b679-579a23a6a02c", is_premium: false },
    { id: "6c555657-0994-4f4b-830d-ded80cedb74e", is_premium: false },
    { id: "c0aff9a5-426f-43e4-af26-77a458bcbb24", is_premium: true }
  ];

  getAllImages() {
    return this.images;
  }

  getImagesByID(id: string) {
    const img = this.images.find(i => i.id === id);
    if (img?.id) {
      return {
        ...img,
        content: (img.is_premium) ? 'secret content' : 'free content'
      }
    }
    throw new NotFoundException(`Image with id ${id} not found`);
  }
}
