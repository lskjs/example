import React from 'react';

/**
 * Create element from async import
 * @param {Promise} promiseComponent Webpack async import
 * @param {object} params React props
 * @returns {React.ComponentType<T>}
 */
async function importElement(promiseComponent, params) {
  const component = await promiseComponent;
  return React.createElement(component.default, params);
}

export default importElement;
