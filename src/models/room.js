import {v4 as uuidv4} from "uuid";

/**
 *
 * @param {number} adults
 * @param {number} children
 */
export function Room (
  adults,
  children
) {
  /**
   *
   * @type {string}
   */
  this.id = uuidv4();

  /**
   *
   * @type {*|number}
   */
  this.adults = adults !== undefined ? adults : 1;

  /**
   *
   * @type {*|number}
   */
  this.children = children !== undefined ? children : 0
}