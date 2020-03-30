# Default Draft Pull Request

A minimal Google Chrome extension forces to select a draft pull request by default.

## Install

- Download a zip from GitHub Releases
- Unzip it
- Open `chrome://extensions`
- Click `Load unpacked` and load the directory that was unzipped above

**permission**

- Use `tabs` because GitHub is using ajax loading so it's hard to detect the *compare* page using only content_script.

## Development

```
$ yarn install --frozen-version
$ yarn watch
```

And then, please load `dist` directory from your Google Chrome.
