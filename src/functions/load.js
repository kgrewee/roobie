/**
 * Load file content into an element by id.
 * 
 * @param {string} id Id to select
 * @param {string} file Path to file to load
 */
function loadById(id, file) {
    debug("Load [File] " + file + " -> [Id] " + id);
    var element = getId(id);
    var request = new XMLHttpRequest();
    request.open('GET', file, true);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            var resp = request.responseText;
            element.innerHTML = resp;
        }
    };
    request.send();
}