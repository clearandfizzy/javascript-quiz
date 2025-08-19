# Upload API Route

## Overview
This `POST` API route uploads JSON files with questions to Netlify Blob storage. It:

## Prerequisites
Set these environment variables:

- `NEXT_NETLIFY_DATA_STORE_NAME`: Blob storage name.
- `NEXT_NETLIFY_SITE_ID`: Netlify site ID.
- `NEXT_NETLIFY_AUTH_TOKEN`: Netlify auth token.

## Usage

### Endpoint
```bash
curl -X POST \
  -H "Authorization: Bearer <your-token>" \
  http://localhost:3000/api/upload
```

### Headers
- `Authorization`: Bearer token.

### Response
- **200 OK**: Upload successful.
- **500 Internal Server Error**: Upload failed.

## Notes
- Ensure `src/data/json` contains valid JSON files.
- This route is for development only.
