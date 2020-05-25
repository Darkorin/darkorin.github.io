let modeBtn = $("#modeSwitch");
let btnMode = "Dark";

const changeMode = () => {
    
    document.body.style.backgroundImage = `url("assets/${btnMode}mode.png")`;
    $("#navMain").attr("class", `navbar navbar-expand-lg transparent navbar-${btnMode.toLowerCase()}`);
    $("#navDivider").attr("class", `hr${btnMode}`);

    let btnList = $(".switchImg");
    $.each(btnList, i => {
        $(btnList[i]).attr("src", `assets/${btnMode}${btnList[i].id}.png`);
    });

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

    const textSwapper = i => {
        let currentEle = $(swapText[i]);
        if (currentEle.hasClass("text-dark")) {
            currentEle.removeClass("text-dark");
            currentEle.addClass("text-light");
        } else if (currentEle.hasClass("text-light")) {
            currentEle.removeClass("text-light");
            currentEle.addClass("text-dark");
        }
    }

    let swapText = $(".switchModes");
    $.each(swapText, textSwapper);
}

modeBtn.on("click", changeMode);