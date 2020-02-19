const mapInterfaceToComponent = (
  component,
  propTypes = {},
  defaultProps = {}
) => Object.assign(component, { propTypes, defaultProps });

export default mapInterfaceToComponent;
