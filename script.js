let modeBtn = $("#modeSwitch");
let btnMode = "Dark";

const changeMode = () => {
    document.body.style.backgroundImage = `url("assets/${btnMode}mode.png")`;
    $("#navMain").attr("class", `navbar navbar-expand-lg transparent navbar-${btnMode.toLowerCase()}`);
    switch (btnMode) {
        case "Dark":
            btnMode = "Light";
            break;
        case "Light":
            btnMode = "Dark";
            break;
        default:
            btnMode = "Dark";
    }
    modeBtn.attr("class", `btn btn-${btnMode.toLowerCase()}`);
    modeBtn.text(`${btnMode} Mode`);
    let swapText = $(".switchModes");
    console.log(swapText);
    $.each(swapText, (i) => {
        let currentEle = $(swapText[i]);
        if (currentEle.hasClass("text-dark")) {
            currentEle.removeClass("text-dark");
            currentEle.addClass("text-light");
        } else if (currentEle.hasClass("text-light")) {
            currentEle.removeClass("text-light");
            currentEle.addClass("text-dark");
        }
    });
}

modeBtn.on("click", changeMode);