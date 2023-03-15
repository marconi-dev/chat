#!/usr/bin/env bash
# ------------------------------------------------------------
# Script     :
# Descrição  :
# Versão     : 1.0
# Autor      : Marconi S. de Jesus <marconi.developer@outlook.com.br>
# Licença    : GNU/GPL v3.0
# Data       : 21/02/2023
# ------------------------------------------------------------
# Uso:
# ------------------------------------------------------------

cd core && python manage.py collectstatic --noinput && daphne -b 0.0.0.0 core.asgi:application