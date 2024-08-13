# AsiApi.SearchMapsApi

All URIs are relative to *https://chilasi.asidigital.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mapsSearchLinesList**](SearchMapsApi.md#mapsSearchLinesList) | **GET** /api/maps/search/lines/ | 
[**mapsSearchPointsList**](SearchMapsApi.md#mapsSearchPointsList) | **GET** /api/maps/search/points/ | 
[**mapsSearchZonesList**](SearchMapsApi.md#mapsSearchZonesList) | **GET** /api/maps/search/zones/ | 



## mapsSearchLinesList

> LineMapList mapsSearchLinesList(companyId, opts)



text

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.SearchMapsApi();
let companyId = 56; // Number | company_id
let opts = {
  'latitude': 3.4, // Number | latitude
  'longitude': 3.4, // Number | longitude
  'radius': 3.4, // Number | radius
  'tag': "tag_example" // String | tag
};
apiInstance.mapsSearchLinesList(companyId, opts, (error, data, response) => {
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
 **companyId** | **Number**| company_id | 
 **latitude** | **Number**| latitude | [optional] 
 **longitude** | **Number**| longitude | [optional] 
 **radius** | **Number**| radius | [optional] 
 **tag** | **String**| tag | [optional] 

### Return type

[**LineMapList**](LineMapList.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mapsSearchPointsList

> PointMapList mapsSearchPointsList(companyId, opts)



text

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.SearchMapsApi();
let companyId = 56; // Number | company_id
let opts = {
  'latitude': 3.4, // Number | latitude
  'longitude': 3.4, // Number | longitude
  'radius': 3.4, // Number | radius
  'tag': "tag_example" // String | tag
};
apiInstance.mapsSearchPointsList(companyId, opts, (error, data, response) => {
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
 **companyId** | **Number**| company_id | 
 **latitude** | **Number**| latitude | [optional] 
 **longitude** | **Number**| longitude | [optional] 
 **radius** | **Number**| radius | [optional] 
 **tag** | **String**| tag | [optional] 

### Return type

[**PointMapList**](PointMapList.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mapsSearchZonesList

> ZoneMapList mapsSearchZonesList(companyId, opts)



text

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.SearchMapsApi();
let companyId = 56; // Number | company_id
let opts = {
  'latitude': 3.4, // Number | latitude
  'longitude': 3.4, // Number | longitude
  'radius': 3.4, // Number | radius
  'tag': "tag_example" // String | tag
};
apiInstance.mapsSearchZonesList(companyId, opts, (error, data, response) => {
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
 **companyId** | **Number**| company_id | 
 **latitude** | **Number**| latitude | [optional] 
 **longitude** | **Number**| longitude | [optional] 
 **radius** | **Number**| radius | [optional] 
 **tag** | **String**| tag | [optional] 

### Return type

[**ZoneMapList**](ZoneMapList.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

