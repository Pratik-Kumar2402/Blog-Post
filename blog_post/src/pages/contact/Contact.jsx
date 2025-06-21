import './contact.css'

export default function Contact() {
    return (
        <div className='contatiner'>
            <div className='contactHead'>
                <br />
                <h2>Contact Us</h2>
                <br />
                <p>Swing by for a cup of coffee, or leave us a message:</p>
            </div>
            <div className="row">
                <div className="column">
                    <img className='contactImg' src={require('../../components/image/landscape2.jpg')} alt='' />
                </div>
                <div className="column">
                    <form action='action_page.php'>
                        <label for='fname'>First Name</label>
                        <input type='text' id="fname" name='firstname' placeholder='Your name...'></input>
                        <label for='lname'>Last Name</label>
                        <input type='text' id="lname" name='lastname' placeholder='Your last name...'></input>
                        <label for='country'>Country</label>
                        <select id='country' name='country'>
                            <option value='India'>India</option>
                            <option value='India'>US</option>
                            <option value='India'>Australia</option>
                        </select>
                        <label for='subject'>Subject</label>
                        <textarea id='subject' name='subject' placeholder='Write something...'></textarea>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}
