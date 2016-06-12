/* Scut:
 * A Hain plugin for running Google Chrome with flags
 * @author Jordan Liu
 * @license MIT
 */

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
        // If error, try full default path
        fullPath = 'C:\\"Program Files (x86)"\\Google\\Chrome\\Application\\chrome.exe';
        if (id=="incognito") {
            var returnCode = exec("START chrome --incognito", function (error) {
                if (error) {
                    logger.log("Error caught when starting incognito. Running with full path.");
//                  exec('START '+fullPath+' --incognito');
                }
            });
        } else if (id == "restore") {
            var returnCode = exec("START chrome --restore-last-session", function (error) {
                if (error) {
                    logger.log("Error caught when restoring. Running with full path.");
//                  exec('START '+fullPath+' --restore-last-session');
                }
            });
        } else {
            var returnCode = exec("START chrome" + payload, function (error) {
                if (error) {
                    logger.log("Error caught on start. Running with full path.");
//                  exec('START '+fullPath);
                }
            });
        }
    }
return { search, execute };
};
