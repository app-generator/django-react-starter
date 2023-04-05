# Stage 1: Build the React app
FROM node:16.15-alpine AS react-build
WORKDIR /app

COPY package.json webpack.config.js .babelrc /app/
RUN yarn install
COPY frontend/ /app/frontend/
RUN yarn build

# Stage 2: Build the Django app
FROM python:3.10-alpine
WORKDIR /app
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

RUN python manage.py collectstatic --no-input


# Start the Django app
CMD ["gunicorn", "--config", "gunicorn-cfg.py", "core.wsgi"]