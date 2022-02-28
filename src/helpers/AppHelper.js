import has from 'lodash';

class AppHelper {

  /**
   * Get Errors.
   * @param {Object} error - Error.
   * @returns {string}
   */
  static getError(error) {
    const defaultMessage = 'Unknown error';

    let message = has(error, 'error.errors')
      ? error.errors ? error.errors : error.message
      : defaultMessage;

    if (message === defaultMessage) {
      message = has(error, 'message') ? error.message : defaultMessage;
    }

    return message;
  }

  static sendError(error) {
    throw error;
  }
}

export default AppHelper;
