import { AdminJSOptions } from 'adminjs';

import { Category } from '../category/category.entity.js';

import componentLoader from './component-loader.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [Category],
  databases: [],
};

export default options;
