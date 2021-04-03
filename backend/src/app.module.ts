import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupModule } from './group/group.module';
import { ArticleModule } from './article/article.module';
import { AlgoModule } from './algo/algo.module';

@Module({
  imports: [ConfigModule.forRoot(),
    MongooseModule.forRootAsync(
        {
          useFactory: ()=> ({
            uri:'mongodb+srv://algorun:q3jnyYkb16m2ZHnU@cluster0.yh0e4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true
          })
        }),
    GroupModule,
    ArticleModule,
    AlgoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
