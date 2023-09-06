



function Contact() {



    return (

        <>

            <div className="contact-page">

                <div style={{ width: '100%',display: 'flex', flexDirection: 'column' }}>
                    <p>للتواصل معي</p><br />

                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', direction: 'ltr' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <p>LinkedIn:</p>
                            <a href="https://www.linkedin.com/in/aliltrp" target="_blank" className="anker"><em>AliLtRP</em></a>
                        </div>

                        <div style={{ display: 'flex', gap: '10px' }}>
                            <p>GitHub:</p>
                            <a href="https://github.com/AliLtRP" target="_blank" className="anker"><em>AliLtRP</em></a>
                        </div>

                        <div style={{ display: 'flex', gap: '10px' }}>
                            <p>WhatsApp:</p>
                            <a href="https://wa.me/message/XBTIOCRYTVZAN1" target="_blank" className="anker"><em>AliLtRP</em></a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

}


export default Contact;