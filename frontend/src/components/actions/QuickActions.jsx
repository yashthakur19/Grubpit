import './QuickActions.css';
function QuickActions({ onCreateRoomClick, onJoinRoomClick }) {
    return (
       <section className="quick-actions">
            <h2>Quick Actions</h2>
            <div className="btn-container">
            <button className="btn" onClick={onCreateRoomClick}>
                create room
            </button>

            <button className="btn" onClick={onJoinRoomClick}>
                join room
            </button>
        </div>
        </section>
    );
}

export default QuickActions;