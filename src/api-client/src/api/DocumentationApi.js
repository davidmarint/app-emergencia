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

/**
* Documentation service.
* @module api/DocumentationApi
* @version 1.0.0
*/
export default class DocumentationApi {

    /**
    * Constructs a new DocumentationApi. 
    * @alias module:api/DocumentationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the documentationSchemaRetrieve operation.
     * @callback module:api/DocumentationApi~documentationSchemaRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     * @param {Object} opts Optional parameters
     * @param {module:models/String} [format] 
     * @param {module:models/String} [lang] 
     * @param {module:api/DocumentationApi~documentationSchemaRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */
    documentationSchemaRetrieve(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'format': opts['format'],
        'lang': opts['lang']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jwtAuth'];
      let contentTypes = [];
      let accepts = ['application/vnd.oai.openapi', 'application/yaml', 'application/vnd.oai.openapi+json', 'application/json'];
      let returnType = {'String': Object};
      return this.apiClient.callApi(
        '/documentation/schema/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
