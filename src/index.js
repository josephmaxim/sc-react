import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class SkewedContainer extends React.Component{
    render(){
        var skew = (propValue, position) => {
            var val = "", skewYDeg = "", skewPosition = "";
            switch(propValue){
                case "left":
                    position === 'top' ? skewYDeg = "-3deg" : skewYDeg = "3deg";
                    skewPosition = "left";
                    break;
                case "right":
                    position === 'top' ? skewYDeg = "3deg" : skewYDeg = "-3deg";
                    skewPosition = "right";
                    break;
                default:
                    skewYDeg = "";
                    skewPosition = "";
                    break;
            }
            val = `${position}:0; transform-origin: ${skewPosition} ${position}; transform: skewY(${skewYDeg});`;
            console.log(val);
            return val;
        }
        var containerMargin = () => {
            const {top, bottom} = this.props;
            let marginTop = 0, marginBottom = 0;
            const marginVal = 70;
            if(top !== ''){
                marginTop = marginVal;
            }
            if(bottom !== ''){
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
            ${!this.props.noMargin ? containerMargin : null}
            width: 100%;
            position: relative;
            background-color: ${this.props.bgColor};
            z-index: 2;
            min-height: 100px;

            &:before{
                ${commonStyling}
                ${skew(this.props.top, "top")}
            }
            &:after {
                ${commonStyling}
                ${skew(this.props.bottom, "bottom")}
            }
        `;

        const Content = styled.div`
            width: 100%;
        `;

        return(
                <Container style={this.props.style} className={this.props.className}>
                    <Content>
                        {this.props.children}
                    </Content>
                </Container>
        )
    }
}

SkewedContainer.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    top: PropTypes.string,
    bottom: PropTypes.string,
    noMargin : PropTypes.bool,
    bgColor: PropTypes.string
}

SkewedContainer.defaultProps = {
    className: '',
    style: {},
    top: '',
    bottom: '',
    noMargin : false,
    bgColor: 'grey'
}