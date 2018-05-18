<?php
/**
 * 图片上传
 * User: sowhy
 * Date: 2018/5/18
 * Time: 19:23
 */
namespace app\api\controller;
use think\Controller;
use think\Request;
use think\File;

class Image extends Controller
{
    public function upload(  )
    {
        $file = Request::instance()->file('file');
        // 定义一个目录
        $info = $file->move('upload');
        if ($info && $info->getPathname()) {
            return show(1,'success','/'.$info->getPathname());
        }

        return show(0,'upload error');
    }
}