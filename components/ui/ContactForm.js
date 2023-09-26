
export default function ContactForm() {
    return(
        <>
            <section className="form-container">
                <h2>Questions? Contact us today!</h2>
                
                <form className="contact-form"
                    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_-IOjcbda2LyMqlXIvSmgCP5uCpI5rYi_mYUlQHDeQCO4kA/formResponse">
                    <div className="form-questions">
                        <div className="personal-info">
                            <input type="text" name="entry.1948190300" placeholder="Your name" required />
                            <input type="email" name="entry.1423707703" placeholder="Your email" required />
                        </div>
                        <div className="personal-info">
                            <textarea className="message-box" type="text" name="entry.1939438101"
                                placeholder="Leave us a message..." required></textarea>
                        </div>
                    </div>
                    <button type="submit" className="book-btn booking">SEND YOUR REQUEST</button>
                </form>
            </section>
        </>
    );
}