var toneScores = [];
var toneIDs = [];
var biggestScore = 0.0;
var emotion;
var response;

//Store returned values from JSON
for (var i = 0; i < 5; i++) {
    toneScores.push(msg.response.document_tone.tone_categories[0].tones[i].score)
    toneIDs.push(msg.response.document_tone.tone_categories[0].tones[i].tone_id)
}

//Looks for biggest score
for (var i = 0; i < 5; i++) {
    if (toneScores[i] > biggestScore) {
        biggestScore = toneScores[i];
        emotion = toneIDs[i];
    }
}

//Checks if the highest score is high enough
if (biggestScore >= 0.5) {
    switch (emotion) {
        case "joy":
            response = "😃";
            break;
        default:
            response = "😔";
    }
} else {
    response = "😐";
}

msg.payload = {
    response : response
}
