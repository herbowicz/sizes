let sizes = [{
    "Social": [
        { "name": "FB Page Cover", "width": 1640, "height": 664 },
        { "name": "FB Shared Image", "width": 1200, "height": 630 },
        { "name": "FB Event Image", "width": 1920, "height": 1080 },

        { "name": "FB Group Header", "width": 1640, "height": 856 },
        { "name": "Instagram", "width": 1080, "height": 1080 },
        { "name": "YouTube Profile", "width": 800, "height": 800 },

        { "name": "YouTube Cover", "width": 2560, "height": 1440 },
        { "name": "Twitter Profile", "width": 400, "height": 400 },
        { "name": "Twitter Cover", "width": 1500, "height": 500 }
    ]
},
{
    "Screen": [
        { "name": "VGA", "width": 640, "height": 480 },
        { "name": "XGA", "width": 1024, "height": 768 },
        { "name": "HD", "width": 1280, "height": 720 },

        { "name": "", "width": 1366, "height": 768 },
        { "name": "", "width": 1600, "height": 900 },
        { "name": "Full HD", "width": 1920, "height": 1080 },

        { "name": "2K", "width": 2048, "height": 1080 },
        { "name": "UHD", "width": 3840, "height": 2160 },
        { "name": "4K", "width": 4096, "height": 2160 },
    ]
},
{
    "Ads": [
        { "name": "Small Square", "width": 200, "height": 200 },
        { "name": "Square", "width": 250, "height": 250 },
        { "name": "Medium Rect", "width": 300, "height": 250 },

        { "name": "Large Rect", "width": 336, "height": 280 },
        { "name": "Mobile Leaderboard", "width": 320, "height": 50 },
        { "name": "Large Mobile", "width": 320, "height": 100 },

        { "name": "Banner", "width": 468, "height": 60 },
        { "name": "Leaderboard", "width": 728, "height": 90 },
        { "name": "Large Leaderboard", "width": 970, "height": 90 },

        { "name": "Billboard", "width": 970, "height": 250 },
        { "name": "Vertical Rect", "width": 240, "height": 400 },
        { "name": "Skyscrapper", "width": 120, "height": 600 },

        { "name": "Wide Skyscraper", "width": 160, "height": 600 },
        { "name": "Half Page", "width": 300, "height": 600 },
        { "name": "Portrait", "width": 300, "height": 1050 },

    ]
},
{
    "Mobile": [
        { "name": "iPhone 4", "width": 640, "height": 900 },
        { "name": "iPhone 5", "width": 640, "height": 1136 },
        { "name": "iPhone 6 7 8", "width": 750, "height": 1334 },

        { "name": "iPhone 6+ 7+ 8+", "width": 1080, "height": 1920 },
        { "name": "iPhone X", "width": 1125, "height": 2436 },
        { "name": "Samsung A5", "width": 720, "height": 1280 },

        { "name": "Samsung S5", "width": 1080, "height": 1920 },
        { "name": "Samsung S6", "width": 1440, "height": 2560 },
        { "name": "Samsung S8+", "width": 1440, "height": 2560 },

        { "name": "Google Pixel", "width": 1080, "height": 1920 },
        { "name": "iPad Mini 4", "width": 1536, "height": 2048 },
        { "name": "iPad Air 2", "width": 1536, "height": 2048 },

        { "name": "iPad Pro 9.7''", "width": 1536, "height": 2048 },
        { "name": "iPad Pro 10.5''", "width": 1668, "height": 2224 },
        { "name": "iPad Pro 12.9''", "width": 2048, "height": 2732 }
    ]
},
{
    "Squares": [
        { "name": "", "width": 16, "height": 16 },
        { "name": "", "width": 32, "height": 32 },
        { "name": "", "width": 64, "height": 64 },
        { "name": "", "width": 128, "height": 128 },
        { "name": "", "width": 256, "height": 256 },
        { "name": "", "width": 512, "height": 512 },
        { "name": "", "width": 1024, "height": 1024 },
        { "name": "", "width": 2048, "height": 2048 },
        { "name": "", "width": 4096, "height": 4096 },

    ]
},
{
    "Print": [
        { "name": "FB Page Cover", "width": 1640, "height": 664 },
        { "name": "FB Shared Image", "width": 1200, "height": 630 },
    ]
},
{
    "Photo": [
        { "name": "VGA", "width": 640, "height": 480 },
        { "name": "XGA", "width": 1024, "height": 768 },
        { "name": "HD", "width": 1280, "height": 720 },
    ]
},
];

var pst = document.getElementById("pst");

function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " is-active";

    tree(sizes);
}



function tree(data) {
    for (let cat of data) {
        if (Object.keys(cat)[0] === document.querySelector('.is-active').children[0].innerHTML) {
            list.innerHTML = "";
            for (let i of Object.values(cat)) {
                i.forEach((el, i) => {
                    var p = document.createElement("p");

                    var shape = document.createElement("div");
                    shape.classList.add('shape');

                    var ratio = Math.round((el.width / el.height) * 100) / 100;

                    //console.log(el.width, el.height, ratio)

                    var maxWidth = 136;
                    var maxHeight = 136;

                    if (el.width >= el.height) {
                        maxWidth = Math.min(136, el.width / 10);
                        maxHeight = Math.min(el.height / 10, el.height / el.width * 136);
                    } else {
                        maxHeight = Math.min(136, el.height / 10);
                        maxWidth = Math.min(el.width / 10, el.width / el.height * 136);
                    }

                    shape.style.width = maxWidth + 'px';
                    shape.style.height = maxHeight + 'px';


                    var shapeContainer = document.createElement("div");
                    shapeContainer.classList.add('shape-container');
                    shapeContainer.appendChild(shape);

                    var info = document.createElement("div");
                    info.classList.add('info');

                    var title = document.createElement("h5");
                    title.style.fontWeight = 'bold';

                    var content = document.createElement("div");

                    title.appendChild(document.createTextNode(`${el.name}`));
                    content.appendChild(document.createTextNode(`${el.width} x ${el.height} px`));

                    info.appendChild(title)
                    info.appendChild(content)

                    p.appendChild(shapeContainer)
                    p.appendChild(info)

                    list.appendChild(p);

                })
            }
        }
    }
}

document.write('</ul>');


tree(sizes);