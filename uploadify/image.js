$(function () {
    $("#file_upload").uploadify({
        'swf'               : SCOPE.uploadify_swf,
        'uploader'          : SCOPE.image_upload,
        'buttonText'        : '图片上传',
        'fileTypeDesc'      : 'Image files',
        'fileObjName'       : 'file',
        'fileTypeExts'      : '*gif;*.jpg;*.png;*jpeg',
        'onUploadSuccess'   : function (file,data,response) {
            console.log(file);
            console.log(data);
            console.log(response);
            if (response){
                var obj = JSON.parse(data);
                $("#upload_org_code_img").attr("src",obj.data); //向view页面image下填充图片数据
                $("#file_upload_image").attr("value",obj.data);
                $("#upload_org_code_img").show();
            }
        }
    });

    // view中存在另一个上传图片方法
    $("#file_upload_other").uploadify({
        'swf'               : SCOPE.uploadify_swf,
        'uploader'          : SCOPE.image_upload,
        'buttonText'        : '图片上传',
        'fileTypeDesc'      : 'Image files',
        'fileObjName'       : 'file',
        'fileTypeExts'      : '*gif;*.jpg;*.png;*jpeg',
        'onUploadSuccess'   : function (file,data,response) {
            console.log(file);
            console.log(data);
            console.log(response);
            if (response){
                var obj = JSON.parse(data);
                $("#upload_org_code_img_other").attr("src",obj.data); //向view页面image下填充图片数据
                $("#file_upload_image_other").attr("value",obj.data);
                $("#upload_org_code_img_other").show();
            }
        }
    });
});