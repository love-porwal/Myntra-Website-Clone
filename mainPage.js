// first
fetch("main.json").then((res) => {
    return res.json()
}).then((data) => {
    console.log(data.First)

    firstdisplay(data.First);

})

function firstdisplay(data) {
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

    seconddisplay(data.Second);

})

function seconddisplay(data) {
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

    thirddisplay(data.Third);

})

function thirddisplay(data) {
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

    fourdisplay(data.Four);

})

function fourdisplay(data) {
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

    fivedisplay(data.Five);

})

function fivedisplay(data) {
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

    sixdisplay(data.Six);

})

function sixdisplay(data) {
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

    sevendisplay(data.Seven);

})

function sevendisplay(data) {
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

    eightdisplay(data.Eight);

})

function eightdisplay(data) {
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

    ninedisplay(data.Nine);

})

function ninedisplay(data) {
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

    tendisplay(data.Ten);

})

function tendisplay(data) {
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

    elevendisplay(data.Eleven);

})

function elevendisplay(data) {
    data.forEach(element => {
        let Div = document.createElement("img");
        Div.setAttribute("src", element.img)

        document.querySelector("#eleven").append(Div)
    });
}