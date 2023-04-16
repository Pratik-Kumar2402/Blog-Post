import "./about.css"

export default function About() {
    return (
        <div className="about">
            <div className="aboutHead">
                <h1>About Us Page</h1>
                <br />
                <p>This is nothing but a simple blog post website.</p>
                <p>You may register for an free account and post whatever you want to share with others.</p>
            </div>

            <h2>Want to  know who I am</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <div class="container">
                        <br/>
                            <h2>Random John</h2>
                            <img className='aboutImg' src={require('../../components/image/profile.webp')} alt='' />
                            <br/>
                            <p class="title">CEO & Founder</p>
                            <br/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>john@yahoo.com</p>
                            <br/>
                            <br/>
                            <p><button class="button">Contact</button></p>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

