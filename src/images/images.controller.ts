//================
// Import
//================
import { Controller, Get, Param } from '@nestjs/common';
import { ImagesService } from './images.service';


//================
// Controller class
//================
@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  // Get all images
  @Get()
  findAll() {
    return this.imagesService.getAllImages();
  }

  // Get image
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesService.getImagesByID(id);
  }
}
