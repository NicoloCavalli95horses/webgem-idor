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

  @Get()
  findAll() {
    return this.imagesService.getAllImages();
  }

  @Get('free')
  findAllFree() {
    return this.imagesService.getAllFreeImages();
  }


  @Get('premium')
  findAllPremium() {
    return this.imagesService.getAllPremiumImages();
  }

  // Get image
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesService.getImage(id);
  }
}
