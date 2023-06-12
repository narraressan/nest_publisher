import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import QueueConfig, { MessageQueue } from './common/Queue.config';
import { MessageProcessor } from './common/Message.processor';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    QueueConfig,
    MessageQueue,
  ],
  providers: [MessageProcessor],
})
export class AppModule {}
