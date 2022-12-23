import { connect } from 'react-redux';
import Options from './Options.jsx';
import { availableOptionsSelector } from './options.selectors';
import { toggleOption } from './options.action';

const mapState = state => {
  return {
    options: availableOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption: toggleOption,
};

const connector = connect(mapState, mapDispatch);
const ConnectedOptions = connector(Options);

export default ConnectedOptions;
