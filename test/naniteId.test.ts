import { naniteId } from '../src'

describe('nanite', () => {
    it('checkLength', () => {
        let _id = naniteId();
        let _length = 10;
        expect(_id.length).toBeGreaterThanOrEqual(_length)
    })
    it('no "0." at the start', () => {
        let _id = naniteId();
        let _regex = /^(0.)/gm;
        expect(_id).not.toEqual(_regex)
    });
})