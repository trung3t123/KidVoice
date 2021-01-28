import LanguageSelector from 'slices/language/selector';
import {connect} from 'react-redux';

import React from 'react';

function MultiLanguageComponent(WrappedComponent) {
  // eslint-disable-next-line react/prefer-stateless-function
  class MultiLanguageComponentHOC extends React.Component {
    render() {
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <WrappedComponent {...this.props} />;
    }
  }
  const mapStateToProps = (state) => ({
    language: LanguageSelector.getLanguage(state),
  });
  return connect(mapStateToProps)(MultiLanguageComponentHOC);
}

export default MultiLanguageComponent;
