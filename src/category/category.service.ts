import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  private categories = [];

  getAllCategories() {
    return this.categories;
  }
}
