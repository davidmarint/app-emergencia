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
import type { ResetPassword } from '../models';
// @ts-ignore
import type { ResetPasswordCodeValidateRequest } from '../models';
// @ts-ignore
import type { ResetPasswordRequest } from '../models';
/**
 * MainApi - axios parameter creator
 * @export
 */
export const MainApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ResetPasswordRequest} resetPasswordRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mainUsersGenerateCodeCreate: async (resetPasswordRequest: ResetPasswordRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'resetPasswordRequest' is not null or undefined
            assertParamExists('mainUsersGenerateCodeCreate', 'resetPasswordRequest', resetPasswordRequest)
            const localVarPath = `/api/main/users/generate-code`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwtAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(resetPasswordRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {ResetPassword} resetPassword 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mainUsersRecoverPasswordCodeCreate: async (resetPassword: ResetPassword, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'resetPassword' is not null or undefined
            assertParamExists('mainUsersRecoverPasswordCodeCreate', 'resetPassword', resetPassword)
            const localVarPath = `/api/main/users/recover-password-code`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwtAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(resetPassword, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {ResetPasswordCodeValidateRequest} resetPasswordCodeValidateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mainUsersValidateCodeCreate: async (resetPasswordCodeValidateRequest: ResetPasswordCodeValidateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'resetPasswordCodeValidateRequest' is not null or undefined
            assertParamExists('mainUsersValidateCodeCreate', 'resetPasswordCodeValidateRequest', resetPasswordCodeValidateRequest)
            const localVarPath = `/api/main/users/validate-code`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwtAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(resetPasswordCodeValidateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MainApi - functional programming interface
 * @export
 */
export const MainApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MainApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {ResetPasswordRequest} resetPasswordRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mainUsersGenerateCodeCreate(resetPasswordRequest: ResetPasswordRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResetPasswordRequest>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mainUsersGenerateCodeCreate(resetPasswordRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MainApi.mainUsersGenerateCodeCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {ResetPassword} resetPassword 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mainUsersRecoverPasswordCodeCreate(resetPassword: ResetPassword, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResetPassword>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mainUsersRecoverPasswordCodeCreate(resetPassword, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MainApi.mainUsersRecoverPasswordCodeCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {ResetPasswordCodeValidateRequest} resetPasswordCodeValidateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mainUsersValidateCodeCreate(resetPasswordCodeValidateRequest: ResetPasswordCodeValidateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResetPasswordCodeValidateRequest>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mainUsersValidateCodeCreate(resetPasswordCodeValidateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MainApi.mainUsersValidateCodeCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MainApi - factory interface
 * @export
 */
export const MainApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MainApiFp(configuration)
    return {
        /**
         * 
         * @param {MainApiMainUsersGenerateCodeCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mainUsersGenerateCodeCreate(requestParameters: MainApiMainUsersGenerateCodeCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<ResetPasswordRequest> {
            return localVarFp.mainUsersGenerateCodeCreate(requestParameters.resetPasswordRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {MainApiMainUsersRecoverPasswordCodeCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mainUsersRecoverPasswordCodeCreate(requestParameters: MainApiMainUsersRecoverPasswordCodeCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<ResetPassword> {
            return localVarFp.mainUsersRecoverPasswordCodeCreate(requestParameters.resetPassword, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {MainApiMainUsersValidateCodeCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mainUsersValidateCodeCreate(requestParameters: MainApiMainUsersValidateCodeCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<ResetPasswordCodeValidateRequest> {
            return localVarFp.mainUsersValidateCodeCreate(requestParameters.resetPasswordCodeValidateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for mainUsersGenerateCodeCreate operation in MainApi.
 * @export
 * @interface MainApiMainUsersGenerateCodeCreateRequest
 */
export interface MainApiMainUsersGenerateCodeCreateRequest {
    /**
     * 
     * @type {ResetPasswordRequest}
     * @memberof MainApiMainUsersGenerateCodeCreate
     */
    readonly resetPasswordRequest: ResetPasswordRequest
}

/**
 * Request parameters for mainUsersRecoverPasswordCodeCreate operation in MainApi.
 * @export
 * @interface MainApiMainUsersRecoverPasswordCodeCreateRequest
 */
export interface MainApiMainUsersRecoverPasswordCodeCreateRequest {
    /**
     * 
     * @type {ResetPassword}
     * @memberof MainApiMainUsersRecoverPasswordCodeCreate
     */
    readonly resetPassword: ResetPassword
}

/**
 * Request parameters for mainUsersValidateCodeCreate operation in MainApi.
 * @export
 * @interface MainApiMainUsersValidateCodeCreateRequest
 */
export interface MainApiMainUsersValidateCodeCreateRequest {
    /**
     * 
     * @type {ResetPasswordCodeValidateRequest}
     * @memberof MainApiMainUsersValidateCodeCreate
     */
    readonly resetPasswordCodeValidateRequest: ResetPasswordCodeValidateRequest
}

/**
 * MainApi - object-oriented interface
 * @export
 * @class MainApi
 * @extends {BaseAPI}
 */
export class MainApi extends BaseAPI {
    /**
     * 
     * @param {MainApiMainUsersGenerateCodeCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MainApi
     */
    public mainUsersGenerateCodeCreate(requestParameters: MainApiMainUsersGenerateCodeCreateRequest, options?: RawAxiosRequestConfig) {
        return MainApiFp(this.configuration).mainUsersGenerateCodeCreate(requestParameters.resetPasswordRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {MainApiMainUsersRecoverPasswordCodeCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MainApi
     */
    public mainUsersRecoverPasswordCodeCreate(requestParameters: MainApiMainUsersRecoverPasswordCodeCreateRequest, options?: RawAxiosRequestConfig) {
        return MainApiFp(this.configuration).mainUsersRecoverPasswordCodeCreate(requestParameters.resetPassword, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {MainApiMainUsersValidateCodeCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MainApi
     */
    public mainUsersValidateCodeCreate(requestParameters: MainApiMainUsersValidateCodeCreateRequest, options?: RawAxiosRequestConfig) {
        return MainApiFp(this.configuration).mainUsersValidateCodeCreate(requestParameters.resetPasswordCodeValidateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

