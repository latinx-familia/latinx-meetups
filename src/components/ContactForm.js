import Container from '@/components/Container';

export default function ContactForm() {
    return (
        <Container wide={false}>
            <section className="form-container my-20">
                <h3 className="text-3xl mb-6">Questions? Contact us today!</h3>
                <form
                    className="contact-form grid grid-cols-2 gap-4"
                    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfRZSIjKWtcBnGUyyTjCudB8m90pvCpnT96rgguDGjrfPMKSw/formResponse"
                    method="POST"
                >
                    <div className="col-span-1">
                        <div className="personal-info">
                            <input type="text" name="entry.1948190300" placeholder="Your name" required />
                        </div>
                        <div className="personal-info">
                            <input type="email" name="entry.1423707703" placeholder="Your email" required />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="personal-info h-full h-[calc(100%-1rem)]">
                            <textarea
                                name="entry.1939438101"
                                placeholder="Leave us a message..."
                                required
                                className='h-full'
                            ></textarea>
                        </div>
                    </div>
                    <button type="submit" className="scroll-btn hero-btn col-span-2 my-0" id="send-contact-form">
                        SEND YOUR REQUEST
                    </button>
                </form>
            </section>
        </Container>
    );
}
