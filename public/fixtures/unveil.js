var unveil_fixture = {
  "type": "Document", 
  "children": [
    {
      "type": "Section", 
      "children": [
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "properties": {
                    "strong": true
                  }, 
                  "value": "Unveil"
                }, 
                {
                  "type": "Text", 
                  "value": " is a data exploration and visualization toolkit that utilizes data-driven software design."
                }
              ], 
              "value": null
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "value": "It features generic data abstraction through Collections, a unified interface for developing pluggable visualizations, and a Scenegraph implementation that simplifies the usage of the the "
                }, 
                {
                  "type": "Link", 
                  "properties": {
                    "alias": "HTML 5 Canvas API"
                  }, 
                  "value": "http://dev.w3.org/html5/canvas-api/canvas-2d-api.html"
                }, 
                {
                  "type": "Text", 
                  "value": "."
                }
              ], 
              "value": null
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "value": "Although shipping with it's own little graphic library, the "
                }, 
                {
                  "type": "Text", 
                  "properties": {
                    "emph": true
                  }, 
                  "value": "Scene API"
                }, 
                {
                  "type": "Text", 
                  "value": ", Unveil.js is designed to be used with any other visualization library. So in the first place, it suggests a different approach on how you deal with domain data in a visualization scenario."
                }
              ], 
              "value": null
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "properties": {
                    "strong": true
                  }, 
                  "value": "Note:"
                }
              ], 
              "value": null
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "value": "This documentation is generated on the fly using the "
                }, 
                {
                  "type": "Link", 
                  "properties": {
                    "alias": "Ndogen"
                  }, 
                  "value": "http://github.com/oliver----/ndogen"
                }, 
                {
                  "type": "Text", 
                  "value": " documentation generator. Since this instant doc-generation part is under heavy development, you'll experience some glitches. We're working on it! Please have a look at the "
                }, 
                {
                  "type": "Link", 
                  "properties": {
                    "alias": "raw markup"
                  }, 
                  "value": "http://github.com/michael/unveil/blob/master/index.ndg"
                }, 
                {
                  "type": "Text", 
                  "value": " too."
                }
              ], 
              "value": null
            }
          ], 
          "value": null
        }
      ], 
      "value": "Unveil.js", 
      "properties": {
        "level": 1
      }
    }, 
    {
      "type": "Section", 
      "children": [
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "value": "Collections are the main building block of the toolkit. A "
                }, 
                {
                  "type": "Text", 
                  "properties": {
                    "emph": true
                  }, 
                  "value": "Collection"
                }, 
                {
                  "type": "Text", 
                  "value": " is a simple data abstraction format where a data-set under investigation conforms to a collection of data items that describes all facets of the underlying data in a simple and universal way. You can think of a "
                }, 
                {
                  "type": "Text", 
                  "properties": {
                    "emph": true
                  }, 
                  "value": "Collection"
                }, 
                {
                  "type": "Text", 
                  "value": " as a table of data, except it provides precise information about the data contained (meta-data)."
                }
              ], 
              "value": null
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "properties": {
                    "emph": true
                  }, 
                  "value": "Collections"
                }, 
                {
                  "type": "Text", 
                  "value": " are represented as a JSON string, which serves as an exchange format. Since JSON is heavily used in web-services, its perfectly suited for usage in a cloud-like scenario. Your collections can be constructed on the fly using live data from web services that either provides data directly in the Collection format or through a translator service that serves as an adapter for an existing service."
                }
              ], 
              "value": null
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "value": "After passing the raw format to the "
                }, 
                {
                  "type": "Text", 
                  "properties": {
                    "emph": true
                  }, 
                  "value": "Collection"
                }, 
                {
                  "type": "Text", 
                  "value": " constructor, they are internally represented as a network of nodes (a graph so to say), that allows efficient operations on the "
                }, 
                {
                  "type": "Text", 
                  "properties": {
                    "emph": true
                  }, 
                  "value": "Collection"
                }, 
                {
                  "type": "Text", 
                  "value": " by traversing the graph instead of iterating over all items, values etc. Also operations like filtering, grouping etc. are already supported."
                }
              ], 
              "value": null
            }
          ], 
          "value": null
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "Code", 
                  "value": " var countries = new Collection({\n   \"properties\": \"properties\": {\n     \"name\": {\n       \"name\": \"Country Name\",\n       \"type\": \"string\",\n       \"unique\": true\n     },\n     \"official_language\": {\n       \"name\": \"Official language\",\n       \"type\": \"string\",\n       \"unique\": true\n     },\n     \"form_of_government\": {\n       \"name\": \"Form of governmennt\",\n       \"type\": \"string\",\n       \"unique\": false\n     },\n     \"currency_used\": {\n       \"name\": \"Currency used\",\n       \"type\": \"string\",\n       \"unique\": true\n     },\n     \"population\": {\n       \"name\": \"Population\",\n       \"type\": \"number\",\n       \"unique\": true\n     },\n     \"gdp_nominal\": {\n       \"name\": \"GDP nominal\",\n       \"type\": \"number\",\n       \"unique\": true\n     },\n     \"area\": {\n       \"name\": \"Area\",\n       \"type\": \"number\",\n       \"unique\": true\n     },\n     \"date_founded\": {\n       \"name\": \"Date founded\",\n       \"type\": \"date\",\n       \"unqiue\": true\n     }\n   },\n   \"items\": {\n     \"arg\": {\n       \"name\": \"Argentina\",\n       \"official_language\": \"Spanish Language\",\n       \"form_of_government\": [\n         \"Federal republic\",\n         \"Presidential system\"\n       ],\n       \"currency_used\": \"Argentinian Peso\",\n       \"population\": 39745613,\n       \"gdp_nominal\": 338700000000.0,\n       \"area\": 2780403.0,\n       \"date_founded\": \"1816-07-09\"\n     },\n     ...\n   },\n });\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "The "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Collection"
                    }, 
                    {
                      "type": "Text", 
                      "value": " constructor takes a collection represented as a JavaScript object, which conforms to a parsed "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "JSON Collection String"
                    }, 
                    {
                      "type": "Text", 
                      "value": ". Once created you can query the information contained."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "The API features a simple object model for working with such in-memory collections. The "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Collection"
                    }, 
                    {
                      "type": "Text", 
                      "value": " object gives you access to the properties and items contained."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "Please make yourself familiar with the "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Node API"
                    }, 
                    {
                      "type": "Text", 
                      "value": ", which is the data structure used for modeling the internal structure of a collection, which is a graph. Be aware that "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Collection"
                    }, 
                    {
                      "type": "Text", 
                      "value": ", "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Property"
                    }, 
                    {
                      "type": "Text", 
                      "value": ", "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Item"
                    }, 
                    {
                      "type": "Text", 
                      "value": " and "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Value"
                    }, 
                    {
                      "type": "Text", 
                      "value": " objects inherit from "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Node"
                    }, 
                    {
                      "type": "Text", 
                      "value": ", so the full "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Node API"
                    }, 
                    {
                      "type": "Text", 
                      "value": " is available on such objects."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }
          ], 
          "value": "Construction", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "Meta-data (data about data) is represented as a set of properties that belongs to a collection. A "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Property"
                    }, 
                    {
                      "type": "Text", 
                      "value": " (cmp. a column in a table) holds a key, a name (cmp. a header of a column) and a type (telling whether the data is numeric or textual, etc.)."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Access the Collection's properties:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " var properties = countries.all('properties'); // => SortedHash\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "You can also access them directly:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " var population = countries.get('properties', 'population');\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "And you can use property inspection:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " population.type; // => 'string'\n population.name; // => 'Population'\n population.unique; // => true\n"
                }
              ], 
              "value": null
            }
          ], 
          "value": "Properties", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "An item of the collection conforms to a row in a data table, except one \u2018cell\u2019 can have arbitrary many values (non-unique attributes)."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "List all items:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " var items = countries.all('items'); // => SortedHash containing Item objects\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Or access them directly:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " var argentina = countries.get('items', 'arg'); -> Item#arg\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Inspect item values:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " argentina.value('name'); // => 'Argentina'\n argentina.value('currency_used'); // => 'Argentinian Peso'\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Non-unique properties have more that one value:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " argentina.values('form_of_government');\n // => [String#Federal_Republic, String#Presidential_system]\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "children": [
                        {
                          "type": "Text", 
                          "value": "With "
                        }, 
                        {
                          "type": "Text", 
                          "properties": {
                            "emph": true
                          }, 
                          "value": "SortedHash#each"
                        }, 
                        {
                          "type": "Text", 
                          "value": " you can easily iterate over values:"
                        }
                      ], 
                      "value": null, 
                      "properties": {
                        "strong": true
                      }
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " argentina.values('form_of_government').each(function(index, gf) {\n   gf; // => e.g. 'Presidential System'\n });\n"
                }
              ], 
              "value": null
            }
          ], 
          "value": "Items", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "You can not only view values on a raw level but also as Nodes, which provide useful meta-information about connections etc."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "List all items:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " var items = countries.all('items'); // => SortedHash containing Item objects\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Inspect the value 'Federal republic':"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " federal_republic = argentina.all('form_of_government').first();\n // => Node#Federal_Republic\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Which other countries also have this government form?"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " federal_republic.all('items'); // => [Node#austria, Node#usa]\n"
                }
              ], 
              "value": null
            }
          ], 
          "value": "Values", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "Since a "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "SortedHash"
                    }, 
                    {
                      "type": "Text", 
                      "value": " conforms to a set in mathematical respect, some interesting operations can be performed."
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " var english = countries.all('items').select(function(key, i) {\n   return i.value('official_language') === 'English'; \n });\n   \n var french = countries.all('items').select(function(key, i) {\n   return i.value('official_language') === 'French'; \n });\n \n // english and french speaking countries\n var english_and_french = english.intersect(french); // => [Node#canada]\n \n // english or french speaking countries\n var english_or_french = english.union(french);\n // => [Node#uk, Node#france, Node#Switzerland, ...]\n"
                }
              ], 
              "value": null
            }
          ], 
          "value": "Set operations", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "Transformers are used to do operations on the desired "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Collection"
                    }, 
                    {
                      "type": "Text", 
                      "value": ". A commonly used one is the group transformation."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "The following code does a grouping by the "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "official_language"
                    }, 
                    {
                      "type": "Text", 
                      "value": " property and sums up all numeric properties (like population, area). What you get is a modified collection that shows aggregated values for all occurring languages."
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " var languages = countries.transform('group', {\n   property: 'official_language',\n   aggregator: 'SUM'\n });\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "The resulting collection looks like this:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " {\n   \"properties\": \"properties\": {\n     \"official_language\": {\n       \"name\": \"Official language\",\n       \"type\": \"string\",\n       \"unique\": true\n     },\n     \"population\": {\n       \"name\": \"Population\",\n       \"type\": \"number\",\n       \"unique\": true\n     },\n     \"gdp_nominal\": {\n       \"name\": \"GDP nominal\",\n       \"type\": \"number\",\n       \"unique\": true\n     },\n     \"area\": {\n       \"name\": \"Area\",\n       \"type\": \"number\",\n       \"unique\": true\n     }\n   },\n   \"items\": {\n     \"English\": {\n       \"population\": 397445613,\n       \"gdp_nominal\": 4341700000000.0,\n       \"area\": 2780403.0,\n     },\n     \"German\": {\n       \"population\": 91560000,\n       \"gdp_nominal\": 4341700000000.0,\n       \"area\": 2780403.0,\n     },\n     ...\n   }\n };\n"
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "Transformers are non-destructive. The original "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Collection"
                    }, 
                    {
                      "type": "Text", 
                      "value": " is not modified unless you re-assign the result."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }
          ], 
          "value": "Transformers", 
          "properties": {
            "anchor": "TRANSFORMERS", 
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "All you have to do is to assign a new "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Property"
                    }, 
                    {
                      "type": "Text", 
                      "value": " on the pv.Collection.transformers object, which holds a transformer function. This function takes an input collection and a params hash."
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " pv.Collection.transformers.group = function(c, params) {\n   // hardcore grouping action that yields a modified output collection\n   return outputColletion;\n };\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "Have a look at the implementation of the "
                    }, 
                    {
                      "type": "Link", 
                      "properties": {
                        "alias": "Group Transformer"
                      }, 
                      "value": "http://github.com/michael/unveil/blob/master/src/collection/transformers/group.js"
                    }, 
                    {
                      "type": "Text", 
                      "value": ", to see how it's done."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Transformer specification:"
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "You need to define a specification for your "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Transformer"
                    }, 
                    {
                      "type": "Text", 
                      "value": ", which gives it a human readable name and describes the parameters your transformation takes."
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " pv.Collection.transformers.group.label = \"Group By\";\n pv.Collection.transformers.group.params = {\n   properties: {\n     name: \"Property\",\n     type: \"property_list\"\n   },\n   aggregator: {\n     name: \"Aggregator Function\",\n     type: \"aggregator\"\n   }\n }\n"
                }
              ], 
              "value": null
            }
          ], 
          "value": "Implement your own Transformer", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "Some sample collections are available through "
                    }, 
                    {
                      "type": "Link", 
                      "properties": {
                        "alias": "Collectionize"
                      }, 
                      "value": "http://github.com/michael/collectionize"
                    }, 
                    {
                      "type": "Text", 
                      "value": ", a dedicated aggregator service, that translates interesting web services to the "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Collection"
                    }, 
                    {
                      "type": "Text", 
                      "value": " format."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Currently available:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "List", 
                  "children": [
                    {
                      "type": "ListItem", 
                      "children": [
                        {
                          "type": "TextBlock", 
                          "children": [
                            {
                              "type": "Link", 
                              "properties": {
                                "alias": "Countries fetched from Freebase.com"
                              }, 
                              "value": "http://collections.quasipartikel.at/countries"
                            }
                          ], 
                          "value": null
                        }
                      ], 
                      "value": null
                    }, 
                    {
                      "type": "ListItem", 
                      "children": [
                        {
                          "type": "TextBlock", 
                          "children": [
                            {
                              "type": "Link", 
                              "properties": {
                                "alias": "Last.fm Playlists"
                              }, 
                              "value": "http://collections.quasipartikel.at/playlists"
                            }
                          ], 
                          "value": null
                        }
                      ], 
                      "value": null
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }
          ], 
          "value": "Available Collections", 
          "properties": {
            "level": 2
          }
        }
      ], 
      "value": "Collection API", 
      "properties": {
        "level": 1
      }
    }, 
    {
      "type": "Section", 
      "children": [
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "value": "The "
                }, 
                {
                  "type": "Text", 
                  "properties": {
                    "emph": true
                  }, 
                  "value": "Visualization API"
                }, 
                {
                  "type": "Text", 
                  "value": " provides a simple abstraction layer for visualizations to ease the process of creating re-usable data-driven visualizations."
                }
              ], 
              "value": null
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "value": "The appearance of a visualization is determined by the underlying data rather than by user defined plotting options. Visualizations directly access data trough a well defined interface, the "
                }, 
                {
                  "type": "Text", 
                  "properties": {
                    "emph": true
                  }, 
                  "value": "Collection API"
                }, 
                {
                  "type": "Text", 
                  "value": ", so there's no longer a gap between domain data and data used by the visualization engine."
                }
              ], 
              "value": null
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "value": "Such visualization can be re-used in terms of putting arbitrary data in. This works as long as the data is a valid "
                }, 
                {
                  "type": "Text", 
                  "properties": {
                    "emph": true
                  }, 
                  "value": "Collection"
                }, 
                {
                  "type": "Text", 
                  "value": " and satisfies the visualization specification (some visualizations exclusively use numbers as their input, others use dates (e.g. Timeline plots), and so on...)."
                }
              ], 
              "value": null
            }
          ], 
          "value": null
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "Code", 
                  "value": " // load some data (represented as a Collection)\n c = new uv.Collection(countries);\n \n // construct a visualization based on that data\n vis = new uv.Linechart(c, {\n   measures: ['population'],\n   params: {scale: 'linear'}\n });\n vis.render();\n"
                }
              ], 
              "value": null
            }
          ], 
          "value": "Usage", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "In order to create your own visualizations you need to setup a new class that inherits from "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "uv.Visualization"
                    }, 
                    {
                      "type": "Text", 
                      "value": "."
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " var MyChart = uv.Visualization.extend({\n   constructor: function(collection, options) {\n     uv.Visualization.call(this, collection, options);\n   },\n   render: function() {\n     // hardcore rendering action\n   }\n });\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "All you have to do is to implement "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "render()"
                    }, 
                    {
                      "type": "Text", 
                      "value": ". It's totally up to you whether you want to use the included Scene API or any other visualization library (I can recommend "
                    }, 
                    {
                      "type": "Link", 
                      "properties": {
                        "alias": "Protovis"
                      }, 
                      "value": "http://protovis.org"
                    }, 
                    {
                      "type": "Text", 
                      "value": ", "
                    }, 
                    {
                      "type": "Link", 
                      "properties": {
                        "alias": "Processing.js"
                      }, 
                      "value": "http://processingjs.org"
                    }, 
                    {
                      "type": "Text", 
                      "value": " and "
                    }, 
                    {
                      "type": "Link", 
                      "properties": {
                        "alias": "Scene.js"
                      }, 
                      "value": "http://scenejs.org"
                    }, 
                    {
                      "type": "Text", 
                      "value": ") or work with the native API's (Canvas, SVG, WebGL)."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Section", 
              "children": [
                {
                  "type": "Paragraph", 
                  "children": [
                    {
                      "type": "TextBlock", 
                      "children": [
                        {
                          "type": "Text", 
                          "value": "There are various types of visualizations. Some exclusively use numbers as their input, some use dates (e.g. Timeline plots) others visualize relationships between data items (e.g. which countries share the same currency). There are further visualizations that use various combinations of measure types."
                        }
                      ], 
                      "value": null
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Paragraph", 
                  "children": [
                    {
                      "type": "TextBlock", 
                      "children": [
                        {
                          "type": "Text", 
                          "value": "In order to verify that the current selection of measures can be displayed by the chosen visualization you have to define a specification like this:"
                        }
                      ], 
                      "value": null
                    }, 
                    {
                      "type": "Code", 
                      "value": " // Displays 1..n number properties\n uv.Barchart.spec = {\n   measures: [\n     {\n       types: ['number'],\n       unique: true,\n       cardinality: 1      \n     },\n     {\n       types: ['number'],\n       unique: true,\n       cardinality: \"*\"\n     }\n   ]\n };\n"
                    }, 
                    {
                      "type": "TextBlock", 
                      "children": [
                        {
                          "type": "Text", 
                          "children": [
                            {
                              "type": "Text", 
                              "value": "Have a look at the implementations of "
                            }, 
                            {
                              "type": "Text", 
                              "properties": {
                                "emph": true
                              }, 
                              "value": "Scatterplot"
                            }, 
                            {
                              "type": "Text", 
                              "value": " and "
                            }, 
                            {
                              "type": "Text", 
                              "properties": {
                                "emph": true
                              }, 
                              "value": "Linechart"
                            }, 
                            {
                              "type": "Text", 
                              "value": " for reference:"
                            }
                          ], 
                          "value": null, 
                          "properties": {
                            "strong": true
                          }
                        }
                      ], 
                      "value": null
                    }, 
                    {
                      "type": "Paragraph", 
                      "children": [
                        {
                          "type": "List", 
                          "children": [
                            {
                              "type": "ListItem", 
                              "children": [
                                {
                                  "type": "TextBlock", 
                                  "children": [
                                    {
                                      "type": "Link", 
                                      "properties": {
                                        "alias": "Scatterplot"
                                      }, 
                                      "value": "http://github.com/michael/unveil/tree/master/src/visualization/visualizations/scatterplot.js"
                                    }
                                  ], 
                                  "value": null
                                }
                              ], 
                              "value": null
                            }, 
                            {
                              "type": "ListItem", 
                              "children": [
                                {
                                  "type": "TextBlock", 
                                  "children": [
                                    {
                                      "type": "Link", 
                                      "properties": {
                                        "alias": "Linechart"
                                      }, 
                                      "value": "http://github.com/michael/unveil/tree/master/src/visualization/visualizations/linechart.js"
                                    }
                                  ], 
                                  "value": null
                                }
                              ], 
                              "value": null
                            }
                          ], 
                          "value": null
                        }
                      ], 
                      "value": null
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": "Visualization Specification", 
              "properties": {
                "level": 3
              }
            }
          ], 
          "value": "Creating visualizations", 
          "properties": {
            "level": 2
          }
        }
      ], 
      "value": "Visualization API", 
      "properties": {
        "anchor": "VIS", 
        "level": 1
      }
    }, 
    {
      "type": "Section", 
      "children": [
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "value": "Inspired by various great visualization libraries (Protovis, Processing.js), I created my own rather low level graphical library that is basically an implementation of a Scenegraph on top of the "
                }, 
                {
                  "type": "Text", 
                  "properties": {
                    "emph": true
                  }, 
                  "value": "HTML5 Canvas API"
                }, 
                {
                  "type": "Text", 
                  "value": "."
                }
              ], 
              "value": null
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "value": "It's more a framework that helps you managing complexity rather than a full-featured graphical visualization library."
                }
              ], 
              "value": null
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "properties": {
                    "strong": true
                  }, 
                  "value": "I focussed on two core principles:"
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "List", 
                  "children": [
                    {
                      "type": "ListItem", 
                      "children": [
                        {
                          "type": "TextBlock", 
                          "children": [
                            {
                              "type": "Text", 
                              "value": "Object oriented"
                            }
                          ], 
                          "value": null
                        }
                      ], 
                      "value": null
                    }, 
                    {
                      "type": "ListItem", 
                      "children": [
                        {
                          "type": "TextBlock", 
                          "children": [
                            {
                              "type": "Text", 
                              "value": "Declarative"
                            }
                          ], 
                          "value": null
                        }
                      ], 
                      "value": null
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "value": "Object oriented in terms of thinking in graphical objects and modularizing code, declarative in terms of using, configuring and combining existing "
                }, 
                {
                  "type": "Text", 
                  "properties": {
                    "emph": true
                  }, 
                  "value": "Actors"
                }, 
                {
                  "type": "Text", 
                  "value": "(graphical objects) and attach them to the Scenegraph."
                }
              ], 
              "value": null
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "properties": {
                    "strong": true
                  }, 
                  "value": "Creating a scene is easy:"
                }
              ], 
              "value": null
            }, 
            {
              "type": "Code", 
              "value": " var scene = new uv.Scene({\n       fillStyle: '#ccc'\n     });\n"
            }
          ], 
          "value": null
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "Once you have constructed your "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Scene"
                    }, 
                    {
                      "type": "Text", 
                      "value": " object, you can start adding actors."
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Actors"
                    }, 
                    {
                      "type": "Text", 
                      "value": " can be primitive graphical objects (like a Bar, a Line, or a Dot) or higher level objects that combine lower level ones (e.g. a Hyperbolic Tree). Actors typically take properties in their constructor. However for higher level objects you probably want them to be constructed with real domain data instead of simple graphical oriented properties (width, height etc.). You can decide on your own how you want to shape the interface."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Add an Actor (Bar) to the scene:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " var bar = new uv.Bar({\n   x: 30,\n   y: 50,\n   width: 30,\n   height: 80,\n   fillStyle: 'darkblue'\n });\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Add an additional bar as a child of the bar just created:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " bar.add(new uv.Bar({\n   x: 50,\n   y: 20,\n   width: 20,\n   height: 80,\n   fillStyle: 'lightblue'\n }));\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "The x and y coordinates are relative to the parent object. So an object does not know where it is located in the coordinate-space. It just renders itself at position 0,0. The positioning is done through matrix transformations, where for each object the current context (transformation matrix) is being calculated on every frame. That's how a SceneGraph works."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Specify an output display:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " scene.display({\n   container: $('#plotarea'),\n   width: 800,\n   height: 300,\n   zooming: true,\n   paning: true\n });\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "The scene (world-coordinates) can be projected to one or many displays (canvas elements), that have a local coordinate system. Each display can be modified (zoomed, paned, etc.) independently. This conforms to a view transformation in computer-game-engine-like API's (camera analogy)."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "You can see multiple displays in action "
                    }, 
                    {
                      "type": "Link", 
                      "properties": {
                        "alias": "here"
                      }, 
                      "value": "http://quasipartikel.at/unveil/examples/multiple_displays.html"
                    }, 
                    {
                      "type": "Text", 
                      "value": "."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Start the scene:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " // defaults to 10 frames per second\n scene.start();\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "The scene automatically refreshes each attached display appropriately (on every frame)."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Create your own actors:"
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "Creating visualizations using the "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Scene API"
                    }, 
                    {
                      "type": "Text", 
                      "value": " most often means implementing your own "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Actors"
                    }, 
                    {
                      "type": "Text", 
                      "value": ". I'd see the creation of custom Actors as a fundamental part of the visualization creation process. So instead of combining only existing pre-implemented objects, you're encouraged to create your own ones, suitable for your needs."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Let's re-create the Bar Actor from scratch, and add some interaction and animation later:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " uv.Bar = function(properties) {\n   // super call\n   uv.Actor.call(this, _.extend({\n     width: 30,\n     height: 50,\n     strokeWeight: 2,\n     strokeStyle: '#000',\n     fillStyle: '#ccc'\n   }, properties));\n };\n"
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Every Actor inherits from uv.Actor:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " uv.Bar.prototype = Object.extend(uv.Actor);\n"
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Implement a draw method, which takes a Canvas 2D context:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " uv.Bar.prototype.draw = function(ctx) {\n   ctx.fillRect(0, 0, this.properties.width, this.properties.height);\n };\n"
                }
              ], 
              "value": null
            }
          ], 
          "value": "Actors", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "Interaction is key in visualizations. Therefore Unveil.js aims to provide an abstraction for implementing interaction on your "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Actors"
                    }, 
                    {
                      "type": "Text", 
                      "value": ". Unlike in SVG, with the Canvas API you can't attach event handlers to shapes directly. Instead you need to detect on your own, which objects are currently under the cursor. Usually you'd do this with some math, but there's a simpler approach that utilizes "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "isPointInPath()"
                    }, 
                    {
                      "type": "Text", 
                      "value": "."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "With "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "isPointInPath()"
                    }, 
                    {
                      "type": "Text", 
                      "value": " you can check if the current mouse-position is inside the current working path."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "To make use of this you need to equip your Actors with an additional"
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "drawMask()"
                    }, 
                    {
                      "type": "Text", 
                      "value": " method."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Let's add some interaction to our Bar:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " uv.Bar.prototype.drawMask = function(ctx) {\n   ctx.beginPath();\n   \n   ctx.moveTo(0, 0);\n   ctx.lineTo(this.properties.width, 0);\n   ctx.lineTo(this.properties.width, this.properties.height);\n   ctx.lineTo(0, this.properties.height);\n   ctx.lineTo(0, 0);\n };\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "This simply draws an invisible rectangle. If you have a more complex object like a star-shape you can use a rectangle (also known as a bounding-box) as well, to mask your object for interaction. However, that's for the lazy folks. ;-)"
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "Actors that have a "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "drawMask()"
                    }, 
                    {
                      "type": "Text", 
                      "value": " implementation can then be easily checked against the current cursor position."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "That's what is going on behind the curtain:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " uv.Actor.prototype.checkActive = function(ctx, mouseX, mouseY) {\n   if (this.drawMask && ctx.isPointInPath) {\n     this.drawMask(ctx);\n     if (ctx.isPointInPath(mouseX, mouseY))\n       this.active = true;\n     else\n       this.active = false;\n   }\n };\n"
                }
              ], 
              "value": null
            }
          ], 
          "value": "Interaction", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "It's easy to add animation to your objects too. I've added a "
                    }, 
                    {
                      "type": "Link", 
                      "properties": {
                        "alias": "Tween class"
                      }, 
                      "value": "http://quasipartikel.at/tween/"
                    }, 
                    {
                      "type": "Text", 
                      "value": "I created some time ago to animate properties over time."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "To animate the height property of a Bar you simply use a Tween for that:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " uv.Bar = function(properties) {\n   ...\n   this.t = new uv.Tween({\n     object: this.properties,\n     property: 'height'\n   });\n };\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "children": [
                        {
                          "type": "Text", 
                          "value": "The "
                        }, 
                        {
                          "type": "Text", 
                          "properties": {
                            "emph": true
                          }, 
                          "value": "updateHeight()"
                        }, 
                        {
                          "type": "Text", 
                          "value": " method is used to trigger the Tween:"
                        }
                      ], 
                      "value": null, 
                      "properties": {
                        "strong": true
                      }
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " uv.Bar.prototype.updateHeight = function(newHeight) {\n   this.t.continueTo(newHeight, 1.5);\n };\n"
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "children": [
                        {
                          "type": "Text", 
                          "value": "For now you need to manually trigger a Tween tick using the "
                        }, 
                        {
                          "type": "Text", 
                          "properties": {
                            "emph": true
                          }, 
                          "value": "Actor#update()"
                        }, 
                        {
                          "type": "Text", 
                          "value": " method:"
                        }
                      ], 
                      "value": null, 
                      "properties": {
                        "strong": true
                      }
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " uv.Bar.prototype.update = function() {\n   this.t.tick();\n };\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "children": [
                        {
                          "type": "Text", 
                          "value": "In your sketch you can use "
                        }, 
                        {
                          "type": "Text", 
                          "properties": {
                            "emph": true
                          }, 
                          "value": "setTimeout()"
                        }, 
                        {
                          "type": "Text", 
                          "value": " or "
                        }, 
                        {
                          "type": "Text", 
                          "properties": {
                            "emph": true
                          }, 
                          "value": "setInterval()"
                        }, 
                        {
                          "type": "Text", 
                          "value": " to trigger the "
                        }, 
                        {
                          "type": "Text", 
                          "properties": {
                            "emph": true
                          }, 
                          "value": "updateHeight()"
                        }, 
                        {
                          "type": "Text", 
                          "value": " method:"
                        }
                      ], 
                      "value": null, 
                      "properties": {
                        "strong": true
                      }
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " setInterval(function() {\n   bar.updateHeight(70);\n }, 1000);\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "Here's an example of "
                    }, 
                    {
                      "type": "Link", 
                      "properties": {
                        "alias": "Moving Random Bars"
                      }, 
                      "value": "http://quasipartikel.at/unveil/examples/random_bars.html"
                    }, 
                    {
                      "type": "Text", 
                      "value": ", that feature interaction and animation."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }
          ], 
          "value": "Animation", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Commands"
                    }, 
                    {
                      "type": "Text", 
                      "value": " are used to modify properties on the scene. They can be executed one or many times, and they can be unexecuted to recover the original state."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "Such commands are a powerful abstraction for modifying state. Implement your own commands whenever it makes sense."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "What always annoyed me is the problem of high CPU-consumption that canvas-based visualizations typically have. The reason for that is, that if your scene runs on 60 fps, then even when there's no animation or interaction taking place, the "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "render()"
                    }, 
                    {
                      "type": "Text", 
                      "value": " method is called 60 times a second."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "children": [
                        {
                          "type": "Text", 
                          "value": "I could solve this by implementing a "
                        }, 
                        {
                          "type": "Text", 
                          "properties": {
                            "emph": true
                          }, 
                          "value": "RequestFramerate"
                        }, 
                        {
                          "type": "Text", 
                          "value": " command:"
                        }
                      ], 
                      "value": null, 
                      "properties": {
                        "strong": true
                      }
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " uv.cmds.RequestFramerate = function(scene, opts) {\n   this.scene = scene;\n   this.requests = 0;\n   this.framerate = opts.framerate;\n   this.originalFramerate = this.scene.framerate;\n };\n \n uv.cmds.RequestFramerate.className = 'RequestFramerate';\n \n uv.cmds.RequestFramerate.prototype.execute = function() {\n   this.requests += 1;\n   this.scene.framerate = this.framerate;\n };\n \n uv.cmds.RequestFramerate.prototype.unexecute = function() {\n   this.requests -= 1;\n   if (this.requests <= 0) {\n     this.scene.framerate = this.originalFramerate;\n   }\n };\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Having that command in place, we need to register it on the scene: "
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " scene.register(uv.cmds.RequestFramrate, { framerate: 60 }); \n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Then this command can be excuted and unexecued on demand.:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " t  = new uv.Tween({...});\n t.on('start', function() { that.scene.execute(uv.cmds.RequestFramerate); }); \n t.on('finish', function() { that.scene.unexecute(uv.cmds.RequestFramerate); }); \n"
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "It works like this:"
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "The scene by default runs in idle mode (say 10fps), which is enough to deal with mouse interaction. If an operation (in this case a Motion Tween) needs high speed (60fps) it requests it, like if it would request a resource."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "The "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Tween"
                    }, 
                    {
                      "type": "Text", 
                      "value": " class (like any other operation that needs full power) needs callbacks for start and finish events, that can be used to request high speed (on start) and release this demand when 'finish' is fired."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "It basically works like a semaphore, where each request increments a "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "requests"
                    }, 
                    {
                      "type": "Text", 
                      "value": "counter, and each release decrements it. When all motion tweens have finished"
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "requests"
                    }, 
                    {
                      "type": "Text", 
                      "value": " is zero. The current framerate then depends on the value of"
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "requests"
                    }, 
                    {
                      "type": "Text", 
                      "value": " (0 = idle mode, > 0 = highspeed / full throttle mode)."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "I've updated the "
                    }, 
                    {
                      "type": "Link", 
                      "properties": {
                        "alias": "stacks example"
                      }, 
                      "value": "http://quasipartikel.at/unveil/examples/stacks.html"
                    }, 
                    {
                      "type": "Text", 
                      "value": ", that now uses 60fps on demand (10fps per default). Thankfully lots of CPU cycles could be saved. ;-)"
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }
          ], 
          "value": "Commands", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "While most often specifying properties (x, y, scaleX, scaleY, rotation) on the an Actor suffices, there may be cases where you need more control. Therefore Actors expose a so called "
                    }, 
                    {
                      "type": "Text", 
                      "properties": {
                        "emph": true
                      }, 
                      "value": "Modification Matrix"
                    }, 
                    {
                      "type": "Text", 
                      "value": ", which can be directly modified by the user."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "To scale and rotate an object around a point, you can specify a series of matrix transforms:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " var b = new uv.Bar({...});\n // move the coordinate system to the desired point\n b.translate(40,40);\n // scale around this point (= new origin)\n b.scale(1.5, 1.5);\n // rotate 45\u00b0\n b.rotate(uv.PI/4);\n // move the coordinate system back\n b.translate(-40, -40);\n"
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "To calculate the resulting transformation matrix for drawing, it is initialized with the specified properties and then multiplied with the modification matrix."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }
          ], 
          "value": "Modification Matrix", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "Paragraph", 
                  "children": [
                    {
                      "type": "List", 
                      "children": [
                        {
                          "type": "ListItem", 
                          "children": [
                            {
                              "type": "TextBlock", 
                              "children": [
                                {
                                  "type": "Link", 
                                  "properties": {
                                    "alias": "Stacks"
                                  }, 
                                  "value": "http://quasipartikel.at/unveil/examples/stacks.html"
                                }
                              ], 
                              "value": null
                            }
                          ], 
                          "value": null
                        }, 
                        {
                          "type": "ListItem", 
                          "children": [
                            {
                              "type": "TextBlock", 
                              "children": [
                                {
                                  "type": "Link", 
                                  "properties": {
                                    "alias": "Random Bars"
                                  }, 
                                  "value": "http://quasipartikel.at/unveil/examples/random_bars.html"
                                }
                              ], 
                              "value": null
                            }
                          ], 
                          "value": null
                        }, 
                        {
                          "type": "ListItem", 
                          "children": [
                            {
                              "type": "TextBlock", 
                              "children": [
                                {
                                  "type": "Link", 
                                  "properties": {
                                    "alias": "Multiple displays"
                                  }, 
                                  "value": "http://quasipartikel.at/unveil/examples/multiple_displays.html"
                                }
                              ], 
                              "value": null
                            }
                          ], 
                          "value": null
                        }
                      ], 
                      "value": null
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }
          ], 
          "value": "Examples", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "The Scene API related code is pretty small (~\u00a0400 LOC). I don't plan to provide a full-featured graphic library with helper functions, since there are existing libraries, that do a perfect job. I recommend using Protovis along with the Scene API. Actually, this library was created because Protovis does not support the canvas element. I also wanted an easier way to deal with interaction."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "To prevent from verbose and messy code, I do not provide any backward compatibility for older browsers. I'm trying to stay on the edge of technology. Therefore I focus on supporting the most recent versions of Google Chrome, Firefox, Safari. I'll probably support Internet Explorer 9 as well, since their Canvas implementation looks promising. Currently mouse interaction is not working in Firefox. Please use a webkit-based browser for the moment."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }
          ], 
          "value": "Hints", 
          "properties": {
            "level": 2
          }
        }
      ], 
      "value": "Scene API", 
      "properties": {
        "anchor": "SCENE", 
        "level": 1
      }
    }, 
    {
      "type": "Section", 
      "children": [
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "value": "Node (not to be confused with Node.js) is a JavaScript Graph implementation that hides graph complexity from the interface. It introduces properties, which group types of edges together. Therefore multi-partit graphs are possible without any hassle. Every Node simply contains properties which conform to outgoing edges. It makes heavy use of hashing through JavaScript object properties to allow random access whenever possible."
                }
              ], 
              "value": null
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "value": "The Node API heavily relies on "
                }, 
                {
                  "type": "Text", 
                  "properties": {
                    "emph": true
                  }, 
                  "value": "SortedHash"
                }, 
                {
                  "type": "Text", 
                  "value": ", please have a look at the documentation before you start."
                }
              ], 
              "value": null
            }
          ], 
          "value": null
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "Code", 
                  "value": " // Initialize a plain Node\n  var austria = new Node(),\n      germany = new Node(),\n      uk = new Node();\n  \n // initialize with raw Value (raw values are typically stored in leave nodes)\n var eu = new Node({value: 'European Union'}),\n     austrian = new Node({value: 'Austrian'}),\n     english = new Node({value: 'English'}),\n     german = new Node({value: 'German'}),\n     barroso = new Node({value: 'Barroso'});\n"
                }
              ], 
              "value": null
            }
          ], 
          "value": "Construction", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "Code", 
                  "value": " austria.set('languages', 'at', austrian);\n austria.set('languages', 'ger', german); \n \n eu.set('president', 'barroso', barroso);\n \n // Backlinks\n german.set('spoken_in', {\n   'at': austria,\n   'de': germany\n });\n"
                }
              ], 
              "value": null
            }
          ], 
          "value": "Connect nodes through properties", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "Code", 
                  "value": " austria.all('languages') // => [Node#austrian, Node#german]\n eu.first('president') // => [Node#barroso]\n german.all('spoken_in') // => [Node#austria, Node#germany]\n"
                }
              ], 
              "value": null
            }
          ], 
          "value": "Get connected nodes", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "each:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " austria.all('languages').each(function(index, node) {\n   node; // => Node#at | Node#ger\n   index; // => 0 | 1\n });\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "eachKey:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " austria.all('languages').eachKey(function(key, node) {\n   node; // => Node#at | Node#ger\n   key; // => 'at' | 'ger'\n });\n"
                }
              ], 
              "value": null
            }
          ], 
          "value": "Iteration", 
          "properties": {
            "level": 2
          }
        }
      ], 
      "value": "Node API", 
      "properties": {
        "anchor": "NODE", 
        "level": 1
      }
    }, 
    {
      "type": "Section", 
      "children": [
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "TextBlock", 
              "children": [
                {
                  "type": "Text", 
                  "value": "Unveil.js features a "
                }, 
                {
                  "type": "Text", 
                  "properties": {
                    "emph": true
                  }, 
                  "value": "SortedHash"
                }, 
                {
                  "type": "Text", 
                  "value": " data structure that provides a simple layer of abstraction for managing Sorted Hashes in JavaScript. It's heavily used throughout the framework."
                }
              ], 
              "value": null
            }
          ], 
          "value": null
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "Code", 
                  "value": " var items = new SortedHash();\n items.set('at', 'Austria');\n items.set('de', 'Germany');\n"
                }
              ], 
              "value": null
            }
          ], 
          "value": "Insertion", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Hash Semantics:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " items.get('at') // => 'Austria';\n items.get('de') // => 'Germany';\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Array Semantics:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " items.at(0); // => 'Austria'\n items.at(1); // => 'Germany'\n items.length; // => 2\n"
                }
              ], 
              "value": null
            }
          ], 
          "value": "Access", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "each:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " items.each(function(index, value) {\n   value; // => 'Austria', 'Germany'\n   index; // => 0, 1\n });\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "eachKey:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " items.eachKey(function(key, value) {\n   value; // => 'Austria', 'Germany'\n   key; // => 'at', 'de'\n })\n"
                }
              ], 
              "value": null
            }
          ], 
          "value": "Iteration", 
          "properties": {
            "level": 2
          }
        }, 
        {
          "type": "Section", 
          "children": [
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "sort:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " var desc = function(item1, item2) {\n       return item1.value === item2.value\n         ? 0 : (item1.value > item2.value ? -1 : 1);\n     },\n     sortedItems;\n \n sortedItems = items.sort(descendingOrder);\n"
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "map:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " var mappedItems = items.map(function (item) {\n   return item.slice(0, 3);\n });\n \n // leave original SortedHash untouched\n mappedItems.at(0) // => 'Aus';\n mappedItems.at(1) // => 'Ger';\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "value": "This returns a SortedHash in descending order, while the original remains untouched."
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "select:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " var selectedItems = items.select(function (key, item) {\n       return item === 'Austria';\n     });\n \n selectedItems.at(0) // => 'Austria';\n selectedItems.length; // => 1;\n"
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "intersect:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " var items2 = new SortedHash(),\n     intersectedItems;\n \n items2.set('fr', 'France');\n items2.set('at', 'Austria');\n \n intersectedItems = items.intersect(items2);\n \n intersectedItems.length; // => 1\n intersectedItems.get('at'); // => 'Austria'\n"
                }
              ], 
              "value": null
            }, 
            {
              "type": "Paragraph", 
              "children": [
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "union:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " var items2 = new SortedHash(),\n     unitedItems;\n \n items2.set('fr', 'France');\n items2.set('at', 'Austria');\n \n intersectedItems = items.intersect(items2);\n \n unitedItems.length; // => 3\n unitedItems.get('at'); // => 'Austria'\n unitedItems.get('de'); // => 'Germany'\n unitedItems.get('fr'); // => 'France'\n"
                }, 
                {
                  "type": "TextBlock", 
                  "children": [
                    {
                      "type": "Text", 
                      "properties": {
                        "strong": true
                      }, 
                      "value": "Method chaining:"
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "Code", 
                  "value": " var mappedAndSortedItems = items.map(function (item) {\n       return item.slice(0, 3);\n     })\n     .sort(descendingOrder);\n \n selectedItems.at(0) // => 'Ger';\n selectedItems.at(2) // => 'Aus';\n"
                }
              ], 
              "value": null
            }
          ], 
          "value": "Operations", 
          "properties": {
            "level": 2
          }
        }
      ], 
      "value": "Sorted Hash API", 
      "properties": {
        "anchor": "SORTEDHASH", 
        "level": 1
      }
    }
  ], 
  "value": null
}