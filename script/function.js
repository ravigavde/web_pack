console.log("function file");
export function click()
{
    console.log("clicked");
    let paragraph = document.getElementById("para");
    paragraph.innerHTML = "Newly added lines" ;
}