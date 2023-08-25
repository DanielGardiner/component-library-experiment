import PropTypes from 'prop-types';

import BootstrapAlert from 'react-bootstrap/Alert';

export const Alert = ({ variant }) => {
  return (
    <>
      <BootstrapAlert variant={variant}>
        This is a {variant} alert—check it out!
      </BootstrapAlert>
    </>
  );
}

Alert.propTypes = {
  /**
   * Specify variant
   */
  variant: PropTypes.oneOf(['primary', 'warning', 'danger']),
};

Alert.defaultProps = {
  variant: 'primary',
};

