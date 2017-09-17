To start monitoring of the file changes run command from project root:

```
pm2 start process.json
```

After changes in process.json file you should remove existing pm2 app:

```
pm2 delete <appId>
```

and then recreate him:

```
pm2 start process.json
```