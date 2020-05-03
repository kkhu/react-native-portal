import * as React from 'react';
import PortalContext from './src/context';
import PortalProvider from './src/provider';
import PortalGate from './src/gate';

const withWrapTeleport = WrappedComponent => props => (
  <PortalContext.Consumer>
    {({ teleport }) => <WrappedComponent teleport={teleport} {...props} /> }
  </PortalContext.Consumer>
);

export {
  PortalContext,
  PortalProvider,
  PortalGate,
  withWrapTeleport
}

export default PortalProvider;
