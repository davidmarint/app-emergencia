# AsiApi.DevicesApi

All URIs are relative to *https://chilasi.asidigital.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mainDevicesAndroidCreate**](DevicesApi.md#mainDevicesAndroidCreate) | **POST** /api/main/devices/android/ | Registra un dispositivo android recibir las notificaciones push
[**mainDevicesIosCreate**](DevicesApi.md#mainDevicesIosCreate) | **POST** /api/main/devices/ios/ | Registra un dispositivo ios recibir las notificaciones push
[**mainDevicesUnlinkAndroidDeviceCreate**](DevicesApi.md#mainDevicesUnlinkAndroidDeviceCreate) | **POST** /api/main/devices/unlink-android-device/ | Elimina un dispositivo android para recibir las notificaciones push
[**mainDevicesUnlinkIosDeviceCreate**](DevicesApi.md#mainDevicesUnlinkIosDeviceCreate) | **POST** /api/main/devices/unlink-ios-device/ | Elimina un dispositivo ios para recibir las notificaciones push



## mainDevicesAndroidCreate

> mainDevicesAndroidCreate(gCMDevice)

Registra un dispositivo android recibir las notificaciones push

Registra un dispositivo android para recibir las notificaciones push

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.DevicesApi();
let gCMDevice = new AsiApi.GCMDevice(); // GCMDevice | 
apiInstance.mainDevicesAndroidCreate(gCMDevice, (error, data, response) => {
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
 **gCMDevice** | [**GCMDevice**](GCMDevice.md)|  | 

### Return type

null (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## mainDevicesIosCreate

> mainDevicesIosCreate(gCMDevice)

Registra un dispositivo ios recibir las notificaciones push

Registra un dispositivo ios recibir las notificaciones push

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.DevicesApi();
let gCMDevice = new AsiApi.GCMDevice(); // GCMDevice | 
apiInstance.mainDevicesIosCreate(gCMDevice, (error, data, response) => {
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
 **gCMDevice** | [**GCMDevice**](GCMDevice.md)|  | 

### Return type

null (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## mainDevicesUnlinkAndroidDeviceCreate

> mainDevicesUnlinkAndroidDeviceCreate(gCMDevice)

Elimina un dispositivo android para recibir las notificaciones push

Elimina un dispositivo android para recibir las notificaciones push

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.DevicesApi();
let gCMDevice = new AsiApi.GCMDevice(); // GCMDevice | 
apiInstance.mainDevicesUnlinkAndroidDeviceCreate(gCMDevice, (error, data, response) => {
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
 **gCMDevice** | [**GCMDevice**](GCMDevice.md)|  | 

### Return type

null (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## mainDevicesUnlinkIosDeviceCreate

> mainDevicesUnlinkIosDeviceCreate(gCMDevice)

Elimina un dispositivo ios para recibir las notificaciones push

Elimina un dispositivo ios para recibir las notificaciones push

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.DevicesApi();
let gCMDevice = new AsiApi.GCMDevice(); // GCMDevice | 
apiInstance.mainDevicesUnlinkIosDeviceCreate(gCMDevice, (error, data, response) => {
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
 **gCMDevice** | [**GCMDevice**](GCMDevice.md)|  | 

### Return type

null (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined

