SvnPatchMakerApp
================

svn log file patch local compile file
-------------

**1.install python2.7.6**

>https://www.python.org/download/releases/2.7.6/

**2.install django1.6.2**

>https://pypi.python.org/packages/source/D/Django/Django-1.6.2.tar.gz#md5=45d974c623b3bfbf9976f3d808fe1ee9

>cd django dir, python setup.py install

**3.install pysvn**

>http://pysvn.tigris.org/servlets/ProjectDocumentList?folderID=1768 (version fit svn working copy)

**4.install database**

>cd SvnPatchMakerApp

>python manage.py validate

>python manage.py sqlall SvnPatchMakerApp

>python manage.py syncdb

**5.start run.bat**

**6.使用手册在doc目录下**

***sample***

![Translation status](https://github.com/github20120522/SvnPatchMakerApp/blob/master/doc/sample.png)

***注意:***
-------------

>如果在程序运行过程中出现

>UnicodeDecodeError: 'ascii' codec can't decode byte 0xb0 in position 1: ordinal not in range(128)

>则表示注册表中有软件注册了中文键值


***解决方法:***

>进入python安装目录下的Lib目录，打开mimetypes.py文件

>在default_encoding = sys.getdefaultencoding()前添加如下代码


```python
# begin
if sys.getdefaultencoding() != 'gbk':
    reload(sys)
    sys.setdefaultencoding('gbk')
# end
default_encoding = sys.getdefaultencoding()
with _winreg.OpenKey(_winreg.HKEY_CLASSES_ROOT, '') as hkcr:
```

***解决办法参考：http://webrawler.blog.51cto.com/8343567/1339637***
