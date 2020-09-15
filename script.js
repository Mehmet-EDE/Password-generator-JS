function password() {
    var chars = "0123456789abcdefghijlkmnoprstuvyzABCDEFGHIJKLMOPRSTUVYZ!'^+%&/()=?_>£#$½{[]}\|",
        passlength = 15,
        pass = "",
        i;
    for (i = 0; i <= passlength; i++) {
        var rndm = Math.floor(Math.random() * chars.length);
        pass += chars.substring(rndm, rndm + 1)
    }
    document.getElementById("password").value = pass
}