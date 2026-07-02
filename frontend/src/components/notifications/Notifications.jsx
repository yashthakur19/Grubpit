import './Notifications.css';
function Notifications() {
    return (
            <section className="notifications">

            <h2>Notifications</h2>

            <div className="notification-list">

                <div className="notification-card">
                    <h3>Rahul Sharma</h3>
                    <p>Invited you to join "React Project"</p>
                    <span>2 min ago</span>
                </div>

                <div className="notification-card">
                    <h3>Aman Verma</h3>
                    <p>Sent you a message.</p>
                    <span>10 min ago</span>
                </div>

                <div className="notification-card">
                    <h3>Interview Room</h3>
                    <p>Your coding session starts in 15 minutes.</p>
                    <span>15 min ago</span>
                </div>

            </div>

        </section>
    );
}

export default Notifications;