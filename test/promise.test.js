import {expect} from 'chai';
import sinon from 'sinon';

import {secondify, showwithDelay, showDelayedItems} from '../index';

describe('Lectrum contest', () => {

    context('Used functions', () => {
        it('Array.prototype.forEach was been used', () => {
            const testArray = [1, "2", [3]];
            let each = sinon.stub(testArray, 'forEach');

            showDelayedItems(testArray, 0);
            
            expect(each.called).to.be.true;
            each.restore();
        });

        it('Promice was been used', () => {
            let promise = sinon.spy(Promise, 'resolve');
            let testArray = [1, 2];

            showDelayedItems(testArray, 0);

            expect(promise.called).to.be.true

            promise.restore();
        });
     });

    context('Behavior', () => {

        let clock, log;
        const testArray = [1,"2", [3], 4, 5];

        beforeEach(() => {
            clock = sinon.useFakeTimers();
            log = sinon.spy(console, 'log');
        });

        afterEach( () => {
            clock.restore();
            log.restore();
        });

        it('Show next item with delay 1s',  (done) => {

            showDelayedItems(testArray, 1)

            setTimeout( () => {
                expect(log.called).to.be.true;
                console.log(log);
                done();
            }, 1000);
            
            clock.tick(1000);
        });

        it('Show only one item after 1s', () => {
        
        });

    });

});

