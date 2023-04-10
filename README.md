# [Django & React](https://blog.appseed.us/how-to-integrate-django-with-react/) `Codebase`

Open-source **Django Starter** bundled with React, React-Flow - Actively supported by AppSeed. The code for this starter is fully explained [here](https://blog.appseed.us/how-to-integrate-django-with-react/).

- 👉 [Django & React](https://django-react-starter.onrender.com/charts) - `LIVE deployment`
  - [ReCharts](https://django-react-starter.onrender.com/charts) `sample page`
  - [ReactFlow](https://django-react-starter.onrender.com/flow) `sample page`
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

[![Django & React - Open-Source Starter](https://user-images.githubusercontent.com/51070104/230912843-2c670ac7-2ce6-4289-8e00-7ccca1f3a67f.gif)](https://blog.appseed.us/how-to-integrate-django-with-react/)

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

### 👉 Build `React Frontend`

```bash
$ yarn       # Install React
$ yarn dev   # development build (with LIVE Reload)
$ yarn build # production build
```

<br />

### 👉 Build `Django Backend` 

> Install modules via `VENV`  

```bash
$ virtualenv env
$ source env/bin/activate
$ pip install -r requirements.txt
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

## `Charts` Provisioning

Open the Django shell and create manually new records: 

```python
$ python manage.py shell
>>> from apps.home.models import Sales
>>>
>>> s1 = Sales() # Use the default country `USA`
>>> s1.save()
>>>
>>> s2 = Sales() # Use the default country `USA`
>>> s2.save()
>>> 
>>> s3 = Sales()
>>> s3.country = 'ger' # Create a sale from `Germany`
>>> s3.save()
>>> 
>>> s4 = Sales()
>>> s4.country = 'france' # Ans another one from France
>>> s4.save()
```

Once the information is saved, the `/charts` route should render the information:

![Django & ReCharts](https://user-images.githubusercontent.com/51070104/230713648-a55e1ccf-ddc6-4d65-b7b3-d840a8a7e254.png)

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
[Django & React](https://blog.appseed.us/how-to-integrate-django-with-react/) `Codebase` - `Open-Source` starter crafted by **[AppSeed](https://appseed.us)**.
