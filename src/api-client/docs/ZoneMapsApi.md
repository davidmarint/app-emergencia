# AsiApi.ZoneMapsApi

All URIs are relative to *https://chilasi.asidigital.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mapsInsideRetrieve**](ZoneMapsApi.md#mapsInsideRetrieve) | **GET** /api/maps/inside/{id}/ | Revisa si una latitud y longitud se encuentra de una zona
[**mapsZonesList**](ZoneMapsApi.md#mapsZonesList) | **GET** /api/maps/zones/ | 
[**mapsZonesRetrieve**](ZoneMapsApi.md#mapsZonesRetrieve) | **GET** /api/maps/zones/{id}/ | 



## mapsInsideRetrieve

> Boolean mapsInsideRetrieve(id, latitude, longitude)

Revisa si una latitud y longitud se encuentra de una zona

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.ZoneMapsApi();
let id = 56; // Number | 
let latitude = 3.4; // Number | 
let longitude = 3.4; // Number | 
apiInstance.mapsInsideRetrieve(id, latitude, longitude, (error, data, response) => {
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
 **id** | **Number**|  | 
 **latitude** | **Number**|  | 
 **longitude** | **Number**|  | 

### Return type

**Boolean**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mapsZonesList

> ZoneMapList mapsZonesList(opts)



text

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.ZoneMapsApi();
let opts = {
  'companyId': 56 // Number | Filter zones by company id
};
apiInstance.mapsZonesList(opts, (error, data, response) => {
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
 **companyId** | **Number**| Filter zones by company id | [optional] 

### Return type

[**ZoneMapList**](ZoneMapList.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mapsZonesRetrieve

> ZoneMap mapsZonesRetrieve(id)



### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.ZoneMapsApi();
let id = 56; // Number | A unique integer value identifying this zone map.
apiInstance.mapsZonesRetrieve(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this zone map. | 

### Return type

[**ZoneMap**](ZoneMap.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

