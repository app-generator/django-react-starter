# [Django & React Codebase](https://github.com/app-generator/django-react-starter)

Open-source **Django Starter** bundled with React, React-Flow - Actively supported by AppSeed. 

- 👉 [Django & React](https://django-react-starter.onrender.com/) - `LIVE deployment`
- 🚀 Free [Support](https://appseed.us/support/) via `Email` & `Discord`

<br />

> Feature: 

- 🚀 `Stack`: **Django** & **React**
- ✅ Tooling: `Webpack`
- ✅ `Design`: [Django Theme Datta](https://github.com/app-generator/django-admin-datta) - `Free Version`
- ✅ `Sections` covered by the design:
  - ✅ **Admin section** (reserved for superusers)
  - ✅ **Authentication**: `Django.contrib.AUTH`, Registration
  - ✅ **All Pages** available in for ordinary users 
- 🚀 `Deployment`: Docker, `CI/CD` flow via `Render`
  
<br />

[![Django & React Codebase - Free Starter by AppSeed.](https://user-images.githubusercontent.com/51070104/229304184-ed3cd761-9a43-43f0-90ba-9a2fcb0a4534.png)](https://github.com/app-generator/django-react-starter)

<br /> 

## Start with `Docker`

> 👉 **Step 1** - Download the code from the GH repository (using `GIT`) 

```bash
$ git clone https://github.com/app-generator/django-react-starter.git
$ cd django-react-starter
```

<br />

> 👉 **Step 2** - Start the APP in `Docker`

```bash
$ docker-compose up --build 
```

Visit `http://localhost:5085` in your browser. The app should be up & running.

<br />

## Manual Build

> Download the code 

```bash
$ git clone https://github.com/app-generator/django-react-starter.git
$ cd django-react-starter
```

<br />

### 👉 Set Up for `Unix`, `MacOS` 

> Install modules via `VENV`  

```bash
$ virtualenv env
$ source env/bin/activate
$ pip3 install -r requirements.txt
```

<br />

> Set Up Database

```bash
$ python manage.py makemigrations
$ python manage.py migrate
```

<br />

> Start the APP

```bash
$ python manage.py createsuperuser # create the admin
$ python manage.py runserver       # start the project
```

At this point, the app runs at `http://127.0.0.1:8000/`. 

<br />

### 👉 Set Up for `Windows` 

> Install modules via `VENV` (windows) 

```
$ virtualenv env
$ .\env\Scripts\activate
$ pip3 install -r requirements.txt
```

<br />

> Set Up Database

```bash
$ python manage.py makemigrations
$ python manage.py migrate
```

<br />

> Start the APP

```bash
$ python manage.py createsuperuser # create the admin
$ python manage.py runserver       # start the project
```


At this point, the app runs at `http://127.0.0.1:8000/`. 

<br />

<br />

## Codebase Structure

The project is coded using a simple and intuitive structure presented below:

```bash
< PROJECT ROOT >
   |
   |-- core/                            
   |    |-- settings.py      # Project Configuration  
   |    |-- urls.py          # Project Routing
   |
   |-- apps/
   |    |-- home/            # Handle the default route  
   |
   |-- frontend/             # React Code
   |
   |-- requirements.txt      # Project Dependencies
   |-- manage.py             # Start the app - Django default start script
   |
   |-- ************************************************************************
```

<br />

---
[Django & React Codebase](https://github.com/app-generator/django-react-starter) - `Open-Source` starter crafted by **[AppSeed](https://appseed.us)**.
