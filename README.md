To start monitoring of the files changes run the command from the project root:

```
pm2 start process.json
```

After any changes in the process.json file you should remove existing pm2 app:

```
pm2 delete <appId>
```

and then recreate him:

```
pm2 start process.json
```
