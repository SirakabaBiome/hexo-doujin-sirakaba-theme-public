const { page } = require("hexo/dist/plugins/helper/is");

hexo.extend.filter.register('after_post_render', function(data){
    var content = data.more;
    var page_table = data.table;
    var table_data = {}
    var h2_key_data = []
    var headings = content.match(/<h2.*?<\/h2>/g);
    var processedContent = '';
    var currentIndex = 0;
    var beforeSection = "";
    if (page_table != undefined && page_table != null){
        var table_keys = Object.keys(page_table)

        table_keys.forEach((yml_key)=>{
            var keys = Object.keys(data[yml_key]);
            var page_yml_data = data[yml_key];
            var table_data_code = "";

            keys.forEach((key) => {
                if (page_yml_data[key] != null && page_yml_data[key] != undefined){
                    var dict = page_yml_data[key];
                    var h3 = "<h3>" + key + "</h3>";
                    var table = "<table class='striped highlight'><tbody>";
                    var labels = Object.keys(dict);

                    if (dict[labels[0]] !== null && typeof dict[labels[0]] === "object"){
                        var keys2 = Object.keys(dict[labels[0]])
                        table += "<tr><th>" + key + "</th>"

                        keys2.forEach((label2)=>{
                            table += "<th>" + label2 + "</th>"
                        })

                        table += "</tr>"

                        labels.forEach((label)=>{
                            var dict2 = dict[label]
                            table += "<tr><th scope='row'>" + label + '</th>'
                            var key3 = Object.keys(dict2)

                            key3.forEach((label2)=>{
                                table += "<td>" + dict2[label2] + "</td>"
                            })

                            table += "</tr>"
                        })

                    } else {
                        labels.forEach((label) => {
                            table += "<tr><th scope='row'>" + label+ "</th><td><span>" + dict[label] + "</span></td></tr>"
                        });
                    }

                    table += "</tbody></table>";
                    table_data_code += h3 + table;
                }
            });
            table_data[page_table[yml_key]] = table_data_code;
            h2_key_data.push(page_table[yml_key])
        });
    };
    if (data.layout === "character" && headings) {
        for (var i = 0; i < headings.length; i++) {
            var heading = headings[i];
            var nextIndex = content.indexOf(heading, currentIndex) + heading.length; // Find the end index of the current heading
            var sectionContent = ""; // Move the initialization here inside the loop
            var head_text = heading.match(/(?<=\<\/a\>).*(?=\<\/h2\>)/)[0]
            if (h2_key_data.includes(head_text)){
                sectionContent = table_data[head_text]
            }
            if (i === headings.length - 1) {
                sectionContent += content.substring(currentIndex); // For the last heading
            } else {
                sectionContent += content.substring(currentIndex, content.indexOf(headings[i + 1], nextIndex)); // Find the end index of the next heading
            }
            sectionContent = sectionContent.replace(heading,"");
            sectionContent = sectionContent.replace(beforeSection,"")
            beforeSection = sectionContent;
            heading = heading.match(/(?<=\>).*(?=<)/);

            // Convert h2 to summary tag and wrap content until the next h2 in details tag
            processedContent += '<details><summary>' + heading + '</summary>' + sectionContent + '</details>';

            currentIndex = nextIndex ;
        }
        data.more = processedContent;
    }


    return data;
});
