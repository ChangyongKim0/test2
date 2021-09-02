import React from "react";
import PropTypes from "prop-types";
import invariant from "invariant";
import loadNavermapsScript from "./loadNavermapsScript.js";

class RenderAfterNavermapsLoaded extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  render() {
    if (this.state.loading) {
      return this.props.loading;
    }

    if (this.state.error) {
      return this.props.error;
    }

    return this.props.children;
  }

  componentDidMount() {
    const { clientId, ncpClientId, submodules } = this.props;

    loadNavermapsScript({
      clientId,
      ncpClientId,
      submodules,
    })
      .then(() => {
        this.setState({
          loading: false,
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          error: true,
        });
      });
  }
}

const cliendIdRequired = (props, propName, componentName) => {
  invariant(
    props.clientId || props.ncpClientId,
    `react-naver-maps: One of props 'clientId' or 'ncpClientId' should be specified in '${componentName}'.`
  );
};

RenderAfterNavermapsLoaded.propTypes = {
  loading: PropTypes.node,
  error: PropTypes.node,
  clientId: cliendIdRequired,
  ncpClientId: cliendIdRequired,
  submodules: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
};

RenderAfterNavermapsLoaded.defaultProps = {
  loading: null,
  error: null,
};

export default RenderAfterNavermapsLoaded;
