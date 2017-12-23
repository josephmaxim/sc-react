# Skewed container react (sc-react)
A react library for creating non-rectangular/slanted container divs.

### Installation
```
npm install --save sc-react
```
or 
```
yarn add sc-react
```

### Adding sc-react
```
import SkewedContainer from 'sc-react';
```
### Example
```
export default class extends React.Component{
	render(){
		return(
			<SkewedContainer>
				Your code here
			</SkewedContainer>
		)
	}
}
```

### Properties
```
SkewedContainer.PropTypes = {
    className: PropTypes.string,
    style: PropTypes.array,
    topLeft: PropTypes.bool,
    topRight: PropTypes.bool,
    bottomLeft: PropTypes.bool,
    bottomRight: Proptypes.bool,
    image: PropTypes.any,
    bgColor: PropTypes.string
}
```