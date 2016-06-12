/* Scut:
 * A Hain plugin for running Google Chrome with flags
 * @author Jordan Liu
 * @license MIT
 */

// Starts Google Chrome; if error, try full default path
// Example calls:
//      runChrome("--incognito");
//      runChrome("--restore-last-session");
function runChrome(flags) { 
    const FULL_PATH = 'C:\\"Program Files (x86)"\\Google\\Chrome\\Application\\chrome.exe ';
    var returnCode = exec("START chrome "+flags, function (error) {
        if (error) {
            logger.log("Error caught on START. Running with default full path.");
            exec('START '+FULL_PATH+flags);
        }
    });
}

module.exports = (pluginContext) => {
    const logger = pluginContext.logger;
    const exec = require('child_process').exec;
   
    function search(query, res) {
        query = query.trim();
        if (query == 'n' || query == '-n') {
            logger.log("Starting incognito");
            res.add({
                id: "incognito",
                title: "Start Chrome in incognito mode<span style='width:100px;height:100px;'</span>",
                desc: "<span style='width:100px;height:100px;'</span>",
            });
        } else if (query == 'r' || query == '-r') {
            logger.log("Starting restore");
            res.add({
                id: "restore",
                title: "Restore last Chrome session <span style='width:100px;height:100px;'</span>",
                desc: "<span style='width:100px;height:100px;'</span>",
            });
        } else {
            logger.log("Starting default"); 
            res.add({
                id: "noflag",
                title: "Start Chrome <span style='width:100px;height:100px;'</span>",
                desc: "Try /chrome n or /chrome r<span style='width:100px;height:100px;'</span>",
                payload: query
            });
        }
    }
    function execute(id, payload) {
        if (id == "incognito")
            runChrome(flags="--incognito");
        else if (id == "restore")
            runChrome(flags="--restore-last-session");
        else
            runChrome(flags="");
    }
return { search, execute };
};
