function createElement(tag = "", val0, val1) {
    const css_tag = ((tag[_match](regex_css_tag) || [])[0] || "")[_trim]();
    const css_id = ((tag[_match](regex_css_id) || [])[1] || "")[_trim]();
    const css_class = (regex_css_class[_test](tag) ? tag[_match](regex_css_class) : [])[_map](e => e[_replace](/^\./, ""));

    if (css_tag[_length] < 1) {
        return;
    };

    let dom;
    let is_temp = false;

    if (tag === _temp) {
        is_temp = true;
        dom = $document[_createDocumentFragment]()
    }
    else {
        dom = $document[_createElement](css_tag)
    };

    if (css_id[_length]) {
        dom.id = css_id;
    };

    for (let e of css_class) {
        dom[_classList][_add](e);
    };

    if (val0 == null && val1 != null) {
        [val0, val1] = [val1, null];
    };

    let attribute_value;
    let children_value;

    if (val0 != null && val1 != null) {
        [attribute_value, children_value] = [val0, val1];
    }
    else if (val1 == null) {
        if (typeof val0 === _string || typeof val0 === _number || Array[_isArray](val0)) {
            children_value = val0;
        }
        else {
            attribute_value = val0;
        };
    }
    else if (val0 == null) {
        return dom;
    };

    if (typeof attribute_value === _object && attribute_value != null) {

        for (const e in attribute_value) {
            if (!attribute_value[_hasOwnProperty](e)) {
                continue;
            };

            const value = attribute_value[e];

            if ([_value, _innerText, _innerHTML, _textContent, _contentEditable,][_indexOf](e) != -1) {
                dom[e] = value;
            }
            else if ([_color, _backgroundColor, _width, _height, _display, _float][_indexOf](e) != -1) {
                dom[_style][e] = value;
            }
            else if (value != null) {
                dom[_setAttribute](e, value);
            };
        };
    };

    if (children_value != null) {
        const is_string = typeof children_value === _string;
        const is_number = typeof children_value === _number;
        const is_array = Array[_isArray](children_value);

        if (is_string || is_number) {
            const value = children_value;
            const is_img = (css_tag === _img);
            const is_source = (css_tag === _source);

            if (is_img || is_source || css_tag === "audio") {
                dom["src"] = value;
            }
            else if (is_temp) {
                dom[_appendChild]($document[_createTextNode](children_value))
            }
            else {
                dom[_innerHTML] = value;
            };
        }
        else if (is_array) {
            for (let e of children_value) {
                const is_string = typeof e === _string;
                const is_number = typeof e === _number;
                const is_element = e instanceof Element;

                if (is_string || is_number) {
                    if (is_temp) {
                        dom[_appendChild]($document[_createTextNode](e))
                    }
                    else {
                        dom[_innerHTML] += e;
                    }
                }
                else if (is_element) {
                    dom[_appendChild](e);
                };
            };
        };
    };

    return dom;
};