# AsiApi.EmergenciesApi

All URIs are relative to *https://chilasi.asidigital.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**emergenciesCreate**](EmergenciesApi.md#emergenciesCreate) | **POST** /api/emergencies/ | 
[**emergenciesDestroy**](EmergenciesApi.md#emergenciesDestroy) | **DELETE** /api/emergencies/{id}/ | 
[**emergenciesImagesCreate**](EmergenciesApi.md#emergenciesImagesCreate) | **POST** /api/emergencies/images/{emergencyId}/ | Anexar documento a un modelo de datos
[**emergenciesImagesDestroy**](EmergenciesApi.md#emergenciesImagesDestroy) | **DELETE** /api/emergencies/images/{id}/ | 
[**emergenciesLastRetrieve**](EmergenciesApi.md#emergenciesLastRetrieve) | **GET** /api/emergencies/last/ | 
[**emergenciesList**](EmergenciesApi.md#emergenciesList) | **GET** /api/emergencies/ | 
[**emergenciesPartialUpdate**](EmergenciesApi.md#emergenciesPartialUpdate) | **PATCH** /api/emergencies/{id}/ | 
[**emergenciesRetrieve**](EmergenciesApi.md#emergenciesRetrieve) | **GET** /api/emergencies/{id}/ | 
[**emergenciesUpdate**](EmergenciesApi.md#emergenciesUpdate) | **PUT** /api/emergencies/{id}/ | 
[**mainEmergenciesList**](EmergenciesApi.md#mainEmergenciesList) | **GET** /api/main/emergencies/ | 
[**mainEmergenciesRetrieve**](EmergenciesApi.md#mainEmergenciesRetrieve) | **GET** /api/main/emergencies/{id}/ | 



## emergenciesCreate

> Emergency emergenciesCreate(emergency)



### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.EmergenciesApi();
let emergency = new AsiApi.Emergency(); // Emergency | 
apiInstance.emergenciesCreate(emergency, (error, data, response) => {
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
 **emergency** | [**Emergency**](Emergency.md)|  | 

### Return type

[**Emergency**](Emergency.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## emergenciesDestroy

> emergenciesDestroy(id)



### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.EmergenciesApi();
let id = 56; // Number | A unique integer value identifying this Emergencia.
apiInstance.emergenciesDestroy(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Emergencia. | 

### Return type

null (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## emergenciesImagesCreate

> Image emergenciesImagesCreate(emergencyId, opts)

Anexar documento a un modelo de datos

Anexar una imagen a una emergencia

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.EmergenciesApi();
let emergencyId = 56; // Number | Id de la Emergencia a la que se le va agregar una imagen
let opts = {
  'image': "/path/to/file", // File | 
  'name': "name_example" // String | 
};
apiInstance.emergenciesImagesCreate(emergencyId, opts, (error, data, response) => {
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
 **emergencyId** | **Number**| Id de la Emergencia a la que se le va agregar una imagen | 
 **image** | **File**|  | [optional] 
 **name** | **String**|  | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## emergenciesImagesDestroy

> emergenciesImagesDestroy(id)



### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.EmergenciesApi();
let id = 56; // Number | A unique integer value identifying this Imagen.
apiInstance.emergenciesImagesDestroy(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Imagen. | 

### Return type

null (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## emergenciesLastRetrieve

> Emergency emergenciesLastRetrieve()



### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.EmergenciesApi();
apiInstance.emergenciesLastRetrieve((error, data, response) => {
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

[**Emergency**](Emergency.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## emergenciesList

> [Emergency] emergenciesList(opts)



text

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.EmergenciesApi();
let opts = {
  'companyId': 56 // Number | Filter emergencies by company id
};
apiInstance.emergenciesList(opts, (error, data, response) => {
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
 **companyId** | **Number**| Filter emergencies by company id | [optional] 

### Return type

[**[Emergency]**](Emergency.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## emergenciesPartialUpdate

> Emergency emergenciesPartialUpdate(id, opts)



### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.EmergenciesApi();
let id = 56; // Number | A unique integer value identifying this Emergencia.
let opts = {
  'patchedEmergency': new AsiApi.PatchedEmergency() // PatchedEmergency | 
};
apiInstance.emergenciesPartialUpdate(id, opts, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this Emergencia. | 
 **patchedEmergency** | [**PatchedEmergency**](PatchedEmergency.md)|  | [optional] 

### Return type

[**Emergency**](Emergency.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## emergenciesRetrieve

> Emergency emergenciesRetrieve(id)



### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.EmergenciesApi();
let id = 56; // Number | A unique integer value identifying this Emergencia.
apiInstance.emergenciesRetrieve(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this Emergencia. | 

### Return type

[**Emergency**](Emergency.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## emergenciesUpdate

> Emergency emergenciesUpdate(id, emergency)



### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.EmergenciesApi();
let id = 56; // Number | A unique integer value identifying this Emergencia.
let emergency = new AsiApi.Emergency(); // Emergency | 
apiInstance.emergenciesUpdate(id, emergency, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this Emergencia. | 
 **emergency** | [**Emergency**](Emergency.md)|  | 

### Return type

[**Emergency**](Emergency.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## mainEmergenciesList

> [EmergencyTypes] mainEmergenciesList()



### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.EmergenciesApi();
apiInstance.mainEmergenciesList((error, data, response) => {
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

[**[EmergencyTypes]**](EmergencyTypes.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mainEmergenciesRetrieve

> EmergencyTypes mainEmergenciesRetrieve(id)



### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.EmergenciesApi();
let id = 56; // Number | A unique integer value identifying this Tipo de Emergencia.
apiInstance.mainEmergenciesRetrieve(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this Tipo de Emergencia. | 

### Return type

[**EmergencyTypes**](EmergencyTypes.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

