# Steps Followed Till Data

Reference :  [Medium post](https://medium.com/swlh/how-to-deploy-an-angular-app-to-github-pages-without-using-any-libraries-step-by-step-guide-cfe96fb0c879)

## Steps
1.  Create a github repo muthu-kumaravel.github.io
2.  Clone it and get into folder
3.  Create the angulae application
```
$ ng new myApp --directory ./ 
```

4.  Chage `"outputPath"` value to `"docs"`, in `angular.json`
5.  Serve and test the application and the build it
```
$ ng serve --o
$ ng build --prod
```

6.  Add all the changes, commit and push the code
7.  On GitHub go to the 'repository->settings->pages', do as below
    Branch : master
    folder : docs
    Save the config
8.  Visit [muthu-kumaravel.github.io](muthu-kumaravel.github.io) to visit the website

9.  To build and push any release do the following steps 
    1.  ng serve --o
    2.  ng build --prod
    3.  git add <ELEMENTS_TO_ADD>
        Make sure to ass everything inside docs
    4.  git commit -m "<COMMIT_MESSAGE>"
    5.  git push <BRANCH_NAME>