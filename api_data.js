define({ "api": [
  {
    "type": "get",
    "url": "/events/:judge/:event",
    "title": "1.3.-Obtiene un evento especifico de un juez",
    "version": "1.0.0",
    "name": "Event",
    "group": "1.-_Eventos",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Obtiene un evento especifico de un juez con el id del sistema de votaciones (ss_scoring_systems_id) más el id de la estructura de batalla (esta en la sección pivot) que esta en phases y con esos datos se debe llamar al endpoint 1.-Devuelve el sistema de votación y Estructura de la batalla para tener los datos necesarios para crear las pantallas de votación</p>",
    "examples": [
      {
        "title": "Obtiene todos los datos de un evento de un juez en concreto",
        "content": "curl -i http://ionic.urbanroosters.com/api/events/019f7830-bb26-412d-ae6b-fe5bc4780357/0f62308e-8245-4e2f-8e01-b0c0920be35a",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ionic.urbanroosters.com/api/events/019f7830-bb26-412d-ae6b-fe5bc4780357/0f62308e-8245-4e2f-8e01-b0c0920be35a"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "api-key",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                      El api key que necesita para solicitar acceso",
          "content": " {\n  \"api-key\": \"sustituir por tu api key\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "judge",
            "description": "<p>El <code>uuid</code> del juez</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>El <code>uuid</code> del evento</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[event]",
            "optional": false,
            "field": "events",
            "description": "<p>Listado de todos los eventos de un juez</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[phase]",
            "optional": false,
            "field": "phases",
            "description": "<p>Listado de todas las fases de un fase</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[battle]",
            "optional": false,
            "field": "battles",
            "description": "<p>Listado de todas las batallas de una fase</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[participant]",
            "optional": false,
            "field": "participants",
            "description": "<p>Listado de los participantes de una batalla</p>"
          }
        ],
        "event": [
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "fd_calendars_id",
            "description": "<p>Id del calendario</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "ss_scoring_systems_id",
            "description": "<p>Id del sistema de votaciones asociado</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "fd_event_type_id",
            "description": "<p>Id del tipo de evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Url de la imagen del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>Url de la imagen del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del Evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "start_date_event",
            "description": "<p>Fecha de inicio del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "ending_date_event",
            "description": "<p>Fecha de fin del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>Hora de inicio del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "ending_time",
            "description": "<p>Hora de fin del evento</p>"
          },
          {
            "group": "event",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limite de Freestylers por evento</p>"
          },
          {
            "group": "event",
            "type": "Number",
            "optional": false,
            "field": "max_judges",
            "description": "<p>Número máximo de jueces por evento</p>"
          },
          {
            "group": "event",
            "type": "Number",
            "optional": false,
            "field": "max_replica",
            "description": "<p>Diferencia de puntos para que sea una réplica</p>"
          },
          {
            "group": "event",
            "type": "Boolean",
            "optional": false,
            "field": "partial",
            "description": "<p>Evento aún no completado</p>"
          },
          {
            "group": "event",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>Evento Completado</p>"
          },
          {
            "group": "event",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>Orden del evento</p>"
          }
        ],
        "phase": [
          {
            "group": "phase",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la fase</p>"
          },
          {
            "group": "phase",
            "type": "String",
            "optional": false,
            "field": "previous_phase_id",
            "description": "<p>Id de la fase anterior</p>"
          },
          {
            "group": "phase",
            "type": "String",
            "optional": false,
            "field": "next_phase_id",
            "description": "<p>Id de la fase anterior</p>"
          },
          {
            "group": "phase",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del fase</p>"
          },
          {
            "group": "phase",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del fase</p>"
          },
          {
            "group": "phase",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Url de la imagen del fase</p>"
          },
          {
            "group": "phase",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>Url de la imagen del fase</p>"
          },
          {
            "group": "phase",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del fase</p>"
          }
        ],
        "battle": [
          {
            "group": "battle",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la batalla</p>"
          },
          {
            "group": "battle",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>Id del evento</p>"
          },
          {
            "group": "battle",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>Id de la fase</p>"
          },
          {
            "group": "battle",
            "type": "String",
            "optional": false,
            "field": "fd_battle_types_id",
            "description": "<p>Id del tipo de batalla</p>"
          },
          {
            "group": "battle",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre de la batalla</p>"
          },
          {
            "group": "battle",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug de la batalla</p>"
          },
          {
            "group": "battle",
            "type": "Number",
            "optional": false,
            "field": "diff_replica",
            "description": "<p>Diferencia de la réplica en una batalla</p>"
          }
        ],
        "participant": [
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id del participante</p>"
          },
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Rol de un usuario</p>"
          },
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username del Usuario</p>"
          },
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Id del tipo de batalla</p>"
          },
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar de un usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nstatus: \"success\",\ndata:[\n   {\n        \"id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n        \"fd_calendars_id\": \"d93b4c9c-a4a5-4ca1-8f7e-8023554a28bd\",\n        \"ss_scoring_systems_id\": \"5a2d413d-0e43-4d35-b5a8-cb83fe952654\",\n        \"fd_event_types_id\": \"a7ee229d-9a52-4af3-9b8f-2ef73ed6e90f\",\n        \"countries_id\": \"\",\n        \"states_id\": \"\",\n        \"cities_id\": \"\",\n        \"name\": \"Jornada Esp 1\",\n        \"sub_name\": null,\n        \"slug\": \"jornada-esp-1\",\n        \"avatar\": \"images/events/jornada-esp-5_events.png\",\n        \"cover\": \"images/events/jornada-esp-5_events.png\",\n        \"video\": null,\n        \"video_embed\": \"\",\n        \"introduction\": \"intro del evento\",\n        \"description\": \"descripci&oacute;n del evento\",\n        \"start_date_event\": \"2020-07-11\",\n        \"ending_date_event\": \"2020-07-11\",\n        \"start_time\": \"00:00:00\",\n        \"ending_time\": \"00:00:00\",\n        \"limit\": 10,\n        \"max_judges\": 5,\n        \"diff_replica\": 5,\n        \"max_replica\": 2,\n        \"partial\": 0,\n        \"completed\": 1,\n        \"phases\": [\n            {\n                \"id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                \"previous_phase_id\": null,\n                \"next_phase_id\": null,\n                \"name\": \"Jornada\",\n                \"slug\": \"jornada\",\n                \"avatar\": null,\n                \"cover\": null,\n                \"video\": null,\n                \"video_embed\": null,\n                \"introduction\": null,\n                \"description\": null,\n                \"battles\": [\n                    {\n                        \"id\": \"60399e46-f24e-42f2-bcf0-2de0739b5282\",\n                        \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                        \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                        \"fd_battle_types_id\": \"3e98efef-9f35-4e4a-88a8-f5f9589a0909\",\n                        \"name\": \"Bnet vs Errece\",\n                        \"slug\": \"bnet-vs-errece\",\n                        \"diff_replica\": 0,\n                        \"participants\": [\n                            {\n                               \"id\": \"cc19a9ef-77cb-45ee-819e-eaaf43bbe295\",\n                               \"role\": \"user\",\n                               \"username\": \"bnet\",\n                               \"email\": \"\",\n                               \"avatar\": \"images/profiles/bnet.jpg\"\n                             },\n                             {\n                                \"id\": \"d1823229-99a7-4fc9-93de-d496b4a97769\",\n                                \"role\": \"user\",\n                                \"username\": \"errece\",\n                                \"email\": \"\",\n                                \"avatar\": \"images/profiles/errece.jpg\"\n                            }\n                         ]\n                    },\n                    ...\n                ]\n            },\n            ...\n        ]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Solo los usuarios registrados pueden acceder</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiKeyNotFound",
            "description": "<p>El <code>token</code> no coincide con un usuario</p>"
          }
        ],
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "Error",
            "description": "<p>de servidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el api-key.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El api-key recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-events/Front/ApiEventsController.php",
    "groupTitle": "1.-_Eventos"
  },
  {
    "type": "get",
    "url": "/events/:judge",
    "title": "1.2.-Obtiene los eventos de un juez",
    "version": "1.0.0",
    "name": "Events",
    "group": "1.-_Eventos",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Obtiene los eventos a los que un juez esta asignado</p>",
    "examples": [
      {
        "title": "Obtiene los eventos a los que un juez esta asignado",
        "content": "curl -i http://ionic.urbanroosters.com/api/events/8406a247-4817-41db-98ee-94d2ac00db6f",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "api-key",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                      El api key que necesita para solicitar acceso",
          "content": " {\n  \"api-key\": \"sustituir por tu api key\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "judge",
            "description": "<p>El <code>uuid</code> del juez</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[events]",
            "optional": false,
            "field": "events",
            "description": "<p>Listado de todos los eventos de un juez</p>"
          }
        ],
        "event": [
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "fd_calendars_id",
            "description": "<p>Id del calendario</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "ss_scoring_systems_id",
            "description": "<p>Id del sistema de votaciones asociado</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "fd_event_type_id",
            "description": "<p>Id del tipo de evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Url de la imagen del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>Url de la imagen del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del Evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "start_date_event",
            "description": "<p>Fecha de inicio del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "ending_date_event",
            "description": "<p>Fecha de fin del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>Hora de inicio del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "ending_time",
            "description": "<p>Hora de fin del evento</p>"
          },
          {
            "group": "event",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limite de Freestylers por evento</p>"
          },
          {
            "group": "event",
            "type": "Number",
            "optional": false,
            "field": "max_judges",
            "description": "<p>Número máximo de jueces por evento</p>"
          },
          {
            "group": "event",
            "type": "Number",
            "optional": false,
            "field": "max_replica",
            "description": "<p>Diferencia de puntos para que sea una réplica</p>"
          },
          {
            "group": "event",
            "type": "Boolean",
            "optional": false,
            "field": "partial",
            "description": "<p>Evento aún no completado si esta en true</p>"
          },
          {
            "group": "event",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>Evento Completado si esta en true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nstatus: \"success\",\ndata:[\n        {\n            'id':'0f62308e-8245-4e2f-8e01-b0c0920be35a',\n            'fd_calendars_id':'d93b4c9c-a4a5-4ca1-8f7e-8023554a28bd',\n            'ss_scoring_systems_id':'5a2d413d-0e43-4d35-b5a8-cb83fe952654',\n            'fd_event_types_id':'a7ee229d-9a52-4af3-9b8f-2ef73ed6e90f',\n            'name':'Jornada Esp 1',\n            'slug':'jornada-esp-1',\n            'avatar': 'images/events/jornada-esp-5_events.png',\n            'cover': 'images/events/jornada-esp-5_events.png',\n            'description':'evento',\n            'start_date_event': '2020-07-11',\n            'ending_date_event': '2020-07-11',\n            'start_time':'00:00:00',\n            'ending_time':'00:00:00',\n            'limit':10,\n            'max_judges':5,\n            'diff_replica':5,\n            'max_replica': 2,\n            'partial': 0,\n            'completed':1\n        },\n    ...\n    ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Solo los usuarios registrados pueden acceder</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiKeyNotFound",
            "description": "<p>El <code>token</code> no coincide con un usuario</p>"
          }
        ],
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "Error",
            "description": "<p>de servidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el api-key.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El api-key recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-events/Front/ApiEventsController.php",
    "groupTitle": "1.-_Eventos",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/events/:judge"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events",
    "title": "1.1- Obtiene todos los eventos",
    "version": "1.0.0",
    "name": "Index",
    "group": "1.-_Eventos",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Obtiene todos los eventos del sistema, los campos que no constan en la presente documentación son campos restringidos, deshabilitados o irrelevantes para el objetivo del End Point.</p>",
    "examples": [
      {
        "title": "Ejemplo como se realiza la petición",
        "content": "curl -i http://ionic.urbanroosters.com/api/events",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "api-key",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                          El api key que necesita para solicitar acceso",
          "content": " {\n  \"api-key\": \"sustituir por tu api key\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[event]",
            "optional": false,
            "field": "events",
            "description": "<p>Listado de todos los eventos de un juez</p>"
          }
        ],
        "event": [
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "fd_calendars_id",
            "description": "<p>Id del calendario</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "ss_scoring_systems_id",
            "description": "<p>Id del sistema de votaciones asociado</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "fd_event_type_id",
            "description": "<p>Id del tipo de evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Url de la imagen del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>Url de la imagen del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del Evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "start_date_event",
            "description": "<p>Fecha de inicio del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "ending_date_event",
            "description": "<p>Fecha de fin del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>Hora de inicio del evento</p>"
          },
          {
            "group": "event",
            "type": "String",
            "optional": false,
            "field": "ending_time",
            "description": "<p>Hora de fin del evento</p>"
          },
          {
            "group": "event",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limite de Freestylers por evento</p>"
          },
          {
            "group": "event",
            "type": "Number",
            "optional": false,
            "field": "max_judges",
            "description": "<p>Número máximo de jueces por evneto</p>"
          },
          {
            "group": "event",
            "type": "Number",
            "optional": false,
            "field": "max_replica",
            "description": "<p>Diferencia de puntos para que sea una réplica</p>"
          },
          {
            "group": "event",
            "type": "Boolean",
            "optional": false,
            "field": "partial",
            "description": "<p>Evento aún no completado</p>"
          },
          {
            "group": "event",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>Evento Completado</p>"
          },
          {
            "group": "event",
            "type": "Number",
            "optional": false,
            "field": "orden",
            "description": "<p>Orden de los eventos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nstatus: \"success\",\ndata:[\n   {\n      \"id\":\"00ab5790-4eba-4f37-a855-5ab866b74563\",\n      \"fd_calendars_id\":\"d93b4c9c-a4a5-4ca1-8f7e-8023554a28bd\",\n      \"ss_scoring_systems_id\":\"5a2d413d-0e43-4d35-b5a8-cb83fe952654\",\n      \"fd_event_types_id\":\"37ed5e1d-c050-4bf6-850c-3b440f94be40\",\n      \"name\":\"Exhibici&oacute;n Esp J6\",\n      \"slug\":\"exhibicion-esp-j6\",\n      \"avatar\":null,\n      \"description\":\"Descripci&oacute;n Ex J6 Esp\",\n      \"start_date_event\":\"2020-12-27\",\n      \"ending_date_event\":\"2020-12-27\",\n      \"start_time\":\"00:00:00\",\n      \"ending_time\":\"00:00:00\",\n      \"limit\":2,\n      \"max_judges\":5,\n      \"max_replica\":2,\n      \"partial\":0,\n      \"completed\":1,\n      \"order\":30,\n   },\n   ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Solo los usuarios registrados pueden acceder</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiKeyNotFound",
            "description": "<p>El <code>token</code> no coincide con un usuario</p>"
          }
        ],
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "Error",
            "description": "<p>de servidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el api-key.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El api-key recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-events/Front/ApiEventsController.php",
    "groupTitle": "1.-_Eventos",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/events"
      }
    ]
  },
  {
    "type": "get",
    "url": "/voting-system/get-voting-system/:votingSystem/:battleStructural",
    "title": "2.1.-Devuelve el sistema de votación y Estructura de la batalla",
    "name": "getVotingSystem",
    "group": "2.-_Sistema_de_Votaciones",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Retorna el sistema de votaciones completo con la relación de la estructura de batallas, round, estilo, patrones y performances para poder crear las pantallas que el juez podrá votar. Además al seleccionar quien inica una batalla debe llamar al endpoint 1.-Agrega el orden en el que inicia los participante una batalla para crear el registro de orden de una batalla</p>",
    "examples": [
      {
        "title": "Retorna el sistema de votaciones completo con la relación de la estructura de batallas, round, estilo, patrones y performances",
        "content": "curl -i http://ionic.urbanroosters.com/api/voting-system/get-voting-system/5a2d413d-0e43-4d35-b5a8-cb83fe952654/7d4b4c3d-7d8d-4482-a497-cc1b64701d75",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ionic.urbanroosters.com/api/voting-system/get-voting-system/5a2d413d-0e43-4d35-b5a8-cb83fe952654/7d4b4c3d-7d8d-4482-a497-cc1b64701d75"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "api-key",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                                      El api key que necesita para solicitar acceso",
          "content": " {\n  \"api-key\": \"sustituir por tu api key\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "votingSystem",
            "description": "<p>El <code>uuid</code> del sistema de votaciones</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "battleStructural",
            "description": "<p>El <code>uuid</code> de la estructura de batalla</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del sistema de votaciones</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_types_scoring_systems_id",
            "description": "<p>El <code>uuid</code> del tipo de sistema de votaciones</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>El nombre del sistema de votaciones</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>El slug del sistema de votaciones</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>La descripción del sistema de votaciones</p>"
          },
          {
            "group": "body",
            "type": "Object[votingSystem]",
            "optional": false,
            "field": "ss_battle_structures",
            "description": "<p>Array con la estructura del sistema de votación</p>"
          }
        ],
        "votingSystem": [
          {
            "group": "votingSystem",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del sistema de votación</p>"
          },
          {
            "group": "votingSystem",
            "type": "String",
            "optional": false,
            "field": "ss_types_scoring_systems_id",
            "description": "<p>El <code>uuid</code> del tipo de sistema de votación</p>"
          },
          {
            "group": "votingSystem",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>El nombre del sistema de votacíon</p>"
          },
          {
            "group": "votingSystem",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>El <code>slug</code> del sistema de votacíon</p>"
          },
          {
            "group": "votingSystem",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>La descripcion del sistema de votación</p>"
          },
          {
            "group": "votingSystem",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>El orden del sistema de votación</p>"
          }
        ],
        "battle_structures": [
          {
            "group": "battle_structures",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> de la estrucutura de batalla</p>"
          },
          {
            "group": "battle_structures",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>El nombre de la estructura de la batalla</p>"
          },
          {
            "group": "battle_structures",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>El slug de la estructura de la batalla</p>"
          },
          {
            "group": "battle_structures",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>La descripción de la estructura de la batalla</p>"
          },
          {
            "group": "battle_structures",
            "type": "String",
            "optional": false,
            "field": "replica_id",
            "description": "<p>El <code>uuid</code> del round de réplica</p>"
          },
          {
            "group": "battle_structures",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>El numero de orden de la estructura de la batalla</p>"
          }
        ],
        "rounds": [
          {
            "group": "rounds",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del round</p>"
          },
          {
            "group": "rounds",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>El nombre del round</p>"
          },
          {
            "group": "rounds",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>El slug del round</p>"
          },
          {
            "group": "rounds",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>La descripción del round</p>"
          },
          {
            "group": "rounds",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>El numero de orden del round</p>"
          }
        ],
        "styles": [
          {
            "group": "styles",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del style</p>"
          },
          {
            "group": "styles",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>El nombre del style</p>"
          },
          {
            "group": "styles",
            "type": "String",
            "optional": false,
            "field": "num_patterns",
            "description": "<p>El numero de patrones que tiene el style</p>"
          },
          {
            "group": "styles",
            "type": "String",
            "optional": false,
            "field": "extra_point",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> para saber si esl style tiene puntos extra (Sangre 1 tiene punto extra)</p>"
          },
          {
            "group": "styles",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>El numero de orden del style</p>"
          }
        ],
        "patterns": [
          {
            "group": "patterns",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del patron</p>"
          },
          {
            "group": "patterns",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>El nombre del patron</p>"
          },
          {
            "group": "patterns",
            "type": "String",
            "optional": false,
            "field": "score",
            "description": "<p>El numero máximo del valor del patron es decir va de 0 a 4 en la pantalla se dibujaría 0, 1, 2, 3, 4</p>"
          },
          {
            "group": "patterns",
            "type": "String",
            "optional": false,
            "field": "interval",
            "description": "<p>El numero de cada cuanto se pinta el valor en pantalla (internvalo de valores), 0.50 es decir con el campo anterior sería, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4</p>"
          },
          {
            "group": "patterns",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>El numero de orden del patron</p>"
          }
        ],
        "performance": [
          {
            "group": "performance",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del performance</p>"
          },
          {
            "group": "performance",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>El nombre del performance</p>"
          },
          {
            "group": "performance",
            "type": "String",
            "optional": false,
            "field": "score",
            "description": "<p>El numero máximo del valor del performance es decir va de 0 a 2 en la pantalla se dibujaría 0, 1, 2</p>"
          },
          {
            "group": "performance",
            "type": "String",
            "optional": false,
            "field": "interval",
            "description": "<p>El numero de cada cuanto se pinta el valor en pantalla (internvalo de valores), 1.00 es decir con el campo anterior sería, 0, 1, 2</p>"
          },
          {
            "group": "performance",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>El numero de orden del performance</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nstatus: \"success\",\ndata:[\n        {\n            \"id\":\"5a2d413d-0e43-4d35-b5a8-cb83fe952654\",\n            \"ss_types_scoring_systems_id\":\"6878e106-d7df-4a9b-8bb3-688dc31ff7e4\",\n            \"name\":\"Sistema Votaci&oacute;n FMS\",\n            \"slug\":\"sistema-votacion-fms\",\n            \"description\":\"fms\",\n            \"order\":1,\n            \"created_at\":\"2020-07-11T11:13:57.000000Z\",\n            \"updated_at\":\"2020-07-11T11:13:57.000000Z\",\n            \"deleted_at\":null,\n            \"params\":null,\n            \"log\":null,\n            \"battle_structures\":\n                [\n                    {\n                        \"id\":\"7d4b4c3d-7d8d-4482-a497-cc1b64701d75\",\n                        \"ss_scoring_systems_id\":\"5a2d413d-0e43-4d35-b5a8-cb83fe952654\",\n                        \"name\":\"Batallas FMS\",\n                        \"slug\":\"batallas-fms\",\n                        \"description\":\"para las batallas FMS\",\n                        \"replica_id\":\"332cd557-ec53-4db6-bf83-ab9467714e40\",\n                        \"order\":1,\n                        \"created_at\":\"2020-07-11T11:18:36.000000Z\",\n                        \"updated_at\":\"2020-07-11T11:18:36.000000Z\",\n                        \"deleted_at\":null,\n                        \"params\":null,\n                        \"log\":null,\n                        \"rounds\":\n                            [\n                                {\n                                    \"id\":\"938402b7-fab4-4b86-9033-09f66bde9da3\",\n                                    \"name\":\"Round 1\",\n                                    \"slug\":\"round-1\",\n                                    \"description\":\"para round 1\",\n                                    \"order\":1,\n                                    \"created_at\":\"2020-07-11T11:14:13.000000Z\",\n                                    \"updated_at\":\"2020-07-11T11:14:13.000000Z\",\n                                    \"deleted_at\":null,\n                                    \"params\":null,\n                                    \"log\":null,\n                                    \"pivot\":{\n                                        \"ss_battle_structures_id\":\"7d4b4c3d-7d8d-4482-a497-cc1b64701d75\",\n                                        \"ss_round_structures_id\":\"938402b7-fab4-4b86-9033-09f66bde9da3\",\n                                        \"id\":1,\n                                        \"order\":1\n                                    },\n                                    \"styles\":[\n                                        {\n                                            \"id\":\"e5b36279-ce82-462d-8864-d0866ac21263\",\n                                            \"ss_types_styles_id\":\"9809cecb-6499-4a40-b5b6-7af39918aacf\",\n                                            \"name\":\"Easy Mode\",\n                                            \"num_patterns\":6,\n                                            \"completed\":1,\n                                            \"extra_point\":0,\n                                            \"turn\":0,\n                                            \"order\":2,\n                                            \"created_at\":\"2020-07-11T11:06:39.000000Z\",\n                                            \"updated_at\":\"2020-07-11T11:06:52.000000Z\",\n                                            \"deleted_at\":null,\n                                            \"params\":null,\n                                            \"log\":null,\n                                            \"pivot\":{\n                                                \"ss_round_structures_id\":\"938402b7-fab4-4b86-9033-09f66bde9da3\",\n                                                \"ss_styles_id\":\"e5b36279-ce82-462d-8864-d0866ac21263\",\n                                                \"id\":1,\n                                                \"order\":1\n                                            },\n                                            \"patterns\":[\n                                                {\n                                                   \"id\":\"220fd555-19e9-44f0-a74c-70782dd7d7c3\",\n                                                   \"ss_types_patterns_id\":\"8a8f8f27-4be0-4998-8bfa-7366bf0be108\",\n                                                   \"name\":\"Patron Normal\",\n                                                   \"slug\":\"patron-normal\",\n                                                   \"score\":4,\n                                                   \"interval\":\"0.50\",\n                                                   \"order\":1,\n                                                   \"created_at\":\"2020-07-11T10:59:08.000000Z\",\n                                                   \"updated_at\":\"2020-07-11T10:59:08.000000Z\",\n                                                   \"deleted_at\":null,\n                                                   \"params\":null,\n                                                   \"log\":null,\n                                                   \"pivot\":{\n                                                      \"ss_styles_id\":\"e5b36279-ce82-462d-8864-d0866ac21263\",\n                                                      \"ss_patterns_id\":\"220fd555-19e9-44f0-a74c-70782dd7d7c3\",\n                                                      \"id\":1,\n                                                      \"order\":1\n                                                   }\n                                                },\n                                                \"...\"\n                                            ],\n                                            \"performance\":[\n                                               {\n                                                  \"id\":\"e5efeac1-94cf-45f4-8aa2-275a1806826f\",\n                                                  \"name\":\"Escena\",\n                                                  \"slug\":\"escena\",\n                                                  \"score\":2,\n                                                  \"interval\":\"1.00\",\n                                                  \"order\":1,\n                                                  \"created_at\":\"2020-07-11T10:53:34.000000Z\",\n                                                  \"updated_at\":\"2020-07-11T10:53:34.000000Z\",\n                                                  \"deleted_at\":null,\n                                                  \"params\":null,\n                                                  \"log\":null,\n                                                  \"pivot\":{\n                                                     \"ss_styles_id\":\"e5b36279-ce82-462d-8864-d0866ac21263\",\n                                                     \"ss_performance_id\":\"e5efeac1-94cf-45f4-8aa2-275a1806826f\"\n                                                  }\n                                               },\n                                               \"...\"\n                                            ]\n                                    },\n                                    \"....\"\n                            ]\n                    },\n                    \"...\"\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Mensaje Personalizado del tipo de error de validación</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Solo los usuarios registrados pueden acceder</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiKeyNotFound",
            "description": "<p>El <code>token</code> no coincide con un usuario</p>"
          }
        ],
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "Error",
            "description": "<p>de servidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el api-key.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El api-key recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apps/api-app-judges/components/api-events/Front/ApiEventsController.php",
    "groupTitle": "2.-_Sistema_de_Votaciones"
  },
  {
    "type": "get",
    "url": "/voting-system/get-round/:roundID",
    "title": "2.2.-Devuelve la estructura de un Round",
    "name": "getVotingSystem",
    "group": "2.-_Sistema_de_Votaciones",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Retorna la estrucutra completa de un round con sus styles, patterns y performances  para poder crear las pantallas que el juez podrá votar.</p>",
    "examples": [
      {
        "title": "Retorna la estrucutra completa de un rund con sus styles, patterns y performances  para poder crear las pantallas que el juez podrá votar.",
        "content": "curl -i http://ionic.urbanroosters.com/api/voting-system/get-round/332cd557-ec53-4db6-bf83-ab9467714e40",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ionic.urbanroosters.com/api/voting-system/get-round/332cd557-ec53-4db6-bf83-ab9467714e40"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "api-key",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                                      El api key que necesita para solicitar acceso",
          "content": " {\n  \"api-key\": \"sustituir por tu api key\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "roundID",
            "description": "<p>El <code>uuid</code> del round a buscar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del sistema de votaciones</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_types_scoring_systems_id",
            "description": "<p>El <code>uuid</code> del tipo de sistema de votaciones</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>El nombre del sistema de votaciones</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>El slug del sistema de votaciones</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>La descripción del sistema de votaciones</p>"
          },
          {
            "group": "body",
            "type": "Object[battle_structures]",
            "optional": false,
            "field": "ss_battle_structures",
            "description": "<p>Array con la estructura de la batalla</p>"
          }
        ],
        "battle_structures": [
          {
            "group": "battle_structures",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> de la estrucutura de batalla</p>"
          },
          {
            "group": "battle_structures",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>El nombre de la estructura de la batalla</p>"
          },
          {
            "group": "battle_structures",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>El slug de la estructura de la batalla</p>"
          },
          {
            "group": "battle_structures",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>La descripción de la estructura de la batalla</p>"
          },
          {
            "group": "battle_structures",
            "type": "String",
            "optional": false,
            "field": "replica_id",
            "description": "<p>El <code>uuid</code> del round de réplica</p>"
          },
          {
            "group": "battle_structures",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>El numero de orden de la estructura de la batalla</p>"
          },
          {
            "group": "battle_structures",
            "type": "Object[rounds]",
            "optional": false,
            "field": "rounds",
            "description": "<p>Array con los rounds de la estructura de la batalla</p>"
          }
        ],
        "rounds": [
          {
            "group": "rounds",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del round</p>"
          },
          {
            "group": "rounds",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>El nombre del round</p>"
          },
          {
            "group": "rounds",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>El slug del round</p>"
          },
          {
            "group": "rounds",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>La descripción del round</p>"
          },
          {
            "group": "rounds",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>El numero de orden del round</p>"
          },
          {
            "group": "rounds",
            "type": "Object[styles]",
            "optional": false,
            "field": "styles",
            "description": "<p>Array con los styles del round</p>"
          }
        ],
        "styles": [
          {
            "group": "styles",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del style</p>"
          },
          {
            "group": "styles",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>El nombre del style</p>"
          },
          {
            "group": "styles",
            "type": "String",
            "optional": false,
            "field": "num_patterns",
            "description": "<p>El numero de patrones que tiene el style</p>"
          },
          {
            "group": "styles",
            "type": "String",
            "optional": false,
            "field": "extra_point",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> para saber si esl style tiene puntos extra (Sangre 1 tiene punto extra)</p>"
          },
          {
            "group": "styles",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>El numero de orden del style</p>"
          },
          {
            "group": "styles",
            "type": "Object[patterns]",
            "optional": false,
            "field": "patterns",
            "description": "<p>Array con los patterns del style</p>"
          },
          {
            "group": "styles",
            "type": "Object[performance]",
            "optional": false,
            "field": "performance",
            "description": "<p>Array con los performance del style</p>"
          }
        ],
        "patterns": [
          {
            "group": "patterns",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del patron</p>"
          },
          {
            "group": "patterns",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>El nombre del patron</p>"
          },
          {
            "group": "patterns",
            "type": "String",
            "optional": false,
            "field": "score",
            "description": "<p>El numero máximo del valor del patron es decir va de 0 a 4 en la pantalla se dibujaría 0, 1, 2, 3, 4</p>"
          },
          {
            "group": "patterns",
            "type": "String",
            "optional": false,
            "field": "interval",
            "description": "<p>El numero de cada cuanto se pinta el valor en pantalla (internvalo de valores), 0.50 es decir con el campo anterior sería, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4</p>"
          },
          {
            "group": "patterns",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>El numero de orden del patron</p>"
          }
        ],
        "performance": [
          {
            "group": "performance",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del performance</p>"
          },
          {
            "group": "performance",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>El nombre del performance</p>"
          },
          {
            "group": "performance",
            "type": "String",
            "optional": false,
            "field": "score",
            "description": "<p>El numero máximo del valor del performance es decir va de 0 a 2 en la pantalla se dibujaría 0, 1, 2</p>"
          },
          {
            "group": "performance",
            "type": "String",
            "optional": false,
            "field": "interval",
            "description": "<p>El numero de cada cuanto se pinta el valor en pantalla (internvalo de valores), 1.00 es decir con el campo anterior sería, 0, 1, 2</p>"
          },
          {
            "group": "performance",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>El numero de orden del performance</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     HTTP/1.1 200 OK\n     status: \"success\",\n     data:[\n{\n\"id\":\"5a2d413d-0e43-4d35-b5a8-cb83fe952654\",\n\"ss_types_scoring_systems_id\":\"6878e106-d7df-4a9b-8bb3-688dc31ff7e4\",\n\"name\":\"Sistema Votaci&oacute;n FMS\",\n\"slug\":\"sistema-votacion-fms\",\n\"description\":\"fms\",\n\"order\":1,\n\"created_at\":\"2020-07-11T11:13:57.000000Z\",\n\"updated_at\":\"2020-07-11T11:13:57.000000Z\",\n\"deleted_at\":null,\n\"params\":null,\n\"log\":null,\n\"battle_structures\":[\n  {\n     \"id\":\"7d4b4c3d-7d8d-4482-a497-cc1b64701d75\",\n     \"ss_scoring_systems_id\":\"5a2d413d-0e43-4d35-b5a8-cb83fe952654\",\n     \"name\":\"Batallas FMS\",\n     \"slug\":\"batallas-fms\",\n     \"description\":\"para las batallas FMS\",\n     \"replica_id\":\"332cd557-ec53-4db6-bf83-ab9467714e40\",\n     \"order\":1,\n     \"created_at\":\"2020-07-11T11:18:36.000000Z\",\n     \"updated_at\":\"2020-07-11T11:18:36.000000Z\",\n     \"deleted_at\":null,\n     \"params\":null,\n     \"log\":null,\n     \"rounds\":[\n        {\n           \"id\":\"938402b7-fab4-4b86-9033-09f66bde9da3\",\n           \"name\":\"Round 1\",\n           \"slug\":\"round-1\",\n           \"description\":\"para round 1\",\n           \"order\":1,\n           \"created_at\":\"2020-07-11T11:14:13.000000Z\",\n           \"updated_at\":\"2020-07-11T11:14:13.000000Z\",\n           \"deleted_at\":null,\n           \"params\":null,\n           \"log\":null,\n           \"pivot\":{\n              \"ss_battle_structures_id\":\"7d4b4c3d-7d8d-4482-a497-cc1b64701d75\",\n              \"ss_round_structures_id\":\"938402b7-fab4-4b86-9033-09f66bde9da3\",\n              \"id\":1,\n              \"order\":1\n           },\n           \"styles\":[\n              {\n                 \"id\":\"e5b36279-ce82-462d-8864-d0866ac21263\",\n                 \"ss_types_styles_id\":\"9809cecb-6499-4a40-b5b6-7af39918aacf\",\n                 \"name\":\"Easy Mode\",\n                 \"num_patterns\":6,\n                 \"completed\":1,\n                 \"extra_point\":0,\n                 \"turn\":0,\n                 \"order\":2,\n                 \"created_at\":\"2020-07-11T11:06:39.000000Z\",\n                 \"updated_at\":\"2020-07-11T11:06:52.000000Z\",\n                 \"deleted_at\":null,\n                 \"params\":null,\n                 \"log\":null,\n                 \"pivot\":{\n                    \"ss_round_structures_id\":\"938402b7-fab4-4b86-9033-09f66bde9da3\",\n                    \"ss_styles_id\":\"e5b36279-ce82-462d-8864-d0866ac21263\",\n                    \"id\":1,\n                    \"order\":1\n                 },\n                 \"patterns\":[\n                    {\n                       \"id\":\"220fd555-19e9-44f0-a74c-70782dd7d7c3\",\n                       \"ss_types_patterns_id\":\"8a8f8f27-4be0-4998-8bfa-7366bf0be108\",\n                       \"name\":\"Patron Normal\",\n                       \"slug\":\"patron-normal\",\n                       \"score\":4,\n                       \"interval\":\"0.50\",\n                       \"order\":1,\n                       \"created_at\":\"2020-07-11T10:59:08.000000Z\",\n                       \"updated_at\":\"2020-07-11T10:59:08.000000Z\",\n                       \"deleted_at\":null,\n                       \"params\":null,\n                       \"log\":null,\n                       \"pivot\":{\n                          \"ss_styles_id\":\"e5b36279-ce82-462d-8864-d0866ac21263\",\n                          \"ss_patterns_id\":\"220fd555-19e9-44f0-a74c-70782dd7d7c3\",\n                          \"id\":1,\n                          \"order\":1\n                       }\n                    },\n                    \"...\"\n                 ],\n                 \"performance\":[\n                    {\n                       \"id\":\"e5efeac1-94cf-45f4-8aa2-275a1806826f\",\n                       \"name\":\"Escena\",\n                       \"slug\":\"escena\",\n                       \"score\":2,\n                       \"interval\":\"1.00\",\n                       \"order\":1,\n                       \"created_at\":\"2020-07-11T10:53:34.000000Z\",\n                       \"updated_at\":\"2020-07-11T10:53:34.000000Z\",\n                       \"deleted_at\":null,\n                       \"params\":null,\n                       \"log\":null,\n                       \"pivot\":{\n                          \"ss_styles_id\":\"e5b36279-ce82-462d-8864-d0866ac21263\",\n                          \"ss_performance_id\":\"e5efeac1-94cf-45f4-8aa2-275a1806826f\"\n                       }\n                    },\n                    \"...\"\n                 ]\n              },\n              \"....\"\n           ]\n        },\n        \"...\"\n     ]\n  }\n]\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Mensaje Personalizado del tipo de error de validación</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Solo los usuarios registrados pueden acceder</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiKeyNotFound",
            "description": "<p>El <code>token</code> no coincide con un usuario</p>"
          }
        ],
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "Error",
            "description": "<p>de servidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el api-key.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El api-key recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apps/api-app-judges/components/api-events/Front/ApiEventsController.php",
    "groupTitle": "2.-_Sistema_de_Votaciones"
  },
  {
    "type": "post",
    "url": "/events/set-battles/:event/:phase/:judge",
    "title": "3.2.-Cargamos una o varias batallas por lotes",
    "version": "1.0.0",
    "name": "setBattles",
    "group": "3.-_Batallas",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Cargamos una o varias batallas por lotes (Los valores con * no son obligatorios para una batalla por patron, pero si es obligatorio para guardado masivo por lotes). Este endpoint recibe una batalla, todo un evneto o por patrones para ir guardando registro de los mismos. Si se desea va a cerrar un modo o round se debe utilizar el endoint Cerrar un registro (.... )(de fine si es un style, round o score)</p>",
    "examples": [
      {
        "title": "Cargamos una o varias batallas por lotes",
        "content": "curl -i http://ionic.urbanroosters.com/api/events/set-battles/0f62308e-8245-4e2f-8e01-b0c0920be35b/65443d8b-abfc-4e0b-a848-181fcfa1f4aj/019f7830-bb26-412d-ae6b-fe5bc4780359",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "api-key",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                              El api key que necesita para solicitar acceso",
          "content": " {\n  \"api-key\": \"sustituir por tu api key\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>El <code>uuid</code> de la fase</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "judge",
            "description": "<p>El <code>uuid</code> del juez</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "Object[battles]",
            "optional": false,
            "field": "battles",
            "description": "<p>Array con la/las batalla/s a guardar</p>"
          }
        ],
        "battles": [
          {
            "group": "battles",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> de la batalla</p>"
          },
          {
            "group": "battles",
            "type": "Object[participants]",
            "optional": false,
            "field": "participants",
            "description": "<p>Array con los participantes del evento  que contiene id y un array con las 5 tablas necesarias</p>"
          }
        ],
        "participant": [
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del mc/participante</p>"
          },
          {
            "group": "participant",
            "type": "Object[ss_data_scores]",
            "optional": false,
            "field": "ss_data_scores",
            "description": "<p>Array con los datos necesarios de un ss_data_scores</p>"
          }
        ],
        "ss_data_score": [
          {
            "group": "ss_data_score",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_scores</p>"
          },
          {
            "group": "ss_data_score",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>El <code>number</code> de orden de un MC/Participante</p>"
          },
          {
            "group": "ss_data_score",
            "type": "String",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al iniciar la batalla</p>"
          },
          {
            "group": "ss_data_score",
            "type": "String",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finalizar la batalla</p>"
          },
          {
            "group": "ss_data_score",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>true</code> o <code>false</code> al inciar una batalla</p>"
          },
          {
            "group": "ss_data_score",
            "type": "Boolean",
            "optional": false,
            "field": "finished",
            "description": "<p>*El valor de <code>true</code> o <code>false</code> al finalizar una batalla</p>"
          },
          {
            "group": "ss_data_score",
            "type": "Boolean",
            "optional": false,
            "field": "has_replica",
            "description": "<p>*El valor de <code>true</code> o <code>false</code> al tener réplica en una batalla</p>"
          },
          {
            "group": "ss_data_score",
            "type": "Boolean",
            "optional": false,
            "field": "judge_ur",
            "description": "<p>*El valor de <code>true</code> o <code>false</code> al saber que un juez designa un ganador</p>"
          },
          {
            "group": "ss_data_score",
            "type": "Boolean",
            "optional": false,
            "field": "won",
            "description": "<p>*El valor de <code>true</code> o <code>false</code> para indicar que un MC/Participante ganó</p>"
          },
          {
            "group": "ss_data_score",
            "type": "Boolean",
            "optional": false,
            "field": "lost",
            "description": "<p>*El valor de <code>true</code> o <code>false</code> para indicar que un MC/Participante perdió una batalla</p>"
          },
          {
            "group": "ss_data_score",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>*El valor de <code>true</code> o <code>false</code> para indicar que una batalla está completa para un juez</p>"
          },
          {
            "group": "ss_data_score",
            "type": "Boolean",
            "optional": false,
            "field": "partial",
            "description": "<p>*El valor de <code>true</code> o <code>false</code> para indicar que una batalla está incompleta</p>"
          },
          {
            "group": "ss_data_score",
            "type": "Object[ss_data_score_rounds]",
            "optional": false,
            "field": "ss_data_score_rounds",
            "description": "<p>Array con los datos del round que se esta votando</p>"
          }
        ],
        "ss_data_score_rounds": [
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> ss_data_score_rounds</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>El <code>number</code> de orden de un MC/Participante</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al iniciar un round</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al terminar un round</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>true</code> o <code>false</code> al inciar un round</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "finished",
            "description": "<p>*El valor de <code>true</code> o <code>false</code> al finalizar un round</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "is_replica",
            "description": "<p>*El valor de <code>true</code> o <code>false</code> si el round es de tipo réplica o no</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "won",
            "description": "<p>*El valor de <code>true</code> o <code>false</code> para indicar que un MC/Participante ganó</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "lost",
            "description": "<p>*El valor de <code>true</code> o <code>false</code> para indicar que un MC/Participante perdió una batalla</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Object[ss_data_score_styles]",
            "optional": false,
            "field": "ss_data_score_styles",
            "description": "<p>Array con los datos del style que se esta votando</p>"
          }
        ],
        "ss_data_score_styles": [
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> ss_data_score_styles</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>El <code>number</code> de orden de un MC/Participante</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al mostrar el nuevo estilo a votar</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al hacer un tap en el boton siguiente</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>true</code> o <code>false</code> al inciar un style</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "Boolean",
            "optional": false,
            "field": "finished",
            "description": "<p>*El valor de <code>true</code> o <code>false</code> al finalizar un style</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "Object[ss_data_score_patrons]",
            "optional": false,
            "field": "ss_data_score_style_patrons",
            "description": "<p>Array con los datos de los patrones que se esta votando</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "Object[ss_data_score_style_performances]",
            "optional": false,
            "field": "ss_data_score_style_performances",
            "description": "<p>Array con los datos de los performances que se esta votando</p>"
          }
        ],
        "ss_data_score_style_patrons": [
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> ss_data_score_patrons</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>El valor <code>2.5</code> al dar tap</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "Boolean",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>true</code> al marca un punto extra</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de <code>3.5</code> al sumar value mas extra</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>El <code>number</code> de orden del tab realizado</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "time_pattern",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al hacer un tap en un patron</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "time_extra",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al hacer un tap en un punto extra</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "Boolean",
            "optional": false,
            "field": "is_update",
            "description": "<p>El valor de <code>true</code> o <code>false</code> para indicar que el patron es nuevo o es una edición</p>"
          }
        ],
        "ss_data_score_style_performances": [
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> ss_data_score_performances</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>El valor <code>1</code> al dar tap</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "Boolean",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>true</code> al marca un punto extra</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de <code>1</code> al sumar value mas extra</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>El <code>number</code> de orden del tab realizado</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "time_performance",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al hacer un tap en un performances</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "time_extra",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al hacer un tap en un punto extra</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "Boolean",
            "optional": false,
            "field": "is_update",
            "description": "<p>El valor de <code>true</code> o <code>false</code> para indicar que el performance es nuevo o es una edición</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"battles\":\n    [\n        {\n            \"id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n            \"participants\":\n            [\n                {\n                    \"id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n                    \"ss_data_scores\":\n                    [\n                        {\n                            \"id\": \"7d47ff74-2f91-451c-974c-8113a843433d\",\n                            \"order\": \"1\",\n                            \"time_started\": \"1212018372.3366\",\n                            \"started\": true,\n                            \"ss_data_score_rounds\":\n                            [\n                                {\n                                    \"id\": \"b5703e3d-39d0-4775-8018-93309cdeccf6\",\n                                    \"ss_round_structures_id\": \"938402b7-fab4-4b86-9033-09f66bde9da3\",\n                                    \"order\": \"1\",\n                                    \"time_started\": \"1212018372.3366\",\n                                    \"started\": true,\n                                    \"ss_data_score_styles\":\n                                    [\n                                        {\n                                            \"id\": \"4adf4505-ceea-4a83-adc7-636cd4d2aee8\",\n                                            \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                                            \"order\": \"1\",\n                                            \"time_started\": \"1212018372.3366\",\n                                            \"started\": true,\n                                            \"ss_data_score_style_patrons\":\n                                            [\n                                                {\n                                                \"id\": \"169cc5c5-420c-4a89-baa8-693d2f13938e\",\n                                                \"ss_patterns_styles_id\": \"1\",\n                                                \"value\": 2.5,\n                                                \"extra\": true,\n                                                \"total\": 3.5,\n                                                \"order\": 1,\n                                                \"time_pattern\": \"1212018372.3366\",\n                                                \"time_extra\": \"1212018372.3366\",\n                                                \"is_update\": false\n                                                },\n                                                ...\n                                            ],\n                                            \"ss_data_score_style_performances\":\n                                            [\n                                                {\n                                                \"id\": \"10ede3e1-030e-4283-8a55-3f9824a93d94\",\n                                                \"ss_performance_id\": \"e47148d0-dbb7-496f-85d7-933bf060c0de\",\n                                                \"value\": 1,\n                                                \"extra\": false,\n                                                \"total\": 1,\n                                                \"order\": 1,\n                                                \"time_performance\": \"1212018372.3366\",\n                                                \"time_extra\": \"1212018372.3366\",\n                                                \"is_update\": false\n                                                },\n                                                ...\n                                            ]\n                                        },\n                                        ...\n                                    ]\n                                },\n                                ...\n                            ]\n                        }\n                    ]\n                },\n                {\n                    \"id\": \"349a1e2f-46a3-4fc0-a372-24596faf8328\",\n                    \"ss_data_scores\":\n                    [\n                        {\n                            \"id\": \"03fc0a8f-b06f-4682-a09a-92f4f3e09520\",\n                            \"order\": \"1\",\n                            \"time_started\": \"1212018372.3366\",\n                            \"started\": true,\n                            \"ss_data_score_rounds\":\n                            [\n                                {\n                                    \"id\": \"bc212def-92fd-4fed-8faf-7323e5d6ac4e\",\n                                    \"ss_round_structures_id\": \"938402b7-fab4-4b86-9033-09f66bde9da3\",\n                                    \"order\": \"1\",\n                                    \"time_started\": \"1212018372.3366\",\n                                    \"started\": true,\n                                    \"ss_data_score_styles\":\n                                    [\n                                        {\n                                            \"id\": \"3fe2d9ff-4ebf-4a8a-9168-0598803b03ef\",\n                                            \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                                            \"order\": \"1\",\n                                            \"time_started\": \"1212018372.3366\",\n                                            \"started\": true,\n                                            \"ss_data_score_style_patrons\":\n                                            [\n                                                {\n                                                \"id\": \"0a648f1a-2640-463b-93cf-2888ee445b1f\",\n                                                \"ss_patterns_styles_id\": \"1\",\n                                                \"value\": 2.5,\n                                                \"extra\": true,\n                                                \"total\": 3.5,\n                                                \"order\": 1,\n                                                \"time_pattern\": \"1212018372.3366\",\n                                                \"time_extra\": \"1212018372.3366\",\n                                                \"is_update\": false\n                                                },\n                                                ...\n                                            ],\n                                            \"ss_data_score_style_performances\":\n                                            [\n                                                {\n                                                \"id\": \"4a94a778-dd30-4808-8b82-86136f292927\",\n                                                \"ss_performance_id\": \"e47148d0-dbb7-496f-85d7-933bf060c0de\",\n                                                \"value\": 1,\n                                                \"extra\": false,\n                                                \"total\": 1,\n                                                \"order\": 1,\n                                                \"time_performance\": \"1212018372.3366\",\n                                                \"time_extra\": \"1212018372.3366\",\n                                                \"is_update\": false\n                                                },\n                                                ...\n                                            ]\n                                        },\n                                        ...\n                                    ]\n                                },\n                                ...\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "Object[battle]",
            "optional": false,
            "field": "Battle",
            "description": "<p>Array con los datos de los participantes de una batalla</p>"
          }
        ],
        "battle": [
          {
            "group": "battle",
            "type": "Object[scores]",
            "optional": false,
            "field": "Scores",
            "description": "<p>Array con los datos del ss_data_scores de cada MC/Participante</p>"
          }
        ],
        "score": [
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_scores</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "score",
            "type": "Number",
            "optional": false,
            "field": "total_battle",
            "description": "<p>El valor del total de la batalla para un MC/Participante</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "has_replica",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla tiene réplica</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "judge_ur",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el juez ingreso un ganador manual</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "won",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante ganó la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "lost",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante perdió la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla esta completa</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "partial",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla aún no termina o esta incompleta</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "finnished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al iniciar una batalla</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finalizar una batalla</p>"
          },
          {
            "group": "score",
            "type": "Object[score_rounds]",
            "optional": false,
            "field": "score_rounds",
            "description": "<p>Array con los datos del ss_data_score_rounds</p>"
          }
        ],
        "score_rounds": [
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores padre (Tabla relacionada)</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "ss_round_structures_id",
            "description": "<p>El <code>uuid</code> del ss_round_structures (Es la estructura del round)</p>"
          },
          {
            "group": "score_rounds",
            "type": "Number",
            "optional": false,
            "field": "total_round",
            "description": "<p>El valor del total del round para un round</p>"
          },
          {
            "group": "score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "is_replica",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el round es de tipo réplica o no.</p>"
          },
          {
            "group": "score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "won",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante ganó la batalla</p>"
          },
          {
            "group": "score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "lost",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante perdió la batalla</p>"
          },
          {
            "group": "score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "finnished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al iniciar una batalla</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finalizar una batalla</p>"
          },
          {
            "group": "score_rounds",
            "type": "Object[score_styles]",
            "optional": false,
            "field": "score_styles",
            "description": "<p>Array con los datos del ss_data_score_styles</p>"
          }
        ],
        "score_styles": [
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores (Tabla relacionada)</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds (Tabla relacionada)</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles (Tabla relacionada)</p>"
          },
          {
            "group": "score_styles",
            "type": "Number",
            "optional": false,
            "field": "total_pattern",
            "description": "<p>El valor del total de los patrones para un style</p>"
          },
          {
            "group": "score_styles",
            "type": "Number",
            "optional": false,
            "field": "total_performances",
            "description": "<p>El valor del total de los performances para un style</p>"
          },
          {
            "group": "score_styles",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de la suma de los dos campos anteriores para obtener el total de un style</p>"
          },
          {
            "group": "score_styles",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "score_styles",
            "type": "Boolean",
            "optional": false,
            "field": "finnished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al iniciar una batalla</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finalizar una batalla</p>"
          },
          {
            "group": "score_styles",
            "type": "Object[score_patterns]",
            "optional": false,
            "field": "score_patterns",
            "description": "<p>Array con los datos del ss_data_score_patterns</p>"
          },
          {
            "group": "score_styles",
            "type": "Object[score_performances]",
            "optional": false,
            "field": "score_perfomances",
            "description": "<p>Array con los datos del ss_data_score_style_performaces</p>"
          }
        ],
        "score_patterns": [
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style_patrons</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores (Tabla relacionada)</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds (Tabla relacionada)</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles (Tabla relacionada)</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_styles_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles (Tabla relacionada)</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "ss_patterns_styles_id",
            "description": "<p>El <code>uuid</code> del ss_patterns_styles (Tabla relacionada)</p>"
          },
          {
            "group": "score_patterns",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>El valor del patron al dar tab en la app</p>"
          },
          {
            "group": "score_patterns",
            "type": "Boolean",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el patron tiene punto extra</p>"
          },
          {
            "group": "score_patterns",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de la suma de los dos campos anteriores para obtener el total de un patron</p>"
          },
          {
            "group": "score_patterns",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "score_patterns",
            "type": "Boolean",
            "optional": false,
            "field": "finished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "time_pattern",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al realizar un tab en un patron</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "time_extra",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al realizar un tab en el extra de un patron</p>"
          }
        ],
        "score_performances": [
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style_performaces</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores (Tabla relacionada)</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds (Tabla relacionada)</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles (Tabla relacionada)</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_styles_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles (Tabla relacionada)</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "ss_performance_id",
            "description": "<p>El <code>uuid</code> del ss_performance (Tabla relacionada)</p>"
          },
          {
            "group": "score_performances",
            "type": "number",
            "optional": false,
            "field": "value",
            "description": "<p>El valor del performance al dar tab en la app</p>"
          },
          {
            "group": "score_performances",
            "type": "Boolean",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el performance tiene punto extra</p>"
          },
          {
            "group": "score_performances",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de la suma de los dos campos anteriores para obtener el total de un performance</p>"
          },
          {
            "group": "score_performances",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "score_performances",
            "type": "Boolean",
            "optional": false,
            "field": "finished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "time_performance",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al realizar un tab en un performance</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "time_extra",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al realizar un tab en el extra de un performance</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n\"status\": \"success\",\n\"data\": [\n    [\n        {\n            \"id\": \"03fc0a8f-b06f-4682-a09a-92f4f3e09520\",\n            \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n            \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n            \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n            \"participants_id\": \"349a1e2f-46a3-4fc0-a372-24596faf8328\",\n            \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n            \"total_battle\": 3.5,\n            \"has_replica\": 0,\n            \"judge_ur\": 0,\n            \"won\": 0,\n            \"lost\": 0,\n            \"completed\": 0,\n            \"partial\": 1,\n            \"order\": 2,\n            \"created_at\": \"2020-12-18T14:54:45.000000Z\",\n            \"updated_at\": \"2020-12-18T21:20:22.000000Z\",\n            \"deleted_at\": null,\n            \"params\": null,\n            \"log\": null,\n            \"started\": 1,\n            \"finished\": 0,\n            \"time_started\": \"1212018372.3366\",\n            \"time_finished\": null,\n            \"score_rounds\": [\n                {\n                   \"id\": \"bc212def-92fd-4fed-8faf-7323e5d6ac4e\",\n                   \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                   \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                   \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n                   \"participants_id\": \"349a1e2f-46a3-4fc0-a372-24596faf8328\",\n                   \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n                   \"ss_data_scores_id\": \"03fc0a8f-b06f-4682-a09a-92f4f3e09520\",\n                   \"ss_round_structures_id\": \"938402b7-fab4-4b86-9033-09f66bde9da3\",\n                   \"total_round\": 3.5,\n                   \"is_replica\": 0,\n                   \"order\": 2,\n                   \"created_at\": \"2020-12-18T14:54:45.000000Z\",\n                   \"updated_at\": \"2020-12-18T21:20:22.000000Z\",\n                   \"deleted_at\": null,\n                   \"params\": null,\n                   \"log\": null,\n                   \"won\": 0,\n                   \"lost\": 0,\n                   \"started\": 1,\n                   \"finished\": 0,\n                   \"time_started\": \"1212018372.3366\",\n                   \"time_finished\": null,\n                   \"score_styles\": [\n                       {\n                           \"id\": \"3fe2d9ff-4ebf-4a8a-9168-0598803b03ef\",\n                           \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                           \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                           \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n                           \"participants_id\": \"349a1e2f-46a3-4fc0-a372-24596faf8328\",\n                           \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n                           \"ss_data_scores_id\": \"03fc0a8f-b06f-4682-a09a-92f4f3e09520\",\n                           \"ss_data_score_rounds_id\": \"bc212def-92fd-4fed-8faf-7323e5d6ac4e\",\n                           \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                           \"total_pattern\": 3.5,\n                           \"total_performances\": 0,\n                           \"total\": 3.5,\n                           \"order\": 2,\n                           \"created_at\": \"2020-12-18T14:54:45.000000Z\",\n                           \"updated_at\": \"2020-12-18T21:20:22.000000Z\",\n                           \"deleted_at\": null,\n                           \"params\": null,\n                           \"log\": null,\n                           \"started\": 1,\n                           \"finished\": 0,\n                           \"time_started\": \"1212018372.3366\",\n                           \"time_finished\": null,\n                           \"score_patterns\": [\n                               {\n                                   \"id\": \"0a648f1a-2640-463b-93cf-2888ee445b1f\",\n                                   \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                                   \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                                   \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n                                   \"participants_id\": \"349a1e2f-46a3-4fc0-a372-24596faf8328\",\n                                   \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n                                   \"ss_data_scores_id\": \"03fc0a8f-b06f-4682-a09a-92f4f3e09520\",\n                                   \"ss_data_score_rounds_id\": \"bc212def-92fd-4fed-8faf-7323e5d6ac4e\",\n                                   \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                                   \"ss_data_score_styles_id\": \"3fe2d9ff-4ebf-4a8a-9168-0598803b03ef\",\n                                   \"ss_patterns_styles_id\": 1,\n                                   \"value\": 2.5,\n                                   \"extra\": 1,\n                                   \"total\": 3.5,\n                                   \"order\": 1,\n                                   \"created_at\": \"2020-12-18T20:59:31.000000Z\",\n                                   \"updated_at\": \"2020-12-18T20:59:31.000000Z\",\n                                   \"deleted_at\": null,\n                                   \"params\": null,\n                                   \"log\": null,\n                                   \"time\": \"1212018372.3366\",\n                                   \"started\": 0,\n                                   \"finished\": 0\n                               }\n                           ],\n                           \"score_performances\": [\n                               {\n                                   \"id\": \"4a94a778-dd30-4808-8b82-86136f292927\",\n                                   \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                                   \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                                   \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n                                   \"participants_id\": \"349a1e2f-46a3-4fc0-a372-24596faf8328\",\n                                   \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n                                   \"ss_data_scores_id\": \"03fc0a8f-b06f-4682-a09a-92f4f3e09520\",\n                                   \"ss_data_score_rounds_id\": \"bc212def-92fd-4fed-8faf-7323e5d6ac4e\",\n                                   \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                                   \"ss_data_score_styles_id\": \"3fe2d9ff-4ebf-4a8a-9168-0598803b03ef\",\n                                   \"ss_performance_id\": \"e47148d0-dbb7-496f-85d7-933bf060c0de\",\n                                   \"value\": 1,\n                                   \"extra\": 0,\n                                   \"total\": 0,\n                                   \"order\": 1,\n                                   \"created_at\": \"2020-12-18T20:59:31.000000Z\",\n                                   \"updated_at\": \"2020-12-18T20:59:31.000000Z\",\n                                   \"deleted_at\": null,\n                                   \"params\": null,\n                                   \"log\": null,\n                                   \"time\": \"1212018372.3366\",\n                                   \"started\": 0,\n                                   \"finished\": 0\n                               }\n                           ]\n                       }\n                   ]\n                }\n            ]\n        },\n        {\n            \"id\": \"7d47ff74-2f91-451c-974c-8113a843433d\",\n            \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n            \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n            \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n            \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n            \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n            \"total_battle\": 3.5,\n            \"has_replica\": 0,\n            \"judge_ur\": 0,\n            \"won\": 0,\n            \"lost\": 0,\n            \"completed\": 0,\n            \"partial\": 1,\n            \"order\": 1,\n            \"created_at\": \"2020-12-18T14:35:45.000000Z\",\n            \"updated_at\": \"2020-12-18T21:20:22.000000Z\",\n            \"deleted_at\": null,\n            \"params\": null,\n            \"log\": null,\n            \"started\": 1,\n            \"finished\": 0,\n            \"time_started\": \"1212018372.3366\",\n            \"time_finished\": null,\n            \"score_rounds\": [\n                {\n                    \"id\": \"b5703e3d-39d0-4775-8018-93309cdeccf6\",\n                    \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                    \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                    \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n                    \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n                    \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n                    \"ss_data_scores_id\": \"7d47ff74-2f91-451c-974c-8113a843433d\",\n                    \"ss_round_structures_id\": \"938402b7-fab4-4b86-9033-09f66bde9da3\",\n                    \"total_round\": 3.5,\n                    \"is_replica\": 0,\n                    \"order\": 1,\n                    \"created_at\": \"2020-12-18T14:48:50.000000Z\",\n                    \"updated_at\": \"2020-12-18T21:20:22.000000Z\",\n                    \"deleted_at\": null,\n                    \"params\": null,\n                    \"log\": null,\n                    \"won\": 0,\n                    \"lost\": 0,\n                    \"started\": 1,\n                    \"finished\": 0,\n                    \"time_started\": \"1212018372.3366\",\n                    \"time_finished\": null,\n                    \"score_styles\": [\n                        {\n                            \"id\": \"4adf4505-ceea-4a83-adc7-636cd4d2aee8\",\n                            \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                            \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                            \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n                            \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n                            \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n                            \"ss_data_scores_id\": \"7d47ff74-2f91-451c-974c-8113a843433d\",\n                            \"ss_data_score_rounds_id\": \"b5703e3d-39d0-4775-8018-93309cdeccf6\",\n                            \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                            \"total_pattern\": 3.5,\n                            \"total_performances\": 0,\n                            \"total\": 3.5,\n                            \"order\": 1,\n                            \"created_at\": \"2020-12-18T14:54:45.000000Z\",\n                            \"updated_at\": \"2020-12-18T21:20:22.000000Z\",\n                            \"deleted_at\": null,\n                            \"params\": null,\n                            \"log\": null,\n                            \"started\": 1,\n                            \"finished\": 0,\n                            \"time_started\": \"1212018372.3366\",\n                            \"time_finished\": null,\n                            \"score_patterns\": [\n                                {\n                                   \"id\": \"169cc5c5-420c-4a89-baa8-693d2f13938e\",\n                                   \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                                   \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                                   \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n                                   \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n                                   \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n                                   \"ss_data_scores_id\": \"7d47ff74-2f91-451c-974c-8113a843433d\",\n                                   \"ss_data_score_rounds_id\": \"b5703e3d-39d0-4775-8018-93309cdeccf6\",\n                                   \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                                   \"ss_data_score_styles_id\": \"4adf4505-ceea-4a83-adc7-636cd4d2aee8\",\n                                   \"ss_patterns_styles_id\": 1,\n                                   \"value\": 2.5,\n                                   \"extra\": 1,\n                                   \"total\": 3.5,\n                                   \"order\": 1,\n                                   \"created_at\": \"2020-12-18T19:28:03.000000Z\",\n                                   \"updated_at\": \"2020-12-18T19:28:03.000000Z\",\n                                   \"deleted_at\": null,\n                                   \"params\": null,\n                                   \"log\": null,\n                                   \"time_patterns\": \"1212018372.3366\",\n                                   \"time_extra\": \"1212018372.3366\",\n                                   \"started\": 0,\n                                   \"finished\": 0\n                                }\n                            ],\n                            \"score_performances\": [\n                                {\n                                   \"id\": \"10ede3e1-030e-4283-8a55-3f9824a93d94\",\n                                   \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                                   \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                                   \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n                                   \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n                                   \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n                                   \"ss_data_scores_id\": \"7d47ff74-2f91-451c-974c-8113a843433d\",\n                                   \"ss_data_score_rounds_id\": \"b5703e3d-39d0-4775-8018-93309cdeccf6\",\n                                   \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                                   \"ss_data_score_styles_id\": \"4adf4505-ceea-4a83-adc7-636cd4d2aee8\",\n                                   \"ss_performance_id\": \"e47148d0-dbb7-496f-85d7-933bf060c0de\",\n                                   \"value\": 1,\n                                   \"extra\": 0,\n                                   \"total\": 0,\n                                   \"order\": 1,\n                                   \"created_at\": \"2020-12-18T20:56:49.000000Z\",\n                                   \"updated_at\": \"2020-12-18T20:56:49.000000Z\",\n                                   \"deleted_at\": null,\n                                   \"params\": null,\n                                   \"log\": null,\n                                   \"time_performances\": \"1212018372.3366\",\n                                   \"time_extra\": \"1212018372.3366\",\n                                   \"started\": 0,\n                                   \"finished\": 0\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Mensaje Personalizado del tipo de error de validación</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Solo los usuarios registrados pueden acceder</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiKeyNotFound",
            "description": "<p>El <code>token</code> no coincide con un usuario</p>"
          }
        ],
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "Error",
            "description": "<p>de servidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el api-key.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El api-key recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-events/Front/ApiEventsController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/events/set-battles/:event/:phase/:judge"
      }
    ]
  },
  {
    "type": "post",
    "url": "/battle/set-completed/:event/:phase/:judge/:battle",
    "title": "3.5.- Determina si la batalla termino",
    "version": "1.0.0",
    "name": "setCompleted",
    "group": "3.-_Batallas",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Determina si la batalla termino con un time de finished para determinar la hora exacta de cerrada</p>",
    "examples": [
      {
        "title": "Determina si la batalla termino",
        "content": "curl -i http://ionic.urbanroosters.com/api/battle/set-completed/0f62308e-8245-4e2f-8e01-b0c0920be35a/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/019f7830-bb26-412d-ae6b-fe5bc4780357/9e97ca3e-d2a4-4bcc-84fe-a2a37a24e093",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "api-key",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                      El api key que necesita para solicitar acceso",
          "content": " {\n  \"api-key\": \"sustituir por tu api key\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>El <code>uuid</code> de la fase</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "judge",
            "description": "<p>El <code>uuid</code> del juez</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "battle",
            "description": "<p>El <code>uuid</code> de la batalla</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "Object[participant]",
            "optional": false,
            "field": "participants",
            "description": "<p>Array con los participantes del evento  que contiene id y order</p>"
          }
        ],
        "participant": [
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> score a cerrar o completar la batalla para dicho juez</p>"
          },
          {
            "group": "participant",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si batalla está completa</p>"
          },
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finalizar un record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n    \"participants\":[\n        {\n            \"id\": \"568b8217-884f-46bc-9cc9-ad9cc6d7ec9b\",\n            \"ss_data_scores_id\": \"b8024511-2629-4bdc-914a-c6a35357ab0d\",\n            \"completed\": true,\n            \"time_finished\": \"1212018372.3366\"\n        },\n        {\n            \"id\": \"76a3c468-f833-4f83-b81c-d9a619cafb77\",\n            \"ss_data_scores_id\": \"8da5e391-f976-4859-b20a-ad9ccfa2d30a\",\n            \"completed\": true,\n            \"time_finished\": \"1212018372.3366\"\n        }\n    ]\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[score]",
            "optional": false,
            "field": "Scores",
            "description": "<p>Array con los datos del ss_data_scores</p>"
          }
        ],
        "score": [
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/Participante</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "total_battle",
            "description": "<p>El total de la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "won",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante ganó la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "lost",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante perdió la batalla</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nstatus: \"success\",\ndata:[\n    {\n        \"participants_id\": \"76a3c468-f833-4f83-b81c-d9a619cafb77\",\n        \"ss_data_scores_id\": \"8da5e391-f976-4859-b20a-ad9ccfa2d30a\",\n        \"total_battle\": 115,\n        \"won\": 1,\n        \"lost\": 0\n    },\n    {\n        \"participants_id\": \"568b8217-884f-46bc-9cc9-ad9cc6d7ec9b\",\n        \"ss_data_scores_id\": \"b8024511-2629-4bdc-914a-c6a35357ab0d\",\n        \"total_battle\": 113.5,\n        \"won\": 0,\n        \"lost\": 1\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Mensaje Personalizado del tipo de error de validación</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Solo los usuarios registrados pueden acceder</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiKeyNotFound",
            "description": "<p>El <code>token</code> no coincide con un usuario</p>"
          }
        ],
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "Error",
            "description": "<p>de servidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el api-key.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El api-key recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-events/Front/ApiEventsController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/battle/set-completed/:event/:phase/:judge/:battle"
      }
    ]
  },
  {
    "type": "post",
    "url": "/battle/set-order-freestylers/:event/:phase/:judge/:battle",
    "title": "3.1.-Agrega el orden en el que inicia los participante una batalla",
    "version": "1.0.0",
    "name": "setOrderFreestylers",
    "group": "3.-_Batallas",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Agrega el orden en el que inicia los participante una batalla con un formato de un array de los participantes de la batalla este endpoint no es obligatorio si se envia una batalla completa o un evento completo.</p>",
    "examples": [
      {
        "title": "Agrega el orden de cada participante al iniciar una batalla.",
        "content": "curl -i http://ionic.urbanroosters.com/api/battle/set-order-freestylers/0f62308e-8245-4e2f-8e01-b0c0920be35a/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/019f7830-bb26-412d-ae6b-fe5bc4780357/eece274b-a418-48af-8b56-6f658f10cb5f",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "api-key",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                          El api key que necesita para solicitar acceso",
          "content": " {\n  \"api-key\": \"sustituir por tu api key\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>El <code>uuid</code> de la fase</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "judge",
            "description": "<p>El <code>uuid</code> del juez</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "battle",
            "description": "<p>El <code>uuid</code> de la batalla</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "Object[participant]",
            "optional": false,
            "field": "participants",
            "description": "<p>Array con los participantes del evento  que contiene id y order</p>"
          }
        ],
        "participant": [
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del mc/participante</p>"
          },
          {
            "group": "participant",
            "type": "Object[ss_data_scores]",
            "optional": false,
            "field": "ss_data_scores",
            "description": "<p>El <code>number</code> de orden de un MC</p>"
          }
        ],
        "ss_data_scores": [
          {
            "group": "ss_data_scores",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_scores</p>"
          },
          {
            "group": "ss_data_scores",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>El orden con el que inicia un MC/Participante</p>"
          },
          {
            "group": "ss_data_scores",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si batalla está iniciada</p>"
          },
          {
            "group": "ss_data_scores",
            "type": "Object[ss_data_score_rounds]",
            "optional": false,
            "field": "ss_data_score_rounds",
            "description": "<p>El <code>number</code> de orden de un MC</p>"
          }
        ],
        "ss_data_score_round": [
          {
            "group": "ss_data_score_round",
            "type": "String",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al iniciar un score</p>"
          },
          {
            "group": "ss_data_score_round",
            "type": "String",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finzalizar un score</p>"
          },
          {
            "group": "ss_data_score_round",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_round</p>"
          },
          {
            "group": "ss_data_score_round",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>El orden con el que inicia un MC/Participante</p>"
          },
          {
            "group": "ss_data_score_round",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si batalla está iniciada</p>"
          },
          {
            "group": "ss_data_score_round",
            "type": "Object[ss_data_score_styles]",
            "optional": false,
            "field": "ss_data_score_styles",
            "description": "<p>El <code>number</code> de orden de un MC</p>"
          }
        ],
        "ss_data_score_style": [
          {
            "group": "ss_data_score_style",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style</p>"
          },
          {
            "group": "ss_data_score_style",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>El orden con el que inicia un MC/Participante</p>"
          },
          {
            "group": "ss_data_score_style",
            "type": "String",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al iniciar un style</p>"
          },
          {
            "group": "ss_data_score_style",
            "type": "String",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finzalizar un style</p>"
          },
          {
            "group": "ss_data_score_style",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si batalla está iniciada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"participants\":[\n        {\n            \"id\": \"42c51902-d524-4dc9-95db-4846f0606422\",\n            \"ss_data_scores\":{\n                \"id\": \"0018ed8c-2ec0-4992-ab6f-69e1f4eab8b0\",\n                \"order\": \"1\",\n                \"time_started\": \"1212018372.3366\",\n                \"time_finished\": \"1212018372.3366\",\n                \"started\": true,\n                \"ss_data_score_round\": {\n                    \"id\": \"0018ed8c-2ec0-4992-ab6f-69e1f4eac4c6\",\n                    \"order\": \"1\",\n                    \"time_started\": \"1212018372.3366\",\n                    \"time_finished\": \"1212018372.3366\",\n                    \"started\": true,\n                    \"ss_data_score_style\": {\n                        \"id\": \"0018ed8c-2ec0-4992-ab6f-69e1f4eag9t0\",\n                        \"order\": \"1\",\n                        \"time_started\": \"1212018372.3366\",\n                        \"time_finished\": \"1212018372.3366\",\n                        \"started\": true\n                    }\n                }\n            }\n        },\n        {\n            \"id\": \"42c51902-d524-4dc9-95db-4846f0606441\",\n            \"ss_data_scores\":{\n                \"id\": \"0018ed8c-2ec0-4992-ab6f-69e1f4eab8c4\",\n                \"order\": \"2\",\n                \"time_started\": \"1212018372.3366\",\n                \"time_finished\": \"1212018372.3366\",\n                \"started\": true,\n                \"ss_data_score_rounds\": {\n                    \"id\": \"0018ed8c-2ec0-4992-ab6f-69e1f4eac4c9\",\n                    \"order\": \"2\",\n                    \"time_started\": \"1212018372.3366\",\n                    \"time_finished\": \"1212018372.3366\",\n                    \"started\": true,\n                    \"ss_data_score_styles\": {\n                        \"id\": \"0018ed8c-2ec0-4992-ab6f-69e1f4eag9a3\",\n                        \"order\": \"2\",\n                        \"time_started\": \"1212018372.3366\",\n                        \"time_finished\": \"1212018372.3366\",\n                        \"started\": true\n                    }\n                }\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[score]",
            "optional": false,
            "field": "Scores",
            "description": "<p>Array con los datos del ss_data_scores creado</p>"
          }
        ],
        "score": [
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_scores creado</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del mc/participante</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del juez que esta votando</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "total_battle",
            "description": "<p>El total de la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "has_replica",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla tiene réplica</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "judge_ur",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla se decide por el juez en la réplica</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "won",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante ganó la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "lost",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante perdió la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla se completó</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "partial",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si batalla está incompleta</p>"
          },
          {
            "group": "score",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>El orden con el que inicia un MC/Participante</p>"
          },
          {
            "group": "score",
            "type": "Number",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al iniciar un score</p>"
          },
          {
            "group": "score",
            "type": "Number",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finalizar un score</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si batalla está iniciada</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "finished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si batalla está terminada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nstatus: \"success\",\ndata:[\n    {\n        \"id\": \"0018ed8c-2ec0-4992-ab6f-69e1f4eab8b9\",\n        \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n        \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n        \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n        \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n        \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n        \"total_battle\": 0,\n        \"has_replica\": \"false\",\n        \"judge_ur\": false,\n        \"won\": false,\n        \"lost\": false,\n        \"completed\": false,\n        \"partial\": false,\n        \"order\": \"1\",\n        \"time_started\": \"1212018372.3366\",\n        \"time_finished\": \"1212018372.3366\",\n        \"started\": true,\n        \"finished\": false\n\n    },\n    {\n        \"id\": \"0018ed8c-2ec0-4992-ab6f-69e1f4eab8b9\",\n        \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n        \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n        \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n        \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606421\",\n        \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n        \"total_battle\": 0,\n        \"has_replica\": \"false\",\n        \"judge_ur\": false,\n        \"won\": false,\n        \"lost\": false,\n        \"completed\": false,\n        \"partial\": false,\n        \"order\": \"2\",\n        \"time_started\": \"1212018372.3367\",\n        \"time_finished\": \"1212018372.3367\",\n        \"started\": true,\n        \"finished\": false\n\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Mensaje Personalizado del tipo de error de validación</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Solo los usuarios registrados pueden acceder</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiKeyNotFound",
            "description": "<p>El <code>token</code> no coincide con un usuario</p>"
          }
        ],
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "Error",
            "description": "<p>de servidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el api-key.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El api-key recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-events/Front/ApiEventsController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/battle/set-order-freestylers/:event/:phase/:judge/:battle"
      }
    ]
  },
  {
    "type": "post",
    "url": "/battle/set-finished-scores/:event/:phase/:judge",
    "title": "3.4.- Finalizar un Score, Round o Style",
    "version": "1.0.0",
    "name": "setPerFinishedScores",
    "group": "3.-_Batallas",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Finalizamos el registro de tipo ss_data_scores, ss_data_score_rounds o ss_data_score_styles, al finalizar la votación debe llegar un array con el modelo que es el nombre de la tabla a cerrar y participantes con cada participante, el id de la tabla (ss_data_scores, ss_data_score_rounds, ss_data_score_styles), el valor true en finished y el time_finished</p>",
    "examples": [
      {
        "title": "Cerramos un registro",
        "content": "curl -i http://ionic.urbanroosters.com/api/events/set-finished-scores/0f62308e-8245-4e2f-8e01-b0c0920be35a/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/019f7830-bb26-412d-ae6b-fe5bc4780357",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "api-key",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                      El api key que necesita para solicitar acceso",
          "content": " {\n  \"api-key\": \"sustituir por tu api key\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>El <code>uuid</code> de la fase</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "judge",
            "description": "<p>El <code>uuid</code> del juez</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>El nombre del modelo a cerrar, puede ser: ss_data_scores, ss_data_score_rounds, ss_data_score_styles</p>"
          },
          {
            "group": "body",
            "type": "Object[participant]",
            "optional": false,
            "field": "participants",
            "description": "<p>Array con los participantes del evento  que contiene id, el id del recored a cerrar y finished</p>"
          }
        ],
        "participant": [
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del mc/participante</p>"
          },
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "record_id",
            "description": "<p>El <code>uuid</code> del record a cambiar</p>"
          },
          {
            "group": "participant",
            "type": "Boolean",
            "optional": false,
            "field": "finished",
            "description": "<p>El valor de <code>true</code> o <code>false</code> para cerrar el registro</p>"
          },
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finalizar un record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"model\": \"ss_data_scores\",\n    \"participants\":[\n        {\n            \"id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n            \"record_id\": \"0018ed8c-2ec0-4992-ab6f-69e1f4eab8b9\",\n            \"finished\": true,\n            \"time_finished\":\"1212018372.3366\"\n        },\n        {\n            \"id\": \"349a1e2f-46a3-4fc0-a372-24596faf8328\",\n            \"record_id\": \"3325709f-078b-43c6-b48f-28427ae58638\",\n            \"finished\": true,\n            \"time_finished\":\"1212018372.3366\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[score]",
            "optional": false,
            "field": "Scores",
            "description": "<p>Array con los datos del ss_data_scores creado</p>"
          }
        ],
        "score": [
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_scores creado</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del mc/participante</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del juez que esta votando</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "total_battle",
            "description": "<p>El total de la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "has_replica",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla tiene réplica</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "judge_ur",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla se decide por el juez en la réplica</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "won",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante ganó la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "lost",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante perdió la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla se completó</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "partial",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si batalla está incompleta</p>"
          },
          {
            "group": "score",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>El orden con el que inicia un MC/Participante</p>"
          },
          {
            "group": "score",
            "type": "Number",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al iniciar una batalla/round/style</p>"
          },
          {
            "group": "score",
            "type": "Number",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finalizar una batalla/round/style</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si batalla está iniciada</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "finished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si batalla está terminada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nstatus: \"success\",\ndata:[\n    \"42c51902-d524-4dc9-95db-4846f0606420\":{\n        \"id\": \"0018ed8c-2ec0-4992-ab6f-69e1f4eab8b9\",\n        \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n        \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n        \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n        \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n        \"total_battle\": 0,\n        \"has_replica\": \"false\",\n        \"judge_ur\": false,\n        \"won\": false,\n        \"lost\": false,\n        \"completed\": false,\n        \"partial\": false,\n        \"order\": \"1\",\n        \"time_started\": \"1212018372.3366\",\n        \"time_finished\": \"1212018372.3366\",\n        \"started\": true,\n        \"finished\": true\n    },\n    \"42c51902-d524-4dc9-95db-4846f0606421\":{\n        \"id\": \"0018ed8c-2ec0-4992-ab6f-69e1f4eab8b9\",\n        \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n        \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n        \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606421\",\n        \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n        \"total_battle\": 0,\n        \"has_replica\": \"false\",\n        \"judge_ur\": false,\n        \"won\": false,\n        \"lost\": false,\n        \"completed\": false,\n        \"partial\": false,\n        \"order\": \"2\",\n        \"time_started\": \"1212018372.3366\",\n        \"time_finished\": \"1212018372.3366\",\n        \"started\": true,\n        \"finished\": true\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Mensaje Personalizado del tipo de error de validación</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Solo los usuarios registrados pueden acceder</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiKeyNotFound",
            "description": "<p>El <code>token</code> no coincide con un usuario</p>"
          }
        ],
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "Error",
            "description": "<p>de servidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el api-key.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El api-key recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-events/Front/ApiEventsController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/battle/set-finished-scores/:event/:phase/:judge"
      }
    ]
  },
  {
    "type": "post",
    "url": "/battle/set-round-replica/:event/:phase/:judge/:battle",
    "title": "3.3.-Determina el ganador y perdedor de una réplica",
    "version": "1.0.0",
    "name": "setRoundReplica",
    "group": "3.-_Batallas",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Guardamos el ganador y perdedor de un round réplica para lo cual el endpoint solicita un array participantes con los datos de cada MC de la batalla con el id del round y la bandera si gano o perdió en true</p>",
    "examples": [
      {
        "title": "Determina un ganador o perdedor de una réplica",
        "content": "curl -i http://ionic.urbanroosters.com/api/battle/set-round-replica/0f62308e-8245-4e2f-8e01-b0c0920be35a/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/019f7830-bb26-412d-ae6b-fe5bc4780357/9e97ca3e-d2a4-4bcc-84fe-a2a37a24e093",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "api-key",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                      El api key que necesita para solicitar acceso",
          "content": " {\n  \"api-key\": \"sustituir por tu api key\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>El <code>uuid</code> de la fase</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "judge",
            "description": "<p>El <code>uuid</code> del juez</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "battle",
            "description": "<p>El <code>uuid</code> de la batalla</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "Object[participant]",
            "optional": false,
            "field": "participants",
            "description": "<p>Array con los participantes del evento  que contiene id y order</p>"
          }
        ],
        "participant": [
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del mc/participante</p>"
          },
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> ss_data_scores</p>"
          },
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> ss_data_score_rounds</p>"
          },
          {
            "group": "participant",
            "type": "Number",
            "optional": false,
            "field": "won",
            "description": "<p>El valor de <code>true</code> o <code>false</code> para indicar que un MC/Participante ganó</p>"
          },
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "lost",
            "description": "<p>El valor de <code>true</code> o <code>false</code> para indicar que un MC/Participante perdió una batalla</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"participants\":[\n        {\n            \"id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n            \"ss_data_scores_id\": \"2c51902-d524-4dc9-95db-4846f0606410\",\n            \"ss_data_score_rounds_id\": \"fda7cdcb-8ee7-48a4-8855-776237749c78\",\n            \"won\": false,\n            \"lost\": true\n        },\n        {\n            \"id\": \"42c51902-d524-4dc9-95db-4846f0606421\",\n            \"ss_data_scores_id\": \"2c51902-d524-4dc9-95db-4846f0606411\",\n            \"ss_data_score_rounds_id\": \"fda7cdcb-8ee7-48a4-8855-776237749c54\",\n            \"won\": true,\n            \"lost\": false\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[score]",
            "optional": false,
            "field": "Scores",
            "description": "<p>Array con los datos del ss_data_scores creado</p>"
          }
        ],
        "score": [
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_scores creado</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del mc/participante</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del round</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del juez que esta votando</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "total_battle",
            "description": "<p>El total de la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "has_replica",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla tiene réplica</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "judge_ur",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla se decide por el juez en la réplica</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "won",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante ganó la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "lost",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante perdió la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla se completó</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "partial",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si batalla está incompleta</p>"
          },
          {
            "group": "score",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>El orden con el que inicia un MC/Participante</p>"
          },
          {
            "group": "score",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al hacer un tap</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si batalla está iniciada</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "finished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si batalla está terminada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nstatus: \"success\",\ndata:[\n        {\n            \"id\": \"0018ed8c-2ec0-4992-ab6f-69e1f4eab8b9\",\n            \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n            \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n            \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n            \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n            \"ss_data_score_rounds_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n            \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n            \"total_battle\": 0,\n            \"has_replica\": \"false\",\n            \"judge_ur\": false,\n            \"won\": false,\n            \"lost\": false,\n            \"completed\": false,\n            \"partial\": false,\n            \"order\": \"1\",\n            \"time\": \"1212018372.3366\",\n            \"started\": true,\n            \"finished\": false\n        },\n        {\n            \"id\": \"0018ed8c-2ec0-4992-ab6f-69e1f4eab8b9\",\n            \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n            \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n            \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n            \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606421\",\n            \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n            \"total_battle\": 0,\n            \"has_replica\": \"false\",\n            \"judge_ur\": false,\n            \"won\": false,\n            \"lost\": false,\n            \"completed\": false,\n            \"partial\": false,\n            \"order\": \"2\",\n            \"time\": \"1212018372.3367\",\n            \"started\": true,\n            \"finished\": false\n        }\n    ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Mensaje Personalizado del tipo de error de validación</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Solo los usuarios registrados pueden acceder</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiKeyNotFound",
            "description": "<p>El <code>token</code> no coincide con un usuario</p>"
          }
        ],
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "Error",
            "description": "<p>de servidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el api-key.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El api-key recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-events/Front/ApiEventsController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/battle/set-round-replica/:event/:phase/:judge/:battle"
      }
    ]
  },
  {
    "type": "get",
    "url": "/results/get-result-battle/:event/:phase/:judge/:battle",
    "title": "4.1.- Obtiene los resultados de una batalla por juez",
    "version": "1.0.0",
    "name": "getResultBattle",
    "group": "4.-_Resultados",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Obtiene el total de una batalla por juez y el resultado esta en un array para cada participante en el caso de replica esta la bandera réplica</p>",
    "examples": [
      {
        "title": "Obtiene los resultados de una batalla por juez",
        "content": "curl -i http://ionic.urbanroosters.com/api/results/get-result-battle/851d8e82-9131-4b34-ad9f-df79b71ef678/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/6e0d493d-c68b-427c-81d7-6b6021a5544c/fd9a1418-d1ab-4813-8f7d-3423c9adc11b",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "api-key",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                      El api key que necesita para solicitar acceso",
          "content": " {\n  \"api-key\": \"sustituir por tu api key\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>El <code>uuid</code> de la fase</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "judge",
            "description": "<p>El <code>uuid</code> del juez</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "battle",
            "description": "<p>El <code>uuid</code> de la batalla</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[score]",
            "optional": false,
            "field": "Scores",
            "description": "<p>Array con los datos del ss_data_scores</p>"
          }
        ],
        "score": [
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/Participante</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "total_battle",
            "description": "<p>El total de la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "won",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante ganó la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "lost",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante perdió la batalla</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nstatus: \"success\",\ndata:[\n    {\n        \"participants_id\": \"76a3c468-f833-4f83-b81c-d9a619cafb77\",\n        \"ss_data_scores_id\": \"8da5e391-f976-4859-b20a-ad9ccfa2d30a\",\n        \"total_battle\": 115,\n        \"won\": 1,\n        \"lost\": 0\n    },\n    {\n        \"participants_id\": \"568b8217-884f-46bc-9cc9-ad9cc6d7ec9b\",\n        \"ss_data_scores_id\": \"b8024511-2629-4bdc-914a-c6a35357ab0d\",\n        \"total_battle\": 113.5,\n        \"won\": 0,\n        \"lost\": 1\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Mensaje Personalizado del tipo de error de validación</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Solo los usuarios registrados pueden acceder</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiKeyNotFound",
            "description": "<p>El <code>token</code> no coincide con un usuario</p>"
          }
        ],
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "Error",
            "description": "<p>de servidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el api-key.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El api-key recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-events/Front/ApiEventsController.php",
    "groupTitle": "4.-_Resultados",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/results/get-result-battle/:event/:phase/:judge/:battle"
      }
    ]
  },
  {
    "type": "get",
    "url": "/results/get-result-replica/:event/:phase/:judge/:battle",
    "title": "4.2.- Devuelve los resultados de una réplica",
    "version": "1.0.0",
    "name": "getResultReplica",
    "group": "4.-_Resultados",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Obtiene el total del round réplica de una batalla por juez y el resultado esta en un array por cada participante en el caso de replica esta la bandera réplica</p>",
    "examples": [
      {
        "title": "Obtiene los resultados de una batalla por juez",
        "content": "curl -i http://ionic.urbanroosters.com/api/battle/get-result-replica/5ff887b7-62a5-4200-b90d-66eb08bd6676/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/300122ff-7b5e-4d0f-b679-675bdbf59b3b/ac9174c7-304e-4a5a-b6be-268714e0f779",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "api-key",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                      El api key que necesita para solicitar acceso",
          "content": " {\n  \"api-key\": \"sustituir por tu api key\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>El <code>uuid</code> de la fase</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "judge",
            "description": "<p>El <code>uuid</code> del juez</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "battle",
            "description": "<p>El <code>uuid</code> de la batalla</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[score]",
            "optional": false,
            "field": "Scores",
            "description": "<p>Array con los datos del ss_data_scores</p>"
          }
        ],
        "score": [
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/Participante</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "total_battle",
            "description": "<p>El total de la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "won",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante ganó la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "lost",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante perdió la batalla</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nstatus: \"success\",\ndata:[\n    {\n        \"participants_id\": \"76a3c468-f833-4f83-b81c-d9a619cafb77\",\n        \"ss_data_scores_id\": \"8da5e391-f976-4859-b20a-ad9ccfa2d30a\",\n        \"ss_data_score_rounds_id\": \"f47a2a5a-7bb4-49b1-886d-5450e9be0dcc\",\n        \"total_replica\": 13\n    },\n    {\n        \"participants_id\": \"568b8217-884f-46bc-9cc9-ad9cc6d7ec9b\",\n        \"ss_data_scores_id\": \"b8024511-2629-4bdc-914a-c6a35357ab0d\",\n        \"ss_data_score_rounds_id\": \"0a432b92-7a3b-4d2f-922f-dbc2d0a39e48\",\n        \"total_replica\": 12.5\n    },\n    \"replica\": true\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Mensaje Personalizado del tipo de error de validación</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Solo los usuarios registrados pueden acceder</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiKeyNotFound",
            "description": "<p>El <code>token</code> no coincide con un usuario</p>"
          }
        ],
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "Error",
            "description": "<p>de servidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el api-key.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El api-key recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-events/Front/ApiEventsController.php",
    "groupTitle": "4.-_Resultados",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/results/get-result-replica/:event/:phase/:judge/:battle"
      }
    ]
  },
  {
    "type": "get",
    "url": "/results/get-score-battle/:event/:phase/:judge/:battle",
    "title": "4.3.- Devuelve los datos de los scores de una batalla",
    "version": "1.0.0",
    "name": "getResultReplica",
    "group": "4.-_Resultados",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Obtiene los datos del score de una batalla, este endpoint esta pensado para cuando se cambia de dispositivo se debe hacer la consulta a este enpoint para tener todos los scores de la tabla ss_data_scores con sus relaciones con ss_data_score_rounds, ss_data_score_styles, ss_data_score_style_patrons, ss_data_score_style_performances</p>",
    "examples": [
      {
        "title": "Obtiene los resultados de una batalla por juez",
        "content": "curl -i http://ionic.urbanroosters.com/api/result/get-score-battle/5ff887b7-62a5-4200-b90d-66eb08bd6676/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/300122ff-7b5e-4d0f-b679-675bdbf59b3b/ac9174c7-304e-4a5a-b6be-268714e0f779",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "api-key",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                      El api key que necesita para solicitar acceso",
          "content": " {\n  \"api-key\": \"sustituir por tu api key\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>El <code>uuid</code> de la fase</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "judge",
            "description": "<p>El <code>uuid</code> del juez</p>"
          },
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "battle",
            "description": "<p>El <code>uuid</code> de la batalla</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "Object[battle]",
            "optional": false,
            "field": "Battle",
            "description": "<p>Array con los datos de los participantes de una batalla</p>"
          }
        ],
        "battle": [
          {
            "group": "battle",
            "type": "Object[scores]",
            "optional": false,
            "field": "Scores",
            "description": "<p>Array con los datos del ss_data_scores de cada MC/Participante</p>"
          }
        ],
        "score": [
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_scores</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "score",
            "type": "Number",
            "optional": false,
            "field": "total_battle",
            "description": "<p>El valor del total de la batalla para un MC/Participante</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "has_replica",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla tiene réplica</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "judge_ur",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el juez ingreso un ganador manual</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "won",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante ganó la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "lost",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante perdió la batalla</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla esta completa</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "partial",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla aún no termina o esta incompleta</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "finnished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al iniciar una batalla</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finalizar una batalla</p>"
          },
          {
            "group": "score",
            "type": "Object[score_rounds]",
            "optional": false,
            "field": "score_rounds",
            "description": "<p>Array con los datos del ss_data_score_rounds</p>"
          }
        ],
        "score_rounds": [
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores padre (Tabla relacionada)</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "ss_round_structures_id",
            "description": "<p>El <code>uuid</code> del ss_round_structures (Es la estructura del round)</p>"
          },
          {
            "group": "score_rounds",
            "type": "Number",
            "optional": false,
            "field": "total_round",
            "description": "<p>El valor del total del round para un round</p>"
          },
          {
            "group": "score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "is_replica",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el round es de tipo réplica o no.</p>"
          },
          {
            "group": "score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "won",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante ganó la batalla</p>"
          },
          {
            "group": "score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "lost",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante perdió la batalla</p>"
          },
          {
            "group": "score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "finnished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al iniciar una batalla</p>"
          },
          {
            "group": "score_rounds",
            "type": "String",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finalizar una batalla</p>"
          },
          {
            "group": "score_rounds",
            "type": "Object[score_styles]",
            "optional": false,
            "field": "score_styles",
            "description": "<p>Array con los datos del ss_data_score_styles</p>"
          }
        ],
        "score_styles": [
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores (Tabla relacionada)</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds (Tabla relacionada)</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles (Tabla relacionada)</p>"
          },
          {
            "group": "score_styles",
            "type": "Number",
            "optional": false,
            "field": "total_pattern",
            "description": "<p>El valor del total de los patrones para un style</p>"
          },
          {
            "group": "score_styles",
            "type": "Number",
            "optional": false,
            "field": "total_performances",
            "description": "<p>El valor del total de los performances para un style</p>"
          },
          {
            "group": "score_styles",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de la suma de los dos campos anteriores para obtener el total de un style</p>"
          },
          {
            "group": "score_styles",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "score_styles",
            "type": "Boolean",
            "optional": false,
            "field": "finnished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al iniciar una batalla</p>"
          },
          {
            "group": "score_styles",
            "type": "String",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finalizar una batalla</p>"
          },
          {
            "group": "score_styles",
            "type": "Object[score_patterns]",
            "optional": false,
            "field": "score_patterns",
            "description": "<p>Array con los datos del ss_data_score_patterns</p>"
          },
          {
            "group": "score_styles",
            "type": "Object[score_performances]",
            "optional": false,
            "field": "score_perfomances",
            "description": "<p>Array con los datos del ss_data_score_style_performaces</p>"
          }
        ],
        "score_patterns": [
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style_patrons</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores (Tabla relacionada)</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds (Tabla relacionada)</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles (Tabla relacionada)</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_styles_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles (Tabla relacionada)</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "ss_patterns_styles_id",
            "description": "<p>El <code>uuid</code> del ss_patterns_styles (Tabla relacionada)</p>"
          },
          {
            "group": "score_patterns",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>El valor del patron al dar tab en la app</p>"
          },
          {
            "group": "score_patterns",
            "type": "Boolean",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el patron tiene punto extra</p>"
          },
          {
            "group": "score_patterns",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de la suma de los dos campos anteriores para obtener el total de un patron</p>"
          },
          {
            "group": "score_patterns",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "score_patterns",
            "type": "Boolean",
            "optional": false,
            "field": "finished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "time_pattern",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al realizar un tab en un patron</p>"
          },
          {
            "group": "score_patterns",
            "type": "String",
            "optional": false,
            "field": "time_extra",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al realizar un tab en el extra de un patron</p>"
          }
        ],
        "score_performances": [
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style_performaces</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores (Tabla relacionada)</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds (Tabla relacionada)</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles (Tabla relacionada)</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_styles_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles (Tabla relacionada)</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "ss_performance_id",
            "description": "<p>El <code>uuid</code> del ss_performance (Tabla relacionada)</p>"
          },
          {
            "group": "score_performances",
            "type": "number",
            "optional": false,
            "field": "value",
            "description": "<p>El valor del performance al dar tab en la app</p>"
          },
          {
            "group": "score_performances",
            "type": "Boolean",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el performance tiene punto extra</p>"
          },
          {
            "group": "score_performances",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de la suma de los dos campos anteriores para obtener el total de un performance</p>"
          },
          {
            "group": "score_performances",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "score_performances",
            "type": "Boolean",
            "optional": false,
            "field": "finished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "time_performance",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al realizar un tab en un performance</p>"
          },
          {
            "group": "score_performances",
            "type": "String",
            "optional": false,
            "field": "time_extra",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al realizar un tab en el extra de un performance</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n\"status\": \"success\",\n\"data\": [\n    {\n       \"id\": \"8da5e391-f976-4859-b20a-ad9ccfa2d30a\",\n       \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n       \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n       \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n       \"participants_id\": \"76a3c468-f833-4f83-b81c-d9a619cafb77\",\n       \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n       \"total_battle\": 115,\n       \"has_replica\": 1,\n       \"judge_ur\": 0,\n       \"won\": 1,\n       \"lost\": 0,\n       \"completed\": 1,\n       \"partial\": 0,\n       \"order\": null,\n       \"created_at\": \"2020-10-17T22:56:19.000000Z\",\n       \"updated_at\": \"2020-12-21T22:58:40.000000Z\",\n       \"deleted_at\": null,\n       \"params\": null,\n       \"log\": null,\n       \"started\": 0,\n       \"finished\": 0,\n       \"time_started\": null,\n       \"time_finished\": \"1212018372.3366\",\n       \"score_rounds\": [\n           {\n               \"id\": \"0a432b92-7a3b-4d2f-922f-dbc2d0a39e48\",\n               \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n               \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n               \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n               \"participants_id\": \"76a3c468-f833-4f83-b81c-d9a619cafb77\",\n               \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n               \"ss_data_scores_id\": \"8da5e391-f976-4859-b20a-ad9ccfa2d30a\",\n               \"ss_round_structures_id\": \"332cd557-ec53-4db6-bf83-ab9467714e40\",\n               \"total_round\": 12.5,\n               \"is_replica\": 1,\n               \"order\": null,\n               \"created_at\": \"2020-10-17T23:23:16.000000Z\",\n               \"updated_at\": \"2020-12-21T21:20:52.000000Z\",\n               \"deleted_at\": null,\n               \"params\": null,\n               \"log\": null,\n               \"won\": 1,\n               \"lost\": 0,\n               \"started\": 0,\n               \"finished\": 0,\n               \"time_started\": null,\n               \"time_finished\": null,\n               \"score_styles\": [\n                   {\n                       \"id\": \"a40ee54d-f638-4f14-9620-71e7f24f6f2e\",\n                       \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n                       \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                       \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n                       \"participants_id\": \"76a3c468-f833-4f83-b81c-d9a619cafb77\",\n                       \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n                       \"ss_data_scores_id\": \"8da5e391-f976-4859-b20a-ad9ccfa2d30a\",\n                       \"ss_data_score_rounds_id\": \"0a432b92-7a3b-4d2f-922f-dbc2d0a39e48\",\n                       \"ss_styles_id\": \"80c8514a-d278-4af6-b76f-684ada4cef96\",\n                       \"total_pattern\": 12.5,\n                       \"total_performances\": 0,\n                       \"total\": 12.5,\n                       \"order\": 1,\n                       \"created_at\": \"2020-10-17T23:23:16.000000Z\",\n                       \"updated_at\": \"2020-10-17T23:23:16.000000Z\",\n                       \"deleted_at\": null,\n                       \"params\": null,\n                       \"log\": null,\n                       \"started\": 0,\n                       \"finished\": 0,\n                       \"time_started\": null,\n                       \"time_finished\": null,\n                       \"score_patterns\": [\n                           {\n                               \"id\": \"1e0e440f-6c68-45a0-8a28-b49f8b54d4a9\",\n                               \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n                               \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                               \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n                               \"participants_id\": \"76a3c468-f833-4f83-b81c-d9a619cafb77\",\n                               \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n                               \"ss_data_scores_id\": \"8da5e391-f976-4859-b20a-ad9ccfa2d30a\",\n                               \"ss_data_score_rounds_id\": \"0a432b92-7a3b-4d2f-922f-dbc2d0a39e48\",\n                               \"ss_styles_id\": \"80c8514a-d278-4af6-b76f-684ada4cef96\",\n                               \"ss_data_score_styles_id\": \"a40ee54d-f638-4f14-9620-71e7f24f6f2e\",\n                               \"ss_patterns_styles_id\": 55,\n                               \"value\": 2.5,\n                               \"extra\": 0,\n                               \"total\": 2.5,\n                               \"order\": null,\n                               \"created_at\": \"2020-10-17T23:23:16.000000Z\",\n                               \"updated_at\": \"2020-10-17T23:23:16.000000Z\",\n                               \"deleted_at\": null,\n                               \"params\": null,\n                               \"log\": null,\n                               \"time_pattern\": null,\n                               \"time_extra\": null,\n                               \"started\": 0,\n                               \"finished\": 0\n                           },\n                           ...\n                       ],\n                       \"score_performances\": [\n                           {\n                               \"id\": \"2f53f63d-5058-4b1c-935a-693e0b002646\",\n                               \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n                               \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                               \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n                               \"participants_id\": \"76a3c468-f833-4f83-b81c-d9a619cafb77\",\n                               \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n                               \"ss_data_scores_id\": \"8da5e391-f976-4859-b20a-ad9ccfa2d30a\",\n                               \"ss_data_score_rounds_id\": \"0a432b92-7a3b-4d2f-922f-dbc2d0a39e48\",\n                               \"ss_styles_id\": \"80c8514a-d278-4af6-b76f-684ada4cef96\",\n                               \"ss_data_score_styles_id\": \"a40ee54d-f638-4f14-9620-71e7f24f6f2e\",\n                               \"ss_performance_id\": \"e47148d0-dbb7-496f-85d7-933bf060c0de\",\n                               \"value\": 0,\n                               \"extra\": 0,\n                               \"total\": 0,\n                               \"order\": null,\n                               \"created_at\": \"2020-10-17T23:23:16.000000Z\",\n                               \"updated_at\": \"2020-10-17T23:23:16.000000Z\",\n                               \"deleted_at\": null,\n                               \"params\": null,\n                               \"log\": null,\n                               \"time_performance\": null,\n                               \"time_extra\": null,\n                               \"started\": 0,\n                               \"finished\": 0\n                           },\n                           ...\n                       ]\n                   },\n                   ...\n               ]\n           },\n           ...\n       ]\n    },\n    {\n        \"id\": \"b8024511-2629-4bdc-914a-c6a35357ab0d\",\n        \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n        \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n        \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n        \"participants_id\": \"568b8217-884f-46bc-9cc9-ad9cc6d7ec9b\",\n        \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n        \"total_battle\": 113.5,\n        \"has_replica\": 1,\n        \"judge_ur\": 0,\n        \"won\": 0,\n        \"lost\": 1,\n        \"completed\": 1,\n        \"partial\": 0,\n        \"order\": null,\n        \"created_at\": \"2020-10-17T22:56:20.000000Z\",\n        \"updated_at\": \"2020-12-21T22:58:40.000000Z\",\n        \"deleted_at\": null,\n        \"params\": null,\n        \"log\": null,\n        \"started\": 0,\n        \"finished\": 0,\n        \"time_started\": null,\n        \"time_finished\": \"1212018372.3366\",\n        \"score_rounds\": [\n            {\n                \"id\": \"34c50526-8547-4441-8383-4c4d31ca504c\",\n                \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n                \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n                \"participants_id\": \"568b8217-884f-46bc-9cc9-ad9cc6d7ec9b\",\n                \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n                \"ss_data_scores_id\": \"b8024511-2629-4bdc-914a-c6a35357ab0d\",\n                \"ss_round_structures_id\": \"d00cf41c-ff94-4482-ad73-cb13da9813f8\",\n                \"total_round\": 16,\n                \"is_replica\": 0,\n                \"order\": null,\n                \"created_at\": \"2020-10-17T23:00:41.000000Z\",\n                \"updated_at\": \"2020-10-17T23:02:36.000000Z\",\n                \"deleted_at\": null,\n                \"params\": null,\n                \"log\": null,\n                \"won\": 0,\n                \"lost\": 0,\n                \"started\": 0,\n                \"finished\": 0,\n                \"time_started\": null,\n                \"time_finished\": null,\n                \"score_styles\": [\n                    {\n                        \"id\": \"1566c813-8f1f-4f2a-b9f4-f6111158dce5\",\n                        \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n                        \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                        \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n                        \"participants_id\": \"568b8217-884f-46bc-9cc9-ad9cc6d7ec9b\",\n                        \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n                        \"ss_data_scores_id\": \"b8024511-2629-4bdc-914a-c6a35357ab0d\",\n                        \"ss_data_score_rounds_id\": \"34c50526-8547-4441-8383-4c4d31ca504c\",\n                        \"ss_styles_id\": \"25f93aa6-5c95-46fa-b122-ad11947b80ff\",\n                        \"total_pattern\": 8,\n                        \"total_performances\": 0,\n                        \"total\": 8,\n                        \"order\": 1,\n                        \"created_at\": \"2020-10-17T23:02:36.000000Z\",\n                        \"updated_at\": \"2020-10-17T23:02:36.000000Z\",\n                        \"deleted_at\": null,\n                        \"params\": null,\n                        \"log\": null,\n                        \"started\": 0,\n                        \"finished\": 0,\n                        \"time_started\": null,\n                        \"time_finished\": null,\n                        \"score_patterns\": [\n                            {\n                               \"id\": \"25daffeb-8b80-4eb4-afc4-7dd2b9cc0eb0\",\n                               \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n                               \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                               \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n                               \"participants_id\": \"568b8217-884f-46bc-9cc9-ad9cc6d7ec9b\",\n                               \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n                               \"ss_data_scores_id\": \"b8024511-2629-4bdc-914a-c6a35357ab0d\",\n                               \"ss_data_score_rounds_id\": \"34c50526-8547-4441-8383-4c4d31ca504c\",\n                               \"ss_styles_id\": \"25f93aa6-5c95-46fa-b122-ad11947b80ff\",\n                               \"ss_data_score_styles_id\": \"1566c813-8f1f-4f2a-b9f4-f6111158dce5\",\n                               \"ss_patterns_styles_id\": 18,\n                               \"value\": 2,\n                               \"extra\": 0,\n                               \"total\": 2,\n                               \"order\": null,\n                               \"created_at\": \"2020-10-17T23:02:36.000000Z\",\n                               \"updated_at\": \"2020-10-17T23:02:36.000000Z\",\n                               \"deleted_at\": null,\n                               \"params\": null,\n                               \"log\": null,\n                               \"time_pattern\": null,\n                               \"time_extra\": null,\n                               \"started\": 0,\n                               \"finished\": 0\n                            },\n                            ...\n                        ],\n                        \"score_performances\": [\n                            {\n                               \"id\": \"9597bcb7-930d-4676-adae-0601796e7352\",\n                               \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n                               \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                               \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n                               \"participants_id\": \"568b8217-884f-46bc-9cc9-ad9cc6d7ec9b\",\n                               \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n                               \"ss_data_scores_id\": \"b8024511-2629-4bdc-914a-c6a35357ab0d\",\n                               \"ss_data_score_rounds_id\": \"34c50526-8547-4441-8383-4c4d31ca504c\",\n                               \"ss_styles_id\": \"25f93aa6-5c95-46fa-b122-ad11947b80ff\",\n                               \"ss_data_score_styles_id\": \"1566c813-8f1f-4f2a-b9f4-f6111158dce5\",\n                               \"ss_performance_id\": \"e5efeac1-94cf-45f4-8aa2-275a1806826f\",\n                               \"value\": 0,\n                               \"extra\": 0,\n                               \"total\": 0,\n                               \"order\": null,\n                               \"created_at\": \"2020-10-17T23:02:36.000000Z\",\n                               \"updated_at\": \"2020-10-17T23:02:36.000000Z\",\n                               \"deleted_at\": null,\n                               \"params\": null,\n                               \"log\": null,\n                               \"time_perfromance\": null,\n                               \"time_extra\": null,\n                               \"started\": 0,\n                               \"finished\": 0\n                            },\n                            ...\n                        ]\n                    },\n                    ...\n                ]\n            },\n            ...\n        ]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Mensaje Personalizado del tipo de error de validación</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Solo los usuarios registrados pueden acceder</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ApiKeyNotFound",
            "description": "<p>El <code>token</code> no coincide con un usuario</p>"
          }
        ],
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "Error",
            "description": "<p>de servidor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el api-key.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El api-key recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-events/Front/ApiEventsController.php",
    "groupTitle": "4.-_Resultados",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/results/get-score-battle/:event/:phase/:judge/:battle"
      }
    ]
  }
] });
