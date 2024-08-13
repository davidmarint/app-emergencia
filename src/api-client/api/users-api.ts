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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { User } from '../models';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Obtiene el Usuario Actual utilizando el token en el HEADER
         * @summary Obtiene el Usuario Actual utilizando el token en el HEADER
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mainUsersCurrentRetrieve: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/main/users/current/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwtAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mainUsersUsersDestroy: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('mainUsersUsersDestroy', 'id', id)
            const localVarPath = `/api/main/users/users/{id}/`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwtAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mainUsersUsersRetrieve: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('mainUsersUsersRetrieve', 'id', id)
            const localVarPath = `/api/main/users/users/{id}/`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwtAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * Obtiene el Usuario Actual utilizando el token en el HEADER
         * @summary Obtiene el Usuario Actual utilizando el token en el HEADER
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mainUsersCurrentRetrieve(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mainUsersCurrentRetrieve(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.mainUsersCurrentRetrieve']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mainUsersUsersDestroy(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mainUsersUsersDestroy(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.mainUsersUsersDestroy']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mainUsersUsersRetrieve(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mainUsersUsersRetrieve(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.mainUsersUsersRetrieve']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * Obtiene el Usuario Actual utilizando el token en el HEADER
         * @summary Obtiene el Usuario Actual utilizando el token en el HEADER
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mainUsersCurrentRetrieve(options?: RawAxiosRequestConfig): AxiosPromise<User> {
            return localVarFp.mainUsersCurrentRetrieve(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UsersApiMainUsersUsersDestroyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mainUsersUsersDestroy(requestParameters: UsersApiMainUsersUsersDestroyRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.mainUsersUsersDestroy(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UsersApiMainUsersUsersRetrieveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mainUsersUsersRetrieve(requestParameters: UsersApiMainUsersUsersRetrieveRequest, options?: RawAxiosRequestConfig): AxiosPromise<User> {
            return localVarFp.mainUsersUsersRetrieve(requestParameters.id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for mainUsersUsersDestroy operation in UsersApi.
 * @export
 * @interface UsersApiMainUsersUsersDestroyRequest
 */
export interface UsersApiMainUsersUsersDestroyRequest {
    /**
     * 
     * @type {number}
     * @memberof UsersApiMainUsersUsersDestroy
     */
    readonly id: number
}

/**
 * Request parameters for mainUsersUsersRetrieve operation in UsersApi.
 * @export
 * @interface UsersApiMainUsersUsersRetrieveRequest
 */
export interface UsersApiMainUsersUsersRetrieveRequest {
    /**
     * 
     * @type {number}
     * @memberof UsersApiMainUsersUsersRetrieve
     */
    readonly id: number
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Obtiene el Usuario Actual utilizando el token en el HEADER
     * @summary Obtiene el Usuario Actual utilizando el token en el HEADER
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public mainUsersCurrentRetrieve(options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).mainUsersCurrentRetrieve(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {UsersApiMainUsersUsersDestroyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public mainUsersUsersDestroy(requestParameters: UsersApiMainUsersUsersDestroyRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).mainUsersUsersDestroy(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {UsersApiMainUsersUsersRetrieveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public mainUsersUsersRetrieve(requestParameters: UsersApiMainUsersUsersRetrieveRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).mainUsersUsersRetrieve(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }
}
