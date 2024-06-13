# AsiApi.LineMapsApi

All URIs are relative to *https://chilasi.asidigital.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mapsLinesList**](LineMapsApi.md#mapsLinesList) | **GET** /api/maps/lines/ | 
[**mapsLinesRetrieve**](LineMapsApi.md#mapsLinesRetrieve) | **GET** /api/maps/lines/{id}/ | 



## mapsLinesList

> LineMapList mapsLinesList(opts)



text

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.LineMapsApi();
let opts = {
  'companyId': 56 // Number | Filter lines by company id
};
apiInstance.mapsLinesList(opts, (error, data, response) => {
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
 **companyId** | **Number**| Filter lines by company id | [optional] 

### Return type

[**LineMapList**](LineMapList.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mapsLinesRetrieve

> LineMap mapsLinesRetrieve(id)



### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.LineMapsApi();
let id = 56; // Number | A unique integer value identifying this line map.
apiInstance.mapsLinesRetrieve(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this line map. | 

### Return type

[**LineMap**](LineMap.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

