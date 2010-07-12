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
              "type": "Text", 
              "children": [
                {
                  "type": "Text", 
                  "value": "software design. It features several modules:"
                }
              ], 
              "value": "Unveil is a data exploration and visualization toolkit that utilizes data-driven"
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
              "type": "Text", 
              "children": [
                {
                  "type": "Text", 
                  "value": "data abstraction format where a data-set under investigation conforms to a"
                }, 
                {
                  "type": "Text", 
                  "value": "collection of data items that describes all facets of the underlying data in a simple and"
                }, 
                {
                  "type": "Text", 
                  "value": "universal way."
                }
              ], 
              "value": "Collections are the main building block of the toolkit. A Collection is a simple"
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "Text", 
              "children": [
                {
                  "type": "Text", 
                  "value": "information about the data contained (meta-data)."
                }
              ], 
              "value": "You can think of a collection as a table of data, except it provides precise"
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "Text", 
              "value": "Collections are represented as a JSON string, which serves as an exchange format:"
            }, 
            {
              "type": "Code", 
              "value": " var salesmen_fixture = {\n   properties: {\n     \"name\": {\n       type: \"string\",\n       name: \"Name\",\n       unique: true\n     },\n     \"turnover\": {\n       name: \"Turnover\",\n       type: \"number_series\",\n       unique: false,\n       categories: [\"2005\", \"2006\", \"2007\", \"2008\", \"2009\", \"2010\"]\n     }\n   },\n   items: {\n     \"mayer\": {\n       name: \"Mayer\",\n       turnover: [\n         0.2,\n         200.2,\n         100.2,\n         300.2,\n         341.3,\n         521.2\n       ]\n     },\n     ...\n   }\n };"
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "Text", 
              "children": [
                {
                  "type": "Text", 
                  "value": "internally represented as a network of nodes (a graph so to say), that allows"
                }, 
                {
                  "type": "Text", 
                  "value": "efficient operations on the Collection by traversing the graph instead of iterating"
                }, 
                {
                  "type": "Text", 
                  "value": "over all items, values etc. Also operations like filtering, grouping etc. are"
                }, 
                {
                  "type": "Text", 
                  "value": "already supported."
                }
              ], 
              "value": "However after passing the raw format to the Collection constructor, they are"
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "Text", 
              "value": "See also:"
            }, 
            {
              "type": "List", 
              "children": [
                {
                  "type": "ListItem", 
                  "children": [
                    {
                      "type": "Link", 
                      "children": [
                        {
                          "type": "Text", 
                          "value": "("
                        }, 
                        {
                          "type": "Link", 
                          "properties": {
                            "alias": "http://github.com/michael/unveil/tree/master/src/collection/)\n"
                          }, 
                          "value": "http://github.com/michael/unveil/tree/master/src/collection/)\n"
                        }
                      ], 
                      "value": "Collection API", 
                      "properties": {
                        "alias": "Collection API"
                      }
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "ListItem", 
                  "children": [
                    {
                      "type": "Link", 
                      "children": [
                        {
                          "type": "Text", 
                          "value": "("
                        }, 
                        {
                          "type": "Link", 
                          "properties": {
                            "alias": "http://github.com/michael/unveil/tree/master/src/node/)\n"
                          }, 
                          "value": "http://github.com/michael/unveil/tree/master/src/node/)\n"
                        }
                      ], 
                      "value": "Node API", 
                      "properties": {
                        "alias": "Node API"
                      }
                    }
                  ], 
                  "value": null
                }, 
                {
                  "type": "ListItem", 
                  "children": [
                    {
                      "type": "Link", 
                      "children": [
                        {
                          "type": "Text", 
                          "value": "("
                        }, 
                        {
                          "type": "Link", 
                          "properties": {
                            "alias": "http://github.com/michael/unveil/tree/master/src/node/)\n"
                          }, 
                          "value": "http://github.com/michael/unveil/tree/master/src/node/)\n"
                        }
                      ], 
                      "value": "SortedHash API", 
                      "properties": {
                        "alias": "SortedHash API"
                      }
                    }
                  ], 
                  "value": null
                }
              ], 
              "value": null
            }, 
            {
              "type": "Text", 
              "value": "Visualization API"
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "Text", 
              "children": [
                {
                  "type": "Text", 
                  "value": "the process of creating re-usable data-driven visualizations."
                }
              ], 
              "value": "The visualization API provides a simple abstraction layer for visualizations to ease"
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "Text", 
              "children": [
                {
                  "type": "Text", 
                  "value": "defined plotting options. Visualizations directly access data trough a well defined"
                }, 
                {
                  "type": "Text", 
                  "value": "interface, the Collection API, so there's no longer a gap between domain data and"
                }, 
                {
                  "type": "Text", 
                  "value": "data used by the visualization engine."
                }
              ], 
              "value": "The appearance of the result is determined by the underlying data rather than by user"
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "Text", 
              "children": [
                {
                  "type": "Text", 
                  "value": "as long as the data is a valid Collection and satisfies the visualization specification"
                }, 
                {
                  "type": "Text", 
                  "value": "(some visualizations exclusively use numbers as their input, others use dates"
                }, 
                {
                  "type": "Text", 
                  "value": "(e.g. Timeline plots), and so on...)."
                }
              ], 
              "value": "Such visualization can be re-used in terms of putting in arbitrary data in,"
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "Text", 
              "value": "To perform a visualization you have two things to do:"
            }
          ], 
          "value": null
        }
      ], 
      "value": "Collection API", 
      "properties": {
        "level": 2
      }
    }, 
    {
      "type": "Section", 
      "properties": {
        "level": 3
      }, 
      "value": "1. Provide data, in form of a Collection"
    }, 
    {
      "type": "Section", 
      "children": [
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "Code", 
              "value": " // load some data (represented as a Collection)\n c = new uv.Collection(countries);\n \n // construct a visualization based on that data\n vis = new uv.Linechart(c, {\n   measures: ['hardware_turnover'],\n   params: {}\n });\n vis.render();"
            }
          ], 
          "value": null
        }, 
        {
          "type": "Paragraph", 
          "children": [
            {
              "type": "Text", 
              "value": "See also:"
            }, 
            {
              "type": "List", 
              "children": [
                {
                  "type": "ListItem", 
                  "children": [
                    {
                      "type": "Link", 
                      "children": [
                        {
                          "type": "Text", 
                          "value": "("
                        }, 
                        {
                          "type": "Link", 
                          "properties": {
                            "alias": "http://github.com/michael/unveil/tree/master/src/visualization/)\n"
                          }, 
                          "value": "http://github.com/michael/unveil/tree/master/src/visualization/)\n"
                        }
                      ], 
                      "value": "Visualization API", 
                      "properties": {
                        "alias": "Visualization API"
                      }
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
      "value": "2. Pass the collection to the constructor of the desired visualization", 
      "properties": {
        "level": 3
      }
    }
  ], 
  "value": null
}