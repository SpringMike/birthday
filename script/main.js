// Import the data to customize and insert them into page
onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 2000);
};

document.getElementById('playButton').addEventListener('click', function() {
    var videoPlayer = document.getElementById('videoPlayer');
    // Get current source URL
    var src = videoPlayer.src;
    // Append autoplay parameter to URL
    if (src.indexOf('autoplay=1') === -1) {
        src += '&autoplay=1&amp;start=20';
        // Update iframe src to trigger autoplay
        videoPlayer.src = src;
    }
});
