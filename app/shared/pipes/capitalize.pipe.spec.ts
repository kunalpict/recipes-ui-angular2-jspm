import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  injectAsync
} from 'angular2/testing';
import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {

  beforeEachProviders(() => [CapitalizePipe]);
  
  it('transforms "abc" to "Abc"', inject([CapitalizePipe], (pipe: CapitalizePipe) => {
    expect(pipe.transform('abc')).toEqual('Abc');
  }));
})