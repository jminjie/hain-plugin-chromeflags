/* Scut:
 * A Hain plugin for running Google Chrome with flags
 * @author Jordan Liu
 * @license MIT
 */

module.exports = (pluginContext) => {
    const logger = pluginContext.logger;
   
    var count = 1; 
    var currentRes = null;

    function search(query, res) {
        res.add({
            id: "add",
            title: "Add the shortcut "+query+" <span style='width:100px;height:100px;'</span>",
            desc: "<span style='width:100px;height:100px;'</span>",
            payload: query
        });
        currentRes = res;
    }
    function execute(id, payload) {
        if (id=="exec") {
            logger.log("executing roll!");
            try {
                var result = d20roll(payload);
                if (isNaN(result)) {
                    throw "NaN";
                }
            } catch (err) {
                var result = 'Invalid notation.';
            }
            currentRes.add({
                id: "roll_" + count,
                title: result+" <span style='width:100px;height:100px;'</span>",
                desc: "<span style='width:100px;height:100px;'</span>",
            });
            count++;
        }
    }
return { search, execute };
};
