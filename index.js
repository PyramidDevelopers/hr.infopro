function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function change() {
    var x = document.getElementById("clrbtn");
    var y = document.getElementById("drp");
    x.style.color = "white";

}

function change3() {
    var x = document.getElementById("clrbtn");

    x.style.color = "white";

}

function changeback() {
    var x = document.getElementById("clrbtn");

    x.style.color = "#0D1252";

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
const API_KEY = 'AIzaSyAXiIjmTGvlwe6TLcMXBxUlrpw5RPDtVB0';
var URL = `https://sheets.googleapis.com/v4/spreadsheets/1FYp8w0c-_DKlRc2xV-REbsHlWQqaZRoWkIrpJ91eSHw/values/JobSeekerTips?key=${API_KEY}`;
// TODO: Fix the parsing for the google sheet response
fetch(URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        dataFromSheet = data.values;
        var fullData = dataFromSheet;
 
        // console.log(dataFromSheet.filter((item) => item.title['$t'][1] == '1').length);        

        var Jload = document.getElementById('JSTloading');

        for (var i = 1; i < fullData.length; i++) {
            var divNew = document.createElement('div');
            var aNew = document.createElement('a');
            var JSTName = document.createElement('div');
            var JSTDesc = document.createElement('div');
            aNew.setAttribute("style", "text-decoration:none;");
            aNew.href = fullData[i][2];
            aNew.target = "blank";
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

var divExist = document.getElementById('openpos');

var dataFromSheet;
var URL = `https://sheets.googleapis.com/v4/spreadsheets/1FYp8w0c-_DKlRc2xV-REbsHlWQqaZRoWkIrpJ91eSHw/values/Open Positions?key=${API_KEY}`;
fetch(URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        dataFromSheet = data.values;
        var fullData = dataFromSheet;

        var OPload = document.getElementById('OpenPosloading');
        for (var i = 1; i < fullData.length; i++) {
            var divNew = document.createElement('div');
            var OPAnchor = document.createElement('a');
            var OPName = document.createElement('div');
            var OPDesc = document.createElement('div');
            var OPSpec = document.createElement('div');
            var OPDate = document.createElement('div');
            var OPApply = document.createElement('button');
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
                var URL = `https://sheets.googleapis.com/v4/spreadsheets/1FYp8w0c-_DKlRc2xV-REbsHlWQqaZRoWkIrpJ91eSHw/values/Open Positions?key=${API_KEY}`;
                fetch(URL)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        dataFromSheet = data.values;
                        var fullData = dataFromSheet;

                        var i = localStorage.getItem("i value");
                        document.getElementById("JobTitleA").innerHTML = fullData[localStorage.getItem("i value")][1].toString();

                        document.getElementById("JobPos").value = fullData[localStorage.getItem("i value")][1].toString();
                        document.getElementById("myForm").style.display = "block";


                    })
                    .catch(err => {
                        console.log(err)
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

//input values in opportunities

var Opp = document.getElementById('opportunities');
// var numOfColumns = 3;
var dataFromSheet;
var URL = `https://sheets.googleapis.com/v4/spreadsheets/1FYp8w0c-_DKlRc2xV-REbsHlWQqaZRoWkIrpJ91eSHw/values/Opportunities?key=${API_KEY}`;
fetch(URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);
        dataFromSheet = data.values;
        var fullData = dataFromSheet;

        // console.log(dataFromSheet.filter((item) => item.title['$t'][1] == '1').length);

        var Oload = document.getElementById('Opportunitiesloading');
        for (var i = 1; i < fullData.length; i++) {
            var divNew = document.createElement('div');
            var OSection = document.createElement('div');
            var OName = document.createElement('div');
            var OClick = document.createElement('div');
            var OApply = document.createElement('button');
            OName.className = "opps-1";
            OName.innerHTML = fullData[i].toString();
            OClick.className = "opps-2";
            OApply.innerHTML = "Submit Resume";
            OSection.className = "opportunities-1";
            OApply.className = "OPApply";
            OApply.setAttribute("id", i);
            OApply.setAttribute("type", "button");
            OApply.addEventListener('click', function (event) {
                localStorage.setItem("i value", this.id);
            });
            OSection.appendChild(OName);
            OClick.appendChild(OApply);
            OSection.appendChild(OClick);
            Opp.appendChild(OSection);
            Oload.setAttribute("style", "display:none");
            divNew.innerHTML = "";
            OApply.addEventListener('click', function (event) {
                event.preventDefault();
                //   window.location.href='Apply.html';
                var dataFromSheet;
                var URL = `https://sheets.googleapis.com/v4/spreadsheets/1FYp8w0c-_DKlRc2xV-REbsHlWQqaZRoWkIrpJ91eSHw/values/Opportunities?key=${API_KEY}`;
                fetch(URL)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        dataFromSheet = data.values;
                        var fullData = dataFromSheet;

                        // console.log(dataFromSheet.filter((item) => item.title['$t'][1] == '1').length);

                        var i = localStorage.getItem("i value");
                        document.getElementById("JobTitleA").innerHTML = fullData[localStorage.getItem("i value")].toString();
                        document.getElementById("JobPos").value = fullData[localStorage.getItem("i value")].toString();
                        document.getElementById("myForm").style.display = "block";
                    })
            });
        }
    })
    .catch(error => console.log(error))



function loadOPosPage() {
    var dataFromSheet;
    const API_KEY = 'AIzaSyAXiIjmTGvlwe6TLcMXBxUlrpw5RPDtVB0';
    var URL = `https://sheets.googleapis.com/v4/spreadsheets/1FYp8w0c-_DKlRc2xV-REbsHlWQqaZRoWkIrpJ91eSHw/values/Open Positions?key=${API_KEY}`;
    fetch(URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            dataFromSheet = data.values;
            var fullData = dataFromSheet;

            // console.log(dataFromSheet.filter((item) => item.title['$t'][1] == '1').length);

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
                    li.setAttribute("style", "width:100%")
                    li.innerHTML = oprolesA[a].toString();
                    ulroles.appendChild(li);
                }

            }
            for (var a = 0; a < opskillsA.length; a++) {

                if (opskillsA[a].toString() != "") {
                    var li = document.createElement('li');
                    li.setAttribute("style", "width:100%;")
                    li.innerHTML = opskillsA[a].toString();
                    ulskills.appendChild(li);
                }

            }
 
            // const ele = `
            //     <div>${text}</div>
            // `            

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
        const API_KEY = 'AIzaSyAXiIjmTGvlwe6TLcMXBxUlrpw5RPDtVB0';
        var URL = `https://sheets.googleapis.com/v4/spreadsheets/1FYp8w0c-_DKlRc2xV-REbsHlWQqaZRoWkIrpJ91eSHw/values/Open Positions?key=${API_KEY}`;
        fetch(URL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                dataFromSheet = data.values;
                var fullData = dataFromSheet;

                // console.log(dataFromSheet.filter((item) => item.title['$t'][1] == '1').length);

                var i = localStorage.getItem("i value");
                document.getElementById("JobTitleA").innerHTML = fullData[localStorage.getItem("i value")][1].toString();
                document.getElementById("JobPos").value = fullData[localStorage.getItem("i value")][1].toString();

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

function Apply() {

    var JobPos = document.getElementById("JobPos").value;
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var phone = document.getElementById("Phone").value;

    var location = document.getElementById("Location").value;
    var TE = document.getElementById("TE").value;
    var RE = document.getElementById("RE").value;
    var CCTC = document.getElementById("CCTC").value;
    var ECTC = document.getElementById("ECTC").value;
    var NP = document.getElementById("NP").value;


    if (name == "" || phone == "" || email == "" || location == "" || TE == "" || RE == "" || CCTC == "" || NP == "") {
        alert("Please Fill All Required Field");
        return false;
    } else {
        var URL = "https://8iwwlfrj1b.execute-api.ap-south-1.amazonaws.com/prod2/applynow";
        var data = {
            JobPosition: JobPos,
            Name: name,
            EmailID: email,
            PhoneNumber: phone,
            ResumeFolder: "https://drive.google.com/drive/folders/1_ijpQm-13pYeWE1Zixv30DTWfgvV3Nqf?usp=sharing",
            Location: location,
            TotalExperience: TE,
            RelevantExperience: RE,
            CurrentCTC: CCTC,
            ExpectedCTC: ECTC,
            NoticePeriod: NP
        }

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", URL);
        xmlhttp.setRequestHeader("Content-Type", "application/json", "Access-Control-Allow-Origin", "*");
        xmlhttp.send(JSON.stringify(data));
        console.log("Mails Sent");
        //TODO : Send mails with the data @Sachith . If possible, also figure out how to redirect the site properly on data submission. And clearing the form as well and stuff like that
        //There are ways to run the script within the redirect of AppScript, can try figuring out something there too
    }
}