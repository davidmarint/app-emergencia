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
import type { StatusEnum } from './status-enum';

/**
 * 
 * @export
 * @interface Emergency
 */
export interface Emergency {
    /**
     * 
     * @type {number}
     * @memberof Emergency
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof Emergency
     */
    'latitude': string;
    /**
     * 
     * @type {string}
     * @memberof Emergency
     */
    'longitude': string;
    /**
     * 
     * @type {StatusEnum}
     * @memberof Emergency
     */
    'status'?: StatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Emergency
     */
    'created_at': string;
    /**
     * 
     * @type {number}
     * @memberof Emergency
     */
    'user': number;
    /**
     * 
     * @type {number}
     * @memberof Emergency
     */
    'emergency_type': number;
}


