import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MessageQueue, MessageProcessor } from './common/Message.processor';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MessageQueue,
  ],
  providers: [MessageProcessor],
})
export class AppModule {}
