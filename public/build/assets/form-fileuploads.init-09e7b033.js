import"./dropzone.min-c670d355.js";import"./dropify.min-46616020.js";import"./_commonjsHelpers-de833af9.js";import"./jquery-ef5d6b77.js";Dropzone.autoDiscover=!1;(function(e){var o=function(){this.$body=e("body")};o.prototype.init=function(){Dropzone.autoDiscover=!1,e('[data-plugin="dropzone"]').each(function(){var t=e(this).attr("action"),r=e(this).data("previewsContainer"),i={url:t};r&&(i.previewsContainer=r);var a=e(this).data("uploadPreviewTemplate");a&&(i.previewTemplate=e(a).html()),e(this).dropzone(i)})},e.FileUpload=new o,e.FileUpload.Constructor=o})(window.jQuery),function(e){e.FileUpload.init()}(window.jQuery);$('[data-plugins="dropify"]').length>0&&$('[data-plugins="dropify"]').dropify({messages:{default:"Drag and drop a file here or click",replace:"Drag and drop or click to replace",remove:"Remove",error:"Ooops, something wrong appended."},error:{fileSize:"The file size is too big (1M max)."}});