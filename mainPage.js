// first
fetch("main.json").then((res) => {
    return res.json()
}).then((data) => {
    console.log(data.First)

    display(data.First);

})

function display(data) {
    data.forEach(element => {
        let Div = document.createElement("img");
        Div.setAttribute("src", element.img)

        document.querySelector("#first").append(Div)
    });
}
//second
fetch("main.json").then((res) => {
    return res.json()
}).then((data) => {
    console.log(data.Second)

    display(data.Second);

})

function display(data) {
    data.forEach(element => {
        let Div = document.createElement("img");
        Div.setAttribute("src", element.img)

        document.querySelector("#second").append(Div)
    });
}
// third
fetch("main.json").then((res) => {
    return res.json()
}).then((data) => {
    console.log(data.First)

    display(data.Third);

})

function display(data) {
    data.forEach(element => {
        let Div = document.createElement("img");
        Div.setAttribute("src", element.img)

        document.querySelector("#third").append(Div)
    });
}
//four
fetch("main.json").then((res) => {
    return res.json()
}).then((data) => {
    console.log(data.First)

    display(data.Four);

})

function display(data) {
    data.forEach(element => {
        let Div = document.createElement("img");
        Div.setAttribute("src", element.img)

        document.querySelector("#four").append(Div)
    });
}
// five
fetch("main.json").then((res) => {
    return res.json()
}).then((data) => {
    console.log(data.First)

    display(data.Five);

})

function display(data) {
    data.forEach(element => {
        let Div = document.createElement("img");
        Div.setAttribute("src", element.img)

        document.querySelector("#five").append(Div)
    });
}
//six
fetch("main.json").then((res) => {
    return res.json()
}).then((data) => {
    console.log(data.First)

    display(data.Six);

})

function display(data) {
    data.forEach(element => {
        let Div = document.createElement("img");
        Div.setAttribute("src", element.img)

        document.querySelector("#six").append(Div)
    });
}
// seven
fetch("main.json").then((res) => {
    return res.json()
}).then((data) => {
    console.log(data.First)

    display(data.Seven);

})

function display(data) {
    data.forEach(element => {
        let Div = document.createElement("img");
        Div.setAttribute("src", element.img)

        document.querySelector("#seven").append(Div)
    });
}
//eight
fetch("main.json").then((res) => {
    return res.json()
}).then((data) => {
    console.log(data.First)

    display(data.Eight);

})

function display(data) {
    data.forEach(element => {
        let Div = document.createElement("img");
        Div.setAttribute("src", element.img)

        document.querySelector("#eight").append(Div)
    });
}
// nine
fetch("main.json").then((res) => {
    return res.json()
}).then((data) => {
    console.log(data.First)

    display(data.Nine);

})

function display(data) {
    data.forEach(element => {
        let Div = document.createElement("img");
        Div.setAttribute("src", element.img)

        document.querySelector("#nine").append(Div)
    });
}
//ten
fetch("main.json").then((res) => {
    return res.json()
}).then((data) => {
    console.log(data.First)

    display(data.Ten);

})

function display(data) {
    data.forEach(element => {
        let Div = document.createElement("img");
        Div.setAttribute("src", element.img)

        document.querySelector("#ten").append(Div)
    });
}
//eleven
fetch("main.json").then((res) => {
    return res.json()
}).then((data) => {
    console.log(data.First)

    display(data.Eleven);

})

function display(data) {
    data.forEach(element => {
        let Div = document.createElement("img");
        Div.setAttribute("src", element.img)

        document.querySelector("#eleven").append(Div)
    });
}