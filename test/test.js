import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import SkewedContainer from '../src/index';

describe('Component: SkewedContainer', () => {
    const props = {
            bgColor:"grey",
            bottom:"",
            className:"",
            noMargin:false,
            style:{},
            top:""
    }
    it('render without errors', () => {
        expect(
            <SkewedContainer>
                test
            </SkewedContainer>
        ).toEqual(<SkewedContainer {...props}>test</SkewedContainer>);
    });
});