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



/**
 * * `active` - Active * `inactive` - Inactive
 * @export
 * @enum {string}
 */

export const StatusEnum = {
    Active: 'active',
    Inactive: 'inactive'
} as const;

export type StatusEnum = typeof StatusEnum[keyof typeof StatusEnum];


