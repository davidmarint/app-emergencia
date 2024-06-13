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
import Emergency from '../models/Emergency';
import EmergencyTypes from '../models/EmergencyTypes';
import Image from '../models/Image';
import PatchedEmergency from '../models/PatchedEmergency';

/**
* Emergencies service.
* @module api/EmergenciesApi
* @version 1.0.0
*/
export default class EmergenciesApi {

    /**
    * Constructs a new EmergenciesApi. 
    * @alias module:api/EmergenciesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the emergenciesCreate operation.
     * @callback module:api/EmergenciesApi~emergenciesCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:models/Emergency} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:models/Emergency} emergency 
     * @param {module:api/EmergenciesApi~emergenciesCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:models/Emergency}
     */
    emergenciesCreate(emergency, callback) {
      let postBody = emergency;
      // verify the required parameter 'emergency' is set
      if (emergency === undefined || emergency === null) {
        throw new Error("Missing the required parameter 'emergency' when calling emergenciesCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jwtAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Emergency;
      return this.apiClient.callApi(
        '/api/emergencies/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the emergenciesDestroy operation.
     * @callback module:api/EmergenciesApi~emergenciesDestroyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this Emergencia.
     * @param {module:api/EmergenciesApi~emergenciesDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    emergenciesDestroy(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling emergenciesDestroy");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/emergencies/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the emergenciesImagesCreate operation.
     * @callback module:api/EmergenciesApi~emergenciesImagesCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:models/Image} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Anexar documento a un modelo de datos
     * Anexar una imagen a una emergencia
     * @param {Number} emergencyId Id de la Emergencia a la que se le va agregar una imagen
     * @param {Object} opts Optional parameters
     * @param {File} [image] 
     * @param {String} [name] 
     * @param {module:api/EmergenciesApi~emergenciesImagesCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:models/Image}
     */
    emergenciesImagesCreate(emergencyId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'emergencyId' is set
      if (emergencyId === undefined || emergencyId === null) {
        throw new Error("Missing the required parameter 'emergencyId' when calling emergenciesImagesCreate");
      }

      let pathParams = {
        'emergencyId': emergencyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'image': opts['image'],
        'name': opts['name']
      };

      let authNames = ['jwtAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Image;
      return this.apiClient.callApi(
        '/api/emergencies/images/{emergencyId}/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the emergenciesImagesDestroy operation.
     * @callback module:api/EmergenciesApi~emergenciesImagesDestroyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this Imagen.
     * @param {module:api/EmergenciesApi~emergenciesImagesDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    emergenciesImagesDestroy(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling emergenciesImagesDestroy");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/emergencies/images/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the emergenciesLastRetrieve operation.
     * @callback module:api/EmergenciesApi~emergenciesLastRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:models/Emergency} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/EmergenciesApi~emergenciesLastRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:models/Emergency}
     */
    emergenciesLastRetrieve(callback) {
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
      let returnType = Emergency;
      return this.apiClient.callApi(
        '/api/emergencies/last/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the emergenciesList operation.
     * @callback module:api/EmergenciesApi~emergenciesListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:models/Emergency>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * text
     * @param {Object} opts Optional parameters
     * @param {Number} [companyId] Filter emergencies by company id
     * @param {module:api/EmergenciesApi~emergenciesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:models/Emergency>}
     */
    emergenciesList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'company_id': opts['companyId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jwtAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Emergency];
      return this.apiClient.callApi(
        '/api/emergencies/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the emergenciesPartialUpdate operation.
     * @callback module:api/EmergenciesApi~emergenciesPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:models/Emergency} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this Emergencia.
     * @param {Object} opts Optional parameters
     * @param {module:models/PatchedEmergency} [patchedEmergency] 
     * @param {module:api/EmergenciesApi~emergenciesPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:models/Emergency}
     */
    emergenciesPartialUpdate(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedEmergency'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling emergenciesPartialUpdate");
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
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Emergency;
      return this.apiClient.callApi(
        '/api/emergencies/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the emergenciesRetrieve operation.
     * @callback module:api/EmergenciesApi~emergenciesRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:models/Emergency} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this Emergencia.
     * @param {module:api/EmergenciesApi~emergenciesRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:models/Emergency}
     */
    emergenciesRetrieve(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling emergenciesRetrieve");
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
      let returnType = Emergency;
      return this.apiClient.callApi(
        '/api/emergencies/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the emergenciesUpdate operation.
     * @callback module:api/EmergenciesApi~emergenciesUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:models/Emergency} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this Emergencia.
     * @param {module:models/Emergency} emergency 
     * @param {module:api/EmergenciesApi~emergenciesUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:models/Emergency}
     */
    emergenciesUpdate(id, emergency, callback) {
      let postBody = emergency;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling emergenciesUpdate");
      }
      // verify the required parameter 'emergency' is set
      if (emergency === undefined || emergency === null) {
        throw new Error("Missing the required parameter 'emergency' when calling emergenciesUpdate");
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
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Emergency;
      return this.apiClient.callApi(
        '/api/emergencies/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mainEmergenciesList operation.
     * @callback module:api/EmergenciesApi~mainEmergenciesListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:models/EmergencyTypes>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/EmergenciesApi~mainEmergenciesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:models/EmergencyTypes>}
     */
    mainEmergenciesList(callback) {
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
      let returnType = [EmergencyTypes];
      return this.apiClient.callApi(
        '/api/main/emergencies/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mainEmergenciesRetrieve operation.
     * @callback module:api/EmergenciesApi~mainEmergenciesRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmergencyTypes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this Tipo de Emergencia.
     * @param {module:api/EmergenciesApi~mainEmergenciesRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:models/EmergencyTypes}
     */
    mainEmergenciesRetrieve(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling mainEmergenciesRetrieve");
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
      let returnType = EmergencyTypes;
      return this.apiClient.callApi(
        '/api/main/emergencies/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
