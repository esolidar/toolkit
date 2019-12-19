### Install the package:

  

1. Create access token with [Permissions: repo / write:packages / read:packages / delete:packages]

2. Add Token to global **~/.npmrc** file. Open the shell and do **C:\>code ~/.npmrc** to open the file, then add the following line:

```

//npm.pkg.github.com/:_authToken=TOKEN

```

  

or login on the command line

  

```

npm login --registry=https://npm.pkg.github.com

Username: GitHub-username

Password: your-personal-access-token

Email: (this IS public) your-email@example.com

```

  
  

3. In the same directory as your **package.json** file, create or edit an **.npmrc** file to include a line specifying GitHub Package Registry URL and the account esolidar:

```

@esolidar:registry=https://npm.pkg.github.com

```

4. Import the package using:

  

yarn add @esolidar/toolkit

  

# Documentação


[Toolkit Styleguide](https://htmlpreview.github.io/?https://github.com/esolidar/toolkit/tree/master/styleguide/index.html)
