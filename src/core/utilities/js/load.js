class Load {
    /**
     * Load file content into an element by id.
     * 
     * @param {string} id Id to select
     * @param {string} file Path to file to load
     */
    static loadById(id, file) {
        console.log("Load [File] " + file + " -> [Id] " + id);
        var element = document.getElementById(id);
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
}