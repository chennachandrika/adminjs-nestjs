import { CategoryService } from './category.service.js';
export declare class CategoryController {
    categoryService: CategoryService;
    constructor(categoryService: CategoryService);
    getAllCategories(): any[];
}
