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
    it('isString', () => {
        let _id = naniteId()
        expect(typeof _id).toEqual("string")
    });
    it('isNotNumber', () => {
        let _id = naniteId()
        expect(typeof _id).not.toEqual("number")
    })
    it('isNotBigint', () => {
        let _id = naniteId()
        expect(typeof _id).not.toEqual("bigint")
    })
    it('isNotBoolean', () => {
        let _id = naniteId()
        expect(typeof _id).not.toEqual("boolean")
    })
    it('isNotSymbol', () => {
        let _id = naniteId()
        expect(typeof _id).not.toEqual("symbol")
    })
})