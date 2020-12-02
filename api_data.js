define({ "api": [
  {
    "type": "get",
    "url": "/events",
    "title": "1.- Listar Eventos",
    "version": "1.0.0",
    "name": "GetEvents",
    "group": "Eventos",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Obtiene todos los eventos del sistema</p>",
    "examples": [
      {
        "title": "Ejemplo como se realiza la petición",
        "content": "curl -i http://ionic.urbanroosters.com/api/events",
        "type": "curl"
      }
    ],
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[   {\n        'id':'0f62308e-8245-4e2f-8e01-b0c0920be35a',\n        'fd_calendars_id':'d93b4c9c-a4a5-4ca1-8f7e-8023554a28bd',\n        'ss_scoring_systems_id':'5a2d413d-0e43-4d35-b5a8-cb83fe952654',\n        'fd_event_types_id':'a7ee229d-9a52-4af3-9b8f-2ef73ed6e90f',\n        'name':'Jornada Esp 1',\n        'slug':'jornada-esp-1',\n        'avatar': 'images/events/jornada-esp-5_events.png',\n        'cover': 'images/events/jornada-esp-5_events.png',\n        'description':'evento',\n        'start_date_event': '2020-07-11',\n        'ending_date_event': '2020-07-11',\n        'start_time':'00:00:00',\n        'ending_time':'00:00:00',\n        'limit':10,\n        'max_judges':5,\n        'diff_replica':5,\n        'max_replica': 2,\n        'partial': 0,\n        'completed':1\n    },\n    ...\n]",
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
    "groupTitle": "Eventos",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/events"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events/:judge/:event",
    "title": "3.-Evento completo de un juez",
    "version": "1.0.0",
    "name": "GetJudgeEvent",
    "group": "Eventos",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Obtiene todos los datos de un evento como son fases y batallas</p>",
    "examples": [
      {
        "title": "Obtiene todos los datos de un evento de un juez en concreto",
        "content": "curl -i http://ionic.urbanroosters.com/api/events/019f7830-bb26-412d-ae6b-fe5bc4780357/0f62308e-8245-4e2f-8e01-b0c0920be35a",
        "type": "curl"
      }
    ],
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
          "content": "HTTP/1.1 200 OK\n   {\n        \"id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n        \"fd_calendars_id\": \"d93b4c9c-a4a5-4ca1-8f7e-8023554a28bd\",\n        \"ss_scoring_systems_id\": \"5a2d413d-0e43-4d35-b5a8-cb83fe952654\",\n        \"fd_event_types_id\": \"a7ee229d-9a52-4af3-9b8f-2ef73ed6e90f\",\n        \"countries_id\": \"\",\n        \"states_id\": \"\",\n        \"cities_id\": \"\",\n        \"name\": \"Jornada Esp 1\",\n        \"sub_name\": null,\n        \"slug\": \"jornada-esp-1\",\n        \"avatar\": \"images/events/jornada-esp-5_events.png\",\n        \"cover\": \"images/events/jornada-esp-5_events.png\",\n        \"video\": null,\n        \"video_embed\": \"\",\n        \"introduction\": \"intro del evento\",\n        \"description\": \"descripci&oacute;n del evento\",\n        \"start_date_event\": \"2020-07-11\",\n        \"ending_date_event\": \"2020-07-11\",\n        \"start_time\": \"00:00:00\",\n        \"ending_time\": \"00:00:00\",\n        \"limit\": 10,\n        \"max_judges\": 5,\n        \"diff_replica\": 5,\n        \"max_replica\": 2,\n        \"partial\": 0,\n        \"completed\": 1,\n        \"phases\": [\n            {\n                \"id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                \"previous_phase_id\": null,\n                \"next_phase_id\": null,\n                \"name\": \"Jornada\",\n                \"slug\": \"jornada\",\n                \"avatar\": null,\n                \"cover\": null,\n                \"video\": null,\n                \"video_embed\": null,\n                \"introduction\": null,\n                \"description\": null,\n                \"battles\": [\n                    {\n                        \"id\": \"60399e46-f24e-42f2-bcf0-2de0739b5282\",\n                        \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                        \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                        \"fd_battle_types_id\": \"3e98efef-9f35-4e4a-88a8-f5f9589a0909\",\n                        \"name\": \"Bnet vs Errece\",\n                        \"slug\": \"bnet-vs-errece\",\n                        \"diff_replica\": 0,\n                        \"participants\": [\n                            {\n                               \"id\": \"cc19a9ef-77cb-45ee-819e-eaaf43bbe295\",\n                               \"role\": \"user\",\n                               \"username\": \"bnet\",\n                               \"email\": \"\",\n                               \"avatar\": \"images/profiles/bnet.jpg\"\n                             },\n                             {\n                                \"id\": \"d1823229-99a7-4fc9-93de-d496b4a97769\",\n                                \"role\": \"user\",\n                                \"username\": \"errece\",\n                                \"email\": \"\",\n                                \"avatar\": \"images/profiles/errece.jpg\"\n                            }\n                         ]\n                    },\n                    ...\n                ]\n            },\n            ...\n        ]\n    }",
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
    "groupTitle": "Eventos",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/events/:judge/:event"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events/:judge",
    "title": "2.-Listar eventos del juez",
    "version": "1.0.0",
    "name": "GetJudgeEvents",
    "group": "Eventos",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Obtiene los eventos a los que un juez esta asignado</p>",
    "examples": [
      {
        "title": "Obtiene todos los eventos de un juez",
        "content": "curl -i http://ionic.urbanroosters.com/api/events/019f7830-bb26-412d-ae6b-fe5bc4780357",
        "type": "curl"
      }
    ],
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[   {\n        'id':'0f62308e-8245-4e2f-8e01-b0c0920be35a',\n        'fd_calendars_id':'d93b4c9c-a4a5-4ca1-8f7e-8023554a28bd',\n        'ss_scoring_systems_id':'5a2d413d-0e43-4d35-b5a8-cb83fe952654',\n        'fd_event_types_id':'a7ee229d-9a52-4af3-9b8f-2ef73ed6e90f',\n        'name':'Jornada Esp 1',\n        'slug':'jornada-esp-1',\n        'avatar': 'images/events/jornada-esp-5_events.png',\n        'cover': 'images/events/jornada-esp-5_events.png',\n        'description':'evento',\n        'start_date_event': '2020-07-11',\n        'ending_date_event': '2020-07-11',\n        'start_time':'00:00:00',\n        'ending_time':'00:00:00',\n        'limit':10,\n        'max_judges':5,\n        'diff_replica':5,\n        'max_replica': 2,\n        'partial': 0,\n        'completed':1\n    },\n    ...\n]",
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
    "groupTitle": "Eventos",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/events/:judge"
      }
    ]
  }
] });
