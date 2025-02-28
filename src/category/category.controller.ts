import { Controller, Get } from '@nestjs/common';

import { CategoryService } from './category.service.js';

@Controller('category')
export class CategoryController {
  constructor(public categoryService: CategoryService) {
    this.categoryService = categoryService;
  }

  @Get()
  getAllCategories() {
    return this.categoryService.getAllCategories();
  }
}
