define({ "api": [
  {
    "type": "post",
    "url": "/refresh-token",
    "title": "0.2 Refresh Token",
    "version": "1.0.0",
    "name": "refreshTokenAction",
    "group": "0.-_Signin",
    "description": "<p>Reinicia sesión con el refresh token obtenido en el proceso de inicio de sesión obteniendo así las nueva credenciales donde se incluye el nuevo id_token</p>",
    "examples": [
      {
        "title": "Ejemplo como se realiza la petición:",
        "content": "curl -i http://ionic.urbanroosters.com/api/refrech-token",
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
          "title": "Header-example                       El api key que necesita para solicitar acceso",
          "content": "{\n    \"api-key\": \"sustituir por tu api key\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "Object[refreshToken]",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Array con el token para reiniciar la sesión</p>"
          }
        ],
        "refreshToken": [
          {
            "group": "refreshToken",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>El token para reiniciar la sesión</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n    \"refreshToken\": \"AOvuKvTOqNmdaZzYpPSAN_7Dwd6FcP82Lo8t0TANqgeDxTftBzjC3wS_e87Wp0Ig5jeir-UjY-Jn0YuB-lTEAnaCDeHyB1doEEToekPlZgMrf04v8CJmCg_3qZK8sbOmbM8kX7QW-SNP4bo4WpE4VEHvHBLdcYwvE3A9sCUU1tvEVGYdgpAGMgy9qgXDDAlnMYnmYQfGg7-XohuLNVAodcbppGYsFxdJFw\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[refreshToken]",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Array con los datos para reiniciar la sesión</p>"
          }
        ],
        "refreshToken": [
          {
            "group": "refreshToken",
            "type": "String",
            "optional": false,
            "field": "token_type",
            "description": "<p>El tipo de token</p>"
          },
          {
            "group": "refreshToken",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>El token de acceso</p>"
          },
          {
            "group": "refreshToken",
            "type": "String",
            "optional": false,
            "field": "id_token",
            "description": "<p>El token del usuario</p>"
          },
          {
            "group": "refreshToken",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>El token para reiniciar la sesión</p>"
          },
          {
            "group": "refreshToken",
            "type": "String",
            "optional": false,
            "field": "expires_in",
            "description": "<p>El tiempo de duracion del token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     HTTP/1.1 200 OK\n     status: \"success\",\n{\n    \"token_type\": \"Bearer\",\n    \"access_token\": \"eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyYjkxODJiMWI0NmNiN2ZjN2MzMTFlZTgwMjFhZDY1MmVlMjc2MjIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdXItYWNjb3VudHMiLCJhdWQiOiJ1ci1hY2NvdW50cyIsImF1dGhfdGltZSI6MTYxMTI2ODQ4OSwidXNlcl9pZCI6IjkyYzk2MTViLTc0OWUtNGFkOS05NmM2LWFiNGEzZjRiNmU5NCIsInN1YiI6IjkyYzk2MTViLTc0OWUtNGFkOS05NmM2LWFiNGEzZjRiNmU5NCIsImlhdCI6MTYxMTMzNDAzMSwiZXhwIjoxNjExMzM3NjMxLCJlbWFpbCI6Im5vdmFfbWlnMjAyMUBob3RtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJub3ZhX21pZzIwMjFAaG90bWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.mp6jL9AorNngypyNm6JfRcGaaEtFItRP6gSee3IxyqS3OpDz_nX2UczeBuz7c0UgI0wmqvSYGZouq0K9992k7zV7tLRD1_5Y0Qfu9OO0nA7f-wXOVIa1omirTu5YQU-q2gJYR8V_fHTjb3N--Q1V1-jIzQthtehg67ZU9GtUM_scjbE81SpLb8SZ_UCk75XeVyCMIloKGdTLbn55JtUXKJpXry8XuksCxiI-5yLWMHU17zYg643DxW9-XEyusO2BmIPGyItl3SjOezHIArYKKzf6RBEOhpkNBICTx3exle5QSL62FDjV9Nbk6aN13c9Ycj4KsHFKaLL7s_untOJixg\",\n    \"id_token\": \"eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyYjkxODJiMWI0NmNiN2ZjN2MzMTFlZTgwMjFhZDY1MmVlMjc2MjIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdXItYWNjb3VudHMiLCJhdWQiOiJ1ci1hY2NvdW50cyIsImF1dGhfdGltZSI6MTYxMTI2ODQ4OSwidXNlcl9pZCI6IjkyYzk2MTViLTc0OWUtNGFkOS05NmM2LWFiNGEzZjRiNmU5NCIsInN1YiI6IjkyYzk2MTViLTc0OWUtNGFkOS05NmM2LWFiNGEzZjRiNmU5NCIsImlhdCI6MTYxMTMzNDAzMSwiZXhwIjoxNjExMzM3NjMxLCJlbWFpbCI6Im5vdmFfbWlnMjAyMUBob3RtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJub3ZhX21pZzIwMjFAaG90bWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.mp6jL9AorNngypyNm6JfRcGaaEtFItRP6gSee3IxyqS3OpDz_nX2UczeBuz7c0UgI0wmqvSYGZouq0K9992k7zV7tLRD1_5Y0Qfu9OO0nA7f-wXOVIa1omirTu5YQU-q2gJYR8V_fHTjb3N--Q1V1-jIzQthtehg67ZU9GtUM_scjbE81SpLb8SZ_UCk75XeVyCMIloKGdTLbn55JtUXKJpXry8XuksCxiI-5yLWMHU17zYg643DxW9-XEyusO2BmIPGyItl3SjOezHIArYKKzf6RBEOhpkNBICTx3exle5QSL62FDjV9Nbk6aN13c9Ycj4KsHFKaLL7s_untOJixg\",\n    \"refresh_token\": \"AOvuKvTOqNmdaZzYpPSAN_7Dwd6FcP82Lo8t0TANqgeDxTftBzjC3wS_e87Wp0Ig5jeir-UjY-Jn0YuB-lTEAnaCDeHyB1doEEToekPlZgMrf04v8CJmCg_3qZK8sbOmbM8kX7QW-SNP4bo4WpE4VEHvHBLdcYwvE3A9sCUU1tvEVGYdgpAGMgy9qgXDDAlnMYnmYQfGg7-XohuLNVAodcbppGYsFxdJFw\",\n    \"expires_in\": 3600\n}",
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
    "filename": "apps/acl/components/signin/Front/SigninApiController.php",
    "groupTitle": "0.-_Signin",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/refresh-token"
      }
    ]
  },
  {
    "type": "post",
    "url": "/signin",
    "title": "0.1 Inicio de sesion",
    "version": "1.0.0",
    "name": "signinAction",
    "group": "0.-_Signin",
    "description": "<p>Realiza el proceso de inicio de sesión, este proceso se realiza enviando el nombre de usuario y la contraseña</p>",
    "examples": [
      {
        "title": "Ejemplo como se realiza la petición:",
        "content": "curl -i http://ionic.urbanroosters.com/api/signin",
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
          "title": "Header-example                       El api key que necesita para solicitar acceso",
          "content": "{\n    \"api-key\": \"sustituir por tu api key\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "Object[signin]",
            "optional": false,
            "field": "signin",
            "description": "<p>Array con nombre de usuaio y contraseña</p>"
          }
        ],
        "signin": [
          {
            "group": "signin",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>El <code>username</code> nombre de usuario(juez)</p>"
          },
          {
            "group": "signin",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>El <code>password</code> clave o contraseña</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n    \"username\": \"nombre_de_usuario\",\n    \"password\": \"clave/contraseña\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[signin]",
            "optional": false,
            "field": "signin",
            "description": "<p>Array con los datos del signin</p>"
          }
        ],
        "signin": [
          {
            "group": "signin",
            "type": "String",
            "optional": false,
            "field": "token_type",
            "description": "<p>El tipo de token</p>"
          },
          {
            "group": "signin",
            "type": "String",
            "optional": false,
            "field": "id_token",
            "description": "<p>El token del usuario</p>"
          },
          {
            "group": "signin",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>El token para reiniciar la sesión</p>"
          },
          {
            "group": "signin",
            "type": "String",
            "optional": false,
            "field": "expires_in",
            "description": "<p>El tiempo de duración del token</p>"
          },
          {
            "group": "signin",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El id delusuario</p>"
          },
          {
            "group": "signin",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Nombre de usuario registrado</p>"
          },
          {
            "group": "signin",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>Nombre completo del usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     HTTP/1.1 200 OK\n     status: \"success\",\n{\n    \"token_type\": \"Bearer\",\n    \"access_token\": null,\n    \"id_token\": \"eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyYjkxODJiMWI0NmNiN2ZjN2MzMTFlZTgwMjFhZDY1MmVlMjc2MjIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdXItYWNjb3VudHMiLCJhdWQiOiJ1ci1hY2NvdW50cyIsImF1dGhfdGltZSI6MTYxMTMzMTUxMSwidXNlcl9pZCI6IjkyYzk2MTViLTc0OWUtNGFkOS05NmM2LWFiNGEzZjRiNmU5NCIsInN1YiI6IjkyYzk2MTViLTc0OWUtNGFkOS05NmM2LWFiNGEzZjRiNmU5NCIsImlhdCI6MTYxMTMzMTUxMSwiZXhwIjoxNjExMzM1MTExLCJlbWFpbCI6Im5vdmFfbWlnMjAyMUBob3RtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJub3ZhX21pZzIwMjFAaG90bWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Vu72cvMw9xbAL9cOQNFXrIXWEQnDtq59Ia5xAadoyKy9TmNKe2WdowsCpmTeyN5yXWMm8Wb5EN5G2naex-YXmGQI2SoDQmkXIoqX_cc-BnauGoK5j_0fd_EVocUImK3gfDrju7_fGqm5DrS9EMIaPuZXun8VBOLoVViED48iTMA7nLymXaI1035NB0BDN4-PckbR-Etdor5rNsYat_RlmmuuSGL37b3HUqKq6lqo0yjFjaVz6lRnnhSEl9ssvAlaPSO6D2TmKzXilwa_iIXRyi5OSPcFumO0JPptx_LxNm9VzNNY67cl4tFcF9L_Z_7rIlBdLMHGc6bRCmDSeDEskQ\",\n    \"refresh_token\": \"AOvuKvT6IvlQmaP8l0sOljLb10MO1JtTJBiSZG3HFUed9bfnuwfl4ipl0S5K9YuzssFvodunjkgPUsMNz-KxPb6bd8Ndqka2-TB2k90Q8XyDRlyVEiILbLMBJuQbDKGrQuySP8NbowZdmCXFnb7fAXJmAYTNUsQDrj4kIQ7V1FnTYeoqPSR2kd9DRimZCdfqAk30-uzkeUnc2KBd0CZ9syWN3olUhUwTxg\",\n    \"expires_in\": 3600,\n    \"id\": \"5215d701-7d59-4f7b-7ffb-b1ec603c4516\",\n    \"username\": \"mc-test\",\n    \"fullname\": Mc Test\n}",
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
    "filename": "apps/acl/components/signin/Front/SigninApiController.php",
    "groupTitle": "0.-_Signin",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/signin"
      }
    ]
  },
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
    "description": "<p>Obtiene un evento especifico de un juez con el id del sistema de votaciones (ss_scoring_systems_id) más el id de la estructura de batalla (esta en la sección pivot) que esta en phases y con esos datos se debe llamar al endpoint 1.-Devuelve el sistema de votación y Estructura de la batalla para tener los datos necesarios para crear las pantallas de votación.</p> <p>Además para saber el orden de las phases se debe usar los campos:</p> <p>&quot;previous_phase_id&quot;: &quot;ad502a5d-1b84-4320-9028-db18c9c3dd6d&quot;</p> <p>&quot;next_phase_id&quot;: &quot;3bf49a12-9371-4bb1-9da8-bb6529f9fedd&quot;</p> <p>Cuando previous y next sean null significa que es la phase inicial que puede ser una phase normal o grupos luego todas tiene su relación en caso de un toreno con final solo la final tiene el campo next en null</p> <p>Existe 3 tipos de phases de un evento:</p> <p>1.- 066f8733-833c-405e-8645-e98e9f33ea50 Para la phase de tipo torneo que puede ser desde dieciseisavos, octavos, etc...</p> <p>2.- 69b888c1-80ce-46f8-9df1-7e3f7182e1f4 Para la phase de tipo clasificatoria o normal de una FMS.</p> <p>3.- e668586c-083e-4e53-9d4b-3ace5b1e38cc Para la phase de tipo mundial con grupos.</p> <p>NOTA: El campo diff_replica es la diferencia de puntos para ganar una batalla o si es inferior a ese valor es un réplica que está en la tabla piivot de phases</p>",
    "examples": [
      {
        "title": "Obtiene todos los datos de un evento de un juez en concreto",
        "content": "curl -i http://ionic.urbanroosters.com/api/events/019f7830-bb26-412d-ae6b-fe5bc4780357/0f62308e-8245-4e2f-8e01-b0c0920be35a",
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
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
            "type": "Object[pivot_phases]",
            "optional": false,
            "field": "pivot_phases",
            "description": "<p>Listado de todas las opciones de las tablas intermedias</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[groups]",
            "optional": false,
            "field": "groups",
            "description": "<p>Listado de todos los grupos  que pertenecen a una fase</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[pivot_groups]",
            "optional": false,
            "field": "pivot_groups",
            "description": "<p>Listado de todas las opciones de las tablas intermedias</p>"
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
          },
          {
            "group": "Success 200",
            "type": "Object[profile]",
            "optional": false,
            "field": "profile",
            "description": "<p>El perfil de cada participante</p>"
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
        "pivot_phases": [
          {
            "group": "pivot_phases",
            "type": "Number",
            "optional": false,
            "field": "max_judges",
            "description": "<p>Indica el número máximo de jueces por fase</p>"
          },
          {
            "group": "pivot_phases",
            "type": "Number",
            "optional": false,
            "field": "max_participants",
            "description": "<p>Indica el número máximo de participantes por fase</p>"
          },
          {
            "group": "pivot_phases",
            "type": "String",
            "optional": false,
            "field": "ss_battle_structures_id",
            "description": "<p>Id de la estrucutra de la batalla para el punto 2.1</p>"
          },
          {
            "group": "pivot_phases",
            "type": "Number",
            "optional": false,
            "field": "diff_replica",
            "description": "<p>Es la diferencia de puntos para ganar o lo inferior es entrar en la réplica</p>"
          },
          {
            "group": "pivot_phases",
            "type": "Number",
            "optional": false,
            "field": "number_groups",
            "description": "<p>El número de grupos de una phase</p>"
          },
          {
            "group": "pivot_phases",
            "type": "Number",
            "optional": false,
            "field": "participants_per_group",
            "description": "<p>El número de participantes de un grupo</p>"
          },
          {
            "group": "pivot_phases",
            "type": "Number",
            "optional": false,
            "field": "pass_by_group",
            "description": "<p>El número de participantes que pasan de cada grupo</p>"
          },
          {
            "group": "pivot_phases",
            "type": "Boolean",
            "optional": false,
            "field": "have_extra_groups",
            "description": "<p>Variable en TRUE o FALSE para saber si se tiene grupos Extras o Suplentes</p>"
          },
          {
            "group": "pivot_phases",
            "type": "Number",
            "optional": false,
            "field": "number_extra_groups",
            "description": "<p>El número de grupos extras que tiene una phase</p>"
          },
          {
            "group": "pivot_phases",
            "type": "Number",
            "optional": false,
            "field": "participants_per_extra_group",
            "description": "<p>El número de participantes de cada grupo extra</p>"
          },
          {
            "group": "pivot_phases",
            "type": "Number",
            "optional": false,
            "field": "pass_by_extra_group",
            "description": "<p>El número de participantes que pasan de cada grupo extra</p>"
          }
        ],
        "groups": [
          {
            "group": "groups",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Indica el identificador de un grupo</p>"
          },
          {
            "group": "groups",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>El nombre del grupo</p>"
          }
        ],
        "pivot_groups": [
          {
            "group": "pivot_groups",
            "type": "Number",
            "optional": false,
            "field": "group_type",
            "description": "<p>Indica el tipo de grupo 1 para normal, 2 para suplentes</p>"
          },
          {
            "group": "pivot_groups",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>Indica el orden de los grupos en cada fase</p>"
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
            "field": "fd_groups_id",
            "description": "<p>Id del grupo al que pertenece cada batalla</p>"
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
        ],
        "profile": [
          {
            "group": "profile",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id del profile</p>"
          },
          {
            "group": "profile",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>El nombre del participante</p>"
          },
          {
            "group": "profile",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>El apellido del participante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nstatus: \"success\",\ndata:[\n        {\n            \"id\": \"7c1409cf-a406-4aa8-9e74-ab2c8424cdd7\",\n            \"fd_calendars_id\": \"b4cf9ee7-7f41-46eb-b60f-5ff42776ee6c\",\n            \"ss_scoring_systems_id\": \"5a2d413d-0e43-4d35-b5a8-cb83fe952654\",\n            \"fd_event_types_id\": \"e073b3ec-e6b8-4cda-be90-c74baf98d6b9\",\n            \"countries_id\": \"\",\n            \"states_id\": \"\",\n            \"cities_id\": \"\",\n            \"name\": \"Fms Internacional\",\n            \"sub_name\": null,\n            \"slug\": \"fms-internacional\",\n            \"avatar\": \"\",\n            \"cover\": \"\",\n            \"video\": \"\",\n            \"video_embed\": \"\",\n            \"introduction\": \"Para el evento de la internacional\",\n            \"description\": \"Para de descripci&oacute;n de la internacional\",\n            \"start_date_event\": \"2021-09-06\",\n            \"ending_date_event\": \"2021-09-13\",\n            \"start_time\": \"00:00:00\",\n            \"ending_time\": \"00:00:00\",\n            \"limit\": 10,\n            \"max_judges\": 5,\n            \"diff_replica\": 5,\n            \"max_replica\": 2,\n            \"partial\": 0,\n            \"completed\": 0,\n            \"order\": 66,\n            \"change_patterns\": null,\n            \"fd_phase_types_id\": \"69b888c1-80ce-46f8-9df1-7e3f7182e1f4\",\n            \"pivot\": {\n              \"users_id\": \"0156b395-82e1-4713-8188-cc6c227d4cf1\",\n              \"fd_events_id\": \"7c1409cf-a406-4aa8-9e74-ab2c8424cdd7\"\n            },\n            \"phases\": [\n                {\n                    \"id\": \"681cece9-c8ce-44e3-8510-c358e1631636\",\n                    \"fd_phase_types_id\": \"e668586c-083e-4e53-9d4b-3ace5b1e38cc\",\n                    \"previous_phase_id\": null,\n                    \"next_phase_id\": null,\n                    \"name\": \"Grupos\",\n                    \"slug\": \"grupos\",\n                    \"avatar\": null,\n                    \"cover\": null,\n                    \"video\": null,\n                    \"video_embed\": null,\n                    \"introduction\": null,\n                    \"description\": null,\n                    \"num_battles\": null,\n                    \"order\": 2,\n                    \"created_at\": \"2021-07-09T21:05:42.000000Z\",\n                    \"updated_at\": \"2021-07-09T21:05:42.000000Z\",\n                    \"deleted_at\": null,\n                    \"params\": null,\n                    \"log\": null,\n                    \"pivot\": {\n                        \"fd_events_id\": \"7c1409cf-a406-4aa8-9e74-ab2c8424cdd7\",\n                        \"fd_phases_id\": \"681cece9-c8ce-44e3-8510-c358e1631636\",\n                        \"created_at\": \"2021-07-13T14:36:22.000000Z\",\n                        \"updated_at\": \"2021-07-13T19:36:52.000000Z\",\n                        \"ss_battle_structures_id\": \"1ea9655d-52db-471c-9dd1-abde95e8df34\",\n                        \"diff_replica\": 2,\n                        \"number_groups\": 5,\n                        \"participants_per_group\": 5,\n                        \"pass_by_group\": 3,\n                        \"have_extra_groups\": 1,\n                        \"number_extra_groups\": 1,\n                        \"participants_per_extra_group\": 5,\n                        \"pass_by_extra_group\": 4,\n                        \"order\": null\n                    },\n                    \"groups\": [\n                        {\n                            \"id\": \"1f4d0ea6-ea72-4eba-866f-be8ed20d4d9a\",\n                            \"name\": \"Grupo F\",\n                            \"slug\": \"grupo-f\",\n                            \"order\": 6,\n                            \"created_at\": \"2021-07-09T21:05:37.000000Z\",\n                            \"updated_at\": \"2021-07-09T21:05:37.000000Z\",\n                            \"deleted_at\": null,\n                            \"params\": null,\n                            \"log\": null,\n                            \"pivot\": {\n                                \"fd_phases_id\": \"681cece9-c8ce-44e3-8510-c358e1631636\",\n                                \"fd_groups_id\": \"1f4d0ea6-ea72-4eba-866f-be8ed20d4d9a\",\n                                \"created_at\": \"2021-07-13T16:54:05.000000Z\",\n                                \"updated_at\": \"2021-07-13T16:54:05.000000Z\",\n                                \"fd_events_id\": \"7c1409cf-a406-4aa8-9e74-ab2c8424cdd7\",\n                                \"group_type\": 1,\n                                \"order\": 1\n                            }\n                        },\n                        ...\n                    ],\n                    \"battles\": [\n                        {\n                            \"id\": \"020ac15b-777a-4b2a-b71c-d0f324d4a8e5\",\n                            \"fd_events_id\": \"7c1409cf-a406-4aa8-9e74-ab2c8424cdd7\",\n                            \"fd_phases_id\": \"681cece9-c8ce-44e3-8510-c358e1631636\",\n                            \"fd_groups_id\": \"6d7d2ec0-1320-4ec8-ae8e-7332fc0a1cb6\",\n                            \"fd_battle_types_id\": \"3e98efef-9f35-4e4a-88a8-f5f9589a0909\",\n                            \"name\": \"Strike  VS B One\",\n                            \"slug\": \"strike-vs-b-one\",\n                            \"diff_replica\": 0,\n                            \"order\": 3,\n                            \"created_at\": \"2021-07-13T17:08:10.000000Z\",\n                            \"updated_at\": \"2021-07-13T17:08:10.000000Z\",\n                            \"deleted_at\": null,\n                            \"params\": null,\n                            \"log\": null,\n                            \"direct_pass\": null,\n                            \"participants\": [\n                                {\n                                    \"id\": \"0a95f642-dc3f-42c7-93e7-ced22f04a34c\",\n                                    \"roles_id\": \"5c1f5459-815d-4f81-bb73-43fbb75da916\",\n                                    \"username\": \"b_one\",\n                                    \"email\": \"\",\n                                    \"avatar\": \"images/profiles/b_one.jpg\",\n                                    \"pivot\": {\n                                        \"fd_battles_id\": \"020ac15b-777a-4b2a-b71c-d0f324d4a8e5\",\n                                        \"users_id\": \"0a95f642-dc3f-42c7-93e7-ced22f04a34c\",\n                                        \"result\": null,\n                                        \"score\": 0,\n                                        \"order\": null,\n                                        \"won\": 0,\n                                        \"lost\": 0,\n                                        \"num_replicas\": 0,\n                                        \"has_replica\": 0\n                                    },\n                                    \"profile\": {\n                                        \"id\": \"ba3c9002-c8d6-4f67-a230-ea68a9e7e9b0\",\n                                        \"users_id\": \"0a95f642-dc3f-42c7-93e7-ced22f04a34c\",\n                                        \"first_name\": \"B\",\n                                        \"last_name\": \"One\"\n                                    }\n                                },\n                                ...\n                            ]\n                        },\n                        ...\n                    ]\n                }\n            ]\n        }\n]",
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
        "url": "https://ionic.urbanroosters.com/api/events/:judge/:event"
      }
    ]
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
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
    "description": "<p>Retorna el sistema de votaciones completo con la relación de la estructura de batallas, round, estilo, patrones y performances para poder crear las pantallas que el juez podrá votar.</p> <p>Además al seleccionar quien inica una batalla debe llamar a los endpoints:</p> <p>1.-Agrega el orden en el que inicia los participante una batalla para crear el registro de orden de una batalla IMPORTANTE: en cada style se tiene los campos &quot;extra_point&quot;: 1 (para saber si se debe poner el botón de punto extra, en sangre 1 y 2 recordar que el extra solo lo tiene el segundo MC), &quot;turn&quot;: 1 (nos dice si el estilo es ida y vuelta cada patron).</p> <p>Cambio:</p> <p>Ahora ya no se debe usar el replica_id para usar el endopint 2.2.- Devuelve la estructura de un Round</p> <p>En el array battle_structures ya nos devuelve un array rounds con todos los rounds necesarios para una batalla, ahora si incluye el tipo de round, (round_type):</p> <p>1 Round Normal</p> <p>2 Round Réplica</p> <p>Recordar que en la tabla pivot esta el order de cada round en la estructura de las pantallas de votación y la diferencia para ganar ese round y es de tipo réplica</p> <p>Al igual en cada round está un array con los styles, en la tabla pivot de esta el orden de los styles de cada round</p> <p>Nota: Nota: Recordar que en el orden en la tabla pivot es para la réplica, es importante tenerla para asignarla en cada ss_data_score_round.</p>",
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
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
            "description": "<p>El nombre del round único en el sistema</p>"
          },
          {
            "group": "rounds",
            "type": "String",
            "optional": false,
            "field": "alias",
            "description": "<p>El nombre del round que se mostrará en la pantalla de la aplicación</p>"
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
            "type": "Object[round-pivot]",
            "optional": false,
            "field": "pivot",
            "description": ""
          }
        ],
        "round-pivot": [
          {
            "group": "round-pivot",
            "optional": false,
            "field": "order",
            "description": "<p>El orden en el que se mostrará el round en pantalla // Además recordar que para los rounds de tipo réplica  es importante almancerlo en el ss_data_score_rounds 3.2 Endpoint</p>"
          },
          {
            "group": "round-pivot",
            "optional": false,
            "field": "difference_to_replica",
            "description": "<p>Tiene la diferencia para ganar el round esto aplica en el caso de los rounds de tipo réplica, si es null significa que no existe una diferencia, (es decir es 0)</p>"
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
            "description": "<p>El nombre del style único en el sistema</p>"
          },
          {
            "group": "styles",
            "type": "String",
            "optional": false,
            "field": "alias",
            "description": "<p>El nombre del style que se mostrará en la pantalla de la aplicación</p>"
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
            "type": "Object[style-pivot]",
            "optional": false,
            "field": "pivot",
            "description": ""
          }
        ],
        "style-pivot": [
          {
            "group": "style-pivot",
            "optional": false,
            "field": "order",
            "description": "<p>El orden en el que se mostrará el estilo en pantalla</p>"
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
            "type": "Object[Pivot]",
            "optional": false,
            "field": "pivot",
            "description": ""
          }
        ],
        "pivot": [
          {
            "group": "pivot",
            "optional": false,
            "field": "id",
            "description": "<p>El numero del id es un entero el cual se enviara en el objeto al ingresar el valor. Es el id del ss_patterns_styles_id en la tabla ss_data_score_style_patrons</p>"
          },
          {
            "group": "pivot",
            "optional": false,
            "field": "order",
            "description": "<p>El orden en el que se mostrará el patron en pantalla</p>"
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
            "description": "<p>El nombre del performance único en el sistema</p>"
          },
          {
            "group": "performance",
            "type": "String",
            "optional": false,
            "field": "alias",
            "description": "<p>El nombre del performance que se mostrará en la pantalla de la aplicación</p>"
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
          "content": "HTTP/1.1 200 OK\nstatus: \"success\",\ndata:[\n{\n    \"id\": \"52018330-57c7-4e9a-9992-9402eb9178e9\",\n    \"ss_types_scoring_systems_id\": \"bf98ddc5-b3f3-4fd4-a8c2-e8d61e6147cf\",\n    \"name\": \"Sistema Votaci&oacute;n FMS\",\n    \"slug\": \"sistema-votacion-fms\",\n    \"description\": \"fms\",\n    \"order\": 1,\n    ...,\n    \"battle_structures\": [\n        {\n            \"id\": \"d14dd034-cb7e-4332-a4a3-fa31401a3e0c\",\n            \"ss_scoring_systems_id\": \"52018330-57c7-4e9a-9992-9402eb9178e9\",\n            \"name\": \"Batallas Fase Grupos\",\n            \"slug\": \"batallas-fase-grupos\",\n            \"description\": \"Estructura de batallas de la fase de grupos desde el 2021\",\n            \"params\": null,\n            \"log\": null,\n            \"difference_to_win\": 1,\n            \"rounds\": [\n                {\n                    \"id\": \"180b02a7-8f4c-4421-aae9-3d53173e10ee\",\n                    \"name\": \"Round 1 Grupos\",\n                    \"slug\": \"round-1-grupos\",\n                    \"description\": \"para round 1\",\n                    \"order\": 0,\n                    \"created_at\": \"2021-07-01T17:46:33.000000Z\",\n                    \"updated_at\": \"2021-07-02T16:13:31.000000Z\",\n                    \"deleted_at\": null,\n                    \"params\": null,\n                    \"log\": null,\n                    \"round_type\": 1,\n                    \"pivot\": {\n                        \"ss_battle_structures_id\": \"d14dd034-cb7e-4332-a4a3-fa31401a3e0c\",\n                        \"ss_round_structures_id\": \"180b02a7-8f4c-4421-aae9-3d53173e10ee\",\n                        \"id\": 22,\n                        \"order\": 1,\n                        \"difference_to_replica\": null\n                    },\n                    \"styles\": [\n                        {\n                            \"id\": \"348bbf08-4451-4019-959a-b159f76b075a\",\n                            \"ss_types_styles_id\": \"4145d397-d601-4c9f-8769-95253fce38e7\",\n                            \"name\": \"Incremental\",\n                            \"num_patterns\": 9,\n                            \"completed\": 1,\n                            \"extra_point\": 0,\n                            \"turn\": 0,\n                            \"order\": 23,\n                            \"created_at\": \"2021-07-01T22:26:24.000000Z\",\n                            \"updated_at\": \"2021-07-01T22:28:09.000000Z\",\n                            \"deleted_at\": null,\n                            \"params\": null,\n                            \"log\": null,\n                            \"pivot\": {\n                                \"ss_round_structures_id\": \"180b02a7-8f4c-4421-aae9-3d53173e10ee\",\n                                \"ss_styles_id\": \"348bbf08-4451-4019-959a-b159f76b075a\",\n                                \"id\": 10,\n                                \"order\": 1\n                            },\n                            \"patterns\": [\n                                {\n                                    \"id\": \"894b765e-99d7-4d98-be25-9149648c19d6\",\n                                    \"ss_types_patterns_id\": \"1867dd97-dd7e-4a27-97ba-ffe4d6f4a546\",\n                                    \"name\": \"Patron Normal\",\n                                    \"slug\": \"patron-normal\",\n                                    \"score\": 4,\n                                    \"interval\": \"0.50\",\n                                    \"order\": 1,\n                                    \"created_at\": \"2021-07-01T16:28:06.000000Z\",\n                                    \"updated_at\": \"2021-07-01T16:28:06.000000Z\",\n                                    \"deleted_at\": null,\n                                    \"params\": null,\n                                    \"log\": null,\n                                    \"pivot\": {\n                                        \"ss_styles_id\": \"348bbf08-4451-4019-959a-b159f76b075a\",\n                                        \"ss_patterns_id\": \"894b765e-99d7-4d98-be25-9149648c19d6\",\n                                        \"id\": 13,\n                                        \"order\": 1\n                                    }\n                                },\n                                ...\n                            ],\n                            \"performance\": [\n                                {\n                                    \"id\": \"83065003-12d0-4d54-a423-3cf2da288d4e\",\n                                    \"name\": \"Escena\",\n                                    \"slug\": \"escena\",\n                                    \"score\": 2,\n                                    \"interval\": \"1.00\",\n                                    \"order\": 1,\n                                    \"created_at\": \"2021-07-01T16:35:11.000000Z\",\n                                    \"updated_at\": \"2021-07-01T16:35:11.000000Z\",\n                                    \"deleted_at\": null,\n                                    \"params\": null,\n                                    \"log\": null,\n                                    \"pivot\": {\n                                    }\n                                },\n                                ...\n                            ]\n                        }\n                    ]\n                },\n                ...,\n            ]\n        }\n    ]\n}",
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
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
            "type": "Object[style-pivot]",
            "optional": false,
            "field": "pivot",
            "description": ""
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
        "style-pivot": [
          {
            "group": "style-pivot",
            "optional": false,
            "field": "order",
            "description": "<p>El orden en el que se mostrará el estilo en pantalla</p>"
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
            "type": "Object[Pivot]",
            "optional": false,
            "field": "pivot",
            "description": ""
          }
        ],
        "pivot": [
          {
            "group": "pivot",
            "optional": false,
            "field": "id",
            "description": "<p>El numero del id es un entero el cual se enviara en el objeto al ingresar el valor. Es el id del ss_patterns_styles_id en la tabla ss_data_score_style_patrons</p>"
          },
          {
            "group": "pivot",
            "optional": false,
            "field": "order",
            "description": "<p>El orden en el que se mostrará el patron en pantalla</p>"
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
    "url": "/scores/add-pattern/:event/:phase/:judge/:battle",
    "title": "3.4.- Agrega un nuevo patron a un ss_data_score_styles",
    "version": "1.0.0",
    "name": "AddPattern",
    "group": "3.-_Batallas",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Agrega un nuevo patron a un ss_data_score_styles, este Endpoint se usa cada vez que se desea agregar un nuevo patron a un nuevo estilo</p>",
    "examples": [
      {
        "title": "Agrega un nuevo patron a un ss_data_score_styles.",
        "content": "curl -i http://ionic.urbanroosters.com/api/scores/add-pattern/0f62308e-8245-4e2f-8e01-b0c0920be35a/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/019f7830-bb26-412d-ae6b-fe5bc4780357/eece274b-a418-48af-8b56-6f658f10cb5f",
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
            "field": "token",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                          El api key que necesita para solicitar acceso",
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style_patrons este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del mc/participante</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_round_structures_id",
            "description": "<p>El <code>uuid</code> del ss_round_structures</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_styles_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_patterns_styles_id",
            "description": "<p>El <code>number</code> del ss_patterns_styles</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles</p>"
          },
          {
            "group": "body",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>El valor <code>1</code> al dar tap</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>true</code> al marca un punto extra</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de <code>1</code> al sumar value mas extra</p>"
          },
          {
            "group": "body",
            "type": "Boolean",
            "optional": false,
            "field": "order",
            "description": "<p>El <code>number</code> de orden del tab realizado</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "time_pattern",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al hacer un tap en un patron</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "time_extra",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al hacer un tap en un punto extra</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"id\": \"67b90854-d770-4381-bcfe-e9c1dc2b6336\",\n    \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n    \"ss_data_scores_id\": \"e6a5f7a7-6899-4dac-8abc-534ba71576b9\",\n    \"ss_data_score_rounds_id\": \"28766c9a-f80d-4221-8647-20a6d5fd634a\",\n    \"ss_round_structures_id\": \"938402b7-fab4-4b86-9033-09f66bde9da3\",\n    \"ss_data_score_styles_id\": \"8f74a311-1b09-4800-b5a7-c55686629283\",\n    \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n    \"ss_patterns_styles_id\": \"1\",\n    \"value\": 2.5,\n    \"extra\": false,\n    \"total\": 2.5,\n    \"order\": 1,\n    \"time_pattern\": \"1212018372.3366\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "score": [
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style_patrons creado</p>"
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
            "field": "value",
            "description": "<p>El valor que se le da un pattern</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el pattern tiene extra</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>El total del pattern</p>"
          },
          {
            "group": "score",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>El orden en el que se pulso</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "time_pattern",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al pulsar el tab</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "time_extra",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al pulsar el tab extra</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles_id</p>"
          },
          {
            "group": "score",
            "type": "Number",
            "optional": false,
            "field": "ss_patterns_styles_id",
            "description": "<p>El <code>number</code> el id del ss_patterns_styles_id</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores_id</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds_id</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_styles_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nstatus: \"success\",\ndata:{\n        \"id\": \"67b90854-d770-4381-bcfe-e9c1dc2b6336\",\n        \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n        \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n        \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n        \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n        \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n        \"ss_data_scores_id\": \"e6a5f7a7-6899-4dac-8abc-534ba71576b9\",\n        \"ss_data_score_rounds_id\": \"28766c9a-f80d-4221-8647-20a6d5fd634a\",\n        \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n        \"ss_data_score_styles_id\": \"8f74a311-1b09-4800-b5a7-c55686629283\",\n        \"ss_patterns_styles_id\": \"1\",\n        \"value\": 2.5,\n        \"extra\": false,\n        \"total\": 3.5,\n        \"order\": 1,\n        \"created_at\": \"2021-01-29T18:07:03.000000Z\",\n        \"updated_at\": \"2021-01-29T18:07:40.000000Z\",\n        \"deleted_at\": null,\n        \"params\": null,\n        \"log\": null,\n        \"started\": 0,\n        \"finished\": 0,\n        \"time_pattern\": \"1212018372.3366\",\n        \"time_extra\": null\n    }",
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
            "description": "<p>Mensaje Personalizado del tipo de error de validación (Integrity constraint violation: 1062 Duplicate entry hace referencia a que se esta intentando ingresar un registro ya creado con lo cual se debería actualizar)</p>"
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
            "field": "TokenNotFound",
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
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el token.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El token recibido no tiene autorización.\"\n}\n\nHTTP/1.1 200 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Integrity constraint violation: 1062 Duplicate entry\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-scores/Front/ApiScoresController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/scores/add-pattern/:event/:phase/:judge/:battle"
      }
    ]
  },
  {
    "type": "post",
    "url": "/scores/add-performance/:event/:phase/:judge/:battle",
    "title": "3.6.- Agrega un nuevo performance a un ss_data_score_styles",
    "version": "1.0.0",
    "name": "AddPerformance",
    "group": "3.-_Batallas",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Agrega un nuevo performance a un ss_data_score_styles, este Endpoint se usa cada vez que se desea agregar un nuevo performance a un nuevo estilo</p>",
    "examples": [
      {
        "title": "Agrega un nuevo performance a un ss_data_score_styles.",
        "content": "curl -i http://ionic.urbanroosters.com/api/scores/add-performance/0f62308e-8245-4e2f-8e01-b0c0920be35a/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/019f7830-bb26-412d-ae6b-fe5bc4780357/eece274b-a418-48af-8b56-6f658f10cb5f",
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
            "field": "token",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                          El api key que necesita para solicitar acceso",
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style_performances este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del mc/participante</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_round_structures_id",
            "description": "<p>El <code>uuid</code> del ss_round_structures</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_styles_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_performance_id",
            "description": "<p>El <code>uuid</code> del ss_performance</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles</p>"
          },
          {
            "group": "body",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>El valor <code>1</code> al dar tap</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>true</code> al marca un punto extra</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de <code>1</code> al sumar value mas extra</p>"
          },
          {
            "group": "body",
            "type": "Boolean",
            "optional": false,
            "field": "order",
            "description": "<p>El <code>number</code> de orden del tab realizado</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "time_performance",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al hacer un tap en un performance</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "time_extra",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al hacer un tap en un punto extra</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"id\": \"772ab17f-946d-4fd7-8695-e71bebd9b638\",\n    \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n    \"ss_data_scores_id\": \"e6a5f7a7-6899-4dac-8abc-534ba71576b9\",\n    \"ss_data_score_rounds_id\": \"28766c9a-f80d-4221-8647-20a6d5fd634a\",\n    \"ss_round_structures_id\": \"938402b7-fab4-4b86-9033-09f66bde9da3\",\n    \"ss_data_score_styles_id\": \"8f74a311-1b09-4800-b5a7-c55686629283\",\n    \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n    \"ss_performance_id\": \"ea042ddf-951f-4c97-a204-1fd8ebbd06ea\",\n    \"value\": 1,\n    \"extra\": false,\n    \"total\": 1,\n    \"order\": 1,\n    \"time_performance\": \"1212018372.3366\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "score": [
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style_performance creado</p>"
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
            "field": "value",
            "description": "<p>El valor que se le da un performance</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el performance tiene extra</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>El total del performance</p>"
          },
          {
            "group": "score",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>El orden en el que se pulso</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "time_performance",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al pulsar el tab</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "time_extra",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al pulsar el tab extra</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles_id</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_performance_id",
            "description": "<p>El <code>uuid</code> del ss_performance_id</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores_id</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds_id</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_styles_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nstatus: \"success\",\ndata:{\n        \"id\": \"772ab17f-946d-4fd7-8695-e71bebd9b638\",\n        \"ss_data_scores_id\": \"e6a5f7a7-6899-4dac-8abc-534ba71576b9\",\n        \"ss_data_score_rounds_id\": \"28766c9a-f80d-4221-8647-20a6d5fd634a\",\n        \"ss_data_score_styles_id\": \"8f74a311-1b09-4800-b5a7-c55686629283\",\n        \"value\": 1,\n        \"extra\": false,\n        \"order\": 1,\n        \"time_performance\": \"1212018372.3366\",\n        \"time_extra\": null,\n        \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n        \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n        \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n        \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n        \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n        \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n        \"ss_performance_id\": \"ea042ddf-951f-4c97-a204-1fd8ebbd06ea\",\n        \"updated_at\": \"2021-01-29T19:14:38.000000Z\",\n        \"created_at\": \"2021-01-29T19:14:38.000000Z\"\n    }",
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
            "description": "<p>Mensaje Personalizado del tipo de error de validación (Integrity constraint violation: 1062 Duplicate entry hace referencia a que se esta intentando ingresar un registro ya creado con lo cual se debería actualizar)</p>"
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
            "field": "TokenNotFound",
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
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el token.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El token recibido no tiene autorización.\"\n}\n\nHTTP/1.1 200 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Integrity constraint violation: 1062 Duplicate entry\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-scores/Front/ApiScoresController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/scores/add-performance/:event/:phase/:judge/:battle"
      }
    ]
  },
  {
    "type": "post",
    "url": "/scores/add-data-round/:event/:phase/:judge/:battle",
    "title": "3.2.- Agrega un nuevo ss_data_score_rounds a un ss_data_scores",
    "version": "1.0.0",
    "name": "AddRoundToScore",
    "group": "3.-_Batallas",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Agrega un nuevo ss_data_score_rounds a un ss_data_scores, este Endpoint se usa cada vez que se inicie un round es decir si pasamos del Round 1 al Round 2 se debe llamar a este punto para crear el Round 2 en el sistema, después de este punto se debe llamar al endpoint 3.3 Agregar un Estilo al Round creado en este punto</p> <p>NOTA: Se agrega el campo order_round_replica que se usará solo para el orden de los rounds réplica que esta en el endopint 1.3 de la tabla pivot.</p>",
    "examples": [
      {
        "title": "Agrega el orden de cada participante al iniciar una batalla.",
        "content": "curl -i http://ionic.urbanroosters.com/api/scores/add-data-round/0f62308e-8245-4e2f-8e01-b0c0920be35a/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/019f7830-bb26-412d-ae6b-fe5bc4780357/eece274b-a418-48af-8b56-6f658f10cb5f",
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
            "field": "token",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                          El api key que necesita para solicitar acceso",
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
          }
        ],
        "ss_data_score_rounds": [
          {
            "group": "ss_data_score_rounds",
            "type": "Object[ss_data_score_rounds]",
            "optional": false,
            "field": "ss_data_score_rounds",
            "description": "<p>Array con los datos del round</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "ss_round_structures_id",
            "description": "<p>El <code>uuid</code> del ss_round_structures_id</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>El orden con el que inicia un MC/Participante</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Number",
            "optional": false,
            "field": "order_round_replica",
            "description": "<p>El orden de la réplica que se debe sacar de la tabla pivot en el punto 2.1</p>"
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
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el round esta iniciado</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "is_replica",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el round es una réplica</p>"
          }
        ],
        "ss_data_score_style": [
          {
            "group": "ss_data_score_style",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds este UUID se genera en el front con estandar UUID v4</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"participants\": [\n        {\n            \"id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n                \"ss_data_score_rounds\": {\n                    \"id\": \"28766c9a-f80d-4221-8647-20a6d5fd634a\",\n                    \"ss_data_scores_id\": \"e6a5f7a7-6899-4dac-8abc-534ba71576b9\",\n                    \"ss_round_structures_id\": \"938402b7-fab4-4b86-9033-09f66bde9da3\",\n                    \"order\": \"1\",\n                    \"order_round_replica\": \"6\",\n                    \"time_started\": \"1212018372.3366\",\n                    \"started\": true\n                }\n        },\n        {\n            \"id\": \"349a1e2f-46a3-4fc0-a372-24596faf8328\",\n                \"ss_data_score_rounds\": {\n                    \"id\": \"e9e3dd65-45db-4bed-9a08-1d6a9b7edbe7\",\n                    \"ss_data_scores_id\": \"c48201a0-e7f0-42b3-a19e-910ef3a4f9a2\",\n                    \"ss_round_structures_id\": \"938402b7-fab4-4b86-9033-09f66bde9da3\",\n                    \"order\": \"2\",\n                    \"order_round_replica\": \"6\",\n                    \"time_started\": \"1212018372.3366\",\n                    \"started\": true\n                }\n        }\n    ]\n}",
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
            "description": "<p>El orden con el que inicia un MC/Participante el Round</p>"
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
            "field": "TokenNotFound",
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
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el token.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El token recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-scores/Front/ApiScoresController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/scores/add-data-round/:event/:phase/:judge/:battle"
      }
    ]
  },
  {
    "type": "post",
    "url": "/scores/add-data-style/:event/:phase/:judge/:battle",
    "title": "3.3.- Agrega un nuevo ss_data_score_styles a un ss_data_score_rounds",
    "version": "1.0.0",
    "name": "AddStyletoRound",
    "group": "3.-_Batallas",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Agrega un nuevo ss_data_score_styles a un ss_data_score_rounds, este Endpoint se usa cada vez que se inicie un nuevo estilo ejemplo pasamos de Easy Mode a Hard Mode se debe llamar a este punto para crear el Style en el sistema, después de este punto se debe llamar al endpoint (3.4, 3.5 ) o (3.6, 3.7) Agregar un Patron o Performance al Estilo creado en este punto</p>",
    "examples": [
      {
        "title": "Agrega el orden de cada participante al iniciar una batalla.",
        "content": "curl -i http://ionic.urbanroosters.com/api/scores/add-data-style/0f62308e-8245-4e2f-8e01-b0c0920be35a/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/019f7830-bb26-412d-ae6b-fe5bc4780357/eece274b-a418-48af-8b56-6f658f10cb5f",
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
            "field": "token",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                          El api key que necesita para solicitar acceso",
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
          }
        ],
        "ss_data_score_round": [
          {
            "group": "ss_data_score_round",
            "type": "Object[ss_data_score_styles]",
            "optional": false,
            "field": "ss_data_score_styles",
            "description": "<p>Array con los datos del style</p>"
          }
        ],
        "ss_data_score_style": [
          {
            "group": "ss_data_score_style",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "ss_data_score_style",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "ss_data_score_style",
            "type": "String",
            "optional": false,
            "field": "ss_round_structures_id",
            "description": "<p>El <code>uuid</code> del ss_round_structures_id</p>"
          },
          {
            "group": "ss_data_score_style",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles_id</p>"
          },
          {
            "group": "ss_data_score_style",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>El orden con el que inicia un MC/Participante el Estilo</p>"
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
          "content": "{\n    \"participants\":[\n        {\n            \"id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n             \"ss_data_score_styles\": {\n                 \"id\": \"8f74a311-1b09-4800-b5a7-c55686629283\",\n                 \"ss_data_scores_id\": \"e6a5f7a7-6899-4dac-8abc-534ba71576b9\",\n                 \"ss_data_score_rounds_id\": \"28766c9a-f80d-4221-8647-20a6d5fd634a\",\n                 \"ss_round_structures_id\": \"938402b7-fab4-4b86-9033-09f66bde9da3\",\n                 \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                 \"order\": \"1\",\n                 \"time_started\": \"1212018372.3366\",\n                 \"time_finished\": \"1212018372.3366\",\n                 \"started\": true\n             }\n        },\n        {\n            \"id\": \"349a1e2f-46a3-4fc0-a372-24596faf8328\",\n            \"ss_data_score_styles\": {\n                \"id\": \"2bac3ae6-6d45-4382-9911-b0a50649429c\",\n                \"ss_data_scores_id\": \"c48201a0-e7f0-42b3-a19e-910ef3a4f9a2\",\n                \"ss_data_score_rounds_id\": \"e9e3dd65-45db-4bed-9a08-1d6a9b7edbe7\",\n                \"ss_round_structures_id\": \"938402b7-fab4-4b86-9033-09f66bde9da3\",\n                \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                \"order\": \"2\",\n                \"time_started\": \"1212018372.3366\",\n                \"time_finished\": \"1212018372.3366\",\n                \"started\": true\n            }\n        }\n    ]\n}",
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
            "field": "TokenNotFound",
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
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el token.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El token recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-scores/Front/ApiScoresController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/scores/add-data-style/:event/:phase/:judge/:battle"
      }
    ]
  },
  {
    "type": "post",
    "url": "/scores/update-pattern/:event/:phase/:judge/:battle",
    "title": "3.5.- Actualiza un patron a un ss_data_score_styles",
    "version": "1.0.0",
    "name": "UpdatePattern",
    "group": "3.-_Batallas",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Actualiza un patron a un ss_data_score_styles, este Endpoint se usa cada vez que se desea Actualizar un patron a un nuevo estilo</p>",
    "examples": [
      {
        "title": "Actualiza el patron de un style.",
        "content": "curl -i http://ionic.urbanroosters.com/api/scores/update-pattern/0f62308e-8245-4e2f-8e01-b0c0920be35a/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/019f7830-bb26-412d-ae6b-fe5bc4780357/eece274b-a418-48af-8b56-6f658f10cb5f",
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
            "field": "token",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                          El api key que necesita para solicitar acceso",
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style_patrons este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del mc/participante</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_round_structures_id",
            "description": "<p>El <code>uuid</code> del ss_round_structures</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_styles_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_patterns_styles_id",
            "description": "<p>El <code>number</code> del ss_patterns_styles</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles</p>"
          },
          {
            "group": "body",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>El valor <code>1</code> al dar tap</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>true</code> al marca un punto extra</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de <code>1</code> al sumar value mas extra</p>"
          },
          {
            "group": "body",
            "type": "Boolean",
            "optional": false,
            "field": "order",
            "description": "<p>El <code>number</code> de orden del tab realizado</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "time_pattern",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al hacer un tap en un patron</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "time_extra",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al hacer un tap en un punto extra</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"id\": \"67b90854-d770-4381-bcfe-e9c1dc2b6336\",\n    \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n    \"ss_data_scores_id\": \"e6a5f7a7-6899-4dac-8abc-534ba71576b9\",\n    \"ss_data_score_rounds_id\": \"28766c9a-f80d-4221-8647-20a6d5fd634a\",\n    \"ss_round_structures_id\": \"938402b7-fab4-4b86-9033-09f66bde9da3\",\n    \"ss_data_score_styles_id\": \"8f74a311-1b09-4800-b5a7-c55686629283\",\n    \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n    \"ss_patterns_styles_id\": \"1\",\n    \"value\": 2,\n    \"extra\": true,\n    \"total\": 3,\n    \"order\": 1,\n    \"time_pattern\": \"1212018372.3366\"\n    \"time_extra\": \"1212018372.3366\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "score": [
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style_patrons creado</p>"
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
            "field": "value",
            "description": "<p>El valor que se le da un pattern</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el pattern tiene extra</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>El total del pattern</p>"
          },
          {
            "group": "score",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>El orden en el que se pulso</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "time_pattern",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al pulsar el tab</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "time_extra",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al pulsar el tab extra</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles_id</p>"
          },
          {
            "group": "score",
            "type": "Number",
            "optional": false,
            "field": "ss_patterns_styles_id",
            "description": "<p>El <code>number</code> el id del ss_patterns_styles_id</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores_id</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds_id</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_styles_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nstatus: \"success\",\ndata:{\n        \"id\": \"67b90854-d770-4381-bcfe-e9c1dc2b6336\",\n        \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n        \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n        \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n        \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n        \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n        \"ss_data_scores_id\": \"e6a5f7a7-6899-4dac-8abc-534ba71576b9\",\n        \"ss_data_score_rounds_id\": \"28766c9a-f80d-4221-8647-20a6d5fd634a\",\n        \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n        \"ss_data_score_styles_id\": \"8f74a311-1b09-4800-b5a7-c55686629283\",\n        \"ss_patterns_styles_id\": \"1\",\n        \"value\": 1,\n        \"extra\": true,\n        \"total\": 2,\n        \"order\": 1,\n        \"created_at\": \"2021-01-29T18:07:03.000000Z\",\n        \"updated_at\": \"2021-01-29T18:07:40.000000Z\",\n        \"deleted_at\": null,\n        \"params\": null,\n        \"log\": null,\n        \"started\": 0,\n        \"finished\": 0,\n        \"time_pattern\": \"1212018372.3366\",\n        \"time_extra\": null\n    }",
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
            "field": "TokenNotFound",
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
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el token.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El token recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-scores/Front/ApiScoresController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/scores/update-pattern/:event/:phase/:judge/:battle"
      }
    ]
  },
  {
    "type": "post",
    "url": "/scores/update-performance/:event/:phase/:judge/:battle",
    "title": "3.7.- Actualiza un performance a un ss_data_score_styles",
    "version": "1.0.0",
    "name": "UpdatePerformance",
    "group": "3.-_Batallas",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Actualiza un performance a un ss_data_score_styles, este Endpoint se usa cada vez que se desea Actualiza un performance a un estilo</p>",
    "examples": [
      {
        "title": "Actualiza un performance a un ss_data_score_styles.",
        "content": "curl -i http://ionic.urbanroosters.com/api/scores/update-performance/0f62308e-8245-4e2f-8e01-b0c0920be35a/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/019f7830-bb26-412d-ae6b-fe5bc4780357/eece274b-a418-48af-8b56-6f658f10cb5f",
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
            "field": "token",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                          El api key que necesita para solicitar acceso",
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style_performances este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del mc/participante</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_round_structures_id",
            "description": "<p>El <code>uuid</code> del ss_round_structures</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_styles_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_performance_id",
            "description": "<p>El <code>uuid</code> del ss_performance</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles</p>"
          },
          {
            "group": "body",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>El valor <code>1</code> al dar tap</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>true</code> al marca un punto extra</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de <code>1</code> al sumar value mas extra</p>"
          },
          {
            "group": "body",
            "type": "Boolean",
            "optional": false,
            "field": "order",
            "description": "<p>El <code>number</code> de orden del tab realizado</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "time_pattern",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al hacer un tap en un patron</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "time_extra",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al hacer un tap en un punto extra</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"id\": \"169cc5c5-420c-4a89-baa8-693d2f13938e\",\n    \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n    \"ss_data_scores_id\": \"7d47ff74-2f91-451c-974c-8113a843433d\",\n    \"ss_data_score_rounds_id\": \"b5703e3d-39d0-4775-8018-93309cdeccf6\",\n    \"ss_round_structures_id\": \"938402b7-fab4-4b86-9033-09f66bde9da3\",\n    \"ss_data_score_styles_id\": \"4adf4505-ceea-4a83-adc7-636cd4d2aee8\",\n    \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n    \"ss_performance_id\": \"1\",\n    \"value\": 2.5,\n    \"extra\": true,\n    \"total\": 3.5,\n    \"order\": 1,\n    \"time_pattern\": \"1212018372.3366\",\n    \"time_extra\": \"1212018372.3366\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "score": [
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style_performance creado</p>"
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
            "field": "value",
            "description": "<p>El valor que se le da un performance</p>"
          },
          {
            "group": "score",
            "type": "Boolean",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el performance tiene extra</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>El total del performance</p>"
          },
          {
            "group": "score",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>El orden en el que se pulso</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "time_performance",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al pulsar el tab</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "time_extra",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al pulsar el tab extra</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles_id</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_performance_id",
            "description": "<p>El <code>uuid</code> del ss_performance_id</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores_id</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds_id</p>"
          },
          {
            "group": "score",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_styles_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nstatus: \"success\",\ndata:{\n        \"id\": \"772ab17f-946d-4fd7-8695-e71bebd9b638\",\n        \"ss_data_scores_id\": \"e6a5f7a7-6899-4dac-8abc-534ba71576b9\",\n        \"ss_data_score_rounds_id\": \"28766c9a-f80d-4221-8647-20a6d5fd634a\",\n        \"ss_data_score_styles_id\": \"8f74a311-1b09-4800-b5a7-c55686629283\",\n        \"value\": 1,\n        \"extra\": false,\n        \"order\": 1,\n        \"time_performance\": \"1212018372.3366\",\n        \"time_extra\": null,\n        \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n        \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n        \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n        \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n        \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n        \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n        \"ss_performance_id\": \"ea042ddf-951f-4c97-a204-1fd8ebbd06ea\",\n        \"updated_at\": \"2021-01-29T19:14:38.000000Z\",\n        \"created_at\": \"2021-01-29T19:14:38.000000Z\"\n    }",
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
            "field": "TokenNotFound",
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
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el token.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El token recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-scores/Front/ApiScoresController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/scores/update-performance/:event/:phase/:judge/:battle"
      }
    ]
  },
  {
    "type": "post",
    "url": "/scoress/set-battles/:event/:phase/:judge",
    "title": "3.8.-Cargamos una o varias batallas por lotes",
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
        "content": "curl -i http://ionic.urbanroosters.com/api/scores/set-battles/0f62308e-8245-4e2f-8e01-b0c0920be35b/65443d8b-abfc-4e0b-a848-181fcfa1f4aj/019f7830-bb26-412d-ae6b-fe5bc4780359",
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
            "field": "token",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                              El api key que necesita para solicitar acceso",
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
            "description": "<p>El <code>uuid</code> del ss_data_scores este UUID se genera en el front con estandar UUID v4</p>"
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
            "type": "Boolean",
            "optional": false,
            "field": "verified",
            "description": "<p>*El valor de <code>true</code>  para indicar que los patrones, styles y rounds de una batalla esta comprobado (SOLO para el modo Offline el campo es opcional solo obligatiorio en modo offline)</p>"
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
            "description": "<p>El <code>uuid</code> ss_data_score_rounds este UUID se genera en el front con estandar UUID v4</p>"
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
            "type": "Boolean",
            "optional": false,
            "field": "verified",
            "description": "<p>*El valor de <code>true</code>  para indicar que los patrones, styles  de una batalla esta comprobado (SOLO para el modo Offline el campo es opcional solo obligatiorio en modo offline)</p>"
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
            "description": "<p>El <code>uuid</code> ss_data_score_styles este UUID se genera en el front con estandar UUID v4</p>"
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
            "type": "Boolean",
            "optional": false,
            "field": "verified",
            "description": "<p>*El valor de <code>true</code>  para indicar que los patrones de una batalla esta comprobado (SOLO para el modo Offline el campo es opcional solo obligatiorio en modo offline)</p>"
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
            "description": "<p>El <code>uuid</code> ss_data_score_patrons este UUID se genera en el front con estandar UUID v4</p>"
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
            "description": "<p>El <code>uuid</code> ss_data_score_performances este UUID se genera en el front con estandar UUID v4</p>"
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
            "type": "Object[ss_data_score_rounds]",
            "optional": false,
            "field": "ss_data_score_rounds",
            "description": "<p>Array con los datos del ss_data_score_rounds</p>"
          }
        ],
        "ss_data_score_rounds": [
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores padre (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "ss_round_structures_id",
            "description": "<p>El <code>uuid</code> del ss_round_structures (Es la estructura del round)</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Number",
            "optional": false,
            "field": "total_round",
            "description": "<p>El valor del total del round para un round</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "is_replica",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el round es de tipo réplica o no.</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "won",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante ganó la batalla</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "lost",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante perdió la batalla</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "finnished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al iniciar una batalla</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finalizar una batalla</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Object[ss_data_score_styles]",
            "optional": false,
            "field": "ss_data_score_styles",
            "description": "<p>Array con los datos del ss_data_score_styles</p>"
          }
        ],
        "ss_data_score_styles": [
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "Number",
            "optional": false,
            "field": "total_pattern",
            "description": "<p>El valor del total de los patrones para un style</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "Number",
            "optional": false,
            "field": "total_performances",
            "description": "<p>El valor del total de los performances para un style</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de la suma de los dos campos anteriores para obtener el total de un style</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "Boolean",
            "optional": false,
            "field": "finnished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al iniciar una batalla</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finalizar una batalla</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "Object[ss_data_score_style_patrons]",
            "optional": false,
            "field": "ss_data_score_style_patrons",
            "description": "<p>Array con los datos del ss_data_score_style_patrons</p>"
          }
        ],
        "ss_data_score_style_patrons": [
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style_patrons</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_styles_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "ss_patterns_styles_id",
            "description": "<p>El <code>uuid</code> del ss_patterns_styles (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>El valor del patron al dar tab en la app</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "Boolean",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el patron tiene punto extra</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de la suma de los dos campos anteriores para obtener el total de un patron</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "Boolean",
            "optional": false,
            "field": "finished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "time_pattern",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al realizar un tab en un patron</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "time_extra",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al realizar un tab en el extra de un patron</p>"
          }
        ],
        "score_styles": [
          {
            "group": "score_styles",
            "type": "Object[ss_data_score_style_performances]",
            "optional": false,
            "field": "ss_data_score_style_perfomances",
            "description": "<p>Array con los datos del ss_data_score_style_performaces</p>"
          }
        ],
        "ss_data_score_style_performances": [
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style_performaces</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_styles_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "ss_performance_id",
            "description": "<p>El <code>uuid</code> del ss_performance (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "number",
            "optional": false,
            "field": "value",
            "description": "<p>El valor del performance al dar tab en la app</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "Boolean",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el performance tiene punto extra</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de la suma de los dos campos anteriores para obtener el total de un performance</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "Boolean",
            "optional": false,
            "field": "finished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "time_performance",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al realizar un tab en un performance</p>"
          },
          {
            "group": "ss_data_score_style_performances",
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
          "content": " HTTP/1.1 200 OK\n\"status\": \"success\",\n\"data\": [\n    [\n        {\n            \"id\": \"03fc0a8f-b06f-4682-a09a-92f4f3e09520\",\n            \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n            \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n            \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n            \"participants_id\": \"349a1e2f-46a3-4fc0-a372-24596faf8328\",\n            \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n            \"total_battle\": 3.5,\n            \"has_replica\": 0,\n            \"judge_ur\": 0,\n            \"won\": 0,\n            \"lost\": 0,\n            \"completed\": 0,\n            \"partial\": 1,\n            \"order\": 2,\n            \"created_at\": \"2020-12-18T14:54:45.000000Z\",\n            \"updated_at\": \"2020-12-18T21:20:22.000000Z\",\n            \"deleted_at\": null,\n            \"params\": null,\n            \"log\": null,\n            \"started\": 1,\n            \"finished\": 0,\n            \"time_started\": \"1212018372.3366\",\n            \"time_finished\": null,\n            \"ss_data_score_rounds\": [\n                {\n                   \"id\": \"bc212def-92fd-4fed-8faf-7323e5d6ac4e\",\n                   \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                   \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                   \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n                   \"participants_id\": \"349a1e2f-46a3-4fc0-a372-24596faf8328\",\n                   \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n                   \"ss_data_scores_id\": \"03fc0a8f-b06f-4682-a09a-92f4f3e09520\",\n                   \"ss_round_structures_id\": \"938402b7-fab4-4b86-9033-09f66bde9da3\",\n                   \"total_round\": 3.5,\n                   \"is_replica\": 0,\n                   \"order\": 2,\n                   \"created_at\": \"2020-12-18T14:54:45.000000Z\",\n                   \"updated_at\": \"2020-12-18T21:20:22.000000Z\",\n                   \"deleted_at\": null,\n                   \"params\": null,\n                   \"log\": null,\n                   \"won\": 0,\n                   \"lost\": 0,\n                   \"started\": 1,\n                   \"finished\": 0,\n                   \"time_started\": \"1212018372.3366\",\n                   \"time_finished\": null,\n                   \"ss_data_score_styles\": [\n                       {\n                           \"id\": \"3fe2d9ff-4ebf-4a8a-9168-0598803b03ef\",\n                           \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                           \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                           \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n                           \"participants_id\": \"349a1e2f-46a3-4fc0-a372-24596faf8328\",\n                           \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n                           \"ss_data_scores_id\": \"03fc0a8f-b06f-4682-a09a-92f4f3e09520\",\n                           \"ss_data_score_rounds_id\": \"bc212def-92fd-4fed-8faf-7323e5d6ac4e\",\n                           \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                           \"total_pattern\": 3.5,\n                           \"total_performances\": 0,\n                           \"total\": 3.5,\n                           \"order\": 2,\n                           \"created_at\": \"2020-12-18T14:54:45.000000Z\",\n                           \"updated_at\": \"2020-12-18T21:20:22.000000Z\",\n                           \"deleted_at\": null,\n                           \"params\": null,\n                           \"log\": null,\n                           \"started\": 1,\n                           \"finished\": 0,\n                           \"time_started\": \"1212018372.3366\",\n                           \"time_finished\": null,\n                           \"ss_data_score_style_patrons\": [\n                               {\n                                   \"id\": \"0a648f1a-2640-463b-93cf-2888ee445b1f\",\n                                   \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                                   \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                                   \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n                                   \"participants_id\": \"349a1e2f-46a3-4fc0-a372-24596faf8328\",\n                                   \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n                                   \"ss_data_scores_id\": \"03fc0a8f-b06f-4682-a09a-92f4f3e09520\",\n                                   \"ss_data_score_rounds_id\": \"bc212def-92fd-4fed-8faf-7323e5d6ac4e\",\n                                   \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                                   \"ss_data_score_styles_id\": \"3fe2d9ff-4ebf-4a8a-9168-0598803b03ef\",\n                                   \"ss_patterns_styles_id\": 1,\n                                   \"value\": 2.5,\n                                   \"extra\": 1,\n                                   \"total\": 3.5,\n                                   \"order\": 1,\n                                   \"created_at\": \"2020-12-18T20:59:31.000000Z\",\n                                   \"updated_at\": \"2020-12-18T20:59:31.000000Z\",\n                                   \"deleted_at\": null,\n                                   \"params\": null,\n                                   \"log\": null,\n                                   \"time\": \"1212018372.3366\",\n                                   \"started\": 0,\n                                   \"finished\": 0\n                               }\n                           ],\n                           \"ss_data_score_style_performances\": [\n                               {\n                                   \"id\": \"4a94a778-dd30-4808-8b82-86136f292927\",\n                                   \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                                   \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                                   \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n                                   \"participants_id\": \"349a1e2f-46a3-4fc0-a372-24596faf8328\",\n                                   \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n                                   \"ss_data_scores_id\": \"03fc0a8f-b06f-4682-a09a-92f4f3e09520\",\n                                   \"ss_data_score_rounds_id\": \"bc212def-92fd-4fed-8faf-7323e5d6ac4e\",\n                                   \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                                   \"ss_data_score_styles_id\": \"3fe2d9ff-4ebf-4a8a-9168-0598803b03ef\",\n                                   \"ss_performance_id\": \"e47148d0-dbb7-496f-85d7-933bf060c0de\",\n                                   \"value\": 1,\n                                   \"extra\": 0,\n                                   \"total\": 0,\n                                   \"order\": 1,\n                                   \"created_at\": \"2020-12-18T20:59:31.000000Z\",\n                                   \"updated_at\": \"2020-12-18T20:59:31.000000Z\",\n                                   \"deleted_at\": null,\n                                   \"params\": null,\n                                   \"log\": null,\n                                   \"time\": \"1212018372.3366\",\n                                   \"started\": 0,\n                                   \"finished\": 0\n                               }\n                           ]\n                       }\n                   ]\n                }\n            ]\n        },\n        {\n            \"id\": \"7d47ff74-2f91-451c-974c-8113a843433d\",\n            \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n            \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n            \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n            \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n            \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n            \"total_battle\": 3.5,\n            \"has_replica\": 0,\n            \"judge_ur\": 0,\n            \"won\": 0,\n            \"lost\": 0,\n            \"completed\": 0,\n            \"partial\": 1,\n            \"order\": 1,\n            \"created_at\": \"2020-12-18T14:35:45.000000Z\",\n            \"updated_at\": \"2020-12-18T21:20:22.000000Z\",\n            \"deleted_at\": null,\n            \"params\": null,\n            \"log\": null,\n            \"started\": 1,\n            \"finished\": 0,\n            \"time_started\": \"1212018372.3366\",\n            \"time_finished\": null,\n            \"ss_data_score_rounds\": [\n                {\n                    \"id\": \"b5703e3d-39d0-4775-8018-93309cdeccf6\",\n                    \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                    \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                    \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n                    \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n                    \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n                    \"ss_data_scores_id\": \"7d47ff74-2f91-451c-974c-8113a843433d\",\n                    \"ss_round_structures_id\": \"938402b7-fab4-4b86-9033-09f66bde9da3\",\n                    \"total_round\": 3.5,\n                    \"is_replica\": 0,\n                    \"order\": 1,\n                    \"created_at\": \"2020-12-18T14:48:50.000000Z\",\n                    \"updated_at\": \"2020-12-18T21:20:22.000000Z\",\n                    \"deleted_at\": null,\n                    \"params\": null,\n                    \"log\": null,\n                    \"won\": 0,\n                    \"lost\": 0,\n                    \"started\": 1,\n                    \"finished\": 0,\n                    \"time_started\": \"1212018372.3366\",\n                    \"time_finished\": null,\n                    \"ss_data_score_styles\": [\n                        {\n                            \"id\": \"4adf4505-ceea-4a83-adc7-636cd4d2aee8\",\n                            \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                            \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                            \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n                            \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n                            \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n                            \"ss_data_scores_id\": \"7d47ff74-2f91-451c-974c-8113a843433d\",\n                            \"ss_data_score_rounds_id\": \"b5703e3d-39d0-4775-8018-93309cdeccf6\",\n                            \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                            \"total_pattern\": 3.5,\n                            \"total_performances\": 0,\n                            \"total\": 3.5,\n                            \"order\": 1,\n                            \"created_at\": \"2020-12-18T14:54:45.000000Z\",\n                            \"updated_at\": \"2020-12-18T21:20:22.000000Z\",\n                            \"deleted_at\": null,\n                            \"params\": null,\n                            \"log\": null,\n                            \"started\": 1,\n                            \"finished\": 0,\n                            \"time_started\": \"1212018372.3366\",\n                            \"time_finished\": null,\n                            \"ss_data_score_style_patrons\": [\n                                {\n                                   \"id\": \"169cc5c5-420c-4a89-baa8-693d2f13938e\",\n                                   \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                                   \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                                   \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n                                   \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n                                   \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n                                   \"ss_data_scores_id\": \"7d47ff74-2f91-451c-974c-8113a843433d\",\n                                   \"ss_data_score_rounds_id\": \"b5703e3d-39d0-4775-8018-93309cdeccf6\",\n                                   \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                                   \"ss_data_score_styles_id\": \"4adf4505-ceea-4a83-adc7-636cd4d2aee8\",\n                                   \"ss_patterns_styles_id\": 1,\n                                   \"value\": 2.5,\n                                   \"extra\": 1,\n                                   \"total\": 3.5,\n                                   \"order\": 1,\n                                   \"created_at\": \"2020-12-18T19:28:03.000000Z\",\n                                   \"updated_at\": \"2020-12-18T19:28:03.000000Z\",\n                                   \"deleted_at\": null,\n                                   \"params\": null,\n                                   \"log\": null,\n                                   \"time_patterns\": \"1212018372.3366\",\n                                   \"time_extra\": \"1212018372.3366\",\n                                   \"started\": 0,\n                                   \"finished\": 0\n                                }\n                            ],\n                            \"ss_data_score_style_performances\": [\n                                {\n                                   \"id\": \"10ede3e1-030e-4283-8a55-3f9824a93d94\",\n                                   \"fd_events_id\": \"0f62308e-8245-4e2f-8e01-b0c0920be35a\",\n                                   \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                                   \"fd_battles_id\": \"eece274b-a418-48af-8b56-6f658f10cb5f\",\n                                   \"participants_id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n                                   \"judges_id\": \"019f7830-bb26-412d-ae6b-fe5bc4780357\",\n                                   \"ss_data_scores_id\": \"7d47ff74-2f91-451c-974c-8113a843433d\",\n                                   \"ss_data_score_rounds_id\": \"b5703e3d-39d0-4775-8018-93309cdeccf6\",\n                                   \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                                   \"ss_data_score_styles_id\": \"4adf4505-ceea-4a83-adc7-636cd4d2aee8\",\n                                   \"ss_performance_id\": \"e47148d0-dbb7-496f-85d7-933bf060c0de\",\n                                   \"value\": 1,\n                                   \"extra\": 0,\n                                   \"total\": 0,\n                                   \"order\": 1,\n                                   \"created_at\": \"2020-12-18T20:56:49.000000Z\",\n                                   \"updated_at\": \"2020-12-18T20:56:49.000000Z\",\n                                   \"deleted_at\": null,\n                                   \"params\": null,\n                                   \"log\": null,\n                                   \"time_performances\": \"1212018372.3366\",\n                                   \"time_extra\": \"1212018372.3366\",\n                                   \"started\": 0,\n                                   \"finished\": 0\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n]",
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
            "field": "TokenNotFound",
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
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el token.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El token recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-scores/Front/ApiScoresController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/scoress/set-battles/:event/:phase/:judge"
      }
    ]
  },
  {
    "type": "post",
    "url": "/scores/set-completed/:event/:phase/:judge/:battle",
    "title": "3.11.- Determina si la batalla termino",
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
        "content": "curl -i http://ionic.urbanroosters.com/api/scores/set-completed/0f62308e-8245-4e2f-8e01-b0c0920be35a/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/019f7830-bb26-412d-ae6b-fe5bc4780357/9e97ca3e-d2a4-4bcc-84fe-a2a37a24e093",
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
            "field": "token",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                      El api key que necesita para solicitar acceso",
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
            "description": "<p>El <code>uuid</code> score a cerrar o completar la batalla para dicho juez este UUID ya esta del punto de set Order Battle es decir el ID que ya se tiene en el front</p>"
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
            "field": "TokenNotFound",
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
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el token.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El token recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-scores/Front/ApiScoresController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/scores/set-completed/:event/:phase/:judge/:battle"
      }
    ]
  },
  {
    "type": "post",
    "url": "/scores/set-completed-patterns/:event/:phase/:judge/:battle",
    "title": "3.12.- Determina si un style, round o score envió todos los patrones",
    "version": "1.0.0",
    "name": "setCompletedPatterns",
    "group": "3.-_Batallas",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Determina si el style, round o score enviarón todos los patrones para poder calcular la sumatoria de los registros, es decir que si nos envian el ID en un style nos da la sumatoria total del style, así para round y score (IMPORTANTE: Enviar solo cuando el registro este completo)</p>",
    "examples": [
      {
        "title": "Determina si un style, round o score envió todos los patrones",
        "content": "curl -i http://ionic.urbanroosters.com/api/scores/set-completed-patterns/0f62308e-8245-4e2f-8e01-b0c0920be35a/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/019f7830-bb26-412d-ae6b-fe5bc4780357/9e97ca3e-d2a4-4bcc-84fe-a2a37a24e093",
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
            "field": "token",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                      El api key que necesita para solicitar acceso",
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>El nombre del modelo a cerrar, puede ser: ss_data_scores, ss_data_score_rounds, ss_data_score_styles</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "record_id",
            "description": "<p>El <code>uuid</code> del record que se calculo el total</p>"
          }
        ],
        "participant": [
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "record_id",
            "description": "<p>El <code>uuid</code> del record a cambiar este UUID se genera en el front con estandar UUID v4</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"model\": \"ss_data_score_styles\",\n    \"record_id\": \"0018ed8c-2ec0-4992-ab6f-69e1f4eab8b9\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
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
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>El total del registro solicitado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nstatus: \"success\",\ndata:\n    {\n        \"model\": \"ss_data_score_styles\",\n        \"record_id\": \"8da5e391-f976-4859-b20a-ad9ccfa2d30a\",\n        \"total\": 115\n    }",
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
            "field": "TokenNotFound",
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
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"El total no coincide (Esto pasa cuando lo enviado desde la App no coincide con la sumatoria del backend)\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el token.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El token recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-scores/Front/ApiScoresController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/scores/set-completed-patterns/:event/:phase/:judge/:battle"
      }
    ]
  },
  {
    "type": "post",
    "url": "/scores/set-order-freestylers/:event/:phase/:judge/:battle",
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
        "content": "curl -i http://ionic.urbanroosters.com/api/scores/set-order-freestylers/0f62308e-8245-4e2f-8e01-b0c0920be35a/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/019f7830-bb26-412d-ae6b-fe5bc4780357/eece274b-a418-48af-8b56-6f658f10cb5f",
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
            "field": "token",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                          El api key que necesita para solicitar acceso",
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
            "description": "<p>El <code>uuid</code> del ss_data_scores este UUID se genera en el front con estandar UUID v4</p>"
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
            "description": "<p>El <code>uuid</code> del ss_data_score_round este UUID se genera en el front con estandar UUID v4</p>"
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
            "description": "<p>El <code>uuid</code> del ss_data_score_style este UUID se genera en el front con estandar UUID v4</p>"
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
          "content": "{\n    \"participants\":[\n        {\n            \"id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n            \"ss_data_scores\":{\n                \"id\": \"0b85e9c5-198f-4a26-92f6-ef72b421cb57\",\n                \"order\": \"1\",\n                \"time_started\": \"1212018372.3366\",\n                \"time_finished\": \"1212018372.3366\",\n                \"started\": true,\n                \"ss_data_score_rounds\": {\n                    \"id\": \"215130ba-8054-455f-9622-cb27340277d2\",\n                    \"ss_round_structures_id\": \"938402b7-fab4-4b86-9033-09f66bde9da3\",\n                    \"order\": \"1\",\n                    \"time_started\": \"1212018372.3366\",\n                    \"time_finished\": \"1212018372.3366\",\n                    \"started\": true,\n                    \"ss_data_score_styles\": {\n                        \"id\": \"860741cf-7d5e-4ece-9a6a-e5bcb40d944a\",\n                        \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                        \"order\": \"1\",\n                        \"time_started\": \"1212018372.3366\",\n                        \"time_finished\": \"1212018372.3366\",\n                        \"started\": true\n                    }\n                }\n            }\n        },\n        {\n            \"id\": \"349a1e2f-46a3-4fc0-a372-24596faf8328\",\n            \"ss_data_scores\":{\n                \"id\": \"8768b6ae-93d8-4831-a0ae-6b58a2490657\",\n                \"order\": \"2\",\n                \"time_started\": \"1212018372.3366\",\n                \"time_finished\": \"1212018372.3366\",\n                \"started\": true,\n                \"ss_data_score_rounds\": {\n                    \"id\": \"3b403879-4321-45f7-b71f-95462b6df174\",\n                    \"ss_round_structures_id\": \"938402b7-fab4-4b86-9033-09f66bde9da3\",\n                    \"order\": \"2\",\n                    \"time_started\": \"1212018372.3366\",\n                    \"time_finished\": \"1212018372.3366\",\n                    \"started\": true,\n                    \"ss_data_score_styles\": {\n                        \"id\": \"ba0db2a1-55eb-4a42-9722-8706badf5095\",\n                        \"ss_styles_id\": \"e5b36279-ce82-462d-8864-d0866ac21263\",\n                        \"order\": \"2\",\n                        \"time_started\": \"1212018372.3366\",\n                        \"time_finished\": \"1212018372.3366\",\n                        \"started\": true\n                    }\n                }\n            }\n        }\n    ]\n}",
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
            "field": "TokenNotFound",
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
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el token.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El token recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-scores/Front/ApiScoresController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/scores/set-order-freestylers/:event/:phase/:judge/:battle"
      }
    ]
  },
  {
    "type": "post",
    "url": "/scores/set-finished-record/:event/:phase/:judge/:battle",
    "title": "3.10.- Finalizar un Score, Round o Style",
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
        "content": "curl -i http://ionic.urbanroosters.com/api/scores/set-finished-record/0f62308e-8245-4e2f-8e01-b0c0920be35a/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/019f7830-bb26-412d-ae6b-fe5bc4780357/019f7830-bb26-412d-ae6b-fe5bc4782046",
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
            "field": "token",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                      El api key que necesita para solicitar acceso",
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
            "description": "<p>El <code>uuid</code> del record a cambiar este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "participant",
            "type": "Float",
            "optional": false,
            "field": "total",
            "description": "<p>El <code>number</code> es el total record (ss_data_scores, ss_data_score_rounds, ss_data_score_styles)</p>"
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
          "content": "{\n    \"model\": \"ss_data_scores\",\n    \"participants\":[\n        {\n            \"id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n            \"record_id\": \"0018ed8c-2ec0-4992-ab6f-69e1f4eab8b9\",\n            \"finished\": true,\n            \"total\": 10\n            \"time_finished\":\"1212018372.3366\"\n        },\n        {\n            \"id\": \"349a1e2f-46a3-4fc0-a372-24596faf8328\",\n            \"record_id\": \"3325709f-078b-43c6-b48f-28427ae58638\",\n            \"finished\": true,\n            \"total\": 15\n            \"time_finished\":\"1212018372.3366\"\n        }\n    ]\n}",
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
            "field": "TokenNotFound",
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
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el token.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El token recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-scores/Front/ApiScoresController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/scores/set-finished-record/:event/:phase/:judge/:battle"
      }
    ]
  },
  {
    "type": "post",
    "url": "/scores/set-round-replica/:event/:phase/:judge/:battle",
    "title": "3.9.-Determina el ganador y perdedor de una réplica",
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
        "content": "curl -i http://ionic.urbanroosters.com/api/scores/set-round-replica/0f62308e-8245-4e2f-8e01-b0c0920be35a/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/019f7830-bb26-412d-ae6b-fe5bc4780357/9e97ca3e-d2a4-4bcc-84fe-a2a37a24e093",
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
            "field": "token",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                      El api key que necesita para solicitar acceso",
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
            "description": "<p>El <code>uuid</code> ss_data_scores este UUID ya esta del punto de set Order Battle es decir el ID que ya se tiene en el front</p>"
          },
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> ss_data_score_rounds este UUID se genera en el front con estandar UUID v4</p>"
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
            "field": "TokenNotFound",
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
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el token.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El token recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-scores/Front/ApiScoresController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/scores/set-round-replica/:event/:phase/:judge/:battle"
      }
    ]
  },
  {
    "type": "post",
    "url": "/scores/set-started-record/:event/:phase/:judge/:battle",
    "title": "3.13.- Acutualizar Started un Score, Round o Style",
    "version": "1.0.0",
    "name": "setStartedScores",
    "group": "3.-_Batallas",
    "permission": [
      {
        "name": "Token de usuario autorizado"
      }
    ],
    "description": "<p>Actulizamos el started del registro de tipo ss_data_scores, ss_data_score_rounds o ss_data_score_styles, al Empezar la votación debe llegar un array con el modelo que es el nombre de la tabla a empezar y participantes con cada participante, el id de la tabla (ss_data_scores, ss_data_score_rounds, ss_data_score_styles), el valor true en started y el time_started</p>",
    "examples": [
      {
        "title": "Cerramos un registro",
        "content": "curl -i http://ionic.urbanroosters.com/api/scores/set-started-record/0f62308e-8245-4e2f-8e01-b0c0920be35a/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/019f7830-bb26-412d-ae6b-fe5bc4780357/019f7830-bb26-412d-ae6b-fe5bc4782046",
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
            "field": "token",
            "description": "<p>El api key que necesita para solicitar acceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-example                      El api key que necesita para solicitar acceso",
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
            "description": "<p>Array con los participantes del evento  que contiene id, el id del recored a cerrar y started</p>"
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
            "description": "<p>El <code>uuid</code> del record a cambiar este UUID se genera en el front con estandar UUID v4</p>"
          },
          {
            "group": "participant",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>true</code> o <code>false</code> para cerrar el registro</p>"
          },
          {
            "group": "participant",
            "type": "String",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finalizar un record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"model\": \"ss_data_scores\",\n    \"participants\":[\n        {\n            \"id\": \"42c51902-d524-4dc9-95db-4846f0606420\",\n            \"record_id\": \"0018ed8c-2ec0-4992-ab6f-69e1f4eab8b9\",\n            \"started\": true,\n            \"time_started\":\"1212018372.3366\"\n        },\n        {\n            \"id\": \"349a1e2f-46a3-4fc0-a372-24596faf8328\",\n            \"record_id\": \"3325709f-078b-43c6-b48f-28427ae58638\",\n            \"started\": true,\n            \"time_started\":\"1212018372.3366\"\n        }\n    ]\n}",
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
            "field": "TokenNotFound",
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
          "content": "\nHTTP/1.1 400 Bad Request\n{\n    \"status\": \"Error\"\n    \"message\": \"Uuid Incorrecto\"\n}\nHTTP/1.1 401 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"No se recibió el token.\"\n}\n\nHTTP/1.1 403 Not Authenticated\n{\n    \"status\": \"Error\"\n    \"message\": \"El token recibido no tiene autorización.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apps/api-app-judges/components/api-scores/Front/ApiScoresController.php",
    "groupTitle": "3.-_Batallas",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/scores/set-started-record/:event/:phase/:judge/:battle"
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
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
    "filename": "apps/api-app-judges/components/api-results/Front/ApiResultsController.php",
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
        "content": "curl -i http://ionic.urbanroosters.com/api/results/get-result-replica/5ff887b7-62a5-4200-b90d-66eb08bd6676/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/300122ff-7b5e-4d0f-b679-675bdbf59b3b/ac9174c7-304e-4a5a-b6be-268714e0f779",
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
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
    "filename": "apps/api-app-judges/components/api-results/Front/ApiResultsController.php",
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
        "content": "curl -i http://ionic.urbanroosters.com/api/results/get-score-battle/5ff887b7-62a5-4200-b90d-66eb08bd6676/65443d8b-abfc-4e0b-a848-181fcfa1f4a3/300122ff-7b5e-4d0f-b679-675bdbf59b3b/ac9174c7-304e-4a5a-b6be-268714e0f779",
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
          "content": " {\n  \"Authorization\": \"Bearer El token generado en el login del sistema del punto 0.1 de los endpoints\"\n}",
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
            "type": "Object[ss_data_score_rounds]",
            "optional": false,
            "field": "ss_data_score_rounds",
            "description": "<p>Array con los datos del ss_data_score_rounds</p>"
          }
        ],
        "ss_data_score_rounds": [
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores padre (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "ss_round_structures_id",
            "description": "<p>El <code>uuid</code> del ss_round_structures (Es la estructura del round)</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Number",
            "optional": false,
            "field": "total_round",
            "description": "<p>El valor del total del round para un round</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "is_replica",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el round es de tipo réplica o no.</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "won",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante ganó la batalla</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "lost",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el MC/participante perdió la batalla</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Boolean",
            "optional": false,
            "field": "finnished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al iniciar una batalla</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "String",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finalizar una batalla</p>"
          },
          {
            "group": "ss_data_score_rounds",
            "type": "Object[ss_data_score_styles]",
            "optional": false,
            "field": "ss_data_score_styles",
            "description": "<p>Array con los datos del ss_data_score_styles</p>"
          }
        ],
        "ss_data_score_styles": [
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "Number",
            "optional": false,
            "field": "total_pattern",
            "description": "<p>El valor del total de los patrones para un style</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "Number",
            "optional": false,
            "field": "total_performances",
            "description": "<p>El valor del total de los performances para un style</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de la suma de los dos campos anteriores para obtener el total de un style</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "Boolean",
            "optional": false,
            "field": "finnished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "time_started",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al iniciar una batalla</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "String",
            "optional": false,
            "field": "time_finished",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al finalizar una batalla</p>"
          },
          {
            "group": "ss_data_score_styles",
            "type": "Object[ss_data_score_style_patrons]",
            "optional": false,
            "field": "ss_data_score_style_patrons",
            "description": "<p>Array con los datos del ss_data_score_style_patrons</p>"
          }
        ],
        "ss_data_score_style_patrons": [
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style_patrons</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_styles_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "ss_patterns_styles_id",
            "description": "<p>El <code>uuid</code> del ss_patterns_styles (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>El valor del patron al dar tab en la app</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "Boolean",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el patron tiene punto extra</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de la suma de los dos campos anteriores para obtener el total de un patron</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "Boolean",
            "optional": false,
            "field": "finished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "time_pattern",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al realizar un tab en un patron</p>"
          },
          {
            "group": "ss_data_score_style_patrons",
            "type": "String",
            "optional": false,
            "field": "time_extra",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al realizar un tab en el extra de un patron</p>"
          }
        ],
        "score_styles": [
          {
            "group": "score_styles",
            "type": "Object[ss_data_score_style_performances]",
            "optional": false,
            "field": "score_perfomances",
            "description": "<p>Array con los datos del ss_data_score_style_performaces</p>"
          }
        ],
        "ss_data_score_style_performances": [
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El <code>uuid</code> del ss_data_score_style_performaces</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "fd_events_id",
            "description": "<p>El <code>uuid</code> del evento</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "fd_phases_id",
            "description": "<p>El <code>uuid</code> de la fase del evento</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "fd_battles_id",
            "description": "<p>El <code>uuid</code> de la batalla de la fase y del evento</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "participants_id",
            "description": "<p>El <code>uuid</code> del MC/participante</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "judges_id",
            "description": "<p>El <code>uuid</code> del Juez que realiza la votación</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "ss_data_scores_id",
            "description": "<p>El <code>uuid</code> del ss_data_scores (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_rounds_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_rounds (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "ss_styles_id",
            "description": "<p>El <code>uuid</code> del ss_styles (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "ss_data_score_styles_id",
            "description": "<p>El <code>uuid</code> del ss_data_score_styles (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "ss_performance_id",
            "description": "<p>El <code>uuid</code> del ss_performance (Tabla relacionada)</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "number",
            "optional": false,
            "field": "value",
            "description": "<p>El valor del performance al dar tab en la app</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "Boolean",
            "optional": false,
            "field": "extra",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si el performance tiene punto extra</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>El valor de la suma de los dos campos anteriores para obtener el total de un performance</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "Boolean",
            "optional": false,
            "field": "started",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya inicio</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "Boolean",
            "optional": false,
            "field": "finished",
            "description": "<p>El valor de <code>TRUE</code> o <code>FALSE</code> si la batalla ya finalizó</p>"
          },
          {
            "group": "ss_data_score_style_performances",
            "type": "String",
            "optional": false,
            "field": "time_performance",
            "description": "<p>El <code>1212018372.3366</code> de la marca de tiempo al realizar un tab en un performance</p>"
          },
          {
            "group": "ss_data_score_style_performances",
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
          "content": " HTTP/1.1 200 OK\n\"status\": \"success\",\n\"data\": [\n    {\n       \"id\": \"8da5e391-f976-4859-b20a-ad9ccfa2d30a\",\n       \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n       \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n       \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n       \"participants_id\": \"76a3c468-f833-4f83-b81c-d9a619cafb77\",\n       \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n       \"total_battle\": 115,\n       \"has_replica\": 1,\n       \"judge_ur\": 0,\n       \"won\": 1,\n       \"lost\": 0,\n       \"completed\": 1,\n       \"partial\": 0,\n       \"order\": null,\n       \"created_at\": \"2020-10-17T22:56:19.000000Z\",\n       \"updated_at\": \"2020-12-21T22:58:40.000000Z\",\n       \"deleted_at\": null,\n       \"params\": null,\n       \"log\": null,\n       \"started\": 0,\n       \"finished\": 0,\n       \"time_started\": null,\n       \"time_finished\": \"1212018372.3366\",\n       \"ss_data_score_rounds\": [\n           {\n               \"id\": \"0a432b92-7a3b-4d2f-922f-dbc2d0a39e48\",\n               \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n               \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n               \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n               \"participants_id\": \"76a3c468-f833-4f83-b81c-d9a619cafb77\",\n               \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n               \"ss_data_scores_id\": \"8da5e391-f976-4859-b20a-ad9ccfa2d30a\",\n               \"ss_round_structures_id\": \"332cd557-ec53-4db6-bf83-ab9467714e40\",\n               \"total_round\": 12.5,\n               \"is_replica\": 1,\n               \"order\": null,\n               \"created_at\": \"2020-10-17T23:23:16.000000Z\",\n               \"updated_at\": \"2020-12-21T21:20:52.000000Z\",\n               \"deleted_at\": null,\n               \"params\": null,\n               \"log\": null,\n               \"won\": 1,\n               \"lost\": 0,\n               \"started\": 0,\n               \"finished\": 0,\n               \"time_started\": null,\n               \"time_finished\": null,\n               \"ss_data_score_styles\": [\n                   {\n                       \"id\": \"a40ee54d-f638-4f14-9620-71e7f24f6f2e\",\n                       \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n                       \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                       \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n                       \"participants_id\": \"76a3c468-f833-4f83-b81c-d9a619cafb77\",\n                       \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n                       \"ss_data_scores_id\": \"8da5e391-f976-4859-b20a-ad9ccfa2d30a\",\n                       \"ss_data_score_rounds_id\": \"0a432b92-7a3b-4d2f-922f-dbc2d0a39e48\",\n                       \"ss_styles_id\": \"80c8514a-d278-4af6-b76f-684ada4cef96\",\n                       \"total_pattern\": 12.5,\n                       \"total_performances\": 0,\n                       \"total\": 12.5,\n                       \"order\": 1,\n                       \"created_at\": \"2020-10-17T23:23:16.000000Z\",\n                       \"updated_at\": \"2020-10-17T23:23:16.000000Z\",\n                       \"deleted_at\": null,\n                       \"params\": null,\n                       \"log\": null,\n                       \"started\": 0,\n                       \"finished\": 0,\n                       \"time_started\": null,\n                       \"time_finished\": null,\n                       \"ss_data_score_style_patrons\": [\n                           {\n                               \"id\": \"1e0e440f-6c68-45a0-8a28-b49f8b54d4a9\",\n                               \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n                               \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                               \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n                               \"participants_id\": \"76a3c468-f833-4f83-b81c-d9a619cafb77\",\n                               \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n                               \"ss_data_scores_id\": \"8da5e391-f976-4859-b20a-ad9ccfa2d30a\",\n                               \"ss_data_score_rounds_id\": \"0a432b92-7a3b-4d2f-922f-dbc2d0a39e48\",\n                               \"ss_styles_id\": \"80c8514a-d278-4af6-b76f-684ada4cef96\",\n                               \"ss_data_score_styles_id\": \"a40ee54d-f638-4f14-9620-71e7f24f6f2e\",\n                               \"ss_patterns_styles_id\": 55,\n                               \"value\": 2.5,\n                               \"extra\": 0,\n                               \"total\": 2.5,\n                               \"order\": null,\n                               \"created_at\": \"2020-10-17T23:23:16.000000Z\",\n                               \"updated_at\": \"2020-10-17T23:23:16.000000Z\",\n                               \"deleted_at\": null,\n                               \"params\": null,\n                               \"log\": null,\n                               \"time_pattern\": null,\n                               \"time_extra\": null,\n                               \"started\": 0,\n                               \"finished\": 0\n                           },\n                           ...\n                       ],\n                       \"ss_data_score_style_performances\": [\n                           {\n                               \"id\": \"2f53f63d-5058-4b1c-935a-693e0b002646\",\n                               \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n                               \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                               \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n                               \"participants_id\": \"76a3c468-f833-4f83-b81c-d9a619cafb77\",\n                               \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n                               \"ss_data_scores_id\": \"8da5e391-f976-4859-b20a-ad9ccfa2d30a\",\n                               \"ss_data_score_rounds_id\": \"0a432b92-7a3b-4d2f-922f-dbc2d0a39e48\",\n                               \"ss_styles_id\": \"80c8514a-d278-4af6-b76f-684ada4cef96\",\n                               \"ss_data_score_styles_id\": \"a40ee54d-f638-4f14-9620-71e7f24f6f2e\",\n                               \"ss_performance_id\": \"e47148d0-dbb7-496f-85d7-933bf060c0de\",\n                               \"value\": 0,\n                               \"extra\": 0,\n                               \"total\": 0,\n                               \"order\": null,\n                               \"created_at\": \"2020-10-17T23:23:16.000000Z\",\n                               \"updated_at\": \"2020-10-17T23:23:16.000000Z\",\n                               \"deleted_at\": null,\n                               \"params\": null,\n                               \"log\": null,\n                               \"time_performance\": null,\n                               \"time_extra\": null,\n                               \"started\": 0,\n                               \"finished\": 0\n                           },\n                           ...\n                       ]\n                   },\n                   ...\n               ]\n           },\n           ...\n       ]\n    },\n    {\n        \"id\": \"b8024511-2629-4bdc-914a-c6a35357ab0d\",\n        \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n        \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n        \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n        \"participants_id\": \"568b8217-884f-46bc-9cc9-ad9cc6d7ec9b\",\n        \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n        \"total_battle\": 113.5,\n        \"has_replica\": 1,\n        \"judge_ur\": 0,\n        \"won\": 0,\n        \"lost\": 1,\n        \"completed\": 1,\n        \"partial\": 0,\n        \"order\": null,\n        \"created_at\": \"2020-10-17T22:56:20.000000Z\",\n        \"updated_at\": \"2020-12-21T22:58:40.000000Z\",\n        \"deleted_at\": null,\n        \"params\": null,\n        \"log\": null,\n        \"started\": 0,\n        \"finished\": 0,\n        \"time_started\": null,\n        \"time_finished\": \"1212018372.3366\",\n        \"ss_data_score_rounds\": [\n            {\n                \"id\": \"34c50526-8547-4441-8383-4c4d31ca504c\",\n                \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n                \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n                \"participants_id\": \"568b8217-884f-46bc-9cc9-ad9cc6d7ec9b\",\n                \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n                \"ss_data_scores_id\": \"b8024511-2629-4bdc-914a-c6a35357ab0d\",\n                \"ss_round_structures_id\": \"d00cf41c-ff94-4482-ad73-cb13da9813f8\",\n                \"total_round\": 16,\n                \"is_replica\": 0,\n                \"order\": null,\n                \"created_at\": \"2020-10-17T23:00:41.000000Z\",\n                \"updated_at\": \"2020-10-17T23:02:36.000000Z\",\n                \"deleted_at\": null,\n                \"params\": null,\n                \"log\": null,\n                \"won\": 0,\n                \"lost\": 0,\n                \"started\": 0,\n                \"finished\": 0,\n                \"time_started\": null,\n                \"time_finished\": null,\n                \"ss_data_score_styles\": [\n                    {\n                        \"id\": \"1566c813-8f1f-4f2a-b9f4-f6111158dce5\",\n                        \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n                        \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                        \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n                        \"participants_id\": \"568b8217-884f-46bc-9cc9-ad9cc6d7ec9b\",\n                        \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n                        \"ss_data_scores_id\": \"b8024511-2629-4bdc-914a-c6a35357ab0d\",\n                        \"ss_data_score_rounds_id\": \"34c50526-8547-4441-8383-4c4d31ca504c\",\n                        \"ss_styles_id\": \"25f93aa6-5c95-46fa-b122-ad11947b80ff\",\n                        \"total_pattern\": 8,\n                        \"total_performances\": 0,\n                        \"total\": 8,\n                        \"order\": 1,\n                        \"created_at\": \"2020-10-17T23:02:36.000000Z\",\n                        \"updated_at\": \"2020-10-17T23:02:36.000000Z\",\n                        \"deleted_at\": null,\n                        \"params\": null,\n                        \"log\": null,\n                        \"started\": 0,\n                        \"finished\": 0,\n                        \"time_started\": null,\n                        \"time_finished\": null,\n                        \"ss_data_score_style_patrons\": [\n                            {\n                               \"id\": \"25daffeb-8b80-4eb4-afc4-7dd2b9cc0eb0\",\n                               \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n                               \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                               \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n                               \"participants_id\": \"568b8217-884f-46bc-9cc9-ad9cc6d7ec9b\",\n                               \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n                               \"ss_data_scores_id\": \"b8024511-2629-4bdc-914a-c6a35357ab0d\",\n                               \"ss_data_score_rounds_id\": \"34c50526-8547-4441-8383-4c4d31ca504c\",\n                               \"ss_styles_id\": \"25f93aa6-5c95-46fa-b122-ad11947b80ff\",\n                               \"ss_data_score_styles_id\": \"1566c813-8f1f-4f2a-b9f4-f6111158dce5\",\n                               \"ss_patterns_styles_id\": 18,\n                               \"value\": 2,\n                               \"extra\": 0,\n                               \"total\": 2,\n                               \"order\": null,\n                               \"created_at\": \"2020-10-17T23:02:36.000000Z\",\n                               \"updated_at\": \"2020-10-17T23:02:36.000000Z\",\n                               \"deleted_at\": null,\n                               \"params\": null,\n                               \"log\": null,\n                               \"time_pattern\": null,\n                               \"time_extra\": null,\n                               \"started\": 0,\n                               \"finished\": 0\n                            },\n                            ...\n                        ],\n                        \"ss_data_score_style_performances\": [\n                            {\n                               \"id\": \"9597bcb7-930d-4676-adae-0601796e7352\",\n                               \"fd_events_id\": \"851d8e82-9131-4b34-ad9f-df79b71ef678\",\n                               \"fd_phases_id\": \"65443d8b-abfc-4e0b-a848-181fcfa1f4a3\",\n                               \"fd_battles_id\": \"fd9a1418-d1ab-4813-8f7d-3423c9adc11b\",\n                               \"participants_id\": \"568b8217-884f-46bc-9cc9-ad9cc6d7ec9b\",\n                               \"judges_id\": \"6e0d493d-c68b-427c-81d7-6b6021a5544c\",\n                               \"ss_data_scores_id\": \"b8024511-2629-4bdc-914a-c6a35357ab0d\",\n                               \"ss_data_score_rounds_id\": \"34c50526-8547-4441-8383-4c4d31ca504c\",\n                               \"ss_styles_id\": \"25f93aa6-5c95-46fa-b122-ad11947b80ff\",\n                               \"ss_data_score_styles_id\": \"1566c813-8f1f-4f2a-b9f4-f6111158dce5\",\n                               \"ss_performance_id\": \"e5efeac1-94cf-45f4-8aa2-275a1806826f\",\n                               \"value\": 0,\n                               \"extra\": 0,\n                               \"total\": 0,\n                               \"order\": null,\n                               \"created_at\": \"2020-10-17T23:02:36.000000Z\",\n                               \"updated_at\": \"2020-10-17T23:02:36.000000Z\",\n                               \"deleted_at\": null,\n                               \"params\": null,\n                               \"log\": null,\n                               \"time_perfromance\": null,\n                               \"time_extra\": null,\n                               \"started\": 0,\n                               \"finished\": 0\n                            },\n                            ...\n                        ]\n                    },\n                    ...\n                ]\n            },\n            ...\n        ]\n    }",
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
    "filename": "apps/api-app-judges/components/api-results/Front/ApiResultsController.php",
    "groupTitle": "4.-_Resultados",
    "sampleRequest": [
      {
        "url": "https://ionic.urbanroosters.com/api/results/get-score-battle/:event/:phase/:judge/:battle"
      }
    ]
  }
] });
