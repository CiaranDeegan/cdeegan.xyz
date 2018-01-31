<template>
    <div>
        <div id='video-modal' class='modal'>
            <div class='modal-background'></div>
            <div class='modal-content'>
                <video id='video-player' style='display: block;' width='100%' controls='' controlslist='nodownload'>
                    <source src='' type='video/mp4'>
                    Your browser does not support HTML5 video.
                </video>
            </div>
        </div>
        <div class='tile is-ancestor'>
            <div class='tile is-vertical'>
                <div class='tile'>
                    <div class='tile is-parent is-vertical'>
                        <article class='tile is-child notification is-info'>
                            <p class='title'>swaps.tf</p>
                            <span class='tag is-warning'>Personal</span>
                            <span class='tag is-success'>Node.js</span>
                            <span class='tag is-success'>AngularJS</span>
                            <span class='tag is-success'>MongoDB</span>
                            <span class='tag is-success'>Steam Web API</span>
                            <div class='content'>
                                <p>A web app which facilitates the trading of items within the Steam economy.</p>
                            </div>
                            <a onclick='showVideo("swapstf")' class='button is-success is-inverted is-outlined'>
                                <span class='icon is-small'><i class='fas fa-video'></i></span>
                                <span>Show Video Walkthrough</span>
                            </a>
                        </article>
                        <article class='tile is-child notification is-info'>
                            <p class='title'>cdeegan.xyz</p>
                            <span class='tag is-warning'>Personal</span>
                            <span class='tag is-success'>Node.js</span>
                            <span class='tag is-success'>Vue.js</span>
                            <div class='content'>
                                <p>Originally developed as a static webpage, this portfolio website has since been updated to be more reactive.</p>
                            </div>
                        </article>
                    </div>
                    <div class='tile is-parent'>
                        <article class='tile is-child notification is-info'>
                            <p class='title'>Lens</p>
                            <span class='tag is-warning'>Personal</span>
                            <span class='tag is-success'>Java</span>
                            <span class='tag is-success'>Location Services</span>
                            <span class='tag is-success'>Augmented Reality</span>
                            <span class='tag is-success'>Android SDK</span>
                            <span class='tag is-success'>Firebase</span>
                            <div class='content'>
                                <p>An academic pursuit, Lens was developed as my final year project at university.</p>
                                <p>It is a content-sharing app with augmented reality capabilities. Google Maps is used to display markers in the user's vicinity. When close enough to a marker, the user can launch their camera within the app to see the its contents in augmented reality.</p>
                                <p>This project was awarded a first-class honours.</p>
                            </div>
                            <a onclick='showVideo("lens")' class='button is-success is-inverted is-outlined'>
                                <span class='icon is-small'><i class='fas fa-video'></i></span>
                                <span>Show Video Walkthrough</span>
                            </a>
                        </article>
                    </div>
                </div>
                <div class='tile is-parent'>
                    <article class='tile is-child notification is-info'>
                        <p class='title'>Steam Trading Bot</p>
                        <span class='tag is-warning'>Personal</span>
                        <span class='tag is-success'>C#</span>
                        <span class='tag is-success'>Steam Web API</span>
                        <span class='tag is-success'>MySQL</span>
                        <div class='content'>
                            <p>This bot was developed to buy virtual items at discount rates. This allowed me to sell these items at a real-world cash profit.</p>
                        </div>
                    </article>
                </div>

                <div class='tile'>
                    <div class='tile is-parent is-vertical'>
                        <article class='tile is-child notification is-info'>
                            <p class='title'>Tablet Bingo App</p>
                            <span class='tag is-warning'>Professional</span>
                            <span class='tag is-success'>Java</span>
                            <span class='tag is-success'>Android SDK</span>
                            <div class='content'>
                                <p>At Playprint I was the lead developer of the company's Android gaming app. The app is pre-loaded onto tablet devices and sold to customers in Ireland and the UK.</p>
                                <p>The app features fully-customisable settings and a number of game types, such as Bingo, Lotto and Raffle.</p>
                            </div>
                            <a onclick='showVideo("ppbingo")' class='button is-success is-inverted is-outlined'>
                                <span class='icon is-small'><i class='fas fa-video'></i></span>
                                <span>Show Video Walkthrough</span>
                            </a>
                        </article>
                        <article class='tile is-child notification is-info'>
                            <p class='title'>Spin & Win</p>
                            <span class='tag is-warning'>Professional</span>
                            <span class='tag is-success'>Javascript</span>
                            <span class='tag is-success'>JQuery</span>
                            <span class='tag is-success'>PHP</span>
                            <span class='tag is-success'>MySQL</span>
                            <div class='content'>
                                <p>A promotional webgame designed to mimic slot machines seen at casinos.</p>
                            </div>
                            <a target='_blank' href='http://playprintonline.com/spinwin' class='button is-success is-inverted is-outlined'>
                                <span class='icon is-small'><i class='fas fa-link'></i></span>
                                <span>Go to website</span>
                            </a>
                        </article>
                    </div>
                    <div class='tile is-parent is-vertical'>
                        <article class='tile is-child notification is-info'>
                            <p class='title'>Shootout 2018</p>
                            <span class='tag is-warning'>Professional</span>
                            <span class='tag is-success'>Javascript</span>
                            <span class='tag is-success'>JQuery</span>
                            <span class='tag is-success'>PHP</span>
                            <span class='tag is-success'>MySQL</span>
                            <div class='content'>
                                <p>A promotional webgame developed with the 2018 World Cup in mind. The aim of the game is to progress through each round by scoring the required number of goals.</p>
                            </div>
                            <a target='_blank' href='http://playprintonline.com/shootout' class='button is-success is-inverted is-outlined'>
                                <span class='icon is-small'><i class='fas fa-link'></i></span>
                                <span>Go to website</span>
                            </a>
                        </article>
                        <article class='tile is-child notification is-info'>
                            <p class='title'>Match Up</p>
                            <span class='tag is-warning'>Professional</span>
                            <span class='tag is-success'>Javascript</span>
                            <span class='tag is-success'>JQuery</span>
                            <span class='tag is-success'>PHP</span>
                            <span class='tag is-success'>MySQL</span>
                            <div class='content'>
                                <p>A promotional webgame developed with the 2018 World Cup in mind. Players must match pairs of flags in the quickest time to be entered onto a leaderboard.</p>
                            </div>
                            <a target='_blank' href='http://playprintonline.com/matchup' class='button is-success is-inverted is-outlined'>
                                <span class='icon is-small'><i class='fas fa-link'></i></span>
                                <span>Go to website</span>
                            </a>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            projects: ['project-1', 'project-2'],
        }
    }
}
</script>

<style scoped>
.title {
    margin-bottom: 0.5rem;
}
</style>
