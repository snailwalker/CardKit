define([], function(){

    return {"template":"\n<article>\n\n    {% if (data.hd) { %}\n    <header>\n\n        <span class=\"ck-hd {%= (data.hd_url && 'clickable' || '') %}\">\n            {% if (data.hd_url) { %}\n            <a href=\"{%= data.hd_url %}\" class=\"ck-link ck-link-mask\"></a>\n            {% } %}\n            <span>{%= data.hd %}</span>\n        </span>\n\n        {% if (data.hd_opt) { %}\n        <div class=\"ck-hdopt\">{%=data.hd_opt%}</div>\n        {% } %}\n\n    </header>\n    {% } %}\n\n    <div class=\"ck-list-wrap\">\n    {% if (data.items.length) { %}\n\n        <div class=\"ck-list\">\n        {% data.items.forEach(function(item, i){ %}\n            {% if (i && (i % data.config.col === 0)) { %}\n            </div><div class=\"ck-list\">\n            {% } %}\n            <div class=\"ck-item {%= (item.href && 'clickable' || '') %}\" \n                    style=\"width:{%= (data.config.col ? Math.floor(1000/data.config.col)/10 + '%' : '') %};\">\n\n                <div class=\"ck-initem\">\n\n                    {% if (item.href) { %}\n                    <a href=\"{%= item.href %}\" class=\"ck-link ck-link-mask\"></a>\n                    {% } %}\n\n                    <div class=\"ck-title-box\">\n\n                        {% if (item.icon) { %}\n                        <span class=\"ck-icon\">\n                            <img src=\"{%= item.icon %}\"/>\n                        </span>\n                        {% } %}\n\n                        <div class=\"ck-title-set\">\n\n                            {% if (item.title) { %}\n                            <div class=\"ck-title-line\">\n                                {%= item.titlePrefix %}\n                                <span class=\"ck-title\">{%= item.title %}</span>\n                                {%= item.titleSuffix %}\n                                {%= item.titleTag %}\n                            </div>\n                            {% } %}\n\n                            {% if (item.info) { %}\n                            <div class=\"ck-info-wrap\">\n                                {%= item.info %}\n                            </div>\n                            {% } %}\n\n                            {% if (item.desc) { %}\n                            <div class=\"ck-desc-wrap\">\n                                {%= item.desc %}\n                            </div>\n                            {% } %}\n\n                        </div>\n\n                        {% if (item.content) { %}\n                        <div class=\"ck-content-wrap\">\n                            {%= item.content %}\n                        </div>\n                        {% } %}\n\n                        {% if (item.meta) { %}\n                        <div class=\"ck-meta-wrap\">\n                            {%= item.meta %}\n                        </div>\n                        {% } %}\n\n                    </div>\n\n                    {% if (item.author || item.authorDesc || item.authorMeta) { %}\n                    <div class=\"ck-author-box\">\n\n                        {% if (item.avatar) { %}\n                            {% if (item.authorUrl) { %}\n                            <a href=\"{%= item.authorUrl %}\" class=\"ck-avatar ck-link\">\n                                <img src=\"{%= item.avatar %}\"/>\n                            </a>\n                            {% } else { %}\n                            <span class=\"ck-avatar\">\n                                <img src=\"{%= item.avatar %}\"/>\n                            </span>\n                            {% } %}\n                        {% } %}\n\n                        <div class=\"ck-author-line\">\n                            {%= item.authorPrefix %}\n                            {% if (item.authorUrl) { %}\n                            <a href=\"{%= item.authorUrl %}\" class=\"ck-author ck-link\">{%= item.author %}</a>\n                            {% } else { %}\n                            <span class=\"ck-author\">{%= item.author %}</span>\n                            {% } %}\n                            {%= item.authorSuffix %}\n                        </div>\n\n                        {% if (item.authorDesc) { %}\n                        <div class=\"ck-author-desc-wrap\">\n                            {%= item.authorDesc %}\n                        </div>\n                        {% } %}\n\n                        {% if (item.authorMeta) { %}\n                        <div class=\"ck-author-meta-wrap\">\n                            {%= item.authorMeta %}\n                        </div>\n                        {% } %}\n\n\n                    </div>\n                    {% } %}\n\n                </div>\n\n            </div>\n        {% }); %}\n        </div>\n\n    {% } else { %}\n\n        <div class=\"ck-list\">\n            <div class=\"ck-item blank\">\n                <div class=\"ck-initem\">{%=(data.config.blank || '目前还没有内容')%}</div>\n            </div>\n        </div>\n\n    {% } %}\n    </div>\n\n    {% if (data.ft) { %}\n    <footer>{%= data.ft %}</footer>\n    {% } %}\n\n</article>\n"}; 

});