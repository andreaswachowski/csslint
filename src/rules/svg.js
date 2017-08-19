// CSSLint doesn't support SVG properties, so we create our custom rule based on
// https://github.com/CSSLint/csslint/blob/master/src/rules/known-properties.js
CSSLint.addRule({
    // rule information
    id: "svg",
    name: "SVG properties",
    desc: "Adds support for SVG properties",
    url: "",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this;
        var svgProperties = ["fill", "fill-opacity", "stroke", "stroke-width", "shape-rendering", "text-anchor"];

        parser.addListener("property", function(event) {
            if (event.invalid) {
                var propertyName = event.property.toString().toLowerCase();
                if (svgProperties.indexOf(propertyName) < 0) {
                    reporter.report(event.invalid.message, event.line, event.col, rule);
                }
            }
        });
    }
});
