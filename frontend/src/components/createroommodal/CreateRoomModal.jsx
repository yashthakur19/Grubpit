import './CreateRoomModal.css';
function CreateRoomModal({ isOpen, onClose }) {
    return (<section className="create-room-modal"> <h2>Create Room Modal</h2>
    <div className="container">
        Room Name: <input type="text" placeholder="Enter room name" />
        Password: <input type="password" placeholder="Enter password" />
        Choose category: <select>
            <option value="category1">Projects</option>
            <option value="category2">Leetcode Questions</option>
        </select>
        <button className="create-button">Create</button>
        <button className="close-button" onClick={onClose}>Close</button>

    </div>
    </section>);
}
export default CreateRoomModal;