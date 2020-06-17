let modeBtn = $("#modeSwitch");

let btnMode = localStorage.getItem("darkorin-page-mode");

const changeMode = () => {
    
    document.body.style.backgroundImage = `url("assets/${btnMode}mode.png")`;
    $("#navMain").attr("class", `navbar navbar-expand-lg transparent navbar-${btnMode.toLowerCase()}`);
    $("#navDivider").attr("class", `hr${btnMode}`);

    let btnList = $(".switchImg");
    $.each(btnList, i => $(btnList[i]).attr("src", `assets/${btnMode}${btnList[i].id}.png`));

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
    localStorage.setItem("darkorin-page-mode", btnMode);
    modeBtn.attr("class", `btn btn-${btnMode.toLowerCase()}`);
    modeBtn.text(`${btnMode} Mode`);

    const textSwapper = i => {
        let currentEle = $(swapText[i]);
        const swapClasses = (mode1, mode2) => {
            currentEle.removeClass(`text-${mode1}`);
            currentEle.addClass(`text-${mode2}`);
        }
        if (currentEle.hasClass("text-dark")) {
            swapClasses("dark", "light");
        } else if (currentEle.hasClass("text-light")) {
            swapClasses("light", "dark");
        }
    }

    let swapText = $(".switchModes");
    $.each(swapText, textSwapper);
}

if(btnMode === "Light") {
    btnMode = "Dark";
    changeMode();
} else {
    btnMode = "Dark";
}

modeBtn.on("click", changeMode);