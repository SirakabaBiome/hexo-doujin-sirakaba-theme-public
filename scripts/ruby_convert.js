hexo.extend.filter.register('after_post_render', function(data){
    var content = data.content;
    var yume = [];
    var yume_name_default = {
        "YZ1": ["ユーザー名","名字","名前","名無し3"],
        "YZ2": ["ユーザー名","名前","ミドルネーム","名字"]
    };
    var keys = Object.keys(data);
    var yume_mode = "YZ2"
    if (data.yumetype != null && data.yumetype != undefined){
        yume_mode = data.yumetype
    } 
    yume = yume_name_default[yume_mode]
    if (data.yumename != null && data.yumename != undefined){
        yume = yume[0]
        data.yumename.forEach((name) => {
            yume.push(name)
        })
    }


    content = content.replace(/[\|｜](.+?)《(.+?)》/g, '<ruby>$1<rt>$2</rt></ruby>');
    content = content.replace(/[\|｜](.+?)（(.+?)）/g, '<ruby>$1<rt>$2</rt></ruby>');
    content = content.replace(/[\|｜](.+?)\((.+?)\)/g, '<ruby>$1<rt>$2</rt></ruby>');

    data.content = content;

    keys.forEach((key) => {
        if (key != "yumename"){
            var temp_content = data[key]
            if (typeof temp_content === 'string'){
                var reg = new RegExp(yume[0],'g')
                data[key] = temp_content.replace(reg,"<span class='names0'></span>")
            }
        }
    })

    if (yume != undefined && yume != null){
        for (i = 0; i < yume.length ; i++){
            var name = yume[i]
            keys.forEach((key)=>{
                if (key != "yumename"){
                    var temp_content = data[key]
                    if (typeof temp_content === 'string'){
                        var reg = new RegExp(name,'g')
                        data[key] = temp_content.replace(reg,"<span  class='names" + String(i) + "'></span>")
                    }
                }
            })
        }
    }
    return
},3);
