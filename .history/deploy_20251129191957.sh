#!/bin/bash

# Portfolio Deployment Script for AlmaLinux
# This script builds and deploys the portfolio to your server

# Configuration
SERVER_USER="your-username"
SERVER_HOST="your-domain.com"
REMOTE_PATH="/var/www/portfolio"
BUILD_DIR="dist"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Portfolio Deployment Script${NC}"
echo "=================================="

# Step 1: Build the project
echo -e "\n${YELLOW}Step 1: Building project...${NC}"
npm run build

if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}❌ Build failed! dist/ folder not found.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build successful!${NC}"

# Step 2: Upload to server
echo -e "\n${YELLOW}Step 2: Uploading to server...${NC}"
scp -r $BUILD_DIR/* $SERVER_USER@$SERVER_HOST:$REMOTE_PATH/

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Upload successful!${NC}"
else
    echo -e "${RED}❌ Upload failed!${NC}"
    exit 1
fi

# Step 3: Restart web server (optional)
echo -e "\n${YELLOW}Step 3: Restarting web server...${NC}"
ssh $SERVER_USER@$SERVER_HOST "sudo systemctl restart nginx"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Web server restarted!${NC}"
else
    echo -e "${YELLOW}⚠ Could not restart web server (you may need to do this manually)${NC}"
fi

echo -e "\n${GREEN}🎉 Deployment complete!${NC}"
echo -e "Your portfolio is now live at: https://$SERVER_HOST"
