const fs = require('fs');

const generateTranscripts = () => {
    let rawData = fs.readFileSync('./raw-data/transcripts/transcripts.json');
    let transcripts = JSON.parse(rawData);
    transcripts.forEach(transcriptID => {
        buildFile(transcriptID);
    });
}

const buildFile = ( id ) => {
    let rawTranscriptData = fs.readFileSync(`./raw-data/transcripts/transcripts/${id}.sbv`, "utf8");
    let transcript = readAndParseTranscripts(rawTranscriptData);
    fs.writeFile( `./transcripts/${id}.json`, JSON.stringify(transcript), err => {
        if (err) throw err;
    });  
}

const readAndParseTranscripts = (transcriptData) => {
    let lines = transcriptData.split('\n\n');
    lines = lines.map(parse);
    return lines;
}

const parse = (line) => {
    let [timestamp, content] = line.split('\n');
    return {
        t: parseTime(timestamp.split(',')[0]),
        c: content
    }
}
const parseTime = (timeStart) => {
    let [h, m, s] = timeStart.split(':');
    return h * 3600 + m * 60 + ~~s;
}

exports.generate = generateTranscripts;
