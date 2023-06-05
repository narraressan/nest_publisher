import { IsString } from 'class-validator';

export class ExamplePublisherInput {
  @IsString()
  text: string;
}
