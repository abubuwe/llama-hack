FROM python:3.12

# Set environment variables
ENV DEBIAN_FRONTEND noninteractive
ENV POETRY_HOME="/opt/poetry"
ENV POETRY_VIRTUALENVS_IN_PROJECT=false
ENV PYTHONPATH="/app"
ENV PYTHONDONTWRITEBYTECODE=true

# Prepend poetry to path
ENV PATH="$POETRY_HOME/bin:$PATH"

# Install dependencies
RUN apt-get update -q \
    && apt-get install -q -y \
        build-essential \
        make \
        sudo \
        git \
        htop \
        curl \
        glpk-utils \
        # Install dependencies for Selenium and Chrome
        wget \
        gnupg \
        ca-certificates \
        unzip \
        fonts-liberation \
        libappindicator3-1 \
        libnss3 \
        lsb-release \
        xdg-utils \
        chromium-driver \
        chromium

# Install poetry
RUN mkdir -p $POETRY_HOME
RUN curl -sSL https://install.python-poetry.org | python -

# Add non-root user with sudo access
ARG USERNAME=user
RUN adduser $USERNAME
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME
USER $USERNAME

# Working directory
WORKDIR /app

# Install Python packages
ENV VIRTUAL_ENV="/home/$USERNAME/.venv"
RUN python -m venv $VIRTUAL_ENV
COPY poetry.lock pyproject.toml ./
RUN poetry install
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# Set environment variables for Chrome
ENV CHROME_BIN="/usr/bin/chromium"
ENV CHROME_DRIVER="/usr/lib/chromium-browser/chromedriver"
