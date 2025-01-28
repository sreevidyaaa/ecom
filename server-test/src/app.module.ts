import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product/enitties/product.entity';
import { ProductModule } from './product/product.module';  // Import ProductModule


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      entities: [ProductEntity],
      synchronize: true,
      logging: true,
    }),
    ProductModule,    //importing
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
