hexo.extend.filter.register('after_post_render', function(data){
    // 投稿のコンテンツからimgタグを検索
    const imgRegex = /<img(?:.|\n)*?>/g;
    const contentWithImg = data.content;

    // imgタグが見つかった場合、aタグで置き換える
    const contentWithATags = contentWithImg.replace(imgRegex, (imgTag) => {
        const srcRegex = /src="([^"]+)"/;
        const altRegex = /alt="([^"]+)"/;
        let srcMatch = imgTag.match(srcRegex);
        const altMatch = imgTag.match(altRegex);
        imgTag = imgTag.replace(".png",".webp")
        
        if (srcMatch ) {
            const src = srcMatch[1].replace(".png",".webp");
            const alt = altMatch && altMatch[1] ? altMatch[1] : '';
            return `<a href="${src}" title="${alt}" class="glightbox"  data-gallery="postImg">${imgTag}</a>`;
        } else {
            return imgTag; // imgタグにsrc属性がない場合、置き換えない
        }
    });

    data.content = contentWithATags;

    return data;

},2);
