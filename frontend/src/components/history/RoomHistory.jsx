import './RoomHistory.css';
function RoomHistory({ room=[] }) {
 console.log(room);
    return (
        
        <div className="room-history">
            <h1 style={{ color: '#000000' }}>Recent Rooms</h1>
          {room.length === 0 ? (
            <p>No rooms available.</p>
          ) : (
            <ul>
           {rooms.map((item) => (
          <li key={item._id || item.roomCode}>
            <span>{item.roomName || item.roomCode}</span>
          </li>
        ))}
            </ul>
          )}


        </div>
    );
}

export default RoomHistory;