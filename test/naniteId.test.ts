import { naniteId } from '../src'

describe('nanite', () => {
    it('works', () => {
        let _id = naniteId();
        let _length = 11;
      expect(_id.length).toEqual(_length)
  })  
})