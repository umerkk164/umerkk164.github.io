let loadingLB = true;
let data = [];
let loadingLB2 = true;
let data2 = [];
let lastScore = null;
let level = 1;

updateData = async () => {
    dataUpdated();
    db.collection("bestscores")
        .doc("level" + level)
        .collection("scores")
        // .where("time", "<=", 30.12)
        .orderBy("time")
        .limit("5")
        // .limit("30")
        .get()
        .then((querySnapshot) => {
            data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            loadingLB = false;
            dataUpdated();
        });
}

window.addEventListener("load", updateData);
// document.getElementById("levelNo").addEventListener("change", (e) => {
//     level = parseInt(e.target.value);
//     loadingLB = true;
//     dataUpdated();
//     updateData();
// });

dataUpdated = () => {
    if (loadingLB === true) {
        document.getElementById("data").innerHTML = "Loading...";
    } else if (data) {
        let innerHTML = "";
        if (data.length == 0) {
            innerHTML = "Seems like no one has completed this level :)"
        }
        data.forEach(
            (score, i) =>
            (innerHTML =
                innerHTML +
                `
        <div class="score">
            <span class="pos">${i + 1}</span>
            <span class="name">${score.name}</span>
            <span class="time">${score.time}</span>
        </div>`)
        );
        document.getElementById("data").innerHTML = innerHTML;
    }
};
