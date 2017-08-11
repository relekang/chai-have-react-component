# chai-have-react-component
> expect(<Super />).to.have.component(Blink)

## Installation
```
npm install --save-dev chai-have-react-component
```

## Usage

```javascript
import chai from 'chai'
import chaiHaveReactComponent from "chai-have-react-component"

chai.use(chaiHaveReactComponent)

// it should pass
expect(<div><Super /></div>).to.have.component(Super)

// should fail with "Expected 'div' to not have component 'Super'"
expect(<div><Super /></div>).to.not.have.component(Super)
```

## Found a bug?
Please open a pr with a broken test.

----------------------

MIT © Rolf Erik Lekang
