function worldSwimmingRecord(input) {

    let worldRecord = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsForOneMeter = Number(input[2]);

    let firstTime = distanceInMeters * timeInSecondsForOneMeter;
    let timeAfterSlowdown = Math.floor(distanceInMeters / 15) * 12.5;

    let totalTime = firstTime + timeAfterSlowdown;

    if (totalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        let diff = Math.abs(worldRecord - totalTime);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }

}

worldSwimmingRecord(["55555.67",
"3017",
"5.03"])