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

import ApiClient from '../ApiClient';

/**
 * The LineMapProperties model module.
 * @module models/LineMapProperties
 * @version 1.0.0
 */
class LineMapProperties {
    /**
     * Constructs a new <code>LineMapProperties</code>.
     * @alias module:models/LineMapProperties
     */
    constructor() { 
        
        LineMapProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LineMapProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/LineMapProperties} obj Optional instance to populate.
     * @return {module:models/LineMapProperties} The populated <code>LineMapProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LineMapProperties();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('begin')) {
                obj['begin'] = ApiClient.convertToType(data['begin'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
            if (data.hasOwnProperty('altitudeMode')) {
                obj['altitudeMode'] = ApiClient.convertToType(data['altitudeMode'], 'String');
            }
            if (data.hasOwnProperty('tessellate')) {
                obj['tessellate'] = ApiClient.convertToType(data['tessellate'], 'Number');
            }
            if (data.hasOwnProperty('extrude')) {
                obj['extrude'] = ApiClient.convertToType(data['extrude'], 'Number');
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], 'Number');
            }
            if (data.hasOwnProperty('drawOrder')) {
                obj['drawOrder'] = ApiClient.convertToType(data['drawOrder'], 'Number');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('snippet')) {
                obj['snippet'] = ApiClient.convertToType(data['snippet'], 'String');
            }
            if (data.hasOwnProperty('shape_length')) {
                obj['shape_length'] = ApiClient.convertToType(data['shape_length'], 'Number');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LineMapProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LineMapProperties</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['altitudeMode'] && !(typeof data['altitudeMode'] === 'string' || data['altitudeMode'] instanceof String)) {
            throw new Error("Expected the field `altitudeMode` to be a primitive type in the JSON string but got " + data['altitudeMode']);
        }
        // ensure the json data is a string
        if (data['icon'] && !(typeof data['icon'] === 'string' || data['icon'] instanceof String)) {
            throw new Error("Expected the field `icon` to be a primitive type in the JSON string but got " + data['icon']);
        }
        // ensure the json data is a string
        if (data['snippet'] && !(typeof data['snippet'] === 'string' || data['snippet'] instanceof String)) {
            throw new Error("Expected the field `snippet` to be a primitive type in the JSON string but got " + data['snippet']);
        }
        // ensure the json data is a string
        if (data['tag'] && !(typeof data['tag'] === 'string' || data['tag'] instanceof String)) {
            throw new Error("Expected the field `tag` to be a primitive type in the JSON string but got " + data['tag']);
        }
        // ensure the json data is a string
        if (data['color'] && !(typeof data['color'] === 'string' || data['color'] instanceof String)) {
            throw new Error("Expected the field `color` to be a primitive type in the JSON string but got " + data['color']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
LineMapProperties.prototype['name'] = undefined;

/**
 * @member {String} description
 */
LineMapProperties.prototype['description'] = undefined;

/**
 * @member {Date} timestamp
 */
LineMapProperties.prototype['timestamp'] = undefined;

/**
 * @member {Date} begin
 */
LineMapProperties.prototype['begin'] = undefined;

/**
 * @member {Date} end
 */
LineMapProperties.prototype['end'] = undefined;

/**
 * @member {String} altitudeMode
 */
LineMapProperties.prototype['altitudeMode'] = undefined;

/**
 * @member {Number} tessellate
 */
LineMapProperties.prototype['tessellate'] = undefined;

/**
 * @member {Number} extrude
 */
LineMapProperties.prototype['extrude'] = undefined;

/**
 * @member {Number} visibility
 */
LineMapProperties.prototype['visibility'] = undefined;

/**
 * @member {Number} drawOrder
 */
LineMapProperties.prototype['drawOrder'] = undefined;

/**
 * @member {String} icon
 */
LineMapProperties.prototype['icon'] = undefined;

/**
 * @member {String} snippet
 */
LineMapProperties.prototype['snippet'] = undefined;

/**
 * @member {Number} shape_length
 */
LineMapProperties.prototype['shape_length'] = undefined;

/**
 * @member {String} tag
 */
LineMapProperties.prototype['tag'] = undefined;

/**
 * @member {String} color
 */
LineMapProperties.prototype['color'] = undefined;






export default LineMapProperties;

