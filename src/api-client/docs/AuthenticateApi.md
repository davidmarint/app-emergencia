# AsiApi.AuthenticateApi

All URIs are relative to *https://chilasi.asidigital.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mainLoginCreate**](AuthenticateApi.md#mainLoginCreate) | **POST** /api/main/login/ | 
[**mainLogoutCreate**](AuthenticateApi.md#mainLogoutCreate) | **POST** /api/main/logout/ | 
[**mainRefreshCreate**](AuthenticateApi.md#mainRefreshCreate) | **POST** /api/main/refresh/ | 



## mainLoginCreate

> TokenOutput mainLoginCreate(customTokenObtainPair)



Iniciar Sesión

### Example

```javascript
import AsiApi from 'asi_api';

let apiInstance = new AsiApi.AuthenticateApi();
let customTokenObtainPair = new AsiApi.CustomTokenObtainPair(); // CustomTokenObtainPair | 
apiInstance.mainLoginCreate(customTokenObtainPair, (error, data, response) => {
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
 **customTokenObtainPair** | [**CustomTokenObtainPair**](CustomTokenObtainPair.md)|  | 

### Return type

[**TokenOutput**](TokenOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## mainLogoutCreate

> mainLogoutCreate(logout)



Cerrar sesión

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.AuthenticateApi();
let logout = new AsiApi.Logout(); // Logout | 
apiInstance.mainLogoutCreate(logout, (error, data, response) => {
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
 **logout** | [**Logout**](Logout.md)|  | 

### Return type

null (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## mainRefreshCreate

> TokenRefresh mainRefreshCreate(tokenRefresh)



Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.

### Example

```javascript
import AsiApi from 'asi_api';

let apiInstance = new AsiApi.AuthenticateApi();
let tokenRefresh = new AsiApi.TokenRefresh(); // TokenRefresh | 
apiInstance.mainRefreshCreate(tokenRefresh, (error, data, response) => {
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
 **tokenRefresh** | [**TokenRefresh**](TokenRefresh.md)|  | 

### Return type

[**TokenRefresh**](TokenRefresh.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

