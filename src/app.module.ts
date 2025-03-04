import { Module } from '@nestjs/common';
import { AdminModule } from '@adminjs/nestjs';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as AdminJSMongoose from '@adminjs/mongoose';
import AdminJS from 'adminjs';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import provider from './admin/auth-provider.js';
import options from './admin/options.js';
import { CategoryModule } from './category/category.module.js';

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/AdminJs'),
    AdminModule.createAdminAsync({
      useFactory: async () => ({
        adminJsOptions: options,
        auth: {
          provider,
          cookiePassword: process.env.COOKIE_SECRET,
          cookieName: 'adminjs',
        },
        sessionOptions: {
          resave: true,
          saveUninitialized: true,
          secret: process.env.COOKIE_SECRET,
        },
      }),
    }),
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
