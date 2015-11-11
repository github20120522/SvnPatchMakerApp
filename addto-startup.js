function CreateShortcut(target_path)
{
   wsh = new ActiveXObject('WScript.Shell');
   link = wsh.CreateShortcut(wsh.SpecialFolders("Startup") + '\\hide-runserver.js.lnk');
   link.TargetPath = target_path;
   link.WindowStyle = 7;
   link.Description = 'SvnAppPatcher';
   link.WorkingDirectory = wsh.CurrentDirectory;
   link.Save();
}

function main()
{
   wsh = new ActiveXObject('WScript.Shell');
   if(wsh.Popup('是否将hide-runserver.js加入到启动项？(本对话框6秒后消失)', 6, 'SvnAppPatcher 对话框', 1+32) == 1) {
       CreateShortcut('"' + wsh.CurrentDirectory + '\\hide-runserver.js"');
       wsh.Popup('成功加入hide-runserver.js到启动项', 5, 'SvnAppPatcher 对话框', 64);
   }
}

main();
