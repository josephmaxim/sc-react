import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SkewedContainer = (props) =>{

    const calculateSkew = (propValue, position) => {
        var val = "", skewYDeg = "", skewPosition = "", skewProp = props.skew;
        switch(propValue){
            case "left":
                position === 'top' ? skewYDeg = -skewProp : skewYDeg = skewProp;
                skewPosition = "left";
                break;
            case "right":
                position === 'top' ? skewYDeg = skewProp : skewYDeg = -skewProp;
                skewPosition = "right";
                break;
            default:
                skewYDeg = "";
                skewPosition = "";
                break;
        }
        val = `${position}:0; transform-origin: ${skewPosition} ${position}; transform: skewY(${skewYDeg}Deg);`;
        return val;
    }

    const containerMargin = () => {
        let marginTop = 0, marginBottom = 0;
        const marginVal = 70;
        if(props.top !== ''){
            marginTop = marginVal;
        }
        if(props.bottom !== ''){
            marginBottom = marginVal;
        }
        return `margin: ${marginTop}px 0px ${marginBottom}px 0px;`;
    }

    const commonStyling = `
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background: inherit;
        z-index: -1;
    `;

    const Container = styled.div`
        ${!props.noMargin ? containerMargin() : null}
        width: 100%;
        position: relative;
        background-color: ${props.bgColor} !important;
        z-index: 2;
        min-height: 200px;

        &:before{
            ${commonStyling}
            ${calculateSkew(props.top, "top")}
        }
        &:after {
            ${commonStyling}
            ${calculateSkew(props.bottom, "bottom")}
        }
    `;

    const Content = styled.div`
        width: 100%;
        overflow: auto;
    `;

    return(
        <Container style={props.style} className={props.className}>
            <Content>
                {props.children}
            </Content>
        </Container>
    );
}

SkewedContainer.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    top: PropTypes.string,
    bottom: PropTypes.string,
    noMargin : PropTypes.bool,
    bgColor: PropTypes.string,
    skew: PropTypes.number
}

SkewedContainer.defaultProps = {
    className: '',
    style: {},
    top: '',
    bottom: '',
    noMargin : false,
    bgColor: 'grey',
    skew: 3
}

export default SkewedContainer;