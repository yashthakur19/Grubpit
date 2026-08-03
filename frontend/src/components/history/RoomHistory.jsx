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
           {room.map((item) => (
          <li key={item._id || item.Roomcode}>
            <span>{item.Roomname || item.Roomcode}</span>
          </li>
        ))}
            </ul>
          )}


        </div>
    );
}

export default RoomHistory;