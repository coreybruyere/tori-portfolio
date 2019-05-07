import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/tor-beyond-ad.gif'
import thumb02 from '../assets/images/tor-kindness.png'
import thumb03 from '../assets/images/tor-earth.png'
import thumb04 from '../assets/images/tor-podcast.png'
import thumb05 from '../assets/images/tor-tradition.png'
import thumb06 from '../assets/images/tor-crossroads.png'

import full01 from '../assets/images/tor-beyond-ad.gif'
import full02 from '../assets/images/tor-kindness.png'
import full03 from '../assets/images/tor-earth.png'
import full04 from '../assets/images/tor-podcast.png'
import full05 from '../assets/images/tor-tradition.png'
import full06 from '../assets/images/tor-crossroads.png'

// import podcastOgg from '../assets/misc/FinalVeganismPodcast.ogg'
import podcastMp3 from '../assets/misc/FinalVeganismPodcast.mp3'
import resume from '../assets/misc/resume.pdf';
import review from '../assets/misc/Crossroads-Review.pdf';


const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Beyond Meat Advertisement', description: "This advertisement was created for a campaign for Beyond Meat to show millennials, sustainably conscious people, or just about anyone that they don’t have to compromise their convenience, taste, or wallet when choosing how to eat. The goal of this campaign was to inform consumers that alternative meat can be delicious and accessible. I wanted to present Beyond meat as looking to make people rethink the way they get their protein and to help them make more sustainable choices when it comes to consuming food. Creating a advertisement for a burger with benefits for health and importantly, the environment to drive consumers to not only change their eating habits but to want to take action. I created this simplistic ad to guide consumers to want to make better choices that positively impact the environment."},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Kindness Collection Creative Campaign', description: "The Kindness Collection Creative Campaign that I put together was aimed to raise brand awareness for an up and coming personal project I've been working on called the Kindness Collection Podcast within six months by engaging with consumers through social media by launching a #StartWithLove campaign, specifically on Instagram, Facebook, Twitter, and Snapchat to encourage followers to better support one another and to spread love. Ultimately wanting to get the podcast’s name well-known by using social media platforms to promote it as well as creating press releases and media alerts for potential events to promote the campaign."},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'CSUDH Sustainability Department Social Media Creative Content', description: "These are a collection of posts that I created for the Sustainbility Department at my college. The goal was to create creative content to increase social media impressions and engagement by increasing likes on Instagram by at least 200 likes per post."},
    { id: '4', src: full04, thumbnail: thumb04, caption: '[Podcast] - Veg With Victoria Podcast Episode 1', description: <div><audio controls><source src={podcastMp3} type="audio/mpeg"/></audio><p>Click the play button to start podcast</p></div>},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Animal Rights Strategic Plan', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', src: thumb06, thumbnail: thumb06, caption: '[Review] - Crossroads: Where Vegan goes fine-dining', description: "Lets admit it: Good vegan restaurants are dime a dozen. Finally vegan goes fine-dining at this LA restaurant. Crossroads provides the fine-dining experience that may be hard to find in other local vegan spots, by showcasing vegan fare that is elegantly executed. Their play on dishes like Oysters and creamy pastas are lovely and delicious. The Artichoke Oysters are a go-to made together perfectly with artichoke puree, crispy oyster mushroom, and kelp caviar. Another treat that you can’t miss, their limited edition and intricate seafood tower, which is the first portrait my mind paints when thinking of foods served in such fine-dining restaurants. Not to mention this seafood tower is paired with four oyster tequila shots hidden at the bottom of the tower- now that’s impressive! If Crossroads goal was to create plant-based replicas, I’d say they nailed it. They have proved to both omnivorous and carnivorous eaters that getting a similar mouthwatering foodie experience is possible with plants. The space itself is beautiful and warm, making you feel cozy and intimate. Crossroads is has succeeded at redefining the concept of vegan dining, to take it away from the hippie, health-food crowd and deliver an upscale hotspot that fits right into its Los Angeles neighborhood. If you’re going to splurge this is the place to do it!"}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Tori Portfolio"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Hi, my name is Victoria Tombor!</h2>
                        </header>
                        <p>I am a recent graduate from Cal State University of Dominguez Hills where I achieved my Bachelors in Communication with an emphasis in Advertising & Public Relations. When not working, I enjoy staying active within the animal welfare community to bring awareness to issues that I feel passionate about. I just recently finished volunteering and interning with Best Friends Animal Society where I worked under the Learning & Development Lead.</p>
                        <p>I have a knack for the outdoors and love to camp. I usually find my way to a new adventure by hiking or cycling. Something I’ve discovered early on in life is that I am passionate about people. At the end of the day, as long as I’m connecting with or meeting people, I am a happy camper! Connecting with others is a real treat, if you are interested in collaborating or networking, I’d love to chat!</p>
                        {/* <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul> */}
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />
{/* 
                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul> */}
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Get in contact with me via email or checkout out my resume below!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" data-netlify-recaptcha="true" data-netlify="true" name="contact" netlify>
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)">
                                            <input type="text" name="name" id="name" placeholder="Name" />
                                        </div>
                                        <div className="6u 12u$(xsmall)">
                                            <input type="email" name="email" id="email" placeholder="Email" />
                                        </div>
                                        <div className="12u">
                                            <textarea name="message" id="message" placeholder="Message" rows="4"></textarea>
                                        </div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    {/* <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>*/}
                                    <li>
                                        <h3 className="icon fa-address-card"><span className="label">Resume</span></h3>
                                        <a href={resume} target="_blank" >Resume</a>
                                    </li> 
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:victoria.tombor@gmail.com">Email Me</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex