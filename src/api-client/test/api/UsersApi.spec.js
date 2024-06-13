/**
 * ASI API
 * API Documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AsiApi);
  }
}(this, function(expect, AsiApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AsiApi.UsersApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UsersApi', function() {
    describe('mainCurrentRetrieve', function() {
      it('should call mainCurrentRetrieve successfully', function(done) {
        //uncomment below and update the code to test mainCurrentRetrieve
        //instance.mainCurrentRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mainRegisterCreate', function() {
      it('should call mainRegisterCreate successfully', function(done) {
        //uncomment below and update the code to test mainRegisterCreate
        //instance.mainRegisterCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mainUserCreate', function() {
      it('should call mainUserCreate successfully', function(done) {
        //uncomment below and update the code to test mainUserCreate
        //instance.mainUserCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mainUserDestroy', function() {
      it('should call mainUserDestroy successfully', function(done) {
        //uncomment below and update the code to test mainUserDestroy
        //instance.mainUserDestroy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mainUserRetrieve', function() {
      it('should call mainUserRetrieve successfully', function(done) {
        //uncomment below and update the code to test mainUserRetrieve
        //instance.mainUserRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
