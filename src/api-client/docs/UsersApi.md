# AsiApi.UsersApi

All URIs are relative to *https://chilasi.asidigital.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mainCurrentRetrieve**](UsersApi.md#mainCurrentRetrieve) | **GET** /api/main/current/ | Obtiene el Usuario Actual utilizando el token en el HEADER
[**mainRegisterCreate**](UsersApi.md#mainRegisterCreate) | **POST** /api/main/register/ | Registrar un nuevo Usuario
[**mainUserCreate**](UsersApi.md#mainUserCreate) | **POST** /api/main/user/{username}/ | 
[**mainUserDestroy**](UsersApi.md#mainUserDestroy) | **DELETE** /api/main/user/{username}/ | Elimina un usuario, solo el usuario se puede eliminar a si mismo
[**mainUserRetrieve**](UsersApi.md#mainUserRetrieve) | **GET** /api/main/user/{username}/ | Obtiene la información de un usuario mediante el nombre usuario



## mainCurrentRetrieve

> UserModel mainCurrentRetrieve()

Obtiene el Usuario Actual utilizando el token en el HEADER

Obtiene el Usuario Actual utilizando el token en el HEADER

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.UsersApi();
apiInstance.mainCurrentRetrieve((error, data, response) => {
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

[**UserModel**](UserModel.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mainRegisterCreate

> UserModel mainRegisterCreate(register)

Registrar un nuevo Usuario

Registrar un nuevo Usuario

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.UsersApi();
let register = new AsiApi.Register(); // Register | 
apiInstance.mainRegisterCreate(register, (error, data, response) => {
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
 **register** | [**Register**](Register.md)|  | 

### Return type

[**UserModel**](UserModel.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## mainUserCreate

> UserModel mainUserCreate(username, opts)



Actualiza los datos del usuario, solo el usuario puede actualizar sus datos

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.UsersApi();
let username = "username_example"; // String | 
let opts = {
  'firstName': "firstName_example", // String | 
  'lastName': "lastName_example", // String | 
  'avatar': "/path/to/file" // File | 
};
apiInstance.mainUserCreate(username, opts, (error, data, response) => {
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
 **username** | **String**|  | 
 **firstName** | **String**|  | [optional] 
 **lastName** | **String**|  | [optional] 
 **avatar** | **File**|  | [optional] 

### Return type

[**UserModel**](UserModel.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## mainUserDestroy

> mainUserDestroy(username)

Elimina un usuario, solo el usuario se puede eliminar a si mismo

Elimina un usuario, solo el usuario se puede eliminar a si mismo

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.UsersApi();
let username = "username_example"; // String | 
apiInstance.mainUserDestroy(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## mainUserRetrieve

> UserModel mainUserRetrieve(username)

Obtiene la información de un usuario mediante el nombre usuario

Obtiene la información de un usuario mediante el nombre usuario

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.UsersApi();
let username = "username_example"; // String | 
apiInstance.mainUserRetrieve(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

[**UserModel**](UserModel.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

