import { BullModule } from '@nestjs/bull';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { QUEUE_NAME } from './utils';

const loadConfig = async (env: ConfigService): Promise<Record<string, any>> => {
  const params = {
    redis: {
      host: env.get('QUEUE_HOST'),
      port: parseInt(env.get('QUEUE_PORT')),
    },
  };

  console.log(`QUEUE CONFIG: ${JSON.stringify(params)}`);
  return params;
};

export default BullModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => await loadConfig(config),
});

export const MessageQueue = BullModule.registerQueue({
  name: QUEUE_NAME,
});
