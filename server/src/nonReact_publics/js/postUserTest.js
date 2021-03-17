function renderJsonToHTML0(jsonData) {
    let ret = $("<ul>");
    for(k in jsonData) {
        let val = jsonData[k];
        let child = $("<li>").text(`${k} = ${val}`);
        ret.append(child);
    }
    return ret;
}

function renderJsonToHTML(jsonData) {
    let ret = $("<table>").attr("style", "border: 1px solid black;");

    let tableHeader = $("<tr>");
    tableHeader.append($("<th>").text("field"), $("<th>").text("value"))
    ret.append(tableHeader);

    for(k in jsonData) {
        let val = jsonData[k];
        let child = $("<tr>");

        child.append(
            $("<td>").attr("style","margin-right:1px;border: 1px solid black").text(k),
            $("<td>").attr("style","margin-right:1px;border: 1px solid black").text(val));
        ret.append(child);
    }
    return ret;
}


$(function(){
    let thediv = $("#thediv");

    $.post( "/api/users/", {firstName:"firstName", lastName:"lastName", password:"in the clear.  Rob me plz."}, function( data ) {
        thediv.html("note this saved data includes mongo's _id field which wasn't posted.<br> A __v field is in there too.  Don't worry about that.  It is some internal versioning gobbledegook<hr>");
        thediv.append( "saved JSON data:", renderJsonToHTML(data) );
      });      
});
