function showVideo(projectName) 
{
    var modalElement = document.getElementById('video-modal');
    var videoElement = document.getElementById('video-player');
    var videoSrc = videoElement.childNodes[0];
    videoSrc.src = 'videos/' + projectName + '_video_walkthrough.mp4';
    videoElement.load();
    
    modalElement.className += ' is-active';

    var modalBG = modalElement.childNodes[0];
    modalBG.onclick = function(){
        modalElement.classList.remove('is-active');
    };
}