var lvl1 = ["The goal of foster care is to seek a permanent placement for the child as quickly as possible, be it reunification with the birth parents, kinship care, or adoption. If the child cannot be reunited with their biological family, the child will be placed in a permanent home. Placement is for as long as it takes to achieve a permanent placement for the child, whether the plan be for reunification with the child's family, placement with relatives, or adoption.",
"Charles Loring Brace is regarded as the founder of the modern foster care system.  In 1853, after spending years working with poor and orphaned youth in the Five Points area of New York, Brace founded the Children’s Aid Society to help find homes for these children.  Over the next 75 years, Brace’s organization helped place over 400,000 impoverished children from NY and other eastern cities with farm families in midwestern, northern, southern and western states.",
"In 2016, the most recent year for which statistics are available, 61% of all children in foster care were removed from their parents due to neglect.  34% of the total number, were removed from their families due to parental drug (both factors were present in a high percentage of cases).  (U.S. Administration for Children and Families report, 2017)",
"Which means that without foster care, we might not have had, “The Seven Year Itch,” “Rocky,” “Coming to America” or “Girls Trip.” "
]
var lvl2 = ["Approximately 687,000 children spent time in the foster care system in 2016, according to the U.S. Department of Health and Human Services.  Some of those children spent only a short time in foster care before being reunited with their biological family.  Others will stay in the system for years to come.",
"Nationally, the average time spent in foster care is approximately two years, with 15% of foster children staying in the system for three years or more.  In 2016, over 20.000 foster children “aged out” of the system, meaning they reached the age of 18 without being adopted or reunited with their biological families.",
"The average age of kids entering the U.S. foster care system is 7.  However, that number is trending downward due to the influx of children who have been removed from their biological parents due to the opioid epidemic.  The average age of kids removed from their parents due to drug abuse in 2016 was 4 years younger than other kids in foster care.",
"Since 2009, the percentage of children who leave care to adoption has remained steady at about 21 to 23 percent of all foster care exits. Of the 402,378 U.S. children in foster care now, it's estimated that 101,840 are eligible for adoption. The number of waiting children has equaled about 26 to 27 percent of children in care for many years.  Almost two-thirds of these eligible children will eventually be adopted into forever families. However, this means that about 20,000 kids who could have been adopted will age out of foster care without ever being placed with a permanent family."
]
var lvl3 = []
var lvl4 = []
var lvl5 = []
var lvl6 = []
var explanationarr = [lv1, lvl2, lvl3, lvl4, lvl5, lvl6]

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var lvlstr = getCookie("level");
var qstr = getCookie("question");
var lvl = 0;
var q = 0;
if (lvlstr != "") lvl = parseInt(lvlstr);
if (lvlq != "") q = parseInt(qstr);

document.getElementById("explanationID").innerHTML = explanationarr[lvl][q];

