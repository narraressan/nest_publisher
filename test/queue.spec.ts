import { Job } from 'bull';
import { MessageProcessor } from 'src/common/Message.processor';

describe('AppController (e2e)', () => {
  let processor: MessageProcessor;

  beforeEach(async () => {
    processor = new MessageProcessor();
  });

  it('test queue', async () => {
    const message = { data: { test: 1 } } as Job;
    expect(processor.handler(message)).toBeTruthy();
  });
});
