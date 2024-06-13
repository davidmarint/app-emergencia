# AsiApi.PecApi

All URIs are relative to *https://chilasi.asidigital.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pecMenuRetrieve**](PecApi.md#pecMenuRetrieve) | **GET** /api/pec/menu/{companyId}/ | 
[**pecPageRetrieve**](PecApi.md#pecPageRetrieve) | **GET** /api/pec/page/{id}/ | 



## pecMenuRetrieve

> Menu pecMenuRetrieve(companyId)



Retrieve a model instance send request data

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.PecApi();
let companyId = 56; // Number | 
apiInstance.pecMenuRetrieve(companyId, (error, data, response) => {
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
 **companyId** | **Number**|  | 

### Return type

[**Menu**](Menu.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pecPageRetrieve

> Page pecPageRetrieve(id)



Retrieve a model instance send request data

### Example

```javascript
import AsiApi from 'asi_api';
let defaultClient = AsiApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwtAuth
let jwtAuth = defaultClient.authentications['jwtAuth'];
jwtAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AsiApi.PecApi();
let id = 56; // Number | A unique integer value identifying this page.
apiInstance.pecPageRetrieve(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this page. | 

### Return type

[**Page**](Page.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

