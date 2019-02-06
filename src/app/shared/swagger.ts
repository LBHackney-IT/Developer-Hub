export const swaggerJson = [
    {
        'name': 'Asbestos API',
        'paths': [
            {
                '/api/v1/inspections': {
                    'get': {
                        'tags': [
                            'Data'
                        ],
                        'summary': 'Returns a list of inspections',
                        'operationId': 'ApiV1InspectionsGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'propertyId',
                                'in': 'query',
                                'description': 'Universal Housing property Id',
                                'required': false,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a list of inspections'
                            },
                            '400': {
                                'description': 'Property id is not valid'
                            },
                            '500': {
                                'description': 'Internal server error'
                            }
                        }
                    }
                }
            },
            {
                '/api/v1/rooms/{roomId}': {
                    'get': {
                        'tags': [
                            'Data'
                        ],
                        'summary': 'Returns room information',
                        'operationId': 'ApiV1RoomsByRoomIdGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'roomId',
                                'in': 'path',
                                'description': 'PSI2000 room id',
                                'required': true,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a room'
                            },
                            '400': {
                                'description': 'Room id is not valid'
                            },
                            '404': {
                                'description': 'No rooms found'
                            },
                            '500': {
                                'description': 'Internal server error'
                            }
                        }
                    }
                }
            },
            {
                '/api/v1/floors/{floorId}': {
                    'get': {
                        'tags': [
                            'Data'
                        ],
                        'summary': 'Returns floor information',
                        'operationId': 'ApiV1FloorsByFloorIdGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'floorId',
                                'in': 'path',
                                'description': 'PSI2000 floor id',
                                'required': true,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a floor'
                            },
                            '400': {
                                'description': 'floor id is not valid'
                            },
                            '404': {
                                'description': 'No floor found'
                            },
                            '500': {
                                'description': 'Internal server error'
                            }
                        }
                    }
                }
            },
            {
                '/api/v1/elements/{elementId}': {
                    'get': {
                        'tags': [
                            'Data'
                        ],
                        'summary': 'Gets an element for a particular element id',
                        'operationId': 'ApiV1ElementsByElementIdGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'elementId',
                                'in': 'path',
                                'description': 'A string that identifies an element',
                                'required': true,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns an element'
                            },
                            '400': {
                                'description': 'If the element id is not valid'
                            },
                            '404': {
                                'description': 'If the element id does not return any element'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    }
                }
            },
            {
                '/api/v1/todos/{todoId}': {
                    'get': {
                        'tags': [
                            'Data'
                        ],
                        'summary': 'Returns todo information',
                        'operationId': 'ApiV1TodosByTodoIdGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'todoId',
                                'in': 'path',
                                'description': 'PSI2000 todo id',
                                'required': true,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a todo'
                            },
                            '400': {
                                'description': 'todo id is not valid'
                            },
                            '404': {
                                'description': 'No todos found'
                            },
                            '500': {
                                'description': 'Internal server error'
                            }
                        }
                    }
                }
            },
            {
                '/api/v1/todos': {
                    'get': {
                        'tags': [
                            'Data'
                        ],
                        'summary': 'Returns a list of todos',
                        'operationId': 'ApiV1TodosGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'propertyId',
                                'in': 'query',
                                'description': 'Universal Housing property Id',
                                'required': false,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a list of todos'
                            },
                            '400': {
                                'description': 'Property id is not valid'
                            },
                            '500': {
                                'description': 'Internal server error'
                            }
                        }
                    }
                }
            },
            {
                '/api/v1/samples': {
                    'get': {
                        'tags': [
                            'Data'
                        ],
                        'summary': 'Returns a list of samples',
                        'operationId': 'ApiV1SamplesGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'inspectionId',
                                'in': 'query',
                                'description': 'PSI2000 Inspection identifier',
                                'required': false,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a list of todos'
                            },
                            '400': {
                                'description': 'Missing or invalid parameter'
                            },
                            '500': {
                                'description': 'Internal server error'
                            }
                        }
                    }
                }
            },
            {
                '/api/v1/documents/photos/{photoId}': {
                    'get': {
                        'tags': [
                            'Document'
                        ],
                        'summary': 'Returns a photo',
                        'operationId': 'ApiV1DocumentsPhotosByPhotoIdGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'photoId',
                                'in': 'path',
                                'description': 'PSI2000 photo id',
                                'required': true,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a photo'
                            },
                            '400': {
                                'description': 'Id is not valid'
                            },
                            '404': {
                                'description': 'Photo not found for given id'
                            },
                            '500': {
                                'description': 'Internal server error'
                            }
                        }
                    }
                }
            },
            {
                '/api/v1/documents/photos': {
                    'get': {
                        'tags': [
                            'Document'
                        ],
                        'summary': 'Gets a list of documents about photos',
                        'operationId': 'ApiV1DocumentsPhotosGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'propertyId',
                                'in': 'query',
                                'description': 'Universal Housing property id',
                                'required': false,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a list of documents'
                            },
                            '404': {
                                'description': 'No documents found for given id'
                            },
                            '500': {
                                'description': 'Internal server error'
                            }
                        }
                    }
                }
            },
            {
                '/api/v1/documents/mainphotos/{mainPhotoId}': {
                    'get': {
                        'tags': [
                            'Document'
                        ],
                        'summary': 'Returns a photo',
                        'operationId': 'ApiV1DocumentsMainphotosByMainPhotoIdGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'mainPhotoId',
                                'in': 'path',
                                'description': 'PSI2000 main photo id',
                                'required': true,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a photo'
                            },
                            '400': {
                                'description': 'Id is not valid'
                            },
                            '404': {
                                'description': 'Photo not found for given id'
                            },
                            '500': {
                                'description': 'Internal server error'
                            }
                        }
                    }
                }
            },
            {
                '/api/v1/documents/mainphotos': {
                    'get': {
                        'tags': [
                            'Document'
                        ],
                        'summary': 'Gets a list of documents about main photos',
                        'operationId': 'ApiV1DocumentsMainphotosGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'propertyId',
                                'in': 'query',
                                'description': 'Universal Housing property id',
                                'required': false,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a list of documents'
                            },
                            '404': {
                                'description': 'No documents found for given id'
                            },
                            '500': {
                                'description': 'Internal server error'
                            }
                        }
                    }
                }
            },
            {
                '/api/v1/documents/reports/{reportId}': {
                    'get': {
                        'tags': [
                            'Document'
                        ],
                        'summary': 'Returns a report in pdf format',
                        'operationId': 'ApiV1DocumentsReportsByReportIdGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'reportId',
                                'in': 'path',
                                'description': 'PSI2000 report id',
                                'required': true,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a report'
                            },
                            '400': {
                                'description': 'Id is not valid'
                            },
                            '404': {
                                'description': 'Report not found for given id'
                            },
                            '500': {
                                'description': 'Internal server error'
                            }
                        }
                    }
                }
            },
            {
                '/api/v1/documents/reports': {
                    'get': {
                        'tags': [
                            'Document'
                        ],
                        'summary': 'Gets a list of documents about reports',
                        'operationId': 'ApiV1DocumentsReportsGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'propertyId',
                                'in': 'query',
                                'description': 'Universal Housing property Id',
                                'required': false,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a list of documents'
                            },
                            '404': {
                                'description': 'No documents found for given id'
                            },
                            '500': {
                                'description': 'Internal server error'
                            }
                        }
                    }
                }
            },
            {
                '/api/v1/documents/drawings/{mainDrawingId}': {
                    'get': {
                        'tags': [
                            'Document'
                        ],
                        'summary': 'Returns a drawing',
                        'operationId': 'ApiV1DocumentsDrawingsByMainDrawingIdGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'mainDrawingId',
                                'in': 'path',
                                'description': 'PSI2000 main drawing id',
                                'required': true,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a drawing'
                            },
                            '400': {
                                'description': 'Id is not valid'
                            },
                            '404': {
                                'description': 'Drawing not found for given id'
                            },
                            '500': {
                                'description': 'Internal server error'
                            }
                        }
                    }
                }
            },
            {
                '/api/v1/documents/drawings': {
                    'get': {
                        'tags': [
                            'Document'
                        ],
                        'summary': 'Gets a list of documents about drawings',
                        'operationId': 'ApiV1DocumentsDrawingsGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'propertyId',
                                'in': 'query',
                                'description': 'Universal Housing property Id',
                                'required': false,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a list of documents'
                            },
                            '400': {
                                'description': 'Id is not valid'
                            },
                            '500': {
                                'description': 'Internal server error'
                            }
                        }
                    }
                }
            }
        ]
    },
    {
        'name': 'Repairs API',
        'paths': [
            {
                '/v1/work_orders/{workOrderReference}/available_appointments': {
                    'get': {
                        'tags': [
                            'Appointments'
                        ],
                        'summary': 'Returns available appointments for a Universal Housing work order',
                        'operationId': 'V1Work_ordersByWorkOrderReferenceAvailable_appointmentsGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'workOrderReference',
                                'in': 'path',
                                'required': true,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns the list of available appointments'
                            },
                            '400': {
                                'description': 'If no valid work order reference is provided'
                            },
                            '404': {
                                'description': 'Not Found'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    }
                }
            },
            {
                '/v1/work_orders/{workOrderReference}/appointments': {
                    'get': {
                        'tags': [
                            'Appointments'
                        ],
                        'summary': 'Returns all appointments for a work order',
                        'operationId': 'V1Work_ordersByWorkOrderReferenceAppointmentsGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'workOrderReference',
                                'in': 'path',
                                'description': 'UH work order reference',
                                'required': true,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a list of appointments for a work order reference'
                            },
                            '404': {
                                'description': 'If there are no appointments found for the work orders reference'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    },
                    'post': {
                        'tags': [
                            'Appointments'
                        ],
                        'summary': 'Creates an appointment',
                        'operationId': 'V1Work_ordersByWorkOrderReferenceAppointmentsPost',
                        'consumes': [
                            'application/json-patch+json',
                            'application/json',
                            'text/json',
                            'application/*+json'
                        ],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'workOrderReference',
                                'in': 'path',
                                'description': 'The reference number of the work order for the appointment',
                                'required': true,
                                'type': 'string'
                            },
                            {
                                'name': 'request',
                                'in': 'body',
                                'required': false,
                                'schema': {
                                    '$ref': '#/definitions/ScheduleAppointmentRequest'
                                }
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'A successfully created repair request'
                            }
                        }
                    }
                }
            },
            {
                '/v1/work_orders/{workOrderReference}/appointments/latest': {
                    'get': {
                        'tags': [
                            'Appointments'
                        ],
                        'summary': 'Returns the latest apointment for a work order',
                        'operationId': 'V1Work_ordersByWorkOrderReferenceAppointmentsLatestGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'workOrderReference',
                                'in': 'path',
                                'description': 'UH work order reference',
                                'required': true,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns an appointment for a work order reference'
                            },
                            '404': {
                                'description': 'If there is no appointment found for the work order reference'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    }
                }
            },
            {
                '/v1/notes/feed': {
                    'get': {
                        'tags': [
                            'Notes'
                        ],
                        'summary': 'Returns a list of notes matching the noteTarget and with a note id greater than startId',
                        'operationId': 'V1NotesFeedGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'startId',
                                'in': 'query',
                                'description': 'A note id, results will have a grater id than this parameter',
                                'required': false,
                                'type': 'integer',
                                'format': 'int32'
                            },
                            {
                                'name': 'noteTarget',
                                'in': 'query',
                                'description': 'The kind of note defined in Universal Housing (required)',
                                'required': false,
                                'type': 'string'
                            },
                            {
                                'name': 'resultSize',
                                'in': 'query',
                                'description': 'The maximum number of notes returned. Default value is 50',
                                'required': false,
                                'type': 'integer',
                                'format': 'int32'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a list of notes'
                            },
                            '400': {
                                'description': 'If a parameter is invalid'
                            },
                            '404': {
                                'description': 'If the noteTarget parameter does not exist un Universal Housing'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    }
                }
            },
            {
                '/v1/properties/{propertyReference}/hierarchy': {
                    'get': {
                        'tags': [
                            'Properties'
                        ],
                        'summary': 'Returns the hierarchy details of a property',
                        'operationId': 'V1PropertiesByPropertyReferenceHierarchyGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'propertyReference',
                                'in': 'path',
                                'description': 'The reference number of the requested property',
                                'required': true,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a list of property details'
                            },
                            '404': {
                                'description': 'If the property is not found'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    }
                }
            },
            {
                '/v1/properties': {
                    'get': {
                        'tags': [
                            'Properties'
                        ],
                        'summary': 'Gets a property or properties for a particular postcode',
                        'operationId': 'V1PropertiesGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'postcode',
                                'in': 'query',
                                'description': 'The post code of the propterty being requested',
                                'required': false,
                                'type': 'string'
                            },
                            {
                                'name': 'max_level',
                                'in': 'query',
                                'description': 'The highest hierarchy level or the properties requested. Higest is 0 (Owner, Hackney Council)',
                                'required': false,
                                'type': 'integer',
                                'format': 'int32'
                            },
                            {
                                'name': 'min_level',
                                'in': 'query',
                                'description': 'The lowest hierarchy level of the properties requested. Lowest is 8 (Non-Dwell)',
                                'required': false,
                                'type': 'integer',
                                'format': 'int32'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns the list of properties'
                            },
                            '400': {
                                'description': 'If a post code is not provided'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    }
                }
            },
            {
                '/v1/properties/{reference}': {
                    'get': {
                        'tags': [
                            'Properties'
                        ],
                        'summary': 'Gets the details of a property by a given reference number',
                        'operationId': 'V1PropertiesByReferenceGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'reference',
                                'in': 'path',
                                'description': 'The reference number of the requested property',
                                'required': true,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns the property'
                            },
                            '404': {
                                'description': 'If the property is not found'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    }
                }
            },
            {
                '/v1/properties/{reference}/block': {
                    'get': {
                        'tags': [
                            'Properties'
                        ],
                        'summary': 'Gets the details of a block of a property by a given property reference number',
                        'operationId': 'V1PropertiesByReferenceBlockGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'reference',
                                'in': 'path',
                                'description': 'The reference number of the property',
                                'required': true,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns the block of the property'
                            },
                            '404': {
                                'description': 'If the property is not found'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    }
                }
            },
            {
                '/v1/properties/{propertyReference}/block/work_orders': {
                    'get': {
                        'tags': [
                            'Properties'
                        ],
                        'summary': 'Gets work orders raised against a block and against any property int he block',
                        'operationId': 'V1PropertiesByPropertyReferenceBlockWork_ordersGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'propertyReference',
                                'in': 'path',
                                'description': 'Property reference, the level of the property cannot be higher than block.',
                                'required': true,
                                'type': 'string'
                            },
                            {
                                'name': 'trade',
                                'in': 'query',
                                'description': 'Trade of the work order to filter the results (Required).',
                                'required': false,
                                'type': 'string'
                            },
                            {
                                'name': 'since',
                                'in': 'query',
                                'description': 'A string with the format dd-MM-yyyy (Optional).',
                                'required': false,
                                'type': 'string'
                            },
                            {
                                'name': 'until',
                                'in': 'query',
                                'description': 'A string with the format dd-MM-yyyy (Optional).',
                                'required': false,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns work orders raised against a block and all properties in it'
                            },
                            '400': {
                                'description': 'If trade parameter is missing or since or until do not have the right datetime format'
                            },
                            '404': {
                                'description': 'If the property was not found'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    }
                }
            },
            {
                '/v1/properties/{reference}/estate': {
                    'get': {
                        'tags': [
                            'Properties'
                        ],
                        'summary': 'Gets the details of an estate of a property by a given property reference number',
                        'operationId': 'V1PropertiesByReferenceEstateGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'reference',
                                'in': 'path',
                                'description': 'The reference number of the property',
                                'required': true,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns the estate of the property'
                            },
                            '404': {
                                'description': 'If the property is not found'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    }
                }
            },
            {
                '/v1/repairs': {
                    'get': {
                        'tags': [
                            'Repairs'
                        ],
                        'summary': 'Returns all Repair Requests for a property, for the work orders and contact details call /v1/repairs/{repairRequestReference}',
                        'operationId': 'V1RepairsGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'propertyReference',
                                'in': 'query',
                                'description': 'Universal Housing property reference',
                                'required': false,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a list of Repair Requests'
                            },
                            '404': {
                                'description': 'If no Repair Request was found for the property'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    },
                    'post': {
                        'tags': [
                            'Repairs'
                        ],
                        'summary': 'Creates a repair request',
                        'operationId': 'V1RepairsPost',
                        'consumes': [
                            'application/json-patch+json',
                            'application/json',
                            'text/json',
                            'application/*+json'
                        ],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'request',
                                'in': 'body',
                                'required': false,
                                'schema': {
                                    '$ref': '#/definitions/RepairRequest'
                                }
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'A successfully created repair request'
                            }
                        }
                    }
                }
            },
            {
                '/v1/repairs/{repairRequestReference}': {
                    'get': {
                        'tags': [
                            'Repairs'
                        ],
                        'summary': 'Retrieves a repair request',
                        'operationId': 'V1RepairsByRepairRequestReferenceGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'repairRequestReference',
                                'in': 'path',
                                'description': 'The reference number of the repair request',
                                'required': true,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a repair request'
                            },
                            '404': {
                                'description': 'If the request is not found'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    }
                }
            },
            {
                '/v1/work_orders/by_references': {
                    'get': {
                        'tags': [
                            'WorkOrders'
                        ],
                        'summary': 'Returns all work orders for given work order references',
                        'operationId': 'V1Work_ordersBy_referencesGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'reference',
                                'in': 'query',
                                'description': 'Work order reference',
                                'required': false,
                                'type': 'array',
                                'items': {
                                    'type': 'string'
                                },
                                'collectionFormat': 'multi'
                            },
                            {
                                'name': 'include',
                                'in': 'query',
                                'description': 'Allows extending the content of the Work Order response. Currently only accepts the value \'mobilereports\'',
                                'required': false,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a list of work orders for the work order references'
                            },
                            '400': {
                                'description': 'If no work order references are given'
                            },
                            '404': {
                                'description': 'If one or more work orders are missing based on the references given'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    }
                }
            },
            {
                '/v1/work_orders/{workOrderReference}': {
                    'get': {
                        'tags': [
                            'WorkOrders'
                        ],
                        'summary': 'Retrieves a work order',
                        'operationId': 'V1Work_ordersByWorkOrderReferenceGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'workOrderReference',
                                'in': 'path',
                                'description': 'Work order reference',
                                'required': true,
                                'type': 'string'
                            },
                            {
                                'name': 'include',
                                'in': 'query',
                                'description': 'Allows extending the content of the Work Order response. Currently only accepts the value \'mobilereports\'',
                                'required': false,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns the work order for the work order reference'
                            },
                            '400': {
                                'description': 'Bad Request'
                            },
                            '404': {
                                'description': 'If there is no work order for the given reference'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    }
                }
            },
            {
                '/v1/work_orders': {
                    'get': {
                        'tags': [
                            'WorkOrders'
                        ],
                        'summary': 'Returns all work orders for a property',
                        'operationId': 'V1Work_ordersGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'propertyReference',
                                'in': 'query',
                                'description': 'UH Property reference',
                                'required': false,
                                'type': 'array',
                                'items': {
                                    'type': 'string'
                                },
                                'collectionFormat': 'multi'
                            },
                            {
                                'name': 'since',
                                'in': 'query',
                                'description': 'A string with the format dd-MM-yyyy (Optional).',
                                'required': false,
                                'type': 'string'
                            },
                            {
                                'name': 'until',
                                'in': 'query',
                                'description': 'A string with the format dd-MM-yyyy (Optional).',
                                'required': false,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a list of work orders for the property reference'
                            },
                            '400': {
                                'description': 'If no parameter or a parameter different than propertyReference is passed'
                            },
                            '404': {
                                'description': 'If there are no work orders for the given property reference'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    }
                }
            },
            {
                '/v1/work_orders/{workOrderReference}/notes': {
                    'get': {
                        'tags': [
                            'WorkOrders'
                        ],
                        'summary': 'Returns all notes for a work order',
                        'operationId': 'V1Work_ordersByWorkOrderReferenceNotesGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'workOrderReference',
                                'in': 'path',
                                'description': 'Work order reference',
                                'required': true,
                                'type': 'string'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a list of notes for a work order reference'
                            },
                            '404': {
                                'description': 'If there is no notes found for the work order'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    }
                }
            },
            {
                '/v1/work_orders/feed': {
                    'get': {
                        'tags': [
                            'WorkOrders'
                        ],
                        'summary': 'Returns a list of work orders with a work order reference greater than the parameter startId',
                        'operationId': 'V1Work_ordersFeedGet',
                        'consumes': [],
                        'produces': [],
                        'parameters': [
                            {
                                'name': 'startId',
                                'in': 'query',
                                'description': 'A work order reference, results will have a grater id than this parameter',
                                'required': false,
                                'type': 'string'
                            },
                            {
                                'name': 'resultSize',
                                'in': 'query',
                                'description': 'The maximum number of work orders returned. Default value is 50',
                                'required': false,
                                'type': 'integer',
                                'format': 'int32'
                            }
                        ],
                        'responses': {
                            '200': {
                                'description': 'Returns a list of work orders'
                            },
                            '400': {
                                'description': 'If a parameter is invalid'
                            },
                            '500': {
                                'description': 'If any errors are encountered'
                            }
                        }
                    }
                }
            }
        ]
    }
];
