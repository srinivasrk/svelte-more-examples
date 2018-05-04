import DataBinding from './DataBinding.html';

const DataBindingComponent = new DataBinding({
  target: document.body,
});

DataBindingComponent.on('state', ({changed, current, previous}) => {
  console.log('State changed', current.name);
});

export default DataBindingComponent;
