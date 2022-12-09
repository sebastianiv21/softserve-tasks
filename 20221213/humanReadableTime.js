const formatTime = (seconds) => {
    const HH = Math.floor(seconds / 3600);
    const MM = Math.floor((seconds % 3600) / 60);
    const SS = (seconds % 3600) % 60;
    return `${HH}:${MM}:${SS}`;
}

console.log(formatTime(359999));