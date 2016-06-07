# hain-plugin-chromeflags

A simple plugin for [Hain](https://github.com/appetizermonster/hain) to run Google Chrome with command line flags or switches.
To request support for [additional flags](http://peter.sh/experiments/chromium-command-line-switches) or report a bug, open an issue on [Github](https://github.com/jminjie/hain-plugin-chromeflags).

# Install
Open Hain and type

```
/hpm install hain-plugin-chromeflags
```
## Requirements
Currently this plugin expects Chrome to be in your PATH. If chrome.exe is not found, it will attempt to run it from the default installation folder, C:\"Program Files (x86)"\Google\Chrome\Application\chrome.exe.

# Usage
```
/chrome r (restore last session)
/chrome n (open incognito)
```
