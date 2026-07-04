import './JoinRoomModal.css';
function JoinRoomModal({ isOpen, onClose }) {
    return (<section className="join-room-modal">
            <h2>Join Room Modal</h2>
            <div className="container">
                Room Code: <input type="text" placeholder="Enter room code" />
                <button onClick={onClose}> Join Room</button>
                <button onClick={onClose}>Close</button>

            </div>
         </section>);
}
export default JoinRoomModal;