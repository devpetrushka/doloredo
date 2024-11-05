import { Transform, Expose } from 'class-transformer';

class SampleTransformNode {
  @Expose({ name: 'id' })
  private _id: string;

  @Transform(value => parseInt(value, 10))
  value: number;

  // Other properties and methods
}
