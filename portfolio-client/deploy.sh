# Remove previoous  build
rm -rf dist/previous
echo "Remove Previous"
# Create previous folder
mkdir dist/previous
echo "Create Previous"
# Copy current build  to previous
cp -r dist/current/* dist/previous
echo "Copy Current as Previous"
# Remove current
rm -rf dist/current
echo "Removed Current"
# Create  current folder
mkdir dist/current
echo "Create Current"
# build application
npm run build --production
echo "Application Built"
# Copoy to Current
cp -r build/* dist/current
echo "Build Copied"
# Sync with S3
aws s3 sync ./dist/current s3://vdavidhammond.com
echo "Build Pushed to S3"
# Invalidate Cloudformation cache
aws cloudfront create-invalidation --distribution-id EQZI232GY0RIC --paths "/*"
echo "Cloudfront cache invalidated"