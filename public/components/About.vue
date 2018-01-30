<template>
    <div class='columns is-desktop'>
        <div class='column'>
            <div class='card'>
                <div class='card-content'>
                    <div class='media'>
                        <div class='media-left'>
                            <figure class='image is-64x64'>
                                <img src='http://cdeegan.xyz/profile-image.jpg'>
                            </figure>
                        </div>
                        <div class='media-content is-clipped'>
                            <p class='title is-4'>Ciarán Deegan</p>
                            <p class='subtitle is-6'>Software Developer</p>
                        </div>
                    </div>
                    <div class='content'>
                        <span class='tag is-success'>Javascript</span>
                        <span class='tag is-success'>AngularJS</span>
                        <span class='tag is-success'>Node.js</span>
                        <span class='tag is-success'>Vue.js</span>
                        <span class='tag is-info'>Java</span>
                        <span class='tag is-info'>C#</span>
                        <span class='tag is-info'>Python</span>
                        <span class='tag is-info'>Android Development</span>
                        <span class='tag is-warning'>SQL Databases</span>
                        <span class='tag is-warning'>NoSQL Databases</span>
                        <span class='tag is-danger'>REST APIs</span>
                        <span class='tag is-danger'>Firebase</span>
                        <span class='tag is-danger'>AWS</span>
                        <span class='tag is-danger'>Git</span>
                        <span class='tag is-danger'>SVN</span>
                        <br><br><p>My name is Ciarán Deegan and I'm a software developer from Ireland.</p>
                        <p>I have recently relocated to Toronto, Canada on a two-year work permit and I am open to all 
                        software development opportunities.</p>
                        <h4>Computers</h4>
                        <p>I was introduced to my first laptop at age thirteen. Two years later, I was designing web components in Photoshop and writing automated Windows scripts</p>
                        <p>I saved up for the individual parts to build a desktop computer of my own, which is now my daily PC at home.</p>
                        <p>This curiosity in computers naturally guided me towards an education and a career in computing.</p>
                        <h4>Travel</h4>
                        <p>From Spain to the US, Switzerland to France, travelling around the world satisfies my appetite for 
                        exploration. As a result of this desire, I have relocated to Canada on a two-year working holiday.</p>
                        <h4>Creative Writing</h4>
                        <p>Writing has always been a passion of mine. The height of my literary achievement is a published short
                        story written under the guidance of Roddy Doyle.</p>
                        <h4>Cars</h4>
                        <p>I obtained my drivers license in 2015 and have enjoyed being behind the wheel ever since. At the time, I had put money aside to buy my first car: a black 2003 Toyota Corolla.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class='column content'>
            <div class='has-text-centered'>
                <h2>My Timeline</h2>
                <span class='tag is-warning'>Employment</span>
                <span class='tag is-info'>Education</span>
                <span class='tag is-success'>Project</span>
                <span class='tag is-danger'>Personal</span>
            </div>
            <div class='timeline is-centered section'>
                <header class='timeline-header'>
                    <span class='tag is-medium is-primary'>Today</span>
                </header>
                <div class='timeline-item'>
                    <div class='timeline-marker is-danger'></div>
                    <div class='timeline-content'>
                        <p class='heading is-large'>January</p>
                        <p>Moved to Toronto, Canada</p>
                    </div>
                </div>
                <div class='timeline-item'>
                    <div class='timeline-marker is-warning'></div>
                    <div class='timeline-content'>
                        <p class='heading'>January</p>
                        <p>Ended employment at Playprint</p>
                    </div>
                </div>
                <header class='timeline-header'>
                    <span class='tag is-primary'>Start of 2018</span>
                </header>
                <div class='timeline-item'>
                    <div class='timeline-marker is-info'></div>
                    <div class='timeline-content'>
                        <p class='heading'>November</p>
                        <p>Graduated from Dublin City University</p>
                    </div>
                </div>
                <div class='timeline-item'>
                    <div class='timeline-marker is-success'></div>
                    <div class='timeline-content'>
                        <p class='heading'>September</p>
                        <p>Launched <a target='_blank' href='https://swaps.tf'>swaps.tf</a> website</p>
                    </div>
                </div>
                <div class='timeline-item'>
                    <div class='timeline-marker is-success'></div>
                    <div class='timeline-content'>
                        <p class='heading'>April</p>
                        <p>Completed development of Lens Android app</p>
                    </div>
                </div>
                <header class='timeline-header'>
                    <span class='tag is-primary'>Start of 2017</span>
                </header>
                <div class='timeline-item'>
                    <div class='timeline-marker is-warning'></div>
                    <div class='timeline-content'>
                        <p class='heading'>April</p>
                        <p>Began employment at Playprint</p>
                    </div>
                </div>
                <header class='timeline-header'>
                    <span class='tag is-primary'>Start of 2016</span>
                </header>
                <div class='timeline-item'>
                    <div class='timeline-marker is-success'></div>
                    <div class='timeline-content'>
                        <p class='heading'>November</p>
                        <p>Completed development of Steam trading bot project</p>
                    </div>
                </div>
                <header class='timeline-header'>
                    <span class='tag is-primary'>Start of 2014</span>
                </header>
                <div class='timeline-item'>
                    <div class='timeline-marker is-info'></div>
                    <div class='timeline-content'>
                        <p class='heading'>September</p>
                        <p>Began BSc. Computer Applications at Dublin City University</p>
                    </div>
                </div>
                <div class='timeline-header'>
                    <span class='tag is-primary'>Start of 2013</span>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            name: 'Ciarán Deegan',
        }
    }
}
</script>

<style scoped>
</style>
