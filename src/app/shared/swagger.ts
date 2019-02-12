export const swaggerJson = [
    {
    "id": "repairs",
    "title": "Repairs API",
    "version": "v1",
    "description": "This is the Hackney Repairs API which allows client applications to securely access publicly available information on repairs to Hackney properties, and to raise new repair requests.",
    "paths": [
    {
    "id": "V1Work_ordersByWorkOrderReferenceAvailable_appointmentsGet",
    "url": "/v1/work_orders/{workOrderReference}/available_appointments",
    "requestType": "get",
    "tags": [
    "Appointments"
    ],
    "summary": "Returns available appointments for a Universal Housing work order",
    "parameters": [
    {
    "name": "workOrderReference",
    "in": "path",
    "required": true,
    "type": "string"
    }
    ],
    "responses": {
    "200": {
    "description": "Returns the list of available appointments"
    },
    "400": {
    "description": "If no valid work order reference is provided"
    },
    "404": {
    "description": "Not Found"
    },
    "500": {
    "description": "If any errors are encountered"
    }
    }
    },
    {
    "id": "V1Work_ordersByWorkOrderReferenceAppointmentsGet",
    "url": "/v1/work_orders/{workOrderReference}/appointments",
    "requestType": "put",
    "tags": [
    "Appointments"
    ],
    "summary": "Returns all appointments for a work order",
    "parameters": [
    {
    "name": "workOrderReference",
    "in": "path",
    "description": "UH work order reference",
    "required": true,
    "type": "string"
    }
    ],
    "responses": {
    "200": {
    "description": "Returns a list of appointments for a work order reference"
    },
    "404": {
    "description": "If there are no appointments found for the work orders reference"
    },
    "500": {
    "description": "If any errors are encountered"
    }
    }
    },
    {
    "id": "V1Work_ordersByWorkOrderReferenceAppointmentsLatestGet",
    "url": "/v1/work_orders/{workOrderReference}/appointments/latest",
    "requestType": "post",
    "tags": [
    "Appointments"
    ],
    "summary": "Returns the latest apointment for a work order",
    "parameters": [
    {
    "name": "workOrderReference",
    "in": "path",
    "description": "UH work order reference",
    "required": true,
    "type": "string"
    }
    ],
    "responses": {
    "200": {
    "description": "Returns an appointment for a work order reference"
    },
    "404": {
    "description": "If there is no appointment found for the work order reference"
    },
    "500": {
    "description": "If any errors are encountered"
    }
    }
    },
    {
    "id": "V1NotesFeedGet",
    "url": "/v1/notes/feed",
    "requestType": "delete",
    "tags": [
    "Notes"
    ],
    "summary": "Returns a list of notes matching the noteTarget and with a note id greater than startId",
    "parameters": [
    {
    "name": "startId",
    "in": "query",
    "description": "A note id, results will have a grater id than this parameter",
    "required": false,
    "type": "integer",
    "format": "int32"
    },
    {
    "name": "noteTarget",
    "in": "query",
    "description": "The kind of note defined in Universal Housing (required)",
    "required": false,
    "type": "string"
    },
    {
    "name": "resultSize",
    "in": "query",
    "description": "The maximum number of notes returned. Default value is 50",
    "required": false,
    "type": "integer",
    "format": "int32"
    }
    ],
    "responses": {
    "200": {
    "description": "Returns a list of notes"
    },
    "400": {
    "description": "If a parameter is invalid"
    },
    "404": {
    "description": "If the noteTarget parameter does not exist un Universal Housing"
    },
    "500": {
    "description": "If any errors are encountered"
    }
    }
    },
    {
    "id": "V1PropertiesByPropertyReferenceHierarchyGet",
    "url": "/v1/properties/{propertyReference}/hierarchy",
    "requestType": "get",
    "tags": [
    "Properties"
    ],
    "summary": "Returns the hierarchy details of a property",
    "parameters": [
    {
    "name": "propertyReference",
    "in": "path",
    "description": "The reference number of the requested property",
    "required": true,
    "type": "string"
    }
    ],
    "responses": {
    "200": {
    "description": "Returns a list of property details"
    },
    "404": {
    "description": "If the property is not found"
    },
    "500": {
    "description": "If any errors are encountered"
    }
    }
    },
    {
    "id": "V1PropertiesGet",
    "url": "/v1/properties",
    "requestType": "get",
    "tags": [
    "Properties"
    ],
    "summary": "Gets a property or properties for a particular postcode",
    "parameters": [
    {
    "name": "postcode",
    "in": "query",
    "description": "The post code of the propterty being requested",
    "required": false,
    "type": "string"
    },
    {
    "name": "max_level",
    "in": "query",
    "description": "The highest hierarchy level or the properties requested. Higest is 0 (Owner, Hackney Council)",
    "required": false,
    "type": "integer",
    "format": "int32"
    },
    {
    "name": "min_level",
    "in": "query",
    "description": "The lowest hierarchy level of the properties requested. Lowest is 8 (Non-Dwell)",
    "required": false,
    "type": "integer",
    "format": "int32"
    }
    ],
    "responses": {
    "200": {
    "description": "Returns the list of properties"
    },
    "400": {
    "description": "If a post code is not provided"
    },
    "500": {
    "description": "If any errors are encountered"
    }
    }
    },
    {
    "id": "V1PropertiesByReferenceGet",
    "url": "/v1/properties/{reference}",
    "requestType": "get",
    "tags": [
    "Properties"
    ],
    "summary": "Gets the details of a property by a given reference number",
    "parameters": [
    {
    "name": "reference",
    "in": "path",
    "description": "The reference number of the requested property",
    "required": true,
    "type": "string"
    }
    ],
    "responses": {
    "200": {
    "description": "Returns the property"
    },
    "404": {
    "description": "If the property is not found"
    },
    "500": {
    "description": "If any errors are encountered"
    }
    }
    },
    {
    "id": "V1PropertiesByReferenceBlockGet",
    "url": "/v1/properties/{reference}/block",
    "requestType": "get",
    "tags": [
    "Properties"
    ],
    "summary": "Gets the details of a block of a property by a given property reference number",
    "parameters": [
    {
    "name": "reference",
    "in": "path",
    "description": "The reference number of the property",
    "required": true,
    "type": "string"
    }
    ],
    "responses": {
    "200": {
    "description": "Returns the block of the property"
    },
    "404": {
    "description": "If the property is not found"
    },
    "500": {
    "description": "If any errors are encountered"
    }
    }
    },
    {
    "id": "V1PropertiesByPropertyReferenceBlockWork_ordersGet",
    "url": "/v1/properties/{propertyReference}/block/work_orders",
    "requestType": "get",
    "tags": [
    "Properties"
    ],
    "summary": "Gets work orders raised against a block and against any property int he block",
    "parameters": [
    {
    "name": "propertyReference",
    "in": "path",
    "description": "Property reference, the level of the property cannot be higher than block.",
    "required": true,
    "type": "string"
    },
    {
    "name": "trade",
    "in": "query",
    "description": "Trade of the work order to filter the results (Required).",
    "required": false,
    "type": "string"
    },
    {
    "name": "since",
    "in": "query",
    "description": "A string with the format dd-MM-yyyy (Optional).",
    "required": false,
    "type": "string"
    },
    {
    "name": "until",
    "in": "query",
    "description": "A string with the format dd-MM-yyyy (Optional).",
    "required": false,
    "type": "string"
    }
    ],
    "responses": {
    "200": {
    "description": "Returns work orders raised against a block and all properties in it"
    },
    "400": {
    "description": "If trade parameter is missing or since or until do not have the right datetime format"
    },
    "404": {
    "description": "If the property was not found"
    },
    "500": {
    "description": "If any errors are encountered"
    }
    }
    },
    {
    "id": "V1PropertiesByReferenceEstateGet",
    "url": "/v1/properties/{reference}/estate",
    "requestType": "get",
    "tags": [
    "Properties"
    ],
    "summary": "Gets the details of an estate of a property by a given property reference number",
    "parameters": [
    {
    "name": "reference",
    "in": "path",
    "description": "The reference number of the property",
    "required": true,
    "type": "string"
    }
    ],
    "responses": {
    "200": {
    "description": "Returns the estate of the property"
    },
    "404": {
    "description": "If the property is not found"
    },
    "500": {
    "description": "If any errors are encountered"
    }
    }
    },
    {
    "id": "V1RepairsGet",
    "url": "/v1/repairs",
    "requestType": "get",
    "tags": [
    "Repairs"
    ],
    "summary": "Returns all Repair Requests for a property, for the work orders and contact details call /v1/repairs/{repairRequestReference}",
    "parameters": [
    {
    "name": "propertyReference",
    "in": "query",
    "description": "Universal Housing property reference",
    "required": false,
    "type": "string"
    }
    ],
    "responses": {
    "200": {
    "description": "Returns a list of Repair Requests"
    },
    "404": {
    "description": "If no Repair Request was found for the property"
    },
    "500": {
    "description": "If any errors are encountered"
    }
    }
    },
    {
    "id": "V1RepairsByRepairRequestReferenceGet",
    "url": "/v1/repairs/{repairRequestReference}",
    "requestType": "get",
    "tags": [
    "Repairs"
    ],
    "summary": "Retrieves a repair request",
    "parameters": [
    {
    "name": "repairRequestReference",
    "in": "path",
    "description": "The reference number of the repair request",
    "required": true,
    "type": "string"
    }
    ],
    "responses": {
    "200": {
    "description": "Returns a repair request"
    },
    "404": {
    "description": "If the request is not found"
    },
    "500": {
    "description": "If any errors are encountered"
    }
    }
    },
    {
    "id": "V1Work_ordersBy_referencesGet",
    "url": "/v1/work_orders/by_references",
    "requestType": "get",
    "tags": [
    "WorkOrders"
    ],
    "summary": "Returns all work orders for given work order references",
    "parameters": [
    {
    "name": "reference",
    "in": "query",
    "description": "Work order reference",
    "required": false,
    "type": "array",
    "items": {
    "type": "string"
    },
    "collectionFormat": "multi"
    },
    {
    "name": "include",
    "in": "query",
    "description": "Allows extending the content of the Work Order response. Currently only accepts the value \"mobilereports\"",
    "required": false,
    "type": "string"
    }
    ],
    "responses": {
    "200": {
    "description": "Returns a list of work orders for the work order references"
    },
    "400": {
    "description": "If no work order references are given"
    },
    "404": {
    "description": "If one or more work orders are missing based on the references given"
    },
    "500": {
    "description": "If any errors are encountered"
    }
    }
    },
    {
    "id": "V1Work_ordersByWorkOrderReferenceGet",
    "url": "/v1/work_orders/{workOrderReference}",
    "requestType": "get",
    "tags": [
    "WorkOrders"
    ],
    "summary": "Retrieves a work order",
    "parameters": [
    {
    "name": "workOrderReference",
    "in": "path",
    "description": "Work order reference",
    "required": true,
    "type": "string"
    },
    {
    "name": "include",
    "in": "query",
    "description": "Allows extending the content of the Work Order response. Currently only accepts the value \"mobilereports\"",
    "required": false,
    "type": "string"
    }
    ],
    "responses": {
    "200": {
    "description": "Returns the work order for the work order reference"
    },
    "400": {
    "description": "Bad Request"
    },
    "404": {
    "description": "If there is no work order for the given reference"
    },
    "500": {
    "description": "If any errors are encountered"
    }
    }
    },
    {
    "id": "V1Work_ordersGet",
    "url": "/v1/work_orders",
    "requestType": "get",
    "tags": [
    "WorkOrders"
    ],
    "summary": "Returns all work orders for a property",
    "parameters": [
    {
    "name": "propertyReference",
    "in": "query",
    "description": "UH Property reference",
    "required": false,
    "type": "array",
    "items": {
    "type": "string"
    },
    "collectionFormat": "multi"
    },
    {
    "name": "since",
    "in": "query",
    "description": "A string with the format dd-MM-yyyy (Optional).",
    "required": false,
    "type": "string"
    },
    {
    "name": "until",
    "in": "query",
    "description": "A string with the format dd-MM-yyyy (Optional).",
    "required": false,
    "type": "string"
    }
    ],
    "responses": {
    "200": {
    "description": "Returns a list of work orders for the property reference"
    },
    "400": {
    "description": "If no parameter or a parameter different than propertyReference is passed"
    },
    "404": {
    "description": "If there are no work orders for the given property reference"
    },
    "500": {
    "description": "If any errors are encountered"
    }
    }
    },
    {
    "id": "V1Work_ordersByWorkOrderReferenceNotesGet",
    "url": "/v1/work_orders/{workOrderReference}/notes",
    "requestType": "get",
    "tags": [
    "WorkOrders"
    ],
    "summary": "Returns all notes for a work order",
    "parameters": [
    {
    "name": "workOrderReference",
    "in": "path",
    "description": "Work order reference",
    "required": true,
    "type": "string"
    }
    ],
    "responses": {
    "200": {
    "description": "Returns a list of notes for a work order reference"
    },
    "404": {
    "description": "If there is no notes found for the work order"
    },
    "500": {
    "description": "If any errors are encountered"
    }
    }
    },
    {
    "id": "V1Work_ordersFeedGet",
    "url": "/v1/work_orders/feed",
    "requestType": "get",
    "tags": [
    "WorkOrders"
    ],
    "summary": "Returns a list of work orders with a work order reference greater than the parameter startId",
    "parameters": [
    {
    "name": "startId",
    "in": "query",
    "description": "A work order reference, results will have a grater id than this parameter",
    "required": false,
    "type": "string"
    },
    {
    "name": "resultSize",
    "in": "query",
    "description": "The maximum number of work orders returned. Default value is 50",
    "required": false,
    "type": "integer",
    "format": "int32"
    }
    ],
    "responses": {
    "200": {
    "description": "Returns a list of work orders"
    },
    "400": {
    "description": "If a parameter is invalid"
    },
    "500": {
    "description": "If any errors are encountered"
    }
    }
    }
    ],
    "last_updated": 1549631405786
    },
    {
    "id": "tenancy_management_process",
    "title": "Tenancy Management Process API",
    "version": "v1",
    "paths": [
    {
    "id": "ApiDataPersistenceGetPageSchemaLayoutGet",
    "url": "/api/DataPersistence/GetPageSchemaLayout",
    "requestType": "get",
    "tags": [
    "DataPersistence"
    ],
    "parameters": [
    {
    "name": "taskPageId",
    "in": "query",
    "required": true,
    "type": "integer",
    "format": "int32"
    },
    {
    "name": "outsystemsSessionId",
    "in": "query",
    "required": true,
    "type": "integer",
    "format": "int32"
    }
    ],
    "responses": {
    "200": {
    "description": "Success",
    "schema": {
    "type": "string"
    }
    }
    }
    },
    {
    "id": "ApiDataPersistenceGetPageSchemaLayoutDataGet",
    "url": "/api/DataPersistence/GetPageSchemaLayoutData",
    "requestType": "get",
    "tags": [
    "DataPersistence"
    ],
    "parameters": [
    {
    "name": "taskPageId",
    "in": "query",
    "required": true,
    "type": "integer",
    "format": "int32"
    },
    {
    "name": "tenancyManagementProcessId",
    "in": "query",
    "required": true,
    "type": "integer",
    "format": "int32"
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiEmailBySessionIdByIdGet",
    "url": "/api/email/{sessionId}/{id}",
    "requestType": "get",
    "tags": [
    "Email"
    ],
    "parameters": [
    {
    "name": "sessionId",
    "in": "path",
    "required": true,
    "type": "string"
    },
    {
    "name": "id",
    "in": "path",
    "required": true,
    "type": "integer",
    "format": "int32"
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiEmailBySessionIdByIdViewGet",
    "url": "/api/email/{sessionId}/{id}/view",
    "requestType": "get",
    "tags": [
    "Email"
    ],
    "parameters": [
    {
    "name": "sessionId",
    "in": "path",
    "required": true,
    "type": "string"
    },
    {
    "name": "id",
    "in": "path",
    "required": true,
    "type": "integer",
    "format": "int32"
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiEmailBySessionIdGet",
    "url": "/api/email/{sessionId}",
    "requestType": "get",
    "tags": [
    "Email"
    ],
    "parameters": [
    {
    "name": "sessionId",
    "in": "path",
    "required": true,
    "type": "string"
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiEmailPost",
    "url": "/api/email",
    "requestType": "post",
    "tags": [
    "Email"
    ],
    "parameters": [
    {
    "name": "model",
    "in": "body",
    "required": false,
    "schema": {
    "$ref": "#/definitions/EmailGenerationRequestModel"
    }
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiIntegrationAddOutsystemSessionPost",
    "url": "/api/Integration/AddOutsystemSession",
    "requestType": "post",
    "tags": [
    "Integration"
    ],
    "parameters": [
    {
    "name": "outSystemSessionData",
    "in": "body",
    "required": false,
    "schema": {
    "type": "string"
    }
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiJpegBySessionIdByIdGet",
    "url": "/api/jpeg/{sessionId}/{id}",
    "requestType": "get",
    "tags": [
    "Jpeg"
    ],
    "parameters": [
    {
    "name": "sessionId",
    "in": "path",
    "required": true,
    "type": "string"
    },
    {
    "name": "id",
    "in": "path",
    "required": true,
    "type": "integer",
    "format": "int32"
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiJpegBySessionIdByIdViewGet",
    "url": "/api/jpeg/{sessionId}/{id}/view",
    "requestType": "get",
    "tags": [
    "Jpeg"
    ],
    "parameters": [
    {
    "name": "sessionId",
    "in": "path",
    "required": true,
    "type": "string"
    },
    {
    "name": "id",
    "in": "path",
    "required": true,
    "type": "integer",
    "format": "int32"
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiJpegBySessionIdGet",
    "url": "/api/jpeg/{sessionId}",
    "requestType": "get",
    "tags": [
    "Jpeg"
    ],
    "parameters": [
    {
    "name": "sessionId",
    "in": "path",
    "required": true,
    "type": "string"
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiJpegPost",
    "url": "/api/jpeg",
    "requestType": "post",
    "tags": [
    "Jpeg"
    ],
    "parameters": [
    {
    "name": "model",
    "in": "body",
    "required": false,
    "schema": {
    "$ref": "#/definitions/JpegRequestModel"
    }
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiPageElementsGetPageSchemaLayoutGet",
    "url": "/api/PageElements/GetPageSchemaLayout",
    "requestType": "get",
    "tags": [
    "PageElements"
    ],
    "parameters": [
    {
    "name": "taskPageId",
    "in": "query",
    "required": true,
    "type": "integer",
    "format": "int32"
    },
    {
    "name": "outsystemsSessionId",
    "in": "query",
    "required": true,
    "type": "integer",
    "format": "int32"
    }
    ],
    "responses": {
    "200": {
    "description": "Success",
    "schema": {
    "type": "string"
    }
    }
    }
    },
    {
    "id": "ApiPageElementsPostPageDataPost",
    "url": "/api/PageElements/PostPageData",
    "requestType": "post",
    "tags": [
    "PageElements"
    ],
    "parameters": [
    {
    "name": "taskPageId",
    "in": "query",
    "required": true,
    "type": "integer",
    "format": "int32"
    },
    {
    "name": "outSystemSessionId",
    "in": "query",
    "required": true,
    "type": "integer",
    "format": "int32"
    },
    {
    "name": "tmProcessId",
    "in": "query",
    "required": false,
    "type": "string"
    },
    {
    "name": "processId",
    "in": "query",
    "required": true,
    "type": "integer",
    "format": "int32"
    },
    {
    "name": "processStateId",
    "in": "query",
    "required": true,
    "type": "integer",
    "format": "int32"
    },
    {
    "name": "contactId",
    "in": "query",
    "required": false,
    "type": "string"
    },
    {
    "name": "data",
    "in": "body",
    "required": false,
    "schema": {
    "type": "object"
    }
    }
    ],
    "responses": {
    "200": {
    "description": "Success",
    "schema": {
    "format": "int32",
    "type": "integer"
    }
    }
    }
    },
    {
    "id": "ApiPageElementsGetResponseDataByTaskPageIdGet",
    "url": "/api/PageElements/GetResponseDataByTaskPageId",
    "requestType": "get",
    "tags": [
    "PageElements"
    ],
    "parameters": [
    {
    "name": "outsystemsSessionId",
    "in": "query",
    "required": true,
    "type": "integer",
    "format": "int32"
    },
    {
    "name": "contactId",
    "in": "query",
    "required": false,
    "type": "string"
    },
    {
    "name": "taskPageId",
    "in": "query",
    "required": true,
    "type": "integer",
    "format": "int32"
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiPageElementsGetStatusResponseDataByTaskPageIdGet",
    "url": "/api/PageElements/GetStatusResponseDataByTaskPageId",
    "requestType": "get",
    "tags": [
    "PageElements"
    ],
    "parameters": [
    {
    "name": "outsystemsSessionId",
    "in": "query",
    "required": true,
    "type": "integer",
    "format": "int32"
    },
    {
    "name": "contactId",
    "in": "query",
    "required": false,
    "type": "string"
    },
    {
    "name": "taskPageId",
    "in": "query",
    "required": true,
    "type": "integer",
    "format": "int32"
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiPageElementsGetReviewAndSubmitResponseGet",
    "url": "/api/PageElements/GetReviewAndSubmitResponse",
    "requestType": "get",
    "tags": [
    "PageElements"
    ],
    "parameters": [
    {
    "name": "outsystemsSessionId",
    "in": "query",
    "required": true,
    "type": "integer",
    "format": "int32"
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiPdfBySessionIdByIdGet",
    "url": "/api/pdf/{sessionId}/{id}",
    "requestType": "get",
    "tags": [
    "Pdf"
    ],
    "parameters": [
    {
    "name": "sessionId",
    "in": "path",
    "required": true,
    "type": "string"
    },
    {
    "name": "id",
    "in": "path",
    "required": true,
    "type": "integer",
    "format": "int32"
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiPdfBySessionIdByIdViewGet",
    "url": "/api/pdf/{sessionId}/{id}/view",
    "requestType": "get",
    "tags": [
    "Pdf"
    ],
    "parameters": [
    {
    "name": "sessionId",
    "in": "path",
    "required": true,
    "type": "string"
    },
    {
    "name": "id",
    "in": "path",
    "required": true,
    "type": "integer",
    "format": "int32"
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiPdfBySessionIdGet",
    "url": "/api/pdf/{sessionId}",
    "requestType": "get",
    "tags": [
    "Pdf"
    ],
    "parameters": [
    {
    "name": "sessionId",
    "in": "path",
    "required": true,
    "type": "string"
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiPdfPost",
    "url": "/api/pdf",
    "requestType": "post",
    "tags": [
    "Pdf"
    ],
    "parameters": [
    {
    "name": "model",
    "in": "body",
    "required": false,
    "schema": {
    "$ref": "#/definitions/PdfGenerationRequestModel"
    }
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiAdminTaskByIdGet",
    "url": "/api/admin/task/{id}",
    "requestType": "get",
    "tags": [
    "Task"
    ],
    "parameters": [
    {
    "name": "id",
    "in": "path",
    "required": true,
    "type": "integer",
    "format": "int32"
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiAdminTaskGet",
    "url": "/api/admin/task",
    "requestType": "get",
    "tags": [
    "Task"
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiAdminTaskpageLoad-jsonPost",
    "url": "/api/admin/taskpage/load-json",
    "requestType": "post",
    "tags": [
    "TaskPage"
    ],
    "parameters": [
    {
    "name": "taskPageId",
    "in": "query",
    "required": true,
    "type": "integer",
    "format": "int32"
    },
    {
    "name": "jsonPayload",
    "in": "body",
    "required": false,
    "schema": {
    "$ref": "#/definitions/LayoutWrapper"
    }
    }
    ],
    "responses": {
    "200": {
    "description": "Success",
    "schema": {
    "type": "array",
    "items": {
    "type": "object"
    }
    }
    }
    }
    },
    {
    "id": "ApiAdminTaskpageValidate-jsonPost",
    "url": "/api/admin/taskpage/validate-json",
    "requestType": "post",
    "tags": [
    "TaskPage"
    ],
    "parameters": [
    {
    "name": "jsonPayload",
    "in": "body",
    "required": false,
    "schema": {
    "$ref": "#/definitions/LayoutWrapper"
    }
    }
    ],
    "responses": {
    "200": {
    "description": "Success",
    "schema": {
    "type": "boolean"
    }
    }
    }
    },
    {
    "id": "ApiAdminTaskpageByIdGet",
    "url": "/api/admin/taskpage/{id}",
    "requestType": "get",
    "tags": [
    "TaskPage"
    ],
    "parameters": [
    {
    "name": "id",
    "in": "path",
    "required": true,
    "type": "integer",
    "format": "int32"
    }
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    },
    {
    "id": "ApiAdminTaskpageGet",
    "url": "/api/admin/taskpage",
    "requestType": "get",
    "tags": [
    "TaskPage"
    ],
    "responses": {
    "200": {
    "description": "Success"
    }
    }
    }
    ],
    "last_updated": 1549631405786
    },
    {
        "title": "Asbestos API",
        "paths": [
        {
        "url": "/api/v1/inspections",
        "requestType": "get",
        "summary": "Returns a list of inspections",
        "parameters": [
        {
        "name": "propertyId",
        "in": "query",
        "description": "Universal Housing property Id",
        "required": false,
        "type": "string"
        }
        ],
        "responses": {
        "200": {
        "description": "Returns a list of inspections"
        },
        "400": {
        "description": "Property id is not valid"
        },
        "500": {
        "description": "Internal server error"
        }
        },
        "tags": [
        "Data",
        "Asbestos API"
        ]
        },
        {
        "url": "/api/v1/rooms/{roomId}",
        "requestType": "get",
        "summary": "Returns room information",
        "parameters": [
        {
        "name": "roomId",
        "in": "path",
        "description": "PSI2000 room id",
        "required": true,
        "type": "string"
        }
        ],
        "responses": {
        "200": {
        "description": "Returns a room"
        },
        "400": {
        "description": "Room id is not valid"
        },
        "404": {
        "description": "No rooms found"
        },
        "500": {
        "description": "Internal server error"
        }
        },
        "tags": [
        "Data",
        "Asbestos API"
        ]
        },
        {
        "url": "/api/v1/floors/{floorId}",
        "requestType": "get",
        "summary": "Returns floor information",
        "parameters": [
        {
        "name": "floorId",
        "in": "path",
        "description": "PSI2000 floor id",
        "required": true,
        "type": "string"
        }
        ],
        "responses": {
        "200": {
        "description": "Returns a floor"
        },
        "400": {
        "description": "floor id is not valid"
        },
        "404": {
        "description": "No floor found"
        },
        "500": {
        "description": "Internal server error"
        }
        },
        "tags": [
        "Data",
        "Asbestos API"
        ]
        },
        {
        "url": "/api/v1/elements/{elementId}",
        "requestType": "get",
        "summary": "Gets an element for a particular element id",
        "parameters": [
        {
        "name": "elementId",
        "in": "path",
        "description": "A string that identifies an element",
        "required": true,
        "type": "string"
        }
        ],
        "responses": {
        "200": {
        "description": "Returns an element"
        },
        "400": {
        "description": "If the element id is not valid"
        },
        "404": {
        "description": "If the element id does not return any element"
        },
        "500": {
        "description": "If any errors are encountered"
        }
        },
        "tags": [
        "Data",
        "Asbestos API"
        ]
        },
        {
        "url": "/api/v1/todos/{todoId}",
        "requestType": "get",
        "summary": "Returns todo information",
        "parameters": [
        {
        "name": "todoId",
        "in": "path",
        "description": "PSI2000 todo id",
        "required": true,
        "type": "string"
        }
        ],
        "responses": {
        "200": {
        "description": "Returns a todo"
        },
        "400": {
        "description": "todo id is not valid"
        },
        "404": {
        "description": "No todos found"
        },
        "500": {
        "description": "Internal server error"
        }
        },
        "tags": [
        "Data",
        "Asbestos API"
        ]
        },
        {
        "url": "/api/v1/todos",
        "requestType": "get",
        "summary": "Returns a list of todos",
        "parameters": [
        {
        "name": "propertyId",
        "in": "query",
        "description": "Universal Housing property Id",
        "required": false,
        "type": "string"
        }
        ],
        "responses": {
        "200": {
        "description": "Returns a list of todos"
        },
        "400": {
        "description": "Property id is not valid"
        },
        "500": {
        "description": "Internal server error"
        }
        },
        "tags": [
        "Data",
        "Asbestos API"
        ]
        },
        {
        "url": "/api/v1/samples",
        "requestType": "get",
        "summary": "Returns a list of samples",
        "parameters": [
        {
        "name": "inspectionId",
        "in": "query",
        "description": "PSI2000 Inspection identifier",
        "required": false,
        "type": "string"
        }
        ],
        "responses": {
        "200": {
        "description": "Returns a list of todos"
        },
        "400": {
        "description": "Missing or invalid parameter"
        },
        "500": {
        "description": "Internal server error"
        }
        },
        "tags": [
        "Data",
        "Asbestos API"
        ]
        },
        {
        "url": "/api/v1/documents/photos/{photoId}",
        "requestType": "get",
        "summary": "Returns a photo",
        "parameters": [
        {
        "name": "photoId",
        "in": "path",
        "description": "PSI2000 photo id",
        "required": true,
        "type": "string"
        }
        ],
        "responses": {
        "200": {
        "description": "Returns a photo"
        },
        "400": {
        "description": "Id is not valid"
        },
        "404": {
        "description": "Photo not found for given id"
        },
        "500": {
        "description": "Internal server error"
        }
        },
        "tags": [
        "Document",
        "Asbestos API"
        ]
        },
        {
        "url": "/api/v1/documents/photos",
        "requestType": "get",
        "summary": "Gets a list of documents about photos",
        "parameters": [
        {
        "name": "propertyId",
        "in": "query",
        "description": "Universal Housing property id",
        "required": false,
        "type": "string"
        }
        ],
        "responses": {
        "200": {
        "description": "Returns a list of documents"
        },
        "404": {
        "description": "No documents found for given id"
        },
        "500": {
        "description": "Internal server error"
        }
        },
        "tags": [
        "Document",
        "Asbestos API"
        ]
        },
        {
        "url": "/api/v1/documents/mainphotos/{mainPhotoId}",
        "requestType": "get",
        "summary": "Returns a photo",
        "parameters": [
        {
        "name": "mainPhotoId",
        "in": "path",
        "description": "PSI2000 main photo id",
        "required": true,
        "type": "string"
        }
        ],
        "responses": {
        "200": {
        "description": "Returns a photo"
        },
        "400": {
        "description": "Id is not valid"
        },
        "404": {
        "description": "Photo not found for given id"
        },
        "500": {
        "description": "Internal server error"
        }
        },
        "tags": [
        "Document",
        "Asbestos API"
        ]
        },
        {
        "url": "/api/v1/documents/mainphotos",
        "requestType": "get",
        "summary": "Gets a list of documents about main photos",
        "parameters": [
        {
        "name": "propertyId",
        "in": "query",
        "description": "Universal Housing property id",
        "required": false,
        "type": "string"
        }
        ],
        "responses": {
        "200": {
        "description": "Returns a list of documents"
        },
        "404": {
        "description": "No documents found for given id"
        },
        "500": {
        "description": "Internal server error"
        }
        },
        "tags": [
        "Document",
        "Asbestos API"
        ]
        },
        {
        "url": "/api/v1/documents/reports/{reportId}",
        "requestType": "get",
        "summary": "Returns a report in pdf format",
        "parameters": [
        {
        "name": "reportId",
        "in": "path",
        "description": "PSI2000 report id",
        "required": true,
        "type": "string"
        }
        ],
        "responses": {
        "200": {
        "description": "Returns a report"
        },
        "400": {
        "description": "Id is not valid"
        },
        "404": {
        "description": "Report not found for given id"
        },
        "500": {
        "description": "Internal server error"
        }
        },
        "tags": [
        "Document",
        "Asbestos API"
        ]
        },
        {
        "url": "/api/v1/documents/reports",
        "requestType": "get",
        "summary": "Gets a list of documents about reports",
        "parameters": [
        {
        "name": "propertyId",
        "in": "query",
        "description": "Universal Housing property Id",
        "required": false,
        "type": "string"
        }
        ],
        "responses": {
        "200": {
        "description": "Returns a list of documents"
        },
        "404": {
        "description": "No documents found for given id"
        },
        "500": {
        "description": "Internal server error"
        }
        },
        "tags": [
        "Document",
        "Asbestos API"
        ]
        },
        {
        "url": "/api/v1/documents/drawings/{mainDrawingId}",
        "requestType": "get",
        "summary": "Returns a drawing",
        "parameters": [
        {
        "name": "mainDrawingId",
        "in": "path",
        "description": "PSI2000 main drawing id",
        "required": true,
        "type": "string"
        }
        ],
        "responses": {
        "200": {
        "description": "Returns a drawing"
        },
        "400": {
        "description": "Id is not valid"
        },
        "404": {
        "description": "Drawing not found for given id"
        },
        "500": {
        "description": "Internal server error"
        }
        },
        "tags": [
        "Document",
        "Asbestos API"
        ]
        },
        {
        "url": "/api/v1/documents/drawings",
        "requestType": "get",
        "summary": "Gets a list of documents about drawings",
        "parameters": [
        {
        "name": "propertyId",
        "in": "query",
        "description": "Universal Housing property Id",
        "required": false,
        "type": "string"
        }
        ],
        "responses": {
        "200": {
        "description": "Returns a list of documents"
        },
        "400": {
        "description": "Id is not valid"
        },
        "500": {
        "description": "Internal server error"
        }
        },
        "tags": [
        "Document",
        "Asbestos API"
        ]
        }
        ]
        }
        
    ];
