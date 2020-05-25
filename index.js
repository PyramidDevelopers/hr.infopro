function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function my_closeemp1() {
    if (document.getElementById("dropdown1").style.display == "block") {
        document.getElementById("dropdown1").style.display = "none";
    } else {
        document.getElementById("dropdown1").style.display = "block";
    }

}

function my_closeemp2() {
    if (document.getElementById("dropdown2").style.display == "block") {
        document.getElementById("dropdown2").style.display = "none";
    } else {
        document.getElementById("dropdown2").style.display = "block";
    }

}

function my_open() {
    if (document.getElementById("mySidebar").style.display == "block") {
        document.getElementById("mySidebar").style.display = "none";
    } else {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("nav").style.height = "auto";
    }
}

function readless() {
    if (document.getElementById("readbtn").textContent == "Read Less") {
        {
            //   if (window.matchMedia("(max-width: 900px)").matches) {

            //       document.getElementById("readm").style.display = "none";
            //   } else {
            //       document.getElementById("read3").style.display = "none";
            //       document.getElementById("readm").style.display = "none";
            //   }
        }
        document.getElementById("readbtn").textContent = "Read More";
        document.getElementById("readbtn").style.padding = "10px 10px 10px 10px"
        document.getElementsByClassName("p3s12")[0].style.display = "none";
        document.getElementsByClassName("p3s13")[0].style.display = "none";
        document.getElementsByClassName("p3s14")[0].style.display = "none";
        document.getElementsByClassName("p3s15")[0].style.display = "none";
        // document.getElementsByClassName("bgrect")[0].style.display = "none";


    } else {
        {
            //   if (window.matchMedia("(max-width: 900px)").matches) {
            //       document.getElementById("read3").style.display = "none";
            //       document.getElementById("readm").style.display = "block";
            //   } else {
            //       document.getElementById("read3").style.display = "block";
            //       document.getElementById("readm").style.display = "none";
            //   }
        }
        document.getElementById("readbtn").style.padding = "10px 10px 10px 10px"
        document.getElementsByClassName("p3s12")[0].style.display = "flex";
        document.getElementsByClassName("p3s13")[0].style.display = "flex";
        document.getElementsByClassName("p3s14")[0].style.display = "flex";
        document.getElementsByClassName("p3s15")[0].style.display = "flex";
        // document.getElementsByClassName("bgrect")[0].style.display = "block";

        document.getElementById("readbtn").textContent = "Read Less";

    }
}

function my_close() {
    document.getElementById("mySidebar").style.display = "none";
}
window.smoothScroll = function (target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function (c, a, b, i) {
        i++;
        if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () {
            scroll(c, a, b, i);
        }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

document.getElementById("tab").style.height = document.getElementById('meetus').offsetHeight + 180;

function changeSize() {

    var tabSelected = parseInt(document.querySelector('input[name = "css-tabs"]:checked').value) - 1;
    console.log(tabSelected);
    var tabSize = document.getElementsByClassName("tab-label")[tabSelected].offsetHeight
    document.getElementById("tab").style.height = document.getElementsByClassName('tab-content')[tabSelected].offsetHeight + tabSize;

}
var JST = document.getElementById('interview');
var dataFromSheet;
var URL = 'https://spreadsheets.google.com/feeds/cells/1FYp8w0c-_DKlRc2xV-REbsHlWQqaZRoWkIrpJ91eSHw/osl6nlo/public/basic?alt=json';
fetch(URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);
        dataFromSheet = data.feed.entry;
        var fullData = [];

        // console.log(dataFromSheet.filter((item) => item.title['$t'][1] == '1').length);

        var numOfColumns = dataFromSheet.filter((item) => item.title['$t'][item.title['$t'].length - 1] == '1').length;

        var j = 0;
        var count = 1;
        while (fullData.length < dataFromSheet.length / numOfColumns) {
            var subData = [];
            var i = dataFromSheet.filter((item) => item.title['$t'][item.title['$t'].length - 1] == count.toString()).length;
            while (i--) {
                subData.push(dataFromSheet[j].content['$t']);
                j++
            }
            fullData.push(subData);
            count += 1;
        }

        var Jload = document.getElementById('JSTloading');

        for (var i = 1; i < fullData.length; i++) {
            var divNew = document.createElement('div');
            var aNew = document.createElement('a');
            var JSTName = document.createElement('div');
            var JSTDesc = document.createElement('div');
            aNew.setAttribute("style", "text-decoration:none;");
            aNew.href = fullData[i][2]
            divNew.innerHTML = "";
            JSTName.className = "interview-1";
            JSTDesc.className = "interview-2";
            JSTName.innerHTML = fullData[i][0].toString();
            JSTDesc.innerHTML = fullData[i][1].toString();
            aNew.appendChild(JSTName);
            aNew.appendChild(JSTDesc);
            divNew.appendChild(aNew);
            JST.appendChild(divNew);
            Jload.setAttribute("style", "display:none");

        }

    })
    .catch(error => console.log(error))
console.log(dataFromSheet);

var divExist = document.getElementById('openpos');

var Opp = document.getElementById('opportunities');
// var numOfColumns = 3;
var dataFromSheet;
var URL = 'https://spreadsheets.google.com/feeds/cells/1FYp8w0c-_DKlRc2xV-REbsHlWQqaZRoWkIrpJ91eSHw/od6/public/basic?alt=json';
fetch(URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);
        dataFromSheet = data.feed.entry;
        var fullData = [];

        // console.log(dataFromSheet.filter((item) => item.title['$t'][1] == '1').length);

        var numOfColumns = dataFromSheet.filter((item) => item.title['$t'][item.title['$t'].length - 1] == '1').length;

        var j = 0;
        var count = 1;
        while (fullData.length < dataFromSheet.length / numOfColumns) {
            var subData = [];
            var i = dataFromSheet.filter((item) => item.title['$t'][item.title['$t'].length - 1] == count.toString()).length;
            while (i--) {
                subData.push(dataFromSheet[j].content['$t']);
                j++
            }
            fullData.push(subData);
            count += 1;
        }
        var OPload = document.getElementById('OpenPosloading');
        for (var i = 1; i < fullData.length; i++) {
            var divNew = document.createElement('div');
            var OPAnchor = document.createElement('a');
            var OPName = document.createElement('div');
            var OPDesc = document.createElement('div');
            var OPSpec = document.createElement('div');
            var OPDate = document.createElement('div');
            var OPApply = document.createElement('button');
            var OSection = document.createElement('div');
            var OName = document.createElement('div');
            var OClick = document.createElement('div');
            var OClickA = document.createElement('a');
            OName.className = "opps-1";
            OName.innerHTML = fullData[i][1].toString();
            OClick.className = "opps-2";
            OClick.innerHTML = "We are hiring >"
            OSection.className = "opportunities-1";
            OClickA.setAttribute("id", i);
            OClickA.setAttribute('href', "OPos.html")
            OClickA.addEventListener('click', function (event) {
                localStorage.setItem("i value", this.id);
            });
            OClickA.appendChild(OClick);
            OSection.appendChild(OName);
            OSection.appendChild(OClickA);
            Opp.appendChild(OSection);
            OPload.setAttribute("style", "display:none");
            divNew.innerHTML = "";
            OPName.className = "OPName";
            OPDesc.className = "OPDesc";
            OPSpec.className = "OPSpec";
            OPDate.className = "OPDate";
            OPApply.className = "OPApply";
            OPAnchor.className = "OPAnchor";
            OPAnchor.setAttribute("id", i);
            OPAnchor.setAttribute('href', "OPos.html")
            OPApply.setAttribute("value", i);
            OPApply.setAttribute("type", "button");
            OPApply.addEventListener('click', function () {
                event.preventDefault();
                //   window.location.href='Apply.html';
                var dataFromSheet;
                var URL = 'https://spreadsheets.google.com/feeds/cells/1FYp8w0c-_DKlRc2xV-REbsHlWQqaZRoWkIrpJ91eSHw/od6/public/basic?alt=json';
                fetch(URL)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        dataFromSheet = data.feed.entry;
                        var fullData = [];

                        // console.log(dataFromSheet.filter((item) => item.title['$t'][1] == '1').length);

                        var numOfColumns = dataFromSheet.filter((item) => item.title['$t'][item.title['$t'].length - 1] == '1').length;

                        var j = 0;
                        var count = 1;
                        while (fullData.length < dataFromSheet.length / numOfColumns) {
                            var subData = [];
                            var i = dataFromSheet.filter((item) => item.title['$t'][item.title['$t'].length - 1] == count.toString()).length;
                            while (i--) {
                                subData.push(dataFromSheet[j].content['$t']);
                                j++
                            }
                            fullData.push(subData);
                            count += 1;
                        }

                        var i = localStorage.getItem("i value");
                        //document.getElementById("JobTitleA").innerHTML = fullData[localStorage.getItem("i value")][1].toString();
                        document.getElementById("myForm").style.display = "block";


                    })


            });
            OPAnchor.addEventListener('click', function (event) {
                localStorage.setItem("i value", this.id);

            })

            OPName.innerHTML = fullData[i][1].toString();
            OPSpec.innerHTML = (fullData[i][5] + ' | ' + fullData[i][2] + ' | ' + fullData[i][4] + ' | ' + fullData[i][3]).toString();
            OPDesc.innerHTML = fullData[i][7].toString();
            OPDate.innerHTML = fullData[i][0].toString();
            OPApply.innerHTML = "Apply";
            divNew.appendChild(OPAnchor);
            OPAnchor.appendChild(OPName);
            OPAnchor.appendChild(OPSpec);
            OPAnchor.appendChild(OPApply);
            OPAnchor.appendChild(OPDesc);
            OPAnchor.appendChild(OPDate);
            divExist.appendChild(divNew);
        }

    })
    .catch(error => console.log(error))
console.log(dataFromSheet);

function loadOPosPage() {
    var dataFromSheet;
    var URL = 'https://spreadsheets.google.com/feeds/cells/1FYp8w0c-_DKlRc2xV-REbsHlWQqaZRoWkIrpJ91eSHw/od6/public/basic?alt=json';
    fetch(URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            dataFromSheet = data.feed.entry;
            var fullData = [];

            // console.log(dataFromSheet.filter((item) => item.title['$t'][1] == '1').length);

            var numOfColumns = dataFromSheet.filter((item) => item.title['$t'][item.title['$t'].length - 1] == '1').length;

            var j = 0;
            var count = 1;
            while (fullData.length < dataFromSheet.length / numOfColumns) {
                var subData = [];
                var i = dataFromSheet.filter((item) => item.title['$t'][item.title['$t'].length - 1] == count.toString()).length;
                while (i--) {
                    subData.push(dataFromSheet[j].content['$t']);
                    j++
                }
                fullData.push(subData);
                count += 1;
            }

            var i = localStorage.getItem("i value");
            //   document.getElementsByClassName("I")[0].innerHTML=i;


            var oprolesA = fullData[i][8].toString().split("•");
            var opskillsA = fullData[i][9].toString().split("•");
            var ulroles = document.createElement('ul');

            ulroles.setAttribute("style", "list-style-type: disc;list-style-position: inside;");
            var ulskills = document.createElement('ul');

            ulskills.setAttribute("style", "list-style-type: disc;list-style-position: inside;");

            for (var a = 0; a < oprolesA.length; a++) {


                if (oprolesA[a].toString() != "") {
                    var li = document.createElement('li');
                    li.setAttribute("style", "float:left;")
                    li.innerHTML = oprolesA[a].toString();
                    ulroles.appendChild(li);
                }

            }
            for (var a = 0; a < opskillsA.length; a++) {

                if (opskillsA[a].toString() != "") {
                    var li = document.createElement('li');
                    li.setAttribute("style", "float:left;")
                    li.innerHTML = opskillsA[a].toString();
                    ulskills.appendChild(li);
                }

            }

            document.getElementsByClassName("opdesc")[0].innerHTML += fullData[i][7].toString();
            document.getElementsByClassName("oproles")[0].appendChild(ulroles);
            document.getElementsByClassName("opskills")[0].appendChild(ulskills);


            document.getElementsByClassName("opname")[0].innerHTML += fullData[i][1].toString();
            document.getElementsByClassName("opqual")[0].innerHTML += fullData[i][6].toString();
            document.getElementsByClassName("opdate")[0].innerHTML += fullData[i][0].toString();
            document.getElementsByClassName("optype")[0].innerHTML += fullData[i][2].toString();
            document.getElementsByClassName("opexp")[0].innerHTML += fullData[i][3].toString();
            document.getElementsByClassName("oppackage")[0].innerHTML += fullData[i][4].toString();
            document.getElementsByClassName("oploc")[0].innerHTML += fullData[i][5].toString();

        })
    var OPApply = document.createElement('button');
    OPApply.className = "OPApply";
    var i = localStorage.getItem("i value");
    OPApply.setAttribute("value", i);
    OPApply.setAttribute("type", "button");
    OPApply.addEventListener('click', function () {
        event.preventDefault();
        //   window.location.href='Apply.html';
        var dataFromSheet;
        var URL = 'https://spreadsheets.google.com/feeds/cells/1FYp8w0c-_DKlRc2xV-REbsHlWQqaZRoWkIrpJ91eSHw/od6/public/basic?alt=json';
        fetch(URL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                dataFromSheet = data.feed.entry;
                var fullData = [];

                // console.log(dataFromSheet.filter((item) => item.title['$t'][1] == '1').length);

                var numOfColumns = dataFromSheet.filter((item) => item.title['$t'][item.title['$t'].length - 1] == '1').length;

                var j = 0;
                var count = 1;
                while (fullData.length < dataFromSheet.length / numOfColumns) {
                    var subData = [];
                    var i = dataFromSheet.filter((item) => item.title['$t'][item.title['$t'].length - 1] == count.toString()).length;
                    while (i--) {
                        subData.push(dataFromSheet[j].content['$t']);
                        j++
                    }
                    fullData.push(subData);
                    count += 1;
                }
                var i = localStorage.getItem("i value");

                window.frames["userHtmlFrame"].document.getElementById("ctrlq-text-0").value = fullData[localStorage.getItem("i value")][1].toString();
                document.getElementById("myForm").style.display = "block";


            });
    });
    OPApply.innerHTML = "APPLY NOW";
    document.getElementsByClassName("opapply")[0].appendChild(OPApply);





}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
