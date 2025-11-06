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
  @Get(':label/:id')
  findOne(@Param('label') path: string, @Param('id') id: string) {
    return this.imagesService.getImage(path, id);
  }
}
