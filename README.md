# ThinkPHP5-phpmailer

phpmailer文件夹 放入 extend 目录下

email.php 里面配置账号信息 放到 application/extra目录下

调用:

```
\phpmailer\Email::send(toEmail,title,content);
```

比如:

```
\phpmailer\Email::send('578870@qq.com','tp5email','success!');
```

