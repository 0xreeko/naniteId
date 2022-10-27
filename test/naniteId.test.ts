import { naniteId } from '../src'

describe('nanite', () => {
    it('checkLength', () => {
        let _id = naniteId();
        let _length = 10;
        expect(_id.length).toBeGreaterThanOrEqual(_length)
    })
})