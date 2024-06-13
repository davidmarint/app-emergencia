# AsiApi.Devices2Api

All URIs are relative to *https://chilasi.asidigital.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notifications2DeviceCreate**](Devices2Api.md#notifications2DeviceCreate) | **POST** /api/notifications2/device/ | Registra un dispositivo android recibir las notificaciones push
[**notifications2UnlinkDeviceCreate**](Devices2Api.md#notifications2UnlinkDeviceCreate) | **POST** /api/notifications2/unlink-device/ | Elimina un dispositivo android para recibir las notificaciones push



## notifications2DeviceCreate

> notifications2DeviceCreate(device)

Registra un dispositivo android recibir las notificaciones push

Registra un dispositivo android para recibir las notificaciones push

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.Devices2Api();
let device = new AsiApi.Device(); // Device | 
apiInstance.notifications2DeviceCreate(device, (error, data, response) => {
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
 **device** | [**Device**](Device.md)|  | 

### Return type

null (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## notifications2UnlinkDeviceCreate

> notifications2UnlinkDeviceCreate(device)

Elimina un dispositivo android para recibir las notificaciones push

Elimina un dispositivo android para recibir las notificaciones push

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.Devices2Api();
let device = new AsiApi.Device(); // Device | 
apiInstance.notifications2UnlinkDeviceCreate(device, (error, data, response) => {
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
 **device** | [**Device**](Device.md)|  | 

### Return type

null (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined

