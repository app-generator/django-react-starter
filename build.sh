#!/usr/bin/env bash
# exit on error
set -o errexit

# Compile UI
yarn
yarn build

# Build backend
python -m pip install --upgrade pip

pip install -r requirements.txt

python manage.py makemigrations
python manage.py migrate

python manage.py collectstatic --no-input
