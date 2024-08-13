/**
 * ASI API
 * API Documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Company from '../models/Company';

/**
* Companies service.
* @module api/CompaniesApi
* @version 1.0.0
*/
export default class CompaniesApi {

    /**
    * Constructs a new CompaniesApi. 
    * @alias module:api/CompaniesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the companiesList operation.
     * @callback module:api/CompaniesApi~companiesListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:models/Company>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/CompaniesApi~companiesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:models/Company>}
     */
    companiesList(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jwtAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Company];
      return this.apiClient.callApi(
        '/api/companies/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the companiesRetrieve operation.
     * @callback module:api/CompaniesApi~companiesRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:models/Company} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this company.
     * @param {module:api/CompaniesApi~companiesRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:models/Company}
     */
    companiesRetrieve(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling companiesRetrieve");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jwtAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Company;
      return this.apiClient.callApi(
        '/api/companies/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
