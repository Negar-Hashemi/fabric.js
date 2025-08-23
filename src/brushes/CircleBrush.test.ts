import { Canvas } from '../canvas/Canvas';
import { CircleBrush } from './CircleBrush';
/**
 * @skipOnOS win32
 * @skipOnNodeVersion 22
 */
describe('CircleBrush', () => {
  it('can be initialized', () => {
    const canvas = new Canvas('test', {});
    const circleBrush = new CircleBrush(canvas);
    expect(circleBrush instanceof CircleBrush).toBe(true);
    expect(circleBrush.points).toEqual([]);
  });
});
