#!/bin/bash

# Build and run the appointment-frontend Docker container

echo "Stopping existing container..."
docker stop appointment-frontend 2>/dev/null
docker rm appointment-frontend 2>/dev/null

echo "Building Docker image..."
docker build -t appointment-frontend .

if [ $? -ne 0 ]; then
    echo "Build failed!"
    exit 1
fi

echo "Starting container..."
docker run -d -p 4200:80 --network clientservice-network --name appointment-frontend appointment-frontend

if [ $? -ne 0 ]; then
    echo "Failed to start container!"
    exit 1
fi

echo ""
echo "========================================"
echo "Frontend is running at http://localhost:4200"
echo "========================================"
echo ""
echo "Use 'docker logs appointment-frontend' to view logs"
echo "Use 'docker stop appointment-frontend' to stop the container"
echo ""

docker ps --filter "name=appointment-frontend"
