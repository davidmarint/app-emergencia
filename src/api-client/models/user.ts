/* tslint:disable */
/* eslint-disable */
/**
 * Your Project API
 * Your project description
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Role } from './role';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'first_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'last_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'email': string;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'number_id'?: number | null;
    /**
     * 
     * @type {Role}
     * @memberof User
     */
    'role': Role;
}

