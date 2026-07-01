import './QuickActions.css';
function QuickActions() {
    return (
       <section className="quick-actions">
            <h2>Quick Actions</h2>
            <div className="btn-container">
            <btn className="btn">
                create room
            </btn>

            <btn className="btn">
                join room
            </btn>
        </div>
        </section>
    );
}

export default QuickActions;