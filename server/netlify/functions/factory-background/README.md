# Factory Background Netlify Function

## Overview

The `factory-background` Netlify function is a backend endpoint designed to process incoming data for quiz or question generation. It validates the input, transforms it through a configurable pipeline, and stores the results. This function is ideal for applications that require dynamic question creation, validation, and persistent storage.

## How It Works

- Accepts HTTP POST requests with a JSON payload.
- Validates that the payload contains both a `topic` and a `label` field, each as a string.
- Processes the document through a series of steps defined in the blueprint pipeline.
- Saves the generated question(s) to blob storage.
- Returns a JSON response with the processed data and a status message.

## Input Format

The request body must be a JSON object with the following fields:

- `topic`: string (required)
- `label`: string (required)

Example:
```json
{
  "topic": "Geography",
  "label": "Geography"
}
```

## Usage

Send a POST request to the endpoint (e.g., `/api/factory-background` or your Netlify function URL) with the required JSON body.

### CURL Example

```
curl -X POST \
  -H "Content-Type: application/json" \
  --data '{"topic": "Geography", "label": "Geography"}' \
  https://your-netlify-site.netlify.app/.netlify/functions/factory-background
```

```
curl -X POST \
  -H "Content-Type: application/json" \
  --data '{"topic": "Famous Artists and how to idenify their paintings", "label": "FamousArtists"}' \
  https://your-netlify-site.netlify.app/.netlify/functions/factory-background
```

Replace the URL with your deployed Netlify function endpoint.

## Notes
- Both `topic` and `label` are required and must be strings. Requests missing these fields will result in an error.
- The function logs the generated question for debugging purposes.
- Results are saved to blob storage; check your storage configuration for details.
- For advanced usage, customize the blueprint pipeline in `blueprint.ts`.

---
For more information, see the source code or contact the project maintainers.
