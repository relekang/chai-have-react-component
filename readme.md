# chai-have-react-component
> expect(element).to.have.component(Blink)

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

// should fail with "Expected 'div' to not have component 'SuperDuper'"
expect(<div><Super /></div>).to.not.have.component(Super)
```

### Old usage
This type of usage is deprecated and will result in a warning. This will be removed in version 3.

```javascript
import chai from 'chai'
import chaiHaveReactComponent from "chai-have-react-component"

chai.use(chaiHaveReactComponent)

const component = TestUtils.renderIntoDocument(<div><Super /></div>);

// it should pass
expect(component).to.have.component(Super);

// should fail with "Expected 'div' to not have component 'SuperDuper'"
expect(component).to.not.have.component(Super);
```

## Found a bug?
Please open a pr with a broken test.

----------------------

MIT © Rolf Erik Lekang
