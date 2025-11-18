#!/bin/bash

# Stop the appointment-frontend Docker container

echo "Stopping appointment-frontend container..."
docker stop appointment-frontend

if [ $? -eq 0 ]; then
    echo "Container stopped successfully."
else
    echo "Failed to stop container or container not running."
fi
