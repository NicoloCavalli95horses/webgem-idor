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

  // This is sent to the front-end but without the labels
  private images: Image[] = [
    { id: "26ecef7e-4e27-426f-81c4-51a9cd41871f", label: "red", is_premium: false },
    { id: "487b7235-204c-42eb-8535-42dd06999e75", label: "blue", is_premium: true  },
    { id: "c7f4134d-b747-487f-872b-e0d20abac35c", label: "green", is_premium: true  },
    { id: "dc7499ab-c68f-43b1-b679-579a23a6a02c", label: "yellow", is_premium: false },
    { id: "6c555657-0994-4f4b-830d-ded80cedb74e", label: "pink", is_premium: false },
    { id: "c0aff9a5-426f-43e4-af26-77a458bcbb24", label: "orange", is_premium: true  }
  ];

  getAllImages() {
    return this.images.map(i => {
      const image = {...i};
      delete image.label;
      return image; 
    });
  }


  getImage(label: string, id: string,) {
    /* 
    The images are exposed to an endpoint that is NOT disclosed in HTTP messages. The endpoint:
     - is a combination of label and IDs (`/api/images/:label/:id`)
     - is known indipendently by the front-end and the back-end
     - the front-end knows the labels in advance and obtains the IDs after reading `/api/images`
    */
    const img = this.images.find(i => i.id === id && i.label === label);
    
    if (img?.id) {
      return {
        ...img,
        content: (img.is_premium) ? 'secret content' : 'free content'
      }
    }
    throw new NotFoundException(`Image with label ${label} and ID ${id} not found`);
  }
}
