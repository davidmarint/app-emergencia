# AsiApi.ConfigurationsApi

All URIs are relative to *https://chilasi.asidigital.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mainConfigurationsList**](ConfigurationsApi.md#mainConfigurationsList) | **GET** /api/main/configurations/ | 
[**mainConfigurationsRetrieve**](ConfigurationsApi.md#mainConfigurationsRetrieve) | **GET** /api/main/configurations/{id}/ | 



## mainConfigurationsList

> [Configuration] mainConfigurationsList()



### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.ConfigurationsApi();
apiInstance.mainConfigurationsList((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Configuration]**](Configuration.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mainConfigurationsRetrieve

> Configuration mainConfigurationsRetrieve(id)



### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.ConfigurationsApi();
let id = 56; // Number | A unique integer value identifying this Configuración.
apiInstance.mainConfigurationsRetrieve(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Configuración. | 

### Return type

[**Configuration**](Configuration.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

