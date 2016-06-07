/* Scut:
 * A Hain plugin for running Google Chrome with flags
 * @author Jordan Liu
 * @license MIT
 */

module.exports = (pluginContext) => {
    const logger = pluginContext.logger;
    const exec = require('child_process').exec;
   
    function search(query, res) {
        if (query == 'n') {
            logger.log("Starting incognito");
            res.add({
                id: "incognito",
                title: "Start Chrome in incognito mode<span style='width:100px;height:100px;'</span>",
                desc: "<span style='width:100px;height:100px;'</span>",
            });
        } else if (query == 'r') {
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
                desc: "<span style='width:100px;height:100px;'</span>",
                payload: query
            });
        }
    }
    function execute(id, payload) {
        if (id=="incognito") {
            exec("START chrome --incognito");
        } else if (id == "restore") {
            exec("START chrome --restore-last-session");
        } else {
            exec("START chrome" + payload);
        }
    }
return { search, execute };
};
